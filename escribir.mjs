import { writeFileSync } from 'fs'

const postcss = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`

const tailwindconfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`

const globals = `@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}`

writeFileSync('postcss.config.mjs', postcss, 'utf8')
writeFileSync('tailwind.config.js', tailwindconfig, 'utf8')
writeFileSync('app/globals.css', globals, 'utf8')
console.log('OK')