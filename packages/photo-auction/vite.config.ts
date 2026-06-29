import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@seoulphoto/design-system': path.resolve(__dirname, '../design-system/src'),
    },
  },
})
