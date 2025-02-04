// apps/furniture-draw-introduction/eslint.config.js

import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.js';

// Dosya yolunu Windows uyumlu şekilde belirleyin
const baseDirectory = fileURLToPath(new URL('.', import.meta.url));

const compat = new FlatCompat({
  baseDirectory,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  // Next.js konfigürasyonlarını paket adıyla genişletiyoruz
  ...compat.extends('eslint-config-next'),
  ...compat.extends('eslint-config-next/core-web-vitals'),
  // Monorepo kök dizindeki genel ESLint ayarlarınız
  ...baseConfig,
  // NX tarafından önerilen React-Typescript ayarları
  ...nx.configs['flat/react-typescript'],
  // .next klasöründeki dosyaları yoksay
  {
    ignores: ['.next/**/*'],
  },
];

export default eslintConfig;
