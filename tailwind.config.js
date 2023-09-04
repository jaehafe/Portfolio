/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
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
        background: "hsl(var(--geist-background))",
        foreground: "hsl(var(--geist-foreground))",
        button: {
          DEFAULT: "hsl(var(--button-background))",
          foreground: "hsl(var(--button-foreground))",
        },
        accents: {
          1: "hsl(var(--accents-1))",
          2: "hsl(var(--accents-2))",
          3: "hsl(var(--accents-3))",
          4: "hsl(var(--accents-4))",
          5: "hsl(var(--accents-5))",
          6: "hsl(var(--accents-6))",
          7: "hsl(var(--accents-7))",
          8: "hsl(var(--accents-8))",
        },
        success: {
          lighter: "hsl(var(--geist-success-lighter))",
          light: "hsl(var(--geist-success-light))",
          DEFAULT: "hsl(var(--geist-success))",
          dark: "hsl(var(--geist-success-dark))",
        },
        error: {
          lighter: "hsl(var(--geist-error-lighter))",
          light: "hsl(var(--geist-error-light))",
          DEFAULT: "hsl(var(--geist-error))",
          dark: "hsl(var(--geist-error-dark))",
        },
        warning: {
          lighter: "hsl(var(--geist-warning-lighter))",
          light: "hsl(var(--geist-warning-light))",
          DEFAULT: "hsl(var(--geist-warning))",
          dark: "hsl(var(--geist-warning-dark))",
        },
        violet: {
          lighter: "hsl(var(--geist-violet-lighter))",
          light: "hsl(var(--geist-violet-light))",
          DEFAULT: "hsl(var(--geist-violet))",
          dark: "hsl(var(--geist-violet-dark))",
        },
        cyan: {
          lighter: "hsl(var(--geist-cyan-lighter))",
          light: "hsl(var(--geist-cyan-light))",
          DEFAULT: "hsl(var(--geist-cyan))",
          dark: "hsl(var(--geist-cyan-dark))",
        },
        highlight: {
          purple: "hsl(var(--geist-highlight-purple))",
          magenta: "hsl(var(--geist-highlight-magenta))",
          pink: "hsl(var(--geist-highlight-pink))",
          yellow: "hsl(var(--geist-highlight-yellow))",
        },
        ring: "hsl(var(--ring))",
      },
      fontSize: {
        "5xl": [
          "3rem",
          {
            lineHeight: "3.5rem",
            letterSpacing: "-0.065rem",
            fontWeight: "700",
          },
        ],
        "4xl": [
          "2rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "-0.05rem",
            fontWeight: "600",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.03rem",
            fontWeight: "600",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-0.02rem",
            fontWeight: "600",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "initial",
            fontWeight: "400",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "initial",
            fontWeight: "400",
          },
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "initial",
            fontWeight: "400",
          },
        ],
        xxs: [
          "0.625rem",
          {
            lineHeight: "2rem",
            letterSpacing: "initial",
            fontWeight: "400",
          },
        ],
      },
      fontFamily: {
        sans: "var(--font-inter)",
        space_grotesk: "var(--font-space-grotesk)",
      },
      borderRadius: {
        DEFAULT: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "32px",
      },
      borderWidth: {
        DEFAULT: "0.5px",
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
        hover: "hsl(var(--border-hover))",
      },
      boxShadow: {
        "focus-button":
          "0 0 0 2px hsl(var(--geist-background)), 0 0 0 4px hsl(var(--geist-foreground))",
      },
      // colors: {
      //   border: "hsl(var(--border))",
      //   input: "hsl(var(--input))",
      //   ring: "hsl(var(--ring))",
      //   background: "hsl(var(--background))",
      //   foreground: "hsl(var(--foreground))",
      //   primary: {
      //     DEFAULT: "hsl(var(--primary))",
      //     foreground: "hsl(var(--primary-foreground))",
      //   },
      //   secondary: {
      //     DEFAULT: "hsl(var(--secondary))",
      //     foreground: "hsl(var(--secondary-foreground))",
      //   },
      //   destructive: {
      //     DEFAULT: "hsl(var(--destructive))",
      //     foreground: "hsl(var(--destructive-foreground))",
      //   },
      //   muted: {
      //     DEFAULT: "hsl(var(--muted))",
      //     foreground: "hsl(var(--muted-foreground))",
      //   },
      //   accent: {
      //     DEFAULT: "hsl(var(--accent))",
      //     foreground: "hsl(var(--accent-foreground))",
      //   },
      //   popover: {
      //     DEFAULT: "hsl(var(--popover))",
      //     foreground: "hsl(var(--popover-foreground))",
      //   },
      //   card: {
      //     DEFAULT: "hsl(var(--card))",
      //     foreground: "hsl(var(--card-foreground))",
      //   },
      // },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },
      // keyframes: {
      //   "accordion-down": {
      //     from: { height: 0 },
      //     to: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   "accordion-up": {
      //     from: { height: "var(--radix-accordion-content-height)" },
      //     to: { height: 0 },
      //   },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
