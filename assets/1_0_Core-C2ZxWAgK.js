import{S as e,c as t,l as n,w as r}from"./storybook-CfikGCXO.js";var i=r(),a=`# Atomium - Web Components

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

`;function o(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{title:`Getting Started/Web Components`}),`
`,(0,i.jsx)(t,{children:a})]})}function s(t={}){let{wrapper:n}={...e(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(o,{...t})}):o(t)}export{s as default};