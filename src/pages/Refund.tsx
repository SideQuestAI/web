import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  XCircle,
  ArrowLeft,
  DollarSign,
  AlertCircle,
  Clock,
  HelpCircle,
} from "lucide-react";
import DynamicLogo from "@/components/ui/dynamic-logo";
import Particles from "@/components/ui/particles";
import { appConfig } from "@/config/app.config";

const Refund = () => {
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
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-pink">
              <XCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Refund Policy
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Our no-refund policy and the reasons behind our digital service
              approach.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Last updated: December 2024
            </p>
          </motion.div>

          {/* Main Policy Alert */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="glass p-6 rounded-2xl border-2 border-red-500/30 bg-red-500/5">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-8 h-8 text-red-400 mr-4" />
                <h2 className="text-2xl font-display font-bold text-white">
                  No Refund Policy
                </h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                <strong>All sales are final.</strong> {appConfig.branding.name}{" "}
                operates a strict no-refund policy for all paid subscriptions,
                courses, and digital products. By making a purchase, you
                acknowledge and agree to this policy.
              </p>
            </div>
          </motion.div>

          {/* Content Sections */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-2xl border border-white/20 space-y-8"
          >
            {/* Why No Refunds */}
            <div>
              <div className="flex items-center mb-4">
                <HelpCircle className="w-6 h-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-display font-bold text-white">
                  Why We Don't Offer Refunds
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  Our no-refund policy is in place for several important
                  reasons:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>
                    <strong>Digital Nature of Services:</strong> Our
                    AI-generated courses and content are delivered instantly and
                    cannot be "returned" once accessed.
                  </li>
                  <li>
                    <strong>AI Token Consumption:</strong> Once AI tokens are
                    used to generate content, they represent real computational
                    costs that cannot be recovered.
                  </li>
                  <li>
                    <strong>Immediate Value Delivery:</strong> You receive full
                    access to your purchased features and content immediately
                    upon payment.
                  </li>
                  <li>
                    <strong>Fair Pricing:</strong> Our competitive pricing
                    reflects the immediate delivery and permanent access to
                    digital content.
                  </li>
                  <li>
                    <strong>Free Trial Available:</strong> We offer a free plan
                    with limited features so you can test our service before
                    committing to a paid subscription.
                  </li>
                </ul>
              </div>
            </div>

            {/* What You Get */}
            <div>
              <div className="flex items-center mb-4">
                <DollarSign className="w-6 h-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-display font-bold text-white">
                  What Your Payment Covers
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>When you purchase a subscription or service, you receive:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Immediate access to all paid features and AI capabilities
                  </li>
                  <li>Monthly allocation of AI tokens for course generation</li>
                  <li>Priority customer support and assistance</li>
                  <li>Advanced analytics and progress tracking</li>
                  <li>Export capabilities for your generated content</li>
                  <li>Access to premium templates and resources</li>
                </ul>
                <p>
                  All content you create remains yours permanently, even if you
                  cancel your subscription.
                </p>
              </div>
            </div>

            {/* Cancellation */}
            <div>
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-orange-400 mr-3" />
                <h2 className="text-2xl font-display font-bold text-white">
                  Subscription Cancellation
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  While we don't offer refunds, you can cancel your subscription
                  at any time:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Cancel through your account dashboard or contact support
                  </li>
                  <li>
                    Access continues until the end of your current billing
                    period
                  </li>
                  <li>No additional charges will be made after cancellation</li>
                  <li>You can reactivate your subscription at any time</li>
                  <li>
                    Your data and generated content remain accessible during
                    your paid period
                  </li>
                </ul>
                <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg mt-4">
                  <p className="text-blue-300">
                    <strong>Note:</strong> Cancellation prevents future billing
                    but does not entitle you to a refund for the current period.
                  </p>
                </div>
              </div>
            </div>

            {/* Free Plan Alternative */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Try Before You Buy
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  We strongly encourage using our free plan before upgrading:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>5,000 free AI tokens to test our course generation</li>
                  <li>Create one complete course to evaluate quality</li>
                  <li>Experience our user interface and features</li>
                  <li>Access to community support and resources</li>
                  <li>No time limit on free plan usage</li>
                </ul>
                <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg mt-4">
                  <p className="text-green-300">
                    <strong>Recommendation:</strong> Thoroughly test our free
                    plan to ensure our service meets your needs before
                    purchasing a paid subscription.
                  </p>
                </div>
              </div>
            </div>

            {/* Exceptional Circumstances */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Exceptional Circumstances
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  In very rare cases, we may consider account credits (not
                  refunds) for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Significant technical issues preventing service use for
                    extended periods
                  </li>
                  <li>
                    Billing errors or duplicate charges (account credit only)
                  </li>
                  <li>
                    Service outages lasting more than 48 consecutive hours
                  </li>
                </ul>
                <p className="text-sm mt-4">
                  These situations are evaluated case-by-case and may result in
                  account credits for future use, not monetary refunds.
                </p>
              </div>
            </div>

            {/* Legal Requirements */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Legal Compliance
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  This no-refund policy is subject to applicable consumer
                  protection laws:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    EU customers may have statutory rights under EU consumer
                    protection regulations
                  </li>
                  <li>
                    Australian customers are protected under Australian Consumer
                    Law
                  </li>
                  <li>
                    Other jurisdictions may have specific consumer rights that
                    override this policy
                  </li>
                </ul>
                <p>
                  Where required by law, we will honor applicable consumer
                  protection rights.
                </p>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Dispute Resolution
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>If you have concerns about our service:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    Contact our support team first to discuss your concerns
                  </li>
                  <li>
                    We'll work with you to resolve any technical or service
                    issues
                  </li>
                  <li>
                    If unresolved, disputes may be escalated through applicable
                    consumer protection agencies
                  </li>
                  <li>
                    Binding arbitration may be required as outlined in our Terms
                    & Conditions
                  </li>
                </ol>
              </div>
            </div>

            {/* Contact Support */}
            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Need Help?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Before considering any purchase, or if you have questions
                  about our services:
                </p>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <p className="mb-4">
                    <strong>Contact our support team:</strong>
                  </p>
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
                    <strong>Response Time:</strong> Within 24 hours
                  </p>
                  <p className="mt-4 text-sm text-slate-400">
                    We're here to help you make an informed decision and get the
                    most out of our service.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Reminder */}
            <div className="bg-yellow-900/20 border border-yellow-500/30 p-6 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                    Important Reminder
                  </h3>
                  <p className="text-yellow-200">
                    By subscribing to any paid plan, you acknowledge that you
                    have read, understood, and agree to this no-refund policy.
                    All sales are final and no refunds will be provided under
                    any circumstances, except where required by law.
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

export default Refund;
