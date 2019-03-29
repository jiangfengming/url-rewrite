import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.mjs',
  output: {
    format: 'umd',
    name: 'urlRewrite',
    file: 'dist/urlRewrite.js'
  },
  plugins: [
    babel()
  ]
}
