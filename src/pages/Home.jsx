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
          <Brain className="w-12 h-12 text-purple-600" />
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Power Your Business with <span className="text-purple-600">AI</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Transform your workflow with state-of-the-art artificial intelligence.
          Automate tasks, gain insights, and scale your business effortlessly.
        </p>
        <div className="flex gap-4">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700"
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
        <h2 className="text-3xl font-bold text-center mb-12">
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
