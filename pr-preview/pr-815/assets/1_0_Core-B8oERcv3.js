import"./components-sxD-Pwkd.js";import{i as e}from"./chunk-YKABRMAI-rQu7s1e9.js";import"./react-DFKUFpG3.js";import"./chunk-242VQQM5-BH6EcrRQ.js";import{l as t,m as n,u as r}from"./iframe-Dm0EU4CU.js";var i=e(),a=`# Atomium - Web Components

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

`;function o(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{title:`Getting Started/Web Components`}),`
`,(0,i.jsx)(t,{children:a})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{s as default};