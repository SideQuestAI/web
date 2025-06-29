import React, { useState } from "react";
import { motion } from "framer-motion";
import { PremiumModal } from "./premium-modal";
import {
  Brain,
  Target,
  Rocket,
  Zap,
  Users,
  TrendingUp,
  Play,
  CheckCircle,
  Star,
} from "lucide-react";
import MorphingButton from "./morphing-button";

interface FeatureShowcaseProps {
  isOpen: boolean;
  onClose: () => void;
  feature: {
    title: string;
    description: string;
    icon: any;
    benefits: string[];
    demoVideo?: string;
  } | null;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  isOpen,
  onClose,
  feature,
}) => {
  if (!feature) return null;

  return (
    <PremiumModal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <feature.icon className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h3
            className="text-2xl font-display font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {feature.title}
          </motion.h3>

          <motion.p
            className="text-slate-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {feature.description}
          </motion.p>
        </div>

        {/* Demo Video */}
        {feature.demoVideo && (
          <motion.div
            className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center">
              <Play className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <p className="text-slate-400">Feature Demo</p>
            </div>
          </motion.div>
        )}

        {/* Benefits */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h4 className="text-lg font-semibold text-white flex items-center">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            Key Benefits
          </h4>

          <div className="space-y-2">
            {feature.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <MorphingButton className="flex-1">
            <Rocket className="w-4 h-4" />
            Try This Feature
          </MorphingButton>

          <MorphingButton variant="secondary" onClick={onClose}>
            Learn More
          </MorphingButton>
        </motion.div>
      </div>
    </PremiumModal>
  );
};

// Feature data
export const features = {
  aiGeneration: {
    title: "AI Course Generation",
    description:
      "Transform any side hustle idea into a complete, structured learning path with our advanced AI technology.",
    icon: Brain,
    benefits: [
      "Instant course outlines in seconds",
      "Personalized to your experience level",
      "Industry-specific recommendations",
      "Continuously updated content",
      "Market trend integration",
    ],
  },
  milestones: {
    title: "Smart Milestones",
    description:
      "Break down complex goals into achievable steps with clear deadlines and success metrics.",
    icon: Target,
    benefits: [
      "SMART goal framework integration",
      "Automatic progress tracking",
      "Deadline reminders and alerts",
      "Success metric validation",
      "Adaptive milestone adjustment",
    ],
  },
  analytics: {
    title: "Progress Analytics",
    description:
      "Track your learning journey with detailed insights and performance metrics.",
    icon: TrendingUp,
    benefits: [
      "Learning velocity tracking",
      "Skill gap identification",
      "Completion rate optimization",
      "Personalized recommendations",
      "Achievement celebrations",
    ],
  },
  collaboration: {
    title: "Team Collaboration",
    description:
      "Work together with team members, mentors, and fellow entrepreneurs on your learning journey.",
    icon: Users,
    benefits: [
      "Real-time collaboration tools",
      "Mentor matching system",
      "Peer learning groups",
      "Shared progress tracking",
      "Team challenges and goals",
    ],
  },
};
