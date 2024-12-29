const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const axios = require('axios');

// List of routes to pre-render
const routes = ['/']; // Add all the routes you want to pre-render

// Function to check if the server is up
async function waitForServer(url) {
    let attempts = 0;
    while (attempts < 10) {
        try {
            await axios.get(url); // Try to request the server
            console.log(`Server is up at ${url}`);
            return true;
        } catch (error) {
            attempts++;
            console.log(`Waiting for server... Attempt ${attempts}`);
            await new Promise(resolve => setTimeout(resolve, 3000)); // Wait 3 seconds before retrying
        }
    }
    throw new Error('Server did not start in time');
}

// Pre-render function
async function preRender(url, outputPath) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    for (let route of routes) {
        await page.goto(url + route, { waitUntil: 'networkidle0' }); // Wait for the page to fully load
        const content = await page.content(); // Get the rendered HTML content

        // Define file path for saving the rendered HTML
        const filePath = path.join(outputPath, route === '/' ? 'index.html' : route.slice(1) + '.html');
        fs.mkdirSync(path.dirname(filePath), { recursive: true }); // Create directories if they don't exist
        fs.writeFileSync(filePath, content); // Save HTML content

        console.log(`Pre-rendered content saved to: ${filePath}`);
    }

    await browser.close();
}

// Start the server and pre-render pages
async function run() {
    // Start the local preview server
    const previewProcess = exec('npm run preview');

    // Wait for the server to start
    await waitForServer('http://localhost:4173');

    // Run pre-rendering
    await preRender('http://localhost:4173', './dist');

    // Stop the preview server after pre-rendering is done
    previewProcess.kill('SIGINT'); // Properly kill the preview process
    console.log('Preview server stopped');

    // Exit the script explicitly
    previewProcess.on('exit', () => {
        console.log('Preview process terminated successfully.');
        process.exit(0); // Explicitly terminate the script
    });
}

// Run the entire process
run().catch(err => {
    console.error(err);
    process.exit(1); // Explicitly terminate the script in case of an error
});
