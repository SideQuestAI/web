import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Enhanced brand colors for dark theme
        brand: {
          50: "#f0f7ff",
          100: "#e0efff",
          200: "#bae1ff",
          300: "#7cc8ff",
          400: "#36acff",
          500: "#0c8dff",
          600: "#0074e6",
          700: "#0056b3",
          800: "#054994",
          900: "#0a3d7a",
          950: "#072749",
        },
        // Neon colors for dark theme effects
        neon: {
          blue: "#00bfff",
          purple: "#bf00ff",
          pink: "#ff00bf",
          cyan: "#00ffbf",
          green: "#bfff00",
        },
        // Glass morphism colors
        glass: {
          light: "rgba(255, 255, 255, 0.05)",
          medium: "rgba(255, 255, 255, 0.1)",
          heavy: "rgba(255, 255, 255, 0.15)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Syne", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Enhanced animations
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(54, 172, 255, 0.3), 0 0 40px rgba(54, 172, 255, 0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 30px rgba(54, 172, 255, 0.5), 0 0 60px rgba(54, 172, 255, 0.3)",
          },
        },
        "text-glow": {
          "0%": {
            textShadow: "0 0 10px #00bfff, 0 0 20px #00bfff",
          },
          "50%": {
            textShadow: "0 0 20px #bf00ff, 0 0 30px #bf00ff, 0 0 40px #bf00ff",
          },
          "100%": {
            textShadow: "0 0 10px #00bfff, 0 0 20px #00bfff",
          },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "scale-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "particle-float": {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "0.7",
          },
          "50%": {
            transform: "translateY(-100px) rotate(180deg)",
            opacity: "1",
          },
        },
        morph: {
          "0%, 100%": {
            borderRadius: "12px",
            transform: "scale(1)",
          },
          "25%": {
            borderRadius: "20px",
            transform: "scale(1.02)",
          },
          "50%": {
            borderRadius: "8px",
            transform: "scale(0.98)",
          },
          "75%": {
            borderRadius: "16px",
            transform: "scale(1.01)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        wave: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "text-glow": "text-glow 2s ease-in-out infinite alternate",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "scale-pulse": "scale-pulse 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "bounce-slow": "bounce-slow 4s ease-in-out infinite",
        rotate: "rotate 8s linear infinite",
        "rotate-slow": "rotate 20s linear infinite",
        "particle-float": "particle-float 8s linear infinite",
        morph: "morph 4s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        wave: "wave 2s ease-in-out infinite",
        // Delayed animations
        "fade-in-delay-1": "fade-in 0.8s ease-out 0.2s forwards",
        "fade-in-delay-2": "fade-in 0.8s ease-out 0.4s forwards",
        "fade-in-delay-3": "fade-in 0.8s ease-out 0.6s forwards",
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #581c87 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shimmer-gradient":
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(54, 172, 255, 0.3), 0 0 40px rgba(54, 172, 255, 0.2)",
        "glow-purple":
          "0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)",
        "glow-pink":
          "0 0 20px rgba(236, 72, 153, 0.3), 0 0 40px rgba(236, 72, 153, 0.2)",
        "glow-green":
          "0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.2)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
