import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import path from "path";

const htmlPlugin = () => {
    return {
        name: 'html-transform',
        transformIndexHtml(html: string) {
            return html.replace(
                /<title>(.*?)<\/title>/,
                `<title>Bifrost</title>`
            )
        }
    }
}

// 解析路径
const resolvePath = (dir: string = "src") => path.resolve(__dirname, dir);

// 重写路径
const rewritePath = (replaceStr: any) => (path: string) => path.replace(replaceStr, '');

// 插件列表
const plugins = [
    vue(),
    htmlPlugin(),
    styleImport({
        libs: [{
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name: string) => {
                name = name.slice(3)
                return `element-plus/packages/theme-chalk/src/${name}.scss`;
            },
            resolveComponent: (name: string) => `element-plus/lib/${name}`,
        }]
    }),
];

// 路径别名
const alias = {
    "#": resolvePath("typings"),
    "@pkg": resolvePath('packages'),
    "@": resolvePath(),
    "@ps": resolvePath("src/plugins"),
};

// 省略文件扩展名
const extensions = ["index.ts", "index.js", "index.json", ".ts", ".js", ".json"];

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
        // host: "http://127.0.0.1",
        port: 8848,
        strictPort: true,
        https: false,
        open: false,
        proxy,
    },
    resolve: {
        alias,
        extensions
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`
            }
        }
    }
})