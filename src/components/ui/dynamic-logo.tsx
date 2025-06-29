import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { appConfig } from "@/config/app.config";
import { getLogoSrc } from "@/lib/assets";

interface DynamicLogoProps {
  className?: string;
  showText?: boolean;
  animate?: boolean;
}

export const DynamicLogo: React.FC<DynamicLogoProps> = ({
  className = "",
  showText = true,
  animate = true,
}) => {
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const loadLogo = async () => {
      try {
        // Add a small delay to prevent rapid fire requests
        await new Promise((resolve) => setTimeout(resolve, 100));
        const src = await getLogoSrc();
        setLogoSrc(src);
        if (!src) {
          setLogoError(true);
        }
      } catch (error) {
        console.debug(
          "Logo loading failed (this is normal if no logo exists):",
          error,
        );
        setLogoError(true);
        setLogoSrc(null);
      }
    };

    // Only attempt to load logo if path is configured
    if (
      appConfig.branding.logo.path &&
      appConfig.branding.logo.path.trim() !== ""
    ) {
      loadLogo();
    } else {
      setLogoError(true);
    }
  }, []);

  const handleLogoLoad = () => {
    setLogoLoaded(true);
  };

  const handleLogoError = () => {
    setLogoError(true);
    setLogoSrc(null);
  };

  // Fallback to text logo if no image or loading failed
  const showTextLogo = !logoSrc || logoError || !logoLoaded;

  const logoAnimation = animate
    ? {
        animate: { rotate: [0, 5, -5, 0] },
        transition: { duration: 4, repeat: Infinity },
      }
    : {};

  return (
    <div className={`flex items-center space-x-2 liquid-logo ${className}`}>
      <motion.div
        className={`flex items-center justify-center liquid-morph ${
          showTextLogo
            ? "w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg glow liquid-gradient"
            : ""
        }`}
        {...logoAnimation}
        whileHover={{
          scale: 1.15,
          rotate: [0, -10, 10, 0],
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
            rotate: { duration: 0.6 },
          },
        }}
      >
        {showTextLogo ? (
          <span className="text-white font-bold text-sm">
            {appConfig.branding.name.substring(0, 2).toUpperCase()}
          </span>
        ) : (
          logoSrc && (
            <img
              src={logoSrc}
              alt={appConfig.branding.logo.alt}
              width={appConfig.branding.logo.width}
              height={appConfig.branding.logo.height}
              onLoad={handleLogoLoad}
              onError={handleLogoError}
              className="rounded-lg"
            />
          )
        )}
      </motion.div>

      {showText && (
        <motion.span
          className="font-display font-bold text-xl text-neon watery-text smooth-text"
          whileHover={{
            scale: 1.05,
            textShadow:
              "0 0 20px rgba(168, 85, 247, 0.8), 0 0 30px rgba(236, 72, 153, 0.6)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {appConfig.branding.name}
        </motion.span>
      )}
    </div>
  );
};

export default DynamicLogo;
