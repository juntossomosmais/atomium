# Atomium

> Atomium is an internal design system for [Juntos Somos Mais](https://juntossomosmais.com.br/), using Web Components

**!important**, as it's an internal design system, we don't accept external suggestions to change or add new components

| Project | Package                                                                                                 | Version                                                                                                                                                                                            | Documentation                         |
| ------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Core    | [`@juntossomosmais/atomium`](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium)               | [![version](https://img.shields.io/github/package-json/v/:juntossomosmais/:atomium?filename=packages%2Fcore%2Fpackage.json)](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium)          | [README](./packages/core/README.md)   |
| React   | [`@juntossomosmais/atomium/react`](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium)         | [![version](https://img.shields.io/github/package-json/v/:juntossomosmais/:atomium?filename=packages%2Fcore%2Fpackage.json)](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium)          | [README](./packages/react/README.md)  |
| Tokens  | [`@juntossomosmais/atomium-tokens`](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium-tokens) | [![version](https://img.shields.io/github/package-json/v/:juntossomosmais/:atomium?filename=packages%2Ftokens%2Fpackage.json)](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium-tokens) | [README](./packages/tokens/README.md) |
| Vue     | [`@juntossomosmais/atomium/vue`](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium)           | [![version](https://img.shields.io/github/package-json/v/:juntossomosmais/:atomium?filename=packages%2Fcore%2Fpackage.json)](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium)          | [README](./packages/vue/README.md)    |

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

## Contributing

All contribuitions needs to follow code patters of our [Frontend Guideline](https://github.com/juntossomosmais/frontend-guideline)
