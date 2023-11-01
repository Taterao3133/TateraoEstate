import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/server-side':{
      target:'http://localhost:3000',
      Secure:false,
      },
    },
  },
  plugins: [react()],
})
