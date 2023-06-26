# Atomium - Tokens

This is the tokens of the Atomium design system using CSS Variables to be used in any Framework or Vanilla JS

## Getting Started

### Installation

```bash
npm i @juntossomosmais/atomium-tokens
```

### Basic Usage

The variables can be used in CSS

```js
import '@juntossomosmais/atomium-tokens/tokens.css'
```

```css
.my-element {
  color: var(--color-brand-primary-regular);
}
```

Or in Javascript


```js
import * as tokens from '@juntossomosmais/atomium-tokens'
```

```js
primary: tokens.colorBrandPrimaryDark1;
```

You should see all the tokens in the [Tokens section of the Storybook](https://juntossomosmais.github.io/atomium/?path=/docs/tokens-colors--docs)


