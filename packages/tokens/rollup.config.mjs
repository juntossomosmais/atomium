import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcss from 'rollup-plugin-postcss'

const cssBundle = (input, output) => ({
  input: `src/${input}.scss`,
  output: [
    {
      file: `dist/${output}.css`,
    },
  ],
  plugins: [
    postcss({
      extract: true,
      modules: false,
      use: { sass: { silenceDeprecations: ['legacy-js-api', 'if-function'] } },
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
})

const variableFamilies = [
  'colors',
  'spacings',
  'typography',
  'screens',
  'grid',
  'misc',
  'elevation',
]

export default [
  cssBundle('index', 'tokens'),
  cssBundle('tokens', 'variables'),
  ...variableFamilies.map((family) => cssBundle(family, family)),
]
