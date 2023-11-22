import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    server: {
      port: 3000,
    },
  }

  if (command !== 'serve') {
    config.base = '/OC_p8_app_web_with_react/'
  }

  return config
})
// if you want to use local preview, please use this code:
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//   },
// })