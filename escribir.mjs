import { writeFileSync } from 'fs'

const postcss = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`

writeFileSync('postcss.config.mjs', postcss, 'utf8')
console.log('OK')