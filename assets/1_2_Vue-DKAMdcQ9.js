import{u as e,j as n,M as i,J as m}from"./iframe-Blq1RBz-.js";import"./preload-helper-PPVm8Dsz.js";const u=`# Atomium - Vue

This is the Vue transpiled implementation of the Atomium design system to be used in Vue projects

## Getting Started

### Installation

\`\`\`bash
npm i @juntossomosmais/atomium
\`\`\`

And import \`loader\` in your \`main.js\` file

\`\`\`js
import { ComponentLibrary } from '@juntossomosmais/atomium/vue'

import '@juntossomosmais/atomium/core.css'

ComponentLibrary.install()
\`\`\`

Or import as a plugin in your Vue instance

\`\`\`js
import { ComponentLibrary } from '@juntossomosmais/atomium/vue'

Vue.use(ComponentLibrary)
\`\`\`

### Basic Usage

\`\`\`jsx
import { AtomButton } from '@juntossomosmais/atomium/vue'

<AtomButton>Click me</AtomButton>
\`\`\`

You could check the Vue components transpiled of Stencil in [Vue Stories](https://juntossomosmais.github.io/atomium/?path=/docs/Vue_introduction--docs)
`;function s(t){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Getting Started/Vue"}),`
`,n.jsx(m,{children:u})]})}function p(t={}){const{wrapper:o}={...e(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(s,{...t})}):s()}export{p as default};
