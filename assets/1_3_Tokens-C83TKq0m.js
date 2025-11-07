import{u as e,j as n,M as a,J as i}from"./iframe-Blq1RBz-.js";import"./preload-helper-PPVm8Dsz.js";const r=`# Atomium - Tokens

This is the tokens of the Atomium design system using CSS Variables to be used in any Framework or Vanilla JS

You should see all the tokens in the [Tokens section of the Storybook](https://juntossomosmais.github.io/atomium/?path=/docs/tokens-colors--docs)

## Getting Started

### Installation

\`\`\`bash
npm i @juntossomosmais/atomium-tokens
\`\`\`

### Basic Usage

#### CSS

The variables can be used in **CSS**

\`\`\`js
import '@juntossomosmais/atomium-tokens/tokens.css'
\`\`\`

\`\`\`css
.my-element {
  color: var(--color-brand-primary-regular);
}
\`\`\`

#### JavaScript

You can also use the variables in **JavaScript**


\`\`\`js
import * as tokens from '@juntossomosmais/atomium-tokens'
\`\`\`

\`\`\`js
primary: tokens.colorBrandPrimaryDark1;
\`\`\`

#### Json

We also provide a **JSON** file with tokens. It is useful for using to compare tokens in Stylelint, for example.

\`\`\`js
import tokens from '@juntossomosmais/atomium-tokens/tokens.json'
\`\`\`
`;function t(o){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Getting Started/Tokens"}),`
`,n.jsx(i,{children:r})]})}function l(o={}){const{wrapper:s}={...e(),...o.components};return s?n.jsx(s,{...o,children:n.jsx(t,{...o})}):t()}export{l as default};
