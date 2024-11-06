import { transformWithEsbuild } from "vite";

const colors = [
  "accent",
  "light",
  "dark",
  "orange",
  "primary",
  "secondary",
  "line",
  "alert",
  "success",
  "warning",
  "info",
  "body",
];

const colorObject = colors.reduce((acc, color) => {
  acc[color] = `rgba(var(--${color}), <alpha-value>)`;
  return acc;
}, {});

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: colorObject,
      backgroundColor: colorObject,
      borderColor: colorObject,
      stroke: colorObject,
      fill: colorObject,
    },

    fontFamily: {
      raleway: ["raleway", "Arial", "sans-serif"],
    },

    backgroundImage: {
      skeleton:
        "linear-gradient(90deg, transparent, rgba(var(--primary), .8), transparent )",
    },

    animation: {
      rotate: "rotate 2s linear infinite",
      loading: "loading 1.5s ease-in infinite",
      fade: "fade .1s ease-in",
      slideLeft: "slideLeft .2s ease-in",
      slideUp: "slideUp .2s ease-in",
    },

    keyframes: {
      rotate: {
        "100%": { transform: "rotate(360deg)" },
      },
      loading: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(100%)" },
      },

      fade: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      slideLeft: {
        "0%": { 
          opacity: "0", 
          transform:"translateX(30%)"
         },
        "100%": { 
            opacity: "1",
           transform:"translateX(0%)"
         },
      },
      slideUp: {
        "0%": { 
          opacity: "0", 
          transform:"translateY(30%)"
         },
        "100%": { 
            opacity: "1",
           transform:"translateY(0%)"
         },
      }
    },
  },
  plugins: [],
};
