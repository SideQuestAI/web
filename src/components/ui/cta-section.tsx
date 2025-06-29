import React from "react";
import { motion } from "framer-motion";
import { Download, Rocket, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import MorphingButton from "./morphing-button";
import { useToast } from "@/contexts/toast-context";

interface CTASectionProps {
  variant?: "hero" | "bottom" | "simple";
  title?: string;
  description?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  variant = "hero",
  title,
  description,
  className = "",
}) => {
  const { showSuccess, showInfo } = useToast();

  const handleGetApp = () => {
    showSuccess(
      "Ready to Start!",
      "Redirecting to download the SideQuestAI app...",
    );
    setTimeout(() => {
      window.location.href = "/download";
    }, 1500);
  };

  const handleTryFree = () => {
    showInfo(
      "Try Free Plan",
      "Checking out our free plan with 5,000 AI tokens!",
    );
    setTimeout(() => {
      window.location.href = "/pricing#free";
    }, 1000);
  };

  const handleViewPlans = () => {
    showInfo("View Plans", "Exploring all available plans...");
    setTimeout(() => {
      window.location.href = "/pricing";
    }, 1000);
  };

  if (variant === "hero") {
    return (
      <div
        className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}
      >
        <MorphingButton size="lg" onClick={handleGetApp}>
          <Download className="w-5 h-5" />
          Get the App
        </MorphingButton>

        <MorphingButton variant="secondary" size="lg" onClick={handleTryFree}>
          <Zap className="w-5 h-5" />
          Try Free
        </MorphingButton>
      </div>
    );
  }

  if (variant === "bottom") {
    return (
      <div
        className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}
      >
        <MorphingButton size="lg" onClick={handleGetApp}>
          <Download className="w-5 h-5" />
          Download SideQuestAI
        </MorphingButton>

        <Link to="/pricing">
          <MorphingButton variant="secondary" size="lg">
            <Rocket className="w-5 h-5" />
            View Plans
          </MorphingButton>
        </Link>
      </div>
    );
  }

  // Simple variant
  return (
    <div className={`text-center ${className}`}>
      {title && (
        <h3 className="text-2xl font-display font-bold text-white mb-4">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-slate-400 mb-6 max-w-md mx-auto">{description}</p>
      )}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <MorphingButton onClick={handleGetApp}>
          <Download className="w-4 h-4" />
          Get App
        </MorphingButton>
        <MorphingButton variant="secondary" onClick={handleViewPlans}>
          <ArrowRight className="w-4 h-4" />
          Plans
        </MorphingButton>
      </div>
    </div>
  );
};

export default CTASection;
