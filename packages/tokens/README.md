# Atomium - Tokens

This is the tokens of the Atomium design system using CSS Variables to be used in any Framework or Vanilla JS

You should see all the tokens in the [Tokens section of the Storybook](https://juntossomosmais.github.io/atomium/?path=/docs/tokens-colors--docs)

## Getting Started

### Installation

```bash
npm i @juntossomosmais/atomium-tokens
```

### Basic Usage

#### CSS

The variables can be used in **CSS**

```js
import '@juntossomosmais/atomium-tokens/tokens.css'
```

```css
.my-element {
  color: var(--color-brand-primary-regular);
}
```

#### CSS variables only

`tokens.css` also ships a `body` rule and the `.jsm-*` typography classes. To
take the custom properties and nothing else, import `variables.css`:

```js
import '@juntossomosmais/atomium-tokens/variables.css'
```

Or import a single family:

```js
import '@juntossomosmais/atomium-tokens/colors.css'
```

| File | Contains | Requires |
| --- | --- | --- |
| `variables.css` | every token | - |
| `colors.css` | `--color-*` | - |
| `spacings.css` | `--spacing-*` | - |
| `typography.css` | `--font-*`, `--text-*`, `--title-*`, `--button-*` | `colors.css` |
| `screens.css` | `--screen-*` | - |
| `grid.css` | `--grid-*` | `spacings.css` |
| `misc.css` | `--border-radius*`, `--zindex-*`, `--transition-*` | - |
| `elevation.css` | `--elevation-*` | - |

`typography.css` references `--color-neutral-regular` (through `--text-color`)
and `grid.css` references `--spacing-base` and `--spacing-xsmall` (through
`--grid-gap`). Those files are composable, not self-contained: import the
family they depend on alongside them if you use them standalone, or import
`variables.css` if you would rather not think about it. The referenced tokens
are intentionally not duplicated into the dependent file, since two files
declaring the same custom property would make the winner depend on import
order.

`typography.css` and `grid.css` also carry the responsive overrides for the
tokens they define, so they match `tokens.css` at every viewport.

`tokens.css` is unchanged and stays supported.

#### JavaScript

You can also use the variables in **JavaScript**


```js
import * as tokens from '@juntossomosmais/atomium-tokens'
```

```js
primary: tokens.colorBrandPrimaryDark1;
```

#### Json

We also provide a **JSON** file with tokens. It is useful for using to compare tokens in Stylelint, for example.

```js
import tokens from '@juntossomosmais/atomium-tokens/tokens.json'
```
