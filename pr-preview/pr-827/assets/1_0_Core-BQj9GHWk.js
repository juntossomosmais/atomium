import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,T as n,k as r,l as i,o as a,s as o}from"./storybook-Dh_ljuHc.js";var s,c=e((()=>{s=`# Atomium - Web Components

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

`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{title:`Getting Started/Web Components`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=r(),n(),i(),c()}))();export{u as default};