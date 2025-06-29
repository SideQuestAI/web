# SideQuestAI Assets

This folder contains the assets for your SideQuestAI application. Place your custom files here to personalize your app.

## 📁 File Structure

```
public/assets/
├── logo.png          # App logo (recommended: 32x32px, PNG format)
├── preview.mp4       # App preview video (recommended: 16:9 aspect ratio)
├── video-poster.jpg  # Video poster/thumbnail (optional)
└── README.md        # This file
```

## 🎨 Logo Configuration

**File:** `logo.png`

- **Format:** PNG (supports transparency)
- **Size:** 32x32px recommended (will be scaled appropriately)
- **Fallback:** If not provided, shows text logo with app initials

**Usage:**

1. Place your logo file as `logo.png` in this folder
2. The app will automatically detect and use it
3. Configure logo settings in `src/config/app.config.ts`

## 🎥 Video Configuration

**File:** `preview.mp4`

- **Format:** MP4 (H.264 codec recommended)
- **Aspect Ratio:** 16:9 recommended
- **Size:** Keep under 10MB for better loading
- **Fallback:** If not provided, shows static placeholder

**Optional:** `video-poster.jpg`

- **Format:** JPG/PNG
- **Purpose:** Thumbnail shown before video loads

**Usage:**

1. Place your video file as `preview.mp4` in this folder
2. Optionally add `video-poster.jpg` for thumbnail
3. The app will automatically detect and use it
4. Configure video settings in `src/config/app.config.ts`

## ⚙️ Configuration

All settings can be customized in `src/config/app.config.ts`:

```typescript
export const appConfig = {
  branding: {
    name: "SideQuestAI",
    logo: {
      path: "/assets/logo.png", // Path to your logo
      alt: "SideQuestAI Logo",
      width: 32,
      height: 32,
    },
    video: {
      previewPath: "/assets/preview.mp4", // Path to your video
      autoPlay: true,
      loop: true,
      muted: true,
    },
  },
  // ... other settings
};
```

## 🔗 Download Links

Configure your app download links in the config file:

```typescript
downloads: {
  ios: { link: "", version: "1.0.0" },
  android: { link: "", version: "1.0.0" },
  windows: { link: "", version: "1.0.0" },
  mac: { link: "", version: "1.0.0" },
  linux: { link: "", version: "1.0.0" },
  web: { link: "" },
}
```

- **Empty link (`""`)**: Shows "Coming Soon" button
- **Valid URL**: Shows download button with link

## 📝 Quick Setup

1. **Add your logo:** Place `logo.png` in this folder
2. **Add your video:** Place `preview.mp4` in this folder
3. **Update config:** Edit `src/config/app.config.ts` with your settings
4. **Add download links:** Update the `downloads` section in config

## 🚀 Tips

- **Logo:** Use a transparent PNG for best results
- **Video:** Compress your video to balance quality and file size
- **Links:** Use GitHub Releases for easy app distribution
- **Testing:** The app automatically checks if files exist and falls back gracefully

## 🛠️ Troubleshooting

**Logo not showing?**

- Check file path is exactly `/assets/logo.png`
- Verify file format is PNG
- Check browser console for errors

**Video not playing?**

- Check file path is exactly `/assets/preview.mp4`
- Verify file format is MP4
- Try a different video codec (H.264 recommended)

**Download links not working?**

- Verify URLs are correct in config file
- Check that files exist at the specified URLs
- Ensure proper CORS headers for external links
