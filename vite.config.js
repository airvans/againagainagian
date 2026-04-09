import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base:"/",
  plugins: [
    tailwindcss(),
  ],
    build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        '404': '404.html',
        'ads-thoughts': 'Ads&thoughts.html',
        changelog: 'changelog.html',
        projects: 'projects.html'
      }
    }
  }
})