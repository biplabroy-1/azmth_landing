// pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Brain, Zap, Shield, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "../components/FeatureCard";
import { Footer } from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 flex flex-col items-center text-center z-0">
        <div className="inline-block p-4 bg-purple-100 rounded-2xl mb-6">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1641 1H18.9081V19H15.1461L15.0021 16.39C14.4741 17.314 13.7601 18.058 12.8601 18.622C11.9601 19.186 10.8981 19.468 9.67408 19.468C8.35408 19.468 7.11208 19.222 5.94808 18.73C4.78408 18.226 3.75808 17.53 2.87008 16.642C1.99408 15.754 1.31008 14.734 0.818078 13.582C0.326078 12.418 0.0800781 11.17 0.0800781 9.838C0.0800781 8.554 0.320078 7.348 0.800078 6.22C1.28008 5.08 1.94608 4.084 2.79808 3.232C3.65008 2.38 4.63408 1.714 5.75008 1.234C6.87808 0.742002 8.08408 0.496002 9.36808 0.496002C10.6761 0.496002 11.8281 0.796002 12.8241 1.396C13.8321 1.984 14.6661 2.74 15.3261 3.664L15.1641 1ZM9.58408 15.85C10.6401 15.85 11.5641 15.592 12.3561 15.076C13.1481 14.548 13.7601 13.84 14.1921 12.952C14.6361 12.064 14.8581 11.08 14.8581 10C14.8581 8.908 14.6361 7.918 14.1921 7.03C13.7481 6.142 13.1301 5.44 12.3381 4.924C11.5581 4.396 10.6401 4.132 9.58408 4.132C8.54008 4.132 7.58608 4.396 6.72208 4.924C5.85808 5.452 5.17408 6.16 4.67008 7.048C4.16608 7.936 3.91408 8.92 3.91408 10C3.91408 11.092 4.17208 12.082 4.68808 12.97C5.21608 13.846 5.90608 14.548 6.75808 15.076C7.62208 15.592 8.56408 15.85 9.58408 15.85Z"
              fill="black"
            />
          </svg>
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-6 text-white">
          Power Your Business with{" "}
          <span className="bg-gradient-to-r from-[#003e4b] to-[#00ff99]  text-transparent bg-clip-text leading-normal">
            azmath
          </span>
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Transform your workflow with state-of-the-art artificial intelligence.
          Automate tasks, gain insights, and scale your business effortlessly.
        </p>
        <div className="flex gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#003e4b] to-[#00ff99]"
            onClick={() => navigate("/features")}
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl text-white font-bold text-center mb-12">
          Why Choose Our AI Platform?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Zap}
            title="Lightning Fast"
            description="Get results in milliseconds with our optimized AI engine"
          />
          <FeatureCard
            icon={Shield}
            title="Enterprise Security"
            description="Bank-grade encryption and data protection you can trust"
          />
          <FeatureCard
            icon={MessageSquare}
            title="24/7 Support"
            description="Expert assistance whenever you need it"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our AI platform
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => navigate("/pricing")}
          >
            Start Free Trial
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
