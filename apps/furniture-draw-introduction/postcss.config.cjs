// postcss.config.cjs (sade, CommonJS uyumlu)

const path = require('path');

// CommonJS modüllerinde __dirname otomatik tanımlıdır.
// Ekstra import.meta.url vb. tanımlamaya gerek yok.

module.exports = {
  plugins: {
    tailwindcss: {
      // Eğer tailwind.config.js, bu dosyayla aynı klasördeyse:
      config: path.join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
