import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.scss',
  output: [
    {
      file: `dist/tokens.css`,
    },
  ],
  plugins: [
    postcss({
      extract: true,
      modules: false,
      use: ['sass'],
      plugins: [
        autoprefixer(),
        cssnano({
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        }),
      ],
    }),
  ],
}
