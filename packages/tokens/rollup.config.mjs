import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.scss',
  output: [
    {
      file: `dist/styles.css`
    },
  ],
  plugins: [
    postcss({
      extract: true,
      modules: false,
      use: ['sass'],
      plugins: [autoprefixer()],
    }),
  ],
}
