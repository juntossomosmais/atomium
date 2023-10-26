# Atomium - Web Components

This is the Web Components implementation of the Atomium design system to be used in any Framework or Vanilla JS

## Getting Started

### Installation

```bash
npm i @juntossomosmais/atomium
```

### Basic usage example

```jsx
import '@juntossomosmais/atomium/core.css'

import {
  applyPolyfills,
  defineCustomElements,
} from '@juntossomosmais/atomium/loader'

applyPolyfills().then(() => defineCustomElements(window))

<atom-button>Click me</atom-button>
```

