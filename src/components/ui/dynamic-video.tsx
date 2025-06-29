import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Monitor, Play } from "lucide-react";
import { appConfig } from "@/config/app.config";
import { getVideoSrc } from "@/lib/assets";

interface DynamicVideoProps {
  className?: string;
  fallbackContent?: React.ReactNode;
  controls?: boolean;
  autoPlay?: boolean;
}

export const DynamicVideo: React.FC<DynamicVideoProps> = ({
  className = "",
  fallbackContent,
  controls = false,
  autoPlay,
}) => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        setIsLoading(true);
        // Add a small delay to prevent rapid fire requests
        await new Promise((resolve) => setTimeout(resolve, 200));
        const src = await getVideoSrc();
        setVideoSrc(src);
        if (!src) {
          setVideoError(true);
        }
      } catch (error) {
        console.debug(
          "Video loading failed (this is normal if no video exists):",
          error,
        );
        setVideoError(true);
        setVideoSrc(null);
      } finally {
        setIsLoading(false);
      }
    };

    // Only attempt to load video if path is configured
    if (
      appConfig.branding.video.previewPath &&
      appConfig.branding.video.previewPath.trim() !== ""
    ) {
      loadVideo();
    } else {
      setIsLoading(false);
      setVideoError(true);
    }
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoSrc(null);
  };

  // Show fallback if no video or loading failed
  const showFallback = !videoSrc || videoError || !videoLoaded;

  const defaultFallback = (
    <motion.div
      className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center p-8"
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
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <p className="text-slate-400">Preview Coming Soon</p>
        <p className="text-xs text-slate-500 mt-2">
          Add preview.mp4 to assets folder
        </p>
      </div>
    </motion.div>
  );

  if (isLoading) {
    return (
      <div className={`relative ${className}`}>
        <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full" />
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {showFallback ? (
        <div className="aspect-video">{fallbackContent || defaultFallback}</div>
      ) : (
        <motion.div
          className="aspect-video rounded-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <video
            src={videoSrc!}
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            controls={controls}
            autoPlay={autoPlay ?? appConfig.branding.video.autoPlay}
            loop={appConfig.branding.video.loop}
            muted={appConfig.branding.video.muted}
            className="w-full h-full object-cover rounded-xl"
            poster="/assets/video-poster.jpg" // Optional: add a poster image
          >
            Your browser does not support the video tag.
          </video>

          {!controls && (
            <motion.div
              className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Play className="w-12 h-12 text-white/80" />
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default DynamicVideo;
