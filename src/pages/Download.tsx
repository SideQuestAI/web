import React from "react";
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
  Smartphone,
  Monitor,
  Download as DownloadIcon,
  Star,
  Shield,
  Zap,
  ArrowRight,
  Apple,
  CheckCircle,
  Globe,
  Github,
  ExternalLink,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import Particles from "@/components/ui/particles";
import MorphingButton from "@/components/ui/morphing-button";
import DynamicLogo from "@/components/ui/dynamic-logo";
import DynamicVideo from "@/components/ui/dynamic-video";
import { appConfig } from "@/config/app.config";
import { useToast } from "@/contexts/toast-context";
import {
  getDownloadInfo,
  handleDownloadAction,
  getButtonText,
  getDownloadIcon,
} from "@/lib/download-utils";

const Download = () => {
  const { showSuccess, showError, showInfo } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSmartDownload = (
    platform: keyof typeof appConfig.downloads,
    platformName: string,
  ) => {
    const downloadInfo = getDownloadInfo(platform);

    if (!downloadInfo) {
      showInfo(
        `${platformName} Coming Soon`,
        "We're working hard to bring you this platform. Stay tuned!",
      );
      return;
    }

    handleDownloadAction(
      downloadInfo,
      (message) => {
        showSuccess(`${platformName} Download`, message);
      },
      (message) => {
        showInfo(`${platformName} Redirect`, message);
      },
    );
  };

  const handleFeatureDemo = () => {
    showInfo(
      "Feature Demo",
      "Interactive demo coming soon! Check out our pricing plans in the meantime.",
    );
    setTimeout(() => {
      document
        .getElementById("features")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
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

  // Platform configurations
  const platforms = {
    mobile: [
      {
        id: "ios",
        name: "iOS",
        icon: Apple,
        description: "iPhone & iPad",
        requirements: "iOS 14.0+",
        gradient: "from-slate-600 to-slate-700",
        glowColor: "slate",
      },
      {
        id: "android",
        name: "Android",
        icon: Smartphone,
        description: "Phone & Tablet",
        requirements: "Android 8.0+",
        gradient: "from-green-500 to-emerald-600",
        glowColor: "green",
      },
    ],
    desktop: [
      {
        id: "windows",
        name: "Windows",
        icon: Monitor,
        description: "PC Desktop",
        requirements: "Windows 10+",
        gradient: "from-blue-500 to-blue-600",
        glowColor: "blue",
      },
      {
        id: "mac",
        name: "macOS",
        icon: Apple,
        description: "Mac Desktop",
        requirements: "macOS 11+",
        gradient: "from-purple-500 to-purple-600",
        glowColor: "purple",
      },
      {
        id: "linux",
        name: "Linux",
        icon: Monitor,
        description: "Ubuntu, Fedora, etc.",
        requirements: "x64 Architecture",
        gradient: "from-orange-500 to-red-500",
        glowColor: "orange",
      },
    ],
    web: [
      {
        id: "web",
        name: "Web App",
        icon: Globe,
        description: "Browser-based",
        requirements: "Modern Browser",
        gradient: "from-pink-500 to-rose-500",
        glowColor: "pink",
      },
    ],
  };

  const PlatformCard = ({
    platform,
    category,
  }: {
    platform: any;
    category: string;
  }) => {
    const downloadInfo = getDownloadInfo(
      platform.id as keyof typeof appConfig.downloads,
    );
    const buttonText = getButtonText(downloadInfo, platform.name);
    const iconType = getDownloadIcon(downloadInfo);

    const handleDownload = () => {
      handleSmartDownload(
        platform.id as keyof typeof appConfig.downloads,
        platform.name,
      );
    };

    // Get the appropriate icon component
    const getIconComponent = () => {
      switch (iconType) {
        case "apple":
          return Apple;
        case "smartphone":
          return Smartphone;
        case "globe":
          return Globe;
        case "external-link":
          return ExternalLink;
        case "clock":
          return Clock;
        default:
          return DownloadIcon;
      }
    };

    const IconComponent = getIconComponent();

    return (
      <motion.div variants={itemVariants}>
        <Card
          className={`p-6 glass border-2 border-white/20 hover:border-white/40 hover-lift glow-${platform.glowColor} h-full`}
        >
          <CardHeader className="text-center pb-6">
            <motion.div
              className={`w-16 h-16 bg-gradient-to-br ${platform.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 glow`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <platform.icon className="w-8 h-8 text-white" />
            </motion.div>
            <CardTitle className="text-2xl font-display font-bold text-white">
              {platform.name}
            </CardTitle>
            <CardDescription className="text-lg text-slate-400">
              {platform.description}
            </CardDescription>
            {downloadInfo && (
              <div className="flex flex-col gap-2">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  v{downloadInfo.version}
                </Badge>
                {downloadInfo.type === "download" && downloadInfo.filename && (
                  <Badge
                    variant="outline"
                    className="text-xs text-slate-500 border-slate-600"
                  >
                    {downloadInfo.filename}
                  </Badge>
                )}
                {downloadInfo.type === "redirect" && (
                  <Badge
                    variant="outline"
                    className="text-xs text-blue-400 border-blue-500/30"
                  >
                    Store Page
                  </Badge>
                )}
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <MorphingButton
                className="w-full"
                variant={downloadInfo ? "primary" : "secondary"}
                onClick={handleDownload}
              >
                <IconComponent className="w-5 h-5" />
                {buttonText}
              </MorphingButton>
            </div>
            <p className="text-sm text-slate-500 text-center">
              {platform.requirements}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Subtle Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        <div className="absolute inset-0">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-16 bg-gradient-to-t from-transparent via-purple-400/20 to-transparent"
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
                delay: Math.random() * 6,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <Particles count={20} />
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

            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-white transition-colors font-medium relative group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="/pricing"
                  className="text-slate-300 hover:text-white transition-colors font-medium relative group"
                >
                  Pricing
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>

              {appConfig.links.github && (
                <motion.div whileHover={{ scale: 1.1 }}>
                  <a
                    href={appConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </motion.div>
              )}

              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 animate-pulse-glow">
                Download
              </Badge>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 glass text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8 glow"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <DownloadIcon className="w-4 h-4" />
            </motion.div>
            <span>Download {appConfig.branding.name}</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-display font-bold mb-6"
          >
            Get the{" "}
            <motion.span
              className="text-gradient inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {appConfig.branding.name}
            </motion.span>{" "}
            App
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {appConfig.branding.tagline}. Download our AI-powered app and get
            personalized step-by-step courses for any side hustle you can
            imagine.
          </motion.p>
        </motion.div>
      </section>

      {/* Platform Downloads */}
      <section
        id="platforms"
        className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Mobile Apps */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-center mb-8 text-white">
              Mobile Apps
            </h2>
            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {platforms.mobile.map((platform) => (
                <PlatformCard
                  key={platform.id}
                  platform={platform}
                  category="mobile"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Desktop Apps */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-center mb-8 text-white">
              Desktop Apps
            </h2>
            <motion.div
              className="grid lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {platforms.desktop.map((platform) => (
                <PlatformCard
                  key={platform.id}
                  platform={platform}
                  category="desktop"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Web App */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-center mb-8 text-white">
              Web Access
            </h2>
            <motion.div
              className="grid place-items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="max-w-sm">
                {platforms.web.map((platform) => (
                  <PlatformCard
                    key={platform.id}
                    platform={platform}
                    category="web"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Download Info Section */}
      <section className="py-12 relative z-10 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Smart Download Detection
            </h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Our system automatically detects the best download method for each
              platform:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass p-4 rounded-xl">
                <DownloadIcon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">
                  Direct Downloads
                </h4>
                <p className="text-sm text-slate-400">
                  .exe, .dmg, .deb files download directly from GitHub releases
                </p>
              </div>
              <div className="glass p-4 rounded-xl">
                <ExternalLink className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">
                  Store Redirects
                </h4>
                <p className="text-sm text-slate-400">
                  App Store and Play Store links open in new tabs
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        `
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-white">
              Why Download {appConfig.branding.name}?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Get the full experience with our feature-rich applications
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Zap,
                title: "Offline Access",
                description:
                  "Download your courses and access them anywhere, even without internet connection",
                color: "blue",
              },
              {
                icon: Star,
                title: "Premium Features",
                description:
                  "Unlock advanced AI capabilities, progress tracking, and personalized recommendations",
                color: "purple",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description:
                  "Your data is encrypted and stored securely. We respect your privacy completely",
                color: "pink",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  className="text-center group"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`w-12 h-12 bg-${feature.color}-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-${feature.color}-500/30 glow`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <feature.icon
                      className={`w-6 h-6 text-${feature.color}-400`}
                    />
                  </motion.div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-white">
              Experience the Future of Learning
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Intuitive interface, powerful AI, seamless experience across all
              devices
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-6 text-white">
                Everything you need in one app
              </h3>
              <div className="space-y-4">
                {[
                  "AI-powered course generation",
                  "Progress tracking & analytics",
                  "Offline content access",
                  "Cross-device synchronization",
                  "Community features",
                  "24/7 AI assistance",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="glass p-8 rounded-3xl border-2 border-white/20 glow">
                <DynamicVideo
                  className="aspect-video"
                  fallbackContent={
                    <motion.div
                      className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div>
                        <motion.div
                          className="relative mb-4"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Monitor className="w-16 h-16 text-blue-400 mx-auto" />
                          <motion.div
                            className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                          />
                        </motion.div>
                        <p className="text-slate-400">
                          App Preview Coming Soon
                        </p>
                        <p className="text-xs text-slate-500 mt-2">
                          Add preview.mp4 to assets folder
                        </p>
                      </div>
                    </motion.div>
                  }
                />
              </div>
            </motion.div>
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
          >
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
                className="text-4xl font-display font-bold mb-6 text-white"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Ready to Start Your Side Hustle Journey?
              </motion.h2>

              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join thousands of entrepreneurs who are already building
                successful side hustles with AI guidance
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MorphingButton
                  size="lg"
                  onClick={() => {
                    showSuccess(
                      "Downloading SideQuestAI",
                      "Choose your preferred platform above!",
                    );
                    setTimeout(() => {
                      document
                        .getElementById("platforms")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 1000);
                  }}
                >
                  <DownloadIcon className="w-5 h-5" />
                  Download Now
                </MorphingButton>
                <Link to="/pricing">
                  <MorphingButton variant="secondary" size="lg">
                    <ArrowRight className="w-5 h-5" />
                    View Pricing
                  </MorphingButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 glass border-t border-white/10 text-white py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center space-x-2 mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
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
                to="/pricing"
                className="hover:text-white transition-colors duration-300"
              >
                Pricing
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
          </motion.div>

          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2024 {appConfig.branding.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Download;
