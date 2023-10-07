import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
// import alias from '@rollup/plugin-alias';
// import resolve from '@rollup/plugin-node-resolve';

// const customResolver = resolve({
//   extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss']
// });
// const projectRootDir = path.resolve(__dirname);

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js/src"),
            // "@": path.resolve(__dirname, "/public/build/assets"),
        }

    },
    server: {
        https: false,
        host: 'localhost',
    },
    optimizeDeps: {
        exclude: ['js-big-decimal']
    }
});
