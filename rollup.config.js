// rollup.config.js
import babel from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'src/index.js',
    output: {
        name: 'cubicScrollTo',
        file: 'dist/bundle.js',
        format: 'umd' 
    },
    plugins: [
        uglify(),
        babel({
          exclude: 'node_modules/**'
        })
    ],
  };