import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  preview: {
    allowedHosts: [
      'profound-rebirth-production-ae08.up.railway.app'
    ]
  }
})