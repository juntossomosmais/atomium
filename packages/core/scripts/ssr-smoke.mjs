/**
 * SSR smoke test: renders every component through the hydrate module in Node,
 * exactly like Next.js/Nuxt do during server-side rendering. Fails the build
 * when a component throws on the server (e.g. unguarded browser API usage).
 *
 * Runs as part of `npm run build` (see package.json), so it requires the
 * `hydrate/` output to exist.
 */
import { renderToString } from '../hydrate/index.mjs'

const CASES = [
  ['atom-alert', '<atom-alert type="info">message</atom-alert>'],
  ['atom-badge', '<atom-badge type="success">New</atom-badge>'],
  [
    'atom-breadcrumb',
    '<atom-breadcrumb></atom-breadcrumb>',
    {
      beforeHydrate: (doc) => {
        doc.querySelector('atom-breadcrumb').items = [
          { text: 'Home', title: 'Home' },
          { text: 'Shop', title: 'Shop' },
        ]
      },
    },
  ],
  ['atom-button', '<atom-button>Buy</atom-button>'],
  [
    'atom-carousel',
    '<atom-carousel><atom-carousel-item>1</atom-carousel-item></atom-carousel>',
  ],
  ['atom-chip', '<atom-chip>chip</atom-chip>'],
  ['atom-container', '<atom-container>content</atom-container>'],
  ['atom-datetime', '<atom-datetime></atom-datetime>'],
  ['atom-divider', '<atom-divider></atom-divider>'],
  [
    'atom-grid',
    '<atom-grid><atom-row><atom-col size="6">a</atom-col></atom-row></atom-grid>',
  ],
  ['atom-icon', '<atom-icon icon="heart"></atom-icon>'],
  ['atom-input', '<atom-input label="Name"></atom-input>'],
  ['atom-link', '<atom-link href="https://example.com">link</atom-link>'],
  [
    'atom-list-slider',
    '<atom-list-slider><atom-list-slider-item>1</atom-list-slider-item></atom-list-slider>',
  ],
  ['atom-meter', '<atom-meter value="40" max="100"></atom-meter>'],
  ['atom-modal', '<atom-modal trigger="trigger-id">content</atom-modal>'],
  ['atom-pagination', '<atom-pagination current="1" total="10"></atom-pagination>'],
  [
    'atom-popover',
    '<button id="popover-trigger">i</button><atom-popover element="popover-trigger">pop</atom-popover>',
  ],
  ['atom-select', '<atom-select label="Select"></atom-select>'],
  ['atom-spinner', '<atom-spinner></atom-spinner>'],
  ['atom-stepper', '<atom-stepper></atom-stepper>'],
  [
    'atom-steps-modal',
    '<atom-steps-modal steps="3" current-step="1" steps-titles="One,Two,Three" primary-button-texts-by-step="Next,Next,Finish" secondary-button-texts-by-step="Back,Back,Back"></atom-steps-modal>',
  ],
  ['atom-tag', '<atom-tag color="success">Active</atom-tag>'],
  ['atom-textarea', '<atom-textarea label="Notes"></atom-textarea>'],
  [
    'atom-tooltip',
    '<button id="tooltip-trigger">i</button><atom-tooltip element="tooltip-trigger">tip</atom-tooltip>',
  ],
]

let failures = 0

for (const [name, markup, extraOptions] of CASES) {
  try {
    const { html, diagnostics } = await renderToString(markup, {
      serializeShadowRoot: 'declarative-shadow-dom',
      fullDocument: false,
      ...extraOptions,
    })

    const errors = diagnostics.filter((diagnostic) => diagnostic.level === 'error')

    if (errors.length > 0) {
      throw new Error(errors.map((error) => error.messageText).join('; '))
    }

    if (html.includes('hydrated') === false) {
      throw new Error('component did not hydrate on the server')
    }

    console.log(`PASS  ${name}`)
  } catch (error) {
    failures++
    console.error(`FAIL  ${name}: ${error.message}`)
  }
}

if (failures > 0) {
  console.error(`\nSSR smoke test failed for ${failures} component(s)`)
  process.exit(1)
}

console.log(`\nSSR smoke test passed for ${CASES.length} components`)
