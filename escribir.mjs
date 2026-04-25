import { writeFileSync } from 'fs'

const postcss = `const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;`

const tailwindcss = `@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html, body {
  max-width: 100vw;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}`

writeFileSync('postcss.config.mjs', postcss, 'utf8')
writeFileSync('app/globals.css', tailwindcss, 'utf8')
console.log('OK')