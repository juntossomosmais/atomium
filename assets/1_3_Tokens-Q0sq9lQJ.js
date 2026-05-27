import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,T as n,k as r,l as i,o as a,s as o}from"./storybook-AbPZ34TI.js";var s,c=e((()=>{s=`# Atomium - Tokens

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
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{title:`Getting Started/Tokens`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=r(),n(),i(),c()}))();export{u as default};