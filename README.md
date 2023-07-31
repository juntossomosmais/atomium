# Atomium

<p>
  <a href="https://github.com/juntossomosmais/atomium/actions/workflows/release-and-publish-packages.yml">
    <img
      alt="Release Status"
      src="https://github.com/juntossomosmais/atomium/actions/workflows/release-and-publish-packages.yml/badge.svg"
    />
  </a>
  <img
    alt="Coverage"
    src="https://sonarcloud.io/api/project_badges/measure?project=juntossomosmais_atomium_core&metric=coverage&token=e53244a1ea46d45209292ff36bf9e5a1748105ce"
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

## Main folder structure

* `apps/docs`: Contains the main documentation for the project.
* `apps/docs-react`: Provides a React version of Storybook for showcasing components.
* `packages/core`: The core of Atomium, responsible for building all the components.
* `packages/react`: The React version of Atomium, automatically generated by Stencil.
* `packages/tokens`: Contains the design tokens for Atomium, where all the tokens are defined.
* `packages/icons`: Contains the icons used in Atomium, where all the icons are stored.
* `utils/**`: Contains utility modules used throughout the project, providing various helper functions and tools.

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

## Local test using NPM Link

To locally test Atomium using NPM Link, follow the steps below:

Build the Atomium libraries by running the following command in the root directory of the Atomium project

```bash
npm run core:build
```

Link the Atomium libraries by navigating to the `node_modules/@juntossomosmais/atomium` directory

```bash
cd node_modules/@juntossomosmais/atomium
npm link
```

Import Atomium into your project by linking it using NPM Link. Navigate to your project's directory and run the following command

```bash
npm link @juntossomosmais/atomium
```

This will create a symbolic link between your project and the locally built Atomium libraries.

Now you can use the imported Atomium components in your project and test them locally.

Make sure to revert these changes and remove the NPM Link when you're done testing to avoid any conflicts or unexpected behavior with the actual installed version of Atomium in your project.

By following these steps, you can easily test and verify any customizations or modifications you have made to Atomium locally using NPM Link.

## Contributing

All contributions must follow the code patterns of our [Front-end Guideline](https://github.com/juntossomosmais/frontend-guideline)
