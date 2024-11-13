import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'host',
      remotes: {
"remote_counter": {entry: "http://localhost:4173/remoteEntry.js", type: "module"}
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

})
