import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/OC_p8_app_web_with_react/',
  plugins: [react()],
  server: {
    port: 3000,
  },
})
