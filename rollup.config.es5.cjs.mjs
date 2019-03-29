import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.mjs',
  output: {
    format: 'cjs',
    name: 'urlRewrite',
    file: 'es5/index.js'
  },
  plugins: [
    babel()
  ]
}
