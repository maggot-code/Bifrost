/*
 * @Author: zhangyang
 * @Date: 2021-06-19 23:09:36
 * @LastEditors: zhangyang
 * @LastEditTime: 2021-06-20 02:34:22
 * @Description: file content
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";

// 解析路径
const resolvePath = (dir: string = "src") => path.resolve(__dirname, dir);

// 重写路径
const rewritePath = (replaceStr: any) => (path: string) => path.replace(replaceStr, '');

// 插件列表
const plugins = [
    vue()
];

// 路径别名
const alias = {
    "@": resolvePath(),
    "@pkg": resolvePath('src/packages'),
};

// 服务代理
const proxy = {
    '^/api/v1/.*': {
        target: 'http://127.0.0.1:8080/',
        changeOrigin: true,
        rewrite: rewritePath(/^\/api\/v1/)
    }
};

// 打包库
const buildLib = {
    entry: resolvePath('packages/index.ts'),
    name: "Bifrost"
};

// rollup配置参数
const rollupOptions = {
    external: ['vue'],
    output: {
        globals: {
            vue: 'Vue'
        }
    }
};

// rollup 简洁打包设置
const terserOptions = {};

// https://vitejs.dev/config/
export default defineConfig({
    plugins,
    logLevel: "info",
    clearScreen: false,
    build: {
        target: "esnext",
        outDir: "dist",
        minify: "terser",
        assetsInlineLimit: 1024 * 4,
        chunkSizeWarningLimit: 1024,
        cssCodeSplit: true,
        sourcemap: true,
        lib: buildLib,
        rollupOptions,
        terserOptions,
    },
    server: {
        host: "http://127.0.0.1",
        port: 8848,
        strictPort: true,
        https: false,
        open: false,
        proxy,
    },
    resolve: {
        alias,
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`
            }
        }
    }
})