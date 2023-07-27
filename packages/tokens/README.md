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

#### JavaScript

You can also use the variables in **JavaScript**


```js
import * as tokens from '@juntossomosmais/atomium-tokens'
```

```js
primary: tokens.colorBrandPrimaryDark1;
```

#### Json

We also provide a **JSON** file with tokens of **zindex**, **colors** and **spacings**. It is useful for using to compare tokens in Stylelint, for example.

```js
import tokens from '@juntossomosmais/atomium-tokens/tokens.json'
```
