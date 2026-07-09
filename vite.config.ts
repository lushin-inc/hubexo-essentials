import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub repo: https://github.com/lushin-inc/hubexo-essentials
// Served from:  https://lushin-inc.github.io/hubexo-essentials/
// `base` MUST match the repo name so asset URLs resolve on Pages.
export default defineConfig({
  base: '/hubexo-essentials/',
  plugins: [react()],
})
