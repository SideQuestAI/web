import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FileText,
  ArrowLeft,
  Scale,
  AlertTriangle,
  Users,
  Zap,
} from "lucide-react";
import DynamicLogo from "@/components/ui/dynamic-logo";
import Particles from "@/components/ui/particles";
import { appConfig } from "@/config/app.config";

const Terms = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <Particles count={30} />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
              <DynamicLogo animate={true} />
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-slate-300 hover:text-white transition-colors font-medium relative group"
              >
                <ArrowLeft className="w-4 h-4 mr-1 inline" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-purple">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              These terms govern your use of {appConfig.branding.name} and our
              AI-powered course generation services.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Last updated: December 2024
            </p>
          </motion.div>

          {/* Content Sections */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-2xl border border-white/20 space-y-8"
          >
            {/* Acceptance */}
            <div>
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-display font-bold text-white">
                  Acceptance of Terms
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  By accessing and using {appConfig.branding.name}, you accept
                  and agree to be bound by the terms and provision of this
                  agreement.
                </p>
                <p>
                  If you do not agree to abide by the above, please do not use
                  this service.
                </p>
              </div>
            </div>

            {/* Service Description */}
            <div>
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-display font-bold text-white">
                  Service Description
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  {appConfig.branding.name} provides AI-powered course
                  generation services for side hustles and entrepreneurial
                  learning. Our services include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI-generated course outlines and learning paths</li>
                  <li>Milestone tracking and progress monitoring</li>
                  <li>Personalized recommendations and content</li>
                  <li>Access to educational resources and tools</li>
                </ul>
                <p>
                  We reserve the right to modify or discontinue any aspect of
                  our service at any time.
                </p>
              </div>
            </div>

            {/* User Accounts */}
            <div>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-display font-bold text-white">
                  User Accounts and Responsibilities
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  When you create an account with us, you must provide
                  information that is accurate, complete, and current at all
                  times.
                </p>
                <p>You are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Safeguarding your password and account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring your use complies with applicable laws</li>
                </ul>
              </div>
            </div>

            {/* Acceptable Use */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Acceptable Use Policy
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>You agree not to use our service to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Use our AI for creating misleading or harmful content</li>
                  <li>Reverse engineer or attempt to extract our AI models</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Intellectual Property Rights
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Our service and its original content, features, and
                  functionality are and will remain the exclusive property of{" "}
                  {appConfig.branding.name} and its licensors.
                </p>
                <p>Regarding content you create using our AI:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    You retain ownership of courses and content you create
                  </li>
                  <li>We may use anonymized data to improve our AI models</li>
                  <li>
                    You grant us a license to process your content to provide
                    our services
                  </li>
                  <li>
                    You're responsible for ensuring your content doesn't
                    infringe on others' rights
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Payment and Subscription Terms
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Paid subscriptions are billed in advance on a monthly or
                  annual basis and are non-refundable except as required by law.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Free plan users receive limited tokens and features</li>
                  <li>Paid subscriptions auto-renew unless cancelled</li>
                  <li>Price changes will be communicated 30 days in advance</li>
                  <li>You can cancel your subscription at any time</li>
                  <li>
                    Unused tokens do not carry over between billing periods
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Disclaimer */}
            <div>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-400 mr-3" />
                <h2 className="text-2xl font-display font-bold text-white">
                  AI-Generated Content Disclaimer
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  Our AI-generated courses and recommendations are provided for
                  educational purposes only:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Content may contain inaccuracies or outdated information
                  </li>
                  <li>
                    We do not guarantee business success or financial outcomes
                  </li>
                  <li>
                    You should verify information and seek professional advice
                  </li>
                  <li>
                    AI responses are generated based on training data and may
                    reflect biases
                  </li>
                  <li>Market conditions and regulations change frequently</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Limitation of Liability
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  In no event shall {appConfig.branding.name} be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages, including without limitation, loss of profits, data,
                  use, goodwill, or other intangible losses.
                </p>
                <p>
                  Our total liability shall not exceed the amount you paid us in
                  the last 12 months.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Termination
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  We may terminate or suspend your account and access to our
                  service immediately, without prior notice, for any reason,
                  including breach of these terms.
                </p>
                <p>Upon termination:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your right to use the service will cease immediately</li>
                  <li>We may delete your account and data after 30 days</li>
                  <li>You may export your data before termination</li>
                  <li>These terms will remain in effect as applicable</li>
                </ul>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Governing Law
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  These terms shall be interpreted and governed by the laws of
                  the jurisdiction where our company is registered, without
                  regard to conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from these terms will be resolved through
                  binding arbitration.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Changes to Terms
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  We reserve the right to modify these terms at any time. We
                  will notify users of material changes via email or prominent
                  notice on our service.
                </p>
                <p>
                  Your continued use of the service after changes constitutes
                  acceptance of the new terms.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Contact Information
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  If you have any questions about these Terms & Conditions,
                  please contact us:
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${appConfig.contact.email}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      {appConfig.contact.email}
                    </a>
                  </p>
                  <p>
                    <strong>Company:</strong> {appConfig.branding.name}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/50 glass border-t border-white/10 text-white py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 {appConfig.branding.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
