import * as XLSX from 'xlsx';
import { promises as fs } from 'fs';
import path from 'path';

export async function submitToWaitlist(formData) {
  try {
    const timestamp = new Date().toISOString();
    const filePath = 'waitlist.xlsx';
    
    let workbook;
    let worksheet;

    try {
      // Try to read existing file
      const fileBuffer = await fs.readFile(filePath);
      workbook = XLSX.read(fileBuffer);
      worksheet = workbook.Sheets[workbook.SheetNames[0]];
    } catch (error) {
      // If file doesn't exist, create new workbook
      workbook = XLSX.utils.book_new();
      worksheet = XLSX.utils.aoa_to_sheet([
        ['Timestamp', 'Name', 'Email', 'Phone'] // Headers
      ]);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Waitlist');
    }

    // Add new row
    const newRow = [timestamp, formData.name, formData.email, formData.phone];
    XLSX.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });

    // Write to file
    await fs.writeFile(filePath, XLSX.write(workbook, { type: 'buffer' }));

    return { success: true };
  } catch (error) {
    console.error('Error saving to Excel:', error);
    throw new Error('Failed to save data');
  }
}