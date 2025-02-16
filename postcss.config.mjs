/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Add this line
    tailwindcss: {}, // Keep this line
    autoprefixer: {}, // Keep this line
  },
};

export default config;