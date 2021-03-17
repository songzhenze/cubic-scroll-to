// rollup.config.js
import babel from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify'

let isProd = process.env.NODE_ENV === 'production'

// 通用的插件
const basePlugins = [babel({
    exclude: 'node_modules/**'
  })]
// 开发环境需要使用的插件
const devPlugins = []
// 生产环境需要使用的插件
const prodPlugins = [uglify()]

let plugins = [...basePlugins].concat(isProd ? prodPlugins:devPlugins)
export default {
    input: 'src/index.js',
    output: {
        name: 'cubicScrollTo',
        file: 'dist/cubicScrollTo.js',
        sourcemap: !isProd,
        format: 'umd' 
    },
    plugins: plugins
  };