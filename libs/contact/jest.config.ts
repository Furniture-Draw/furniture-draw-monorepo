export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!lucide-react)", // lucide-react modülünü transpile etmeye zorla
  ],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // .js uzantılarından kurtul
    "^lucide-react$": "<rootDir>/node_modules/lucide-react/dist/cjs/index.js", // Lucide'yi CJS olarak kullan
  },
};
