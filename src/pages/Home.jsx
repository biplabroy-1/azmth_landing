import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "../components/FeatureCard";
import { Footer } from "../components/Footer";
import WaitlistModal from "../components/WaitlistModal";
import Team from "./Team";
import FadeText from "../components/ui/fade-text";
import InteractiveHoverButton from "../components/ui/interactive-hover-button";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { Helmet } from "react-helmet";

// Typewriter effect component
const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(c => c + 1);
      }, 5);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event propagation
    if (!input.trim()) return;

  
    // Add user's message to the chat
    setMessages([...messages, { text: input, isUser: true }]);
    setIsLoading(true);
  
    try {
      // Send the input to the API
      const response = await axios.post("https://api.globaltfn.tech/aboutazmth", {
        userInput: input,
      });
  
      // Add the API response to the chat
      setMessages((prev) => [
        ...prev,
        { text: response.data.data || "No response", isUser: false, isNew: true },
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Error: Unable to fetch response", isUser: false, isNew: true },
      ]);
    } finally {
      setInput(""); // Clear the input field
      setIsLoading(false);
    }
  };

  return (
    <>
        <Helmet>
      <title>AZMTH - Home</title>
      <meta name="description" content="Welcome to AZMTH - Your 24x7 AI assistant!" />
    </Helmet>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Hero Section */}
        <header className="container px-4 py-16 flex flex-col items-start z-0">
          <div className="p-4 bg-transparent rounded-2xl mb-6 flex gap-4 items-center">
            <svg
              width="200"
              height="200"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1641 1H18.9081V19H15.1461L15.0021 16.39C14.4741 17.314 13.7601 18.058 12.8601 18.622C11.9601 19.186 10.8981 19.468 9.67408 19.468C8.35408 19.468 7.11208 19.222 5.94808 18.73C4.78408 18.226 3.75808 17.53 2.87008 16.642C1.99408 15.754 1.31008 14.734 0.818078 13.582C0.326078 12.418 0.0800781 11.17 0.0800781 9.838C0.0800781 8.554 0.320078 7.348 0.800078 6.22C1.28008 5.08 1.94608 4.084 2.79808 3.232C3.65008 2.38 4.63408 1.714 5.75008 1.234C6.87808 0.742002 8.08408 0.496002 9.36808 0.496002C10.6761 0.496002 11.8281 0.796002 12.8241 1.396C13.8321 1.984 14.6661 2.74 15.3261 3.664L15.1641 1ZM9.58408 15.85C10.6401 15.85 11.5641 15.592 12.3561 15.076C13.1481 14.548 13.7601 13.84 14.1921 12.952C14.6361 12.064 14.8581 11.08 14.8581 10C14.8581 8.908 14.6361 7.918 14.1921 7.03C13.7481 6.142 13.1301 5.44 12.3381 4.924C11.5581 4.396 10.6401 4.132 9.58408 4.132C8.54008 4.132 7.58608 4.396 6.72208 4.924C5.85808 5.452 5.17408 6.16 4.67008 7.048C4.16608 7.936 3.91408 8.92 3.91408 10C3.91408 11.092 4.17208 12.082 4.68808 12.97C5.21608 13.846 5.90608 14.548 6.75808 15.076C7.62208 15.592 8.56408 15.85 9.58408 15.85Z"
                fill="white"
              />
            </svg>
            <h1 className="text-4xl tracking-tighter md:text-5xl md:tracking-tight font-bold text-white text-left">
              The Ultimate AI Personal Assistant{" "}
              <span className="bg-gradient-to-r from-[#003e4b] to-[#00ff99] text-transparent bg-clip-text leading-normal">
                azmth
              </span>
            </h1>
          </div>
          <div className="ml-10">
            <p className="text-xl text-white mb-8 max-w-2xl text-left">
              The smartest AI scheduler platform on the planet.
            </p>
            <div className="flex gap-4">
              <InteractiveHoverButton
                className="bg-gradient-to-r from-[#003e4b] to-[#00ff99] w-40 border-none hover:border-2 hover:border-white"
                text="Join Waitlist"
                onClick={() => window.open("https://forms.visme.co/formsPlayer/dm4rnj6e-azmth-waitlist")}
              />
            </div>
          </div>
        </header>
        <div className="w-full mt-8 md:w-1/2">
          <div className="bg-[#081c20] p-8 rounded-lg flex flex-col h-[600px]">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto mb-4 relative">
              {messages.length === 0 ? (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <p className="text-xl mb-2">👋 Hey there!</p>
                  <p className="text-gray-400">Let's chat about how I can help you schedule and manage your tasks.</p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      message.isUser ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className={`inline-block p-3 rounded-lg ${
                        message.isUser
                          ? "bg-[#003e4b] text-white"
                          : "bg-[#1a2c31] text-white"
                      }`}
                    >
                      {message.isNew && !message.isUser ? (
                        <TypewriterText text={message.text} />
                      ) : (
                        message.text
                      )}
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="text-left mb-4">
                  <div className="inline-block p-3 rounded-lg bg-[#1a2c31] text-white">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form 
  onSubmit={handleSubmit} 
  className="flex gap-2"
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  }}
>
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className="flex-1 p-3 rounded-lg bg-[#1a2c31] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff99]"
    placeholder="Type your message..."
  />
  <Button
    type="button" // Changed from "submit" to "button"
    onClick={handleSubmit}
    disabled={isLoading}
    className="bg-gradient-to-r from-[#003e4b] to-[#00ff99] h-full"
  >
    {isLoading ? (
      <Loader2 className="w-4 h-4 animate-spin" />
    ) : (
      'Send'
    )}
  </Button>
</form>
          </div>
        </div>
      </div>

      {/* Rest of your existing sections */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-thin text-white text-center mb-12">
          <FadeText
            className="text-5xl font-bold text-white"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.2 } },
            }}
            text="Why azmth?"
          />
        </h2>

        <div className="gap-8 flex flex-col md:flex-row">
          <FeatureCard
            title="Vision"
            description="Azmth us more than just a tool; it's a symbol of status and efficiency. Designed for those who are constantly on the move, juggling multiple responsibilities and striving to make a meaningful impact on the world. It is not just about getting things done- it is about getting the right things done at the right time, effortlessly."
          />
          <FeatureCard
            title="Mission"
            description="To empower busy individuals by removing the friction of daily tasks and mental clutter, allowing them to focus on what truly matters."
          />
        </div>
      </section>

      <section>
        <Team />
      </section>

      <section className="py-16 bg-[#081c20]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to become your best version?
          </h2>
          <InteractiveHoverButton
            className="bg-gradient-to-r from-[#003e4b] to-[#00ff99] w-48"
            text="Start Free Trial"
            onClick={() => window.open("https://forms.visme.co/formsPlayer/dm4rnj6e-azmth-waitlist")}
          />
        </div>
      </section>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Footer />
    </>
  );
};

export default Home;
