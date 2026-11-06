import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Для пользовательского сайта username.github.io базовый путь = '/' (корень домена).
// Для проектных сайтов вида username.github.io/repo-name/ нужно ставить base: '/repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
