import{u as s,j as n,M as m,O as i}from"./iframe-Csm4GGMy.js";import"./preload-helper-PPVm8Dsz.js";const a=`# Atomium - Web Components

This is the Web Components implementation of the Atomium design system to be used in any Framework or Vanilla JS

## Getting Started

### Installation

\`\`\`bash
npm i @juntossomosmais/atomium
\`\`\`

### Basic usage example

\`\`\`jsx
import '@juntossomosmais/atomium/core.css'

import { defineCustomElements } from '@juntossomosmais/atomium/loader'

defineCustomElements(window)

<atom-button>Click me</atom-button>
\`\`\`

#### Using with CDN

\`\`\`html
<head>
  <link rel="stylesheet" href="https://atomium.juntossomosmais.com.br/core/SEMVER/core.css">
  <link rel="stylesheet" href="https://atomium.juntossomosmais.com.br/tokens/SEMVER/tokens.css">
</head>
<body>
  <atom-button>Click me</atom-button>

  <script type="module">
    import { defineCustomElements } from 'https://atomium.juntossomosmais.com.br/core/SEMVER/loader/index.js'

    document.addEventListener('DOMContentLoaded', function () {
      defineCustomElements()
    })
  <\/script>
</body>
\`\`\`

`;function e(t){return n.jsxs(n.Fragment,{children:[n.jsx(m,{title:"Getting Started/Web Components"}),`
`,n.jsx(i,{children:a})]})}function d(t={}){const{wrapper:o}={...s(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(e,{...t})}):e()}export{d as default};
