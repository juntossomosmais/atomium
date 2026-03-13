import"./components-sxD-Pwkd.js";import{i as e}from"./chunk-YKABRMAI-rQu7s1e9.js";import"./react-DFKUFpG3.js";import"./chunk-242VQQM5-BH6EcrRQ.js";import{l as t,m as n,u as r}from"./iframe-D71TlG5e.js";var i=e(),a=`# Atomium - Tokens

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
`;function o(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{title:`Getting Started/Tokens`}),`
`,(0,i.jsx)(t,{children:a})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{s as default};