import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import { fileURLToPath } from 'url';

// __dirname yerine, ESM içinde doğru yolu almak için aşağıdaki kod gerekiyor:
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default tailwindConfig;
