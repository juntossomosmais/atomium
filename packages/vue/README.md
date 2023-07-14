# Atomium - Vue

🚧  **This is a work in progress** 🚧

[Vue Integration of Stencil](https://stenciljs.com/docs/vue) just works with Vue 3. If you want to use Vue 2, please use the Web Components implementation of Atomium.

## Getting Started

### Installation

```bash
npm i @juntossomosmais/atomium
```

### Basic Usage

```jsx
import '@juntossomosmais/atomium/core.css'

import {
  applyPolyfills,
  defineCustomElements,
} from '@juntossomosmais/atomium/loader'

applyPolyfills().then(() => defineCustomElements(window))

<atom-button>Click me</atom-button>
```

## Vue 2

For Vue 2, a configuration is need in order to avoid the warning about unknown component. Add the below code to your Vue initialization:

```js
Vue.config.ignoredElements = [
  /^atom-/
]
```

The setting is explained at the [Vue docs](https://v2.vuejs.org/v2/api/#ignoredElements), the same doc exists for [Vue 3](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue), but no worries, Stencil integrations just handle everything.
