import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft, Mail, Lock, Eye, Database } from "lucide-react";
import DynamicLogo from "@/components/ui/dynamic-logo";
import Particles from "@/components/ui/particles";
import { appConfig } from "@/config/app.config";

const Privacy = () => {
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 glow">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
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
            {/* Information We Collect */}
            <div>
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-display font-bold text-white">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  We collect information you provide directly to us, such as
                  when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Create an account or sign up for our services</li>
                  <li>Use our AI course generation features</li>
                  <li>Contact us for support or feedback</li>
                  <li>Subscribe to our newsletter or communications</li>
                </ul>
                <p>
                  This may include your name, email address, course preferences,
                  and usage data to improve our AI recommendations.
                </p>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-display font-bold text-white">
                  How We Use Your Information
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Provide, maintain, and improve our AI-powered course
                    generation services
                  </li>
                  <li>
                    Personalize your learning experience and course
                    recommendations
                  </li>
                  <li>
                    Send you technical notices, updates, and administrative
                    messages
                  </li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends and usage patterns</li>
                  <li>
                    Detect, investigate, and prevent fraudulent activities
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-display font-bold text-white">
                  Data Security
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>End-to-end encryption for all data transmission</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Secure data centers with SOC 2 compliance</li>
                  <li>Limited access controls and employee training</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Information Sharing
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties, except:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>
                    To service providers who assist in our operations (under
                    strict confidentiality agreements)
                  </li>
                  <li>
                    When required by law or to protect our rights and safety
                  </li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Your Rights
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability or restriction of processing</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
                <p>
                  To exercise these rights, contact us at{" "}
                  <a
                    href={`mailto:${appConfig.contact.email}`}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    {appConfig.contact.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Cookies and Tracking
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze site traffic and usage patterns</li>
                  <li>Improve our AI algorithms and user experience</li>
                  <li>Provide targeted content and features</li>
                </ul>
                <p>
                  You can control cookies through your browser settings, though
                  some features may not function properly if disabled.
                </p>
              </div>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Policy Updates
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the new policy
                  on this page and updating the "Last updated" date.
                </p>
                <p>
                  Your continued use of our services after any changes
                  constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="border-t border-white/10 pt-6">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-pink-400 mr-3" />
                <h2 className="text-2xl font-display font-bold text-white">
                  Contact Us
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us:
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

export default Privacy;
