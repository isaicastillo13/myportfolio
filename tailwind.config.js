module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Mueve los colores aquí para que extiendan los predeterminados
        negro: "#000000",
        ghostWhite: "#9E9E9E",
        pearl: "#FCFBF8",
        butterYellow: "#FFF083",
        grisAzulado: "#64748B",
        azulBrillante: "#1DA1F2",
        neutral900: "#6b7280",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        "open-sans": ["Open Sans", "serif"],
        imbPlex: ["IBM Plex Mono", "monospace"],
      },
      translate: {
        101: "101%",
      },
    },
    keyframes: {
      marquee: {
        from: { transform: "translateX(0%)" },
        to: { transform: "translateX(-50%)" },
      },
    },
    animation: {
      marquee: "marquee 15s linear infinite",
    },
  },
  plugins: [],
};