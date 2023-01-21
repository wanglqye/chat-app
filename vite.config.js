// vits.config.ts
import { defineConfig } from "vite"
import uni from "@dcloudio/vite-plugin-uni"
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`,
    },
    extensions: ['.mjs', '.js', '.jsx', '.json', '.vue'],
  },
  plugins: [
    uni()
  ],
})
