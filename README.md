# Atomium

<p>
  <img
    alt="Build Status"
    src="https://img.shields.io/github/actions/workflow/status/juntossomosmais/atomium/sonarcloud-scan.yml"
  />
  <img
    alt="Quality Gate Status"
    src="https://sonarcloud.io/api/project_badges/measure?project=juntossomosmais_atomium&metric=alert_status&token=bfb97543424e2dcfef3b6e1ae1fcf6116c73ea77"
  />
  <img
    alt="Coverage"
    src="https://sonarcloud.io/api/project_badges/measure?project=juntossomosmais_atomium&metric=coverage&token=bfb97543424e2dcfef3b6e1ae1fcf6116c73ea77"
  />
</p>

> Atomium is an internal design system for [Juntos Somos Mais](https://juntossomosmais.com.br/), using Web Components

**!important**, as it's an internal design system, we don't accept external suggestions to change or add new components

| Project | Package                                                                                                 | Version                                                                                                                                                                                            | Documentation                         |
| ------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Core | [`@juntossomosmais/atomium`](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium) | <img src="https://img.shields.io/github/package-json/v/:juntossomosmais/:atomium?filename=packages%2Fcore%2Fpackage.json" alt="version"> | [README](./packages/core/README.md)   |
| React | [`@juntossomosmais/atomium/react`](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium) | <img src="https://img.shields.io/github/package-json/v/:juntossomosmais/:atomium?filename=packages%2Fcore%2Fpackage.json" alt="version"> | [README](./packages/react/README.md)  |
| Tokens | [`@juntossomosmais/atomium-tokens`](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium-tokens) | <img src="https://img.shields.io/github/package-json/v/:juntossomosmais/:atomium?filename=packages%2Ftokens%2Fpackage.json" alt="version"> | [README](./packages/tokens/README.md) |

## About

It is built using a variety of powerful technologies, including:

- **NX**: a set of extensible dev tools for monorepos, which helps us build and manage multiple projects within a single repository.
- **Stencil**: a web component compiler that generates standard-compliant components using TypeScript, JSX, and HTML.
- **Ionic**: a set of UI components and tools that help developers build performant, high-quality mobile and desktop applications using web technologies.
- **Storybook**: a user interface development environment and testing tool that allows us to create and showcase components in isolation.
- **Typescript**: a typed superset of JavaScript that compiles to plain JavaScript, providing powerful tools for building large-scale applications.
- **Web Components**: a set of standards that enable the creation of reusable, encapsulated components using open web technologies.

## Getting Started

### Installation

```bash
npm i
```

### Running Storybook and Stencil

```bash
npm start
```

If you want to run React Stories locally, you need to run the following command before `npm start`:

```bash
npm run docs-react:start
```

### Running Tests

```bash
npm test
```

### Building

```bash
## Build Libs
npm run core:build
npm run tokens:build

## Build Storybook
npm run storybook:build
```

## Stories Documentation

We are using [Storybook](https://storybook.js.org/) to document our components.

### Writing Stories

Components stories are written in `packages/core/**/*.core.mdx` files to Web Components version and `packages/core/**/*.react.mdx` files to React version and are automatically loaded by Storybook. You also can using a shared file called `packages/**/*.args.ts` to share the same args between Web Components and React version.

Tokens stories are written in `packages/tokens/**/*.mdx` files.

General documentation is written in `apps/docs/**/*.mdx` files.

These files are written in [MDX](https://mdxjs.com/).

### Syntax Highlighting

To enable syntax highlighting in your editor, you need to install the following extensions:

- [lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)

## Contributing

All contributions must follow the code patterns of our [Front-end Guideline](https://github.com/juntossomosmais/frontend-guideline)
