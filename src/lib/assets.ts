import { appConfig } from "@/config/app.config";

// Asset loading utilities with fallbacks

export const checkAssetExists = async (path: string): Promise<boolean> => {
  if (!path) return false;

  try {
    // Create abort controller for timeout (better browser compatibility)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout

    const response = await fetch(path, {
      method: "HEAD",
      cache: "no-cache",
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return response.ok && response.status === 200;
  } catch (error) {
    // Silently fail and return false - this is expected for missing assets
    console.debug(`Asset check failed for ${path}:`, error);
    return false;
  }
};

export const getLogoSrc = async (): Promise<string | null> => {
  const logoPath = appConfig.branding.logo.path;
  if (!logoPath || logoPath.trim() === "") return null;

  try {
    const exists = await checkAssetExists(logoPath);
    return exists ? logoPath : null;
  } catch (error) {
    console.debug("Logo loading failed:", error);
    return null;
  }
};

export const getVideoSrc = async (): Promise<string | null> => {
  const videoPath = appConfig.branding.video.previewPath;
  if (!videoPath || videoPath.trim() === "") return null;

  try {
    const exists = await checkAssetExists(videoPath);
    return exists ? videoPath : null;
  } catch (error) {
    console.debug("Video loading failed:", error);
    return null;
  }
};

export const getDownloadLink = (
  platform: keyof typeof appConfig.downloads,
): string | null => {
  const linkConfig = appConfig.downloads[platform];
  if (!linkConfig || typeof linkConfig === "string") return null;

  return linkConfig.link || null;
};

export const hasDownloadLink = (
  platform: keyof typeof appConfig.downloads,
): boolean => {
  const link = getDownloadLink(platform);
  return link !== null && link !== "";
};

export const getAppVersion = (
  platform: keyof typeof appConfig.downloads,
): string => {
  const linkConfig = appConfig.downloads[platform];
  if (!linkConfig || typeof linkConfig === "string") return "1.0.0";

  return linkConfig.version || "1.0.0";
};
