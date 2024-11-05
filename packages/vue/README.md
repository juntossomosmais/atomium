# Atomium - Vue

This is the Vue transpiled implementation of the Atomium design system to be used in Vue projects

## Getting Started

### Installation

```bash
npm i @juntossomosmais/atomium
```

And import `loader` in your `main.js` file

```js
import { ComponentLibrary } from '@juntossomosmais/atomium/vue'

import '@juntossomosmais/atomium/core.css'

ComponentLibrary.install()
```

Or import as a plugin in your Vue instance

```js
import { ComponentLibrary } from '@juntossomosmais/atomium/vue'

Vue.use(ComponentLibrary)
```

### Basic Usage

```jsx
import { AtomButton } from '@juntossomosmais/atomium/vue'

<AtomButton>Click me</AtomButton>
```

You could check the Vue components transpiled of Stencil in [Vue Stories](https://juntossomosmais.github.io/atomium/?path=/docs/Vue_introduction--docs)
