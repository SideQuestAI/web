import { appConfig } from "@/config/app.config";

// File extensions that should trigger direct downloads
const DOWNLOAD_EXTENSIONS = [
  ".exe",
  ".msi",
  ".app",
  ".dmg",
  ".pkg",
  ".deb",
  ".rpm",
  ".appimage",
  ".snap",
  ".flatpak",
  ".apk",
  ".ipa",
  ".zip",
  ".tar.gz",
  ".7z",
  ".bin",
  ".run",
];

// Domains that are typically page redirects (not direct downloads)
const PAGE_REDIRECT_DOMAINS = [
  "apps.apple.com",
  "play.google.com",
  "microsoft.com",
  "chrome.google.com",
  "addons.mozilla.org",
  "snapcraft.io",
  "flathub.org",
];

export interface DownloadInfo {
  url: string;
  type: "download" | "redirect";
  filename?: string;
  platform: string;
  version: string;
}

/**
 * Determines if a URL should be a direct download or page redirect
 */
export const getDownloadType = (url: string): "download" | "redirect" => {
  try {
    const urlObj = new URL(url);

    // Check if domain is known to be a page redirect
    const isPageRedirectDomain = PAGE_REDIRECT_DOMAINS.some((domain) =>
      urlObj.hostname.includes(domain),
    );

    if (isPageRedirectDomain) {
      return "redirect";
    }

    // Check if URL has a file extension that indicates direct download
    const pathname = urlObj.pathname.toLowerCase();
    const hasDownloadExtension = DOWNLOAD_EXTENSIONS.some((ext) =>
      pathname.endsWith(ext),
    );

    if (hasDownloadExtension) {
      return "download";
    }

    // Special case for GitHub releases
    if (
      urlObj.hostname === "github.com" &&
      pathname.includes("/releases/download/")
    ) {
      return "download";
    }

    // Default to redirect for unknown URLs
    return "redirect";
  } catch {
    return "redirect";
  }
};

/**
 * Extracts filename from URL for downloads
 */
export const getFilenameFromUrl = (url: string): string | undefined => {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const filename = pathname.split("/").pop();

    if (filename && filename.includes(".")) {
      return filename;
    }
  } catch {
    // Ignore errors
  }

  return undefined;
};

/**
 * Gets download information for a platform
 */
export const getDownloadInfo = (
  platform: keyof typeof appConfig.downloads,
): DownloadInfo | null => {
  const platformConfig = appConfig.downloads[platform];

  if (
    !platformConfig ||
    !platformConfig.link ||
    platformConfig.link.trim() === ""
  ) {
    return null;
  }

  const url = platformConfig.link;
  const type = getDownloadType(url);
  const filename = type === "download" ? getFilenameFromUrl(url) : undefined;
  const version =
    typeof platformConfig === "object"
      ? platformConfig.version || "1.0.0"
      : "1.0.0";

  return {
    url,
    type,
    filename,
    platform: platform as string,
    version,
  };
};

/**
 * Handles the download/redirect action
 */
export const handleDownloadAction = (
  downloadInfo: DownloadInfo,
  onSuccess?: (message: string) => void,
  onRedirect?: (message: string) => void,
): void => {
  if (downloadInfo.type === "download") {
    // Direct download
    const message = downloadInfo.filename
      ? `Downloading ${downloadInfo.filename}...`
      : `Downloading ${downloadInfo.platform} app...`;

    onSuccess?.(message);

    // Create a temporary link element for download
    const link = document.createElement("a");
    link.href = downloadInfo.url;
    link.download =
      downloadInfo.filename || `SideQuestAI-${downloadInfo.platform}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // Page redirect
    const message = `Opening ${downloadInfo.platform} store page...`;
    onRedirect?.(message);

    // Open in new tab
    window.open(downloadInfo.url, "_blank", "noopener,noreferrer");
  }
};

/**
 * Gets appropriate button text based on download type
 */
export const getButtonText = (
  downloadInfo: DownloadInfo | null,
  platformName: string,
): string => {
  if (!downloadInfo) {
    return "Coming Soon";
  }

  if (downloadInfo.type === "download") {
    return `Download for ${platformName}`;
  } else {
    // Different text for different platforms
    if (downloadInfo.platform === "ios") {
      return "Get on App Store";
    } else if (downloadInfo.platform === "android") {
      return "Get on Play Store";
    } else if (downloadInfo.platform === "web") {
      return "Open Web App";
    } else {
      return `Get ${platformName} App`;
    }
  }
};

/**
 * Gets appropriate icon based on download type and platform
 */
export const getDownloadIcon = (downloadInfo: DownloadInfo | null): string => {
  if (!downloadInfo) {
    return "clock"; // Coming soon icon
  }

  if (downloadInfo.type === "download") {
    return "download";
  } else {
    // Page redirect icons
    if (downloadInfo.platform === "ios") {
      return "apple";
    } else if (downloadInfo.platform === "android") {
      return "smartphone";
    } else if (downloadInfo.platform === "web") {
      return "globe";
    } else {
      return "external-link";
    }
  }
};

/**
 * Validates download URL
 */
export const isValidDownloadUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return ["http:", "https:"].includes(urlObj.protocol);
  } catch {
    return false;
  }
};
