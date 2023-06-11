import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Pengaturan server lainnya...
    headers: {
      'Permissions-Policy': '', // Menghapus header Permissions-Policy
    },
  },
});

