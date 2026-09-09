import { createRequire } from 'module'

import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcss from 'rollup-plugin-postcss'

// Shared with packages/tokens/src/__tests__/token-families.spec.ts, so the
// family list cannot drift between the build and the test that verifies it.
const require = createRequire(import.meta.url)
const variableFamilies = require('./family-list.json')

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

export default [
  cssBundle('index', 'tokens'),
  cssBundle('tokens', 'variables'),
  ...variableFamilies.map((family) => cssBundle(family, family)),
]
