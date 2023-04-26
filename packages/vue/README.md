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
