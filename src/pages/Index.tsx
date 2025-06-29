import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
  ArrowRight,
  Brain,
  Target,
  Rocket,
  Download,
  Zap,
  Users,
  TrendingUp,
  Sparkles,
  Bot,
  Code2,
  Layers3,
  Play,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Particles from "@/components/ui/particles";
import FloatingShapes from "@/components/ui/floating-shapes";
import MorphingButton from "@/components/ui/morphing-button";
import AnimatedCounter from "@/components/ui/animated-counter";
import DynamicLogo from "@/components/ui/dynamic-logo";
import { FeatureShowcase, features } from "@/components/ui/feature-showcase";
import { useToast } from "@/contexts/toast-context";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);
  const { showSuccess, showInfo } = useToast();

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scaleParallax = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  const heroInView = useInView(heroRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });

  const handleFeatureClick = (featureKey: keyof typeof features) => {
    setSelectedFeature(features[featureKey]);
    setIsFeatureModalOpen(true);
    showInfo("Feature Details", "Loading feature showcase...");
  };

  const handleStartJourney = () => {
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

  const handleLearnMore = () => {
    showInfo("Learn More", "Scrolling to features section...");
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Dark base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Random shooting lights */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-16 bg-gradient-to-t from-transparent via-blue-400/20 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: ["-100vh", "100vh"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Subtle particles */}
        <Particles count={30} />
      </div>

      {/* Navigation */}
      <motion.nav
        className="sticky top-0 z-50 watery-nav"
        initial={{ y: -100, opacity: 0, blur: 10 }}
        animate={{ y: 0, opacity: 1, blur: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        whileHover={{
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          transition: { duration: 0.3 },
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <DynamicLogo animate={true} />
            </motion.div>

            <div className="flex items-center space-x-6">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/download"
                  className="smooth-text text-slate-300 hover:text-white transition-all duration-500 font-medium relative group"
                >
                  Download
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 liquid-gradient"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/pricing"
                  className="smooth-text text-slate-300 hover:text-white transition-all duration-500 font-medium relative group"
                >
                  Pricing
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 liquid-gradient"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </Link>
              </motion.div>

              <MorphingButton
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </MorphingButton>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 z-10"
      >
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full text-sm font-medium mb-8 glow"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="w-4 h-4 text-blue-400" />
              </motion.div>
              <span className="text-white">
                AI-Powered Side Hustle Education
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-8"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              <motion.span
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                Your{" "}
              </motion.span>
              <motion.span
                className="text-gradient inline-block liquid-gradient"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                style={{
                  backgroundSize: "300% 300%",
                }}
              >
                AI Mentor
              </motion.span>
              <br />
              <motion.span
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                for Side Hustles
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Tell us your side hustle idea, and our AI will generate a complete
              step-by-step course with milestones to turn your vision into
              reality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MorphingButton size="lg" onClick={handleStartJourney}>
                <Download className="w-5 h-5" />
                Get the App
              </MorphingButton>

              <MorphingButton
                variant="secondary"
                size="lg"
                onClick={handleTryFree}
              >
                <Zap className="w-5 h-5" />
                Try Free
              </MorphingButton>
            </motion.div>
          </div>

          {/* Interactive Demo Card */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <motion.div
              className="watery-card p-8 rounded-2xl border-2 border-white/20 glow cursor-pointer smooth-entrance"
              whileHover={{
                scale: 1.03,
                y: -8,
                rotateX: 5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleFeatureClick("aiGeneration")}
            >
              <div className="text-center mb-6">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 glow">
                    <Play className="w-3 h-3 mr-1" />
                    Interactive Demo
                  </Badge>
                </motion.div>
              </div>

              <div className="glass rounded-xl p-6 mb-6 border border-white/10">
                <motion.p
                  className="text-lg text-slate-300 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <span className="font-medium text-blue-400">You:</span> "I
                  want to start a social media marketing agency"
                </motion.p>

                <div className="space-y-3 text-left">
                  {[
                    "Build a professional portfolio with 3 sample campaigns",
                    "Master Facebook Ads Manager and Google Ads fundamentals",
                    "Land your first 3 clients using cold outreach strategies",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + index * 0.3 }}
                    >
                      <motion.div
                        className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-0.5 border border-blue-500/30"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ delay: 2 + index * 0.3, duration: 0.5 }}
                      >
                        <span className="text-blue-400 font-medium text-sm">
                          {index + 1}
                        </span>
                      </motion.div>
                      <p className="text-slate-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.p
                className="text-center text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                <span className="font-medium text-purple-400">
                  SideQuestAI:
                </span>{" "}
                Generates a complete 12-week course with actionable milestones
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {[
              { number: 10000, suffix: "+", label: "Courses Generated" },
              { number: 5000, suffix: "+", label: "Success Stories" },
              { number: 95, suffix: "%", label: "Success Rate" },
              { number: 24, suffix: "/7", label: "AI Availability" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center glass p-6 rounded-xl hover-lift glow-purple"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-4xl font-bold text-gradient mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    delay: index * 0.2,
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <AnimatedCounter
                    target={stat.number}
                    suffix={stat.suffix}
                    startAnimation={statsInView}
                  />
                </motion.div>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              How <span className="text-gradient">SideQuestAI</span> Works
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Three simple steps to transform any side hustle idea into a
              structured learning path
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "1. Share Your Idea",
                description:
                  "Tell our AI about the side hustle you want to pursue. Be as specific or general as you like.",
                gradient: "from-blue-500 to-purple-600",
                delay: 0,
              },
              {
                icon: Brain,
                title: "2. AI Generates Course",
                description:
                  "Our AI analyzes your idea and creates a comprehensive course with clear milestones and action steps.",
                gradient: "from-purple-500 to-pink-600",
                delay: 0.2,
              },
              {
                icon: Rocket,
                title: "3. Start Building",
                description:
                  "Follow your personalized roadmap and track your progress as you build your side hustle.",
                gradient: "from-pink-500 to-red-500",
                delay: 0.4,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: step.delay }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 glow group-hover:scale-110 transition-transform duration-300`}
                  variants={floatVariants}
                  animate="animate"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-display font-bold mb-4 text-white">
                  {step.title}
                </h3>

                <p className="text-lg text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              Why Choose <span className="text-gradient">SideQuestAI?</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Cutting-edge AI technology meets practical business education
            </p>
          </motion.div>

          <motion.div
            id="features"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            {[
              {
                icon: Zap,
                title: "Instant Course Generation",
                description:
                  "Get a complete course outline in seconds, not weeks. Our AI understands business fundamentals and market dynamics.",
                color: "blue",
                featureKey: "aiGeneration" as keyof typeof features,
              },
              {
                icon: Target,
                title: "Clear Milestones",
                description:
                  "Break down complex business goals into achievable steps with specific deadlines and success metrics.",
                color: "purple",
                featureKey: "milestones" as keyof typeof features,
              },
              {
                icon: Users,
                title: "Personalized Learning",
                description:
                  "Courses adapt to your experience level, available time, and learning preferences for maximum effectiveness.",
                color: "pink",
                featureKey: "collaboration" as keyof typeof features,
              },
              {
                icon: TrendingUp,
                title: "Market Intelligence",
                description:
                  "Get insights into market trends, competition analysis, and proven strategies for your specific niche.",
                color: "green",
                featureKey: "analytics" as keyof typeof features,
              },
              {
                icon: Bot,
                title: "Continuous Updates",
                description:
                  "Your course evolves as you progress, with new recommendations and adjustments based on your achievements.",
                color: "cyan",
                featureKey: "aiGeneration" as keyof typeof features,
              },
              {
                icon: Code2,
                title: "Action-Oriented",
                description:
                  "Every lesson includes specific tasks and deliverables to keep you moving forward with real progress.",
                color: "orange",
                featureKey: "milestones" as keyof typeof features,
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="p-6 watery-card border-2 border-white/10 hover:border-white/30 glow h-full group cursor-pointer elastic-hover"
                  onClick={() => handleFeatureClick(feature.featureKey)}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                    rotateY: 5,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                >
                  <CardHeader className="pb-4">
                    <motion.div
                      className={`w-12 h-12 bg-${feature.color}-500/20 rounded-xl flex items-center justify-center mb-4 border border-${feature.color}-500/30`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon
                        className={`w-6 h-6 text-${feature.color}-400`}
                      />
                    </motion.div>
                    <CardTitle className="text-xl font-display font-semibold text-white group-hover:text-gradient transition-all duration-300 flex items-center justify-between">
                      {feature.title}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
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
          <motion.div
            className="glass p-16 rounded-3xl border-2 border-white/20 glow-pink relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              <motion.h2
                className="text-5xl font-display font-bold mb-6 text-white"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Ready to Turn Your Idea Into Reality?
              </motion.h2>

              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join the AI-powered revolution in entrepreneurial education.
                Your side hustle journey starts with a single click.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MorphingButton size="lg" onClick={handleStartJourney}>
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
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 glass border-t border-white/10 text-white py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="col-span-2">
              <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
                <DynamicLogo />
              </motion.div>
              <p className="text-slate-400 mb-4 max-w-sm">
                Empowering entrepreneurs with AI-driven education for successful
                side hustles.
              </p>
            </div>

            <div>
              <h3 className="font-display font-semibold mb-4 text-white">
                Product
              </h3>
              <div className="space-y-2 text-slate-400">
                <Link
                  to="/download"
                  className="block hover:text-white transition-colors duration-300 hover:translate-x-1"
                >
                  Download
                </Link>
                <Link
                  to="/pricing"
                  className="block hover:text-white transition-colors duration-300 hover:translate-x-1"
                >
                  Pricing
                </Link>
                <a
                  href="#"
                  className="block hover:text-white transition-colors duration-300 hover:translate-x-1"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors duration-300 hover:translate-x-1"
                >
                  How it Works
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold mb-4 text-white">
                Support
              </h3>
              <div className="space-y-2 text-slate-400">
                <a
                  href="#"
                  className="block hover:text-white transition-colors duration-300 hover:translate-x-1"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors duration-300 hover:translate-x-1"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors duration-300 hover:translate-x-1"
                >
                  Privacy
                </a>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 SideQuestAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="/terms"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  Terms
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="/privacy"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  Privacy
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="/refund"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  Refund
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>

      {/* Feature Showcase Modal */}
      <FeatureShowcase
        isOpen={isFeatureModalOpen}
        onClose={() => setIsFeatureModalOpen(false)}
        feature={selectedFeature}
      />
    </div>
  );
};

export default Index;
