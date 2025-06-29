import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Star,
  Zap,
  Crown,
  Rocket,
  ArrowRight,
  Sparkles,
  Users,
  Brain,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import MorphingButton from "@/components/ui/morphing-button";
import DynamicLogo from "@/components/ui/dynamic-logo";
import { useToast } from "@/contexts/toast-context";

const Pricing = () => {
  const { showSuccess, showInfo } = useToast();

  const handlePlanSelect = (planName: string, price: string) => {
    if (planName === "Free") {
      showSuccess(
        "Welcome to SideQuestAI!",
        "Your free account is ready. Start creating your first course!",
      );
    } else {
      showInfo(
        `${planName} Plan Selected`,
        `Redirecting to checkout for ${price}/month...`,
      );
      // Simulate redirect to payment
      setTimeout(() => {
        showInfo(
          "Payment Portal",
          "This would normally redirect to Stripe/PayPal checkout",
        );
      }, 2000);
    }
  };

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out SideQuestAI",
      icon: Target,
      popular: false,
      features: [
        "5,000 AI tokens (one-time only)",
        "Create 1 complete course",
        "Basic milestone tracking",
        "Community access",
        "Email support",
      ],
      limitations: ["Limited to 1 course creation"],
      buttonText: "Get Started Free",
      gradient: "from-slate-600 to-slate-700",
      glowColor: "slate",
    },
    {
      name: "Essential",
      price: "$14.99",
      period: "/month",
      description: "Great for individual entrepreneurs",
      icon: Zap,
      popular: true,
      features: [
        "50,000 AI tokens per month",
        "Create up to 5 courses",
        "Advanced milestone tracking",
        "Course regeneration",
      ],
      buttonText: "Start Essential",
      gradient: "from-blue-500 to-purple-600",
      glowColor: "blue",
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "/month",
      description: "Perfect for growing businesses",
      icon: Crown,
      popular: false,
      features: [
        "100,000 AI tokens per month",
        "Unlimited course creation",
        "Advanced analytics",
        "Live chat support",
        "Export to PDF/Word",
        "Priority email support",
        "Progress analytics",
      ],
      buttonText: "Upgrade to Pro",
      gradient: "from-purple-500 to-pink-600",
      glowColor: "purple",
    },
    {
      name: "Ultimate",
      price: "$24.99",
      period: "/month",
      description: "For serious entrepreneurs and teams",
      icon: Rocket,
      popular: false,
      features: [
        "Unlimited tokens per month",
        "Everything in Pro",
        "Phone support",
        "Custom integrations",
        "Unlimited team members",
        "Advanced API features",
        "Priority feature requests",
      ],
      buttonText: "Go Ultimate",
      gradient: "from-pink-500 to-red-500",
      glowColor: "pink",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      {/* Subtle background effects */}
      <div className="fixed inset-0 z-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Random shooting lights */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-20 bg-gradient-to-t from-transparent via-blue-400/30 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: ["-100vh", "100vh"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <motion.nav
        className="sticky top-0 z-50 glass border-b border-white/10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/" className="flex items-center space-x-2">
                <DynamicLogo animate={true} />
              </Link>
            </motion.div>

            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-slate-300 hover:text-white transition-colors font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/download"
                className="text-slate-300 hover:text-white transition-colors font-medium relative group"
              >
                Download
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-blue-400 font-medium relative">
                Pricing
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
              </span>

              <MorphingButton onClick={scrollToTop}>
                Get Started
                <ArrowRight className="w-4 h-4" />
              </MorphingButton>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full text-sm font-medium mb-8 glow"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-white">Choose Your AI Learning Plan</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-display font-bold mb-6"
          >
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            Start free and scale as you grow. Every plan includes our powerful
            AI course generation technology.
          </motion.p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {plans.map((plan, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  id={plan.name === "Free" ? "free" : undefined}
                  className={`relative h-full glass border-2 hover:border-white/30 transition-all duration-300 ${
                    plan.popular
                      ? "border-blue-500/50 scale-105"
                      : "border-white/10"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white px-3 py-1 glow">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-6">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 glow`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <plan.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <CardTitle className="text-2xl font-display font-bold text-white">
                      {plan.name}
                    </CardTitle>

                    <div className="flex items-baseline justify-center space-x-1 my-4">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-slate-400">{plan.period}</span>
                    </div>

                    <CardDescription className="text-slate-400">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {plan.limitations && (
                      <div className="border-t border-slate-700 pt-4">
                        <p className="text-xs text-slate-500 mb-2">
                          Limitations:
                        </p>
                        <div className="space-y-1">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <p
                              key={limitIndex}
                              className="text-xs text-slate-500"
                            >
                              • {limitation}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    <MorphingButton
                      className="w-full"
                      variant={plan.popular ? "primary" : "secondary"}
                      onClick={() => handlePlanSelect(plan.name, plan.price)}
                    >
                      {plan.buttonText}
                    </MorphingButton>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-400">
              Everything you need to know about our pricing
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              {
                question: "What happens after I use my free tokens?",
                answer:
                  "Free plan tokens are one-time only. You'll need to upgrade to a paid plan to continue creating courses with AI.",
              },
              {
                question: "Can I change plans anytime?",
                answer:
                  "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
              {
                question: "What are AI tokens?",
                answer:
                  "AI tokens are credits used to generate course content. Different actions consume different amounts of tokens.",
              },
              {
                question: "Is there a refund policy?",
                answer:
                  "Yes, we offer a 30-day money-back guarantee on all paid plans. No questions asked.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-400">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass p-16 rounded-3xl border-2 border-white/20 glow-blue">
            <h2 className="text-4xl font-display font-bold mb-6 text-white">
              Ready to Build Your Side Hustle?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Start with our free plan and experience the power of AI-driven
              course creation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MorphingButton
                size="lg"
                onClick={() => handlePlanSelect("Free", "$0")}
              >
                <Rocket className="w-5 h-5" />
                Start Free Today
              </MorphingButton>
              <Link to="/download">
                <MorphingButton variant="secondary" size="lg">
                  <ArrowRight className="w-5 h-5" />
                  Download App
                </MorphingButton>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 glass border-t border-white/10 text-white py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div className="mb-4 md:mb-0" whileHover={{ scale: 1.05 }}>
              <DynamicLogo />
            </motion.div>

            <div className="flex space-x-6 text-sm text-slate-400">
              <Link
                to="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/download"
                className="hover:text-white transition-colors duration-300"
              >
                Download
              </Link>
              <Link
                to="/privacy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="hover:text-white transition-colors duration-300"
              >
                Terms
              </Link>
              <Link
                to="/refund"
                className="hover:text-white transition-colors duration-300"
              >
                Refund
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2024 SideQuestAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
