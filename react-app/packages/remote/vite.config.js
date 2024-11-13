import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'remote_counter',
      filename: 'remoteEntry.js',
      exposes: {
        './counter_button': './src/components/counter_button',
        './counter_display': './src/components/counter_display'
      },
      shared: {
        react: {
          singleton: true,
        },
        'react/': {
          singleton: true,
        },
      },
    }),
  ],

      build: {    target: 'esnext',    rollupOptions: {    },    emptyOutDir: true,},
      preview: {
    host: "localhost",
    port: 4173,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
 
})
