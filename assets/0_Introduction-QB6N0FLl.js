import{u as s,j as n,M as a,O as i}from"./iframe-Csm4GGMy.js";import"./preload-helper-PPVm8Dsz.js";const m=`![atomium-readme](https://github.com/juntossomosmais/atomium/assets/3603793/fb180815-7bd7-45f7-ad14-bd1677079931)

<div align="center">
  <h1>Atomium - Design System</h1>
  <p>
    <a href="https://github.com/juntossomosmais/atomium/actions/workflows/release-and-publish-packages.yml">
      <img
        alt="Release Status"
        src="https://img.shields.io/github/actions/workflow/status/juntossomosmais/atomium/release-and-publish-packages.yml?label=Release%20Status"
      />
    </a>
    <img
      alt="Coverage"
      src="https://sonarcloud.io/api/project_badges/measure?project=juntossomosmais_atomium_core&metric=coverage&token=e53244a1ea46d45209292ff36bf9e5a1748105ce"
    />
  </p>
  <br />
</div>

> Atomium is an internal design system for [Juntos Somos Mais](https://juntossomosmais.com.br/), using Web Components

| Project | Package                                                                                                 | Version                                                                                                                                                                                            | Documentation                         |
| ------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Core | [@juntossomosmais/atomium](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium) | <img src="https://img.shields.io/github/package-json/v/juntossomosmais/atomium?filename=packages%2Fcore%2Fpackage.json" alt="version"> | [README](./packages/core/README.md)   |
| React | [@juntossomosmais/atomium/react](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium) | <img src="https://img.shields.io/github/package-json/v/juntossomosmais/atomium?filename=packages%2Fcore%2Fpackage.json" alt="version"> | [README](./packages/react/README.md)  |
| Vue | [@juntossomosmais/atomium/vue](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium) | <img src="https://img.shields.io/github/package-json/v/juntossomosmais/atomium?filename=packages%2Fcore%2Fpackage.json" alt="version"> | [README](./packages/vue/README.md)  |
| Tokens | [@juntossomosmais/atomium-tokens](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium-tokens) | <img src="https://img.shields.io/github/package-json/v/juntossomosmais/atomium?filename=packages%2Ftokens%2Fpackage.json" alt="version"> | [README](./packages/tokens/README.md) |

## About

It is built using a variety of powerful technologies, including:

- **NX**: a set of extensible dev tools for monorepos, which helps us build and manage multiple projects within a single repository.
- **Stencil**: a web component compiler that generates standard-compliant components using TypeScript, JSX, and HTML.
- **Ionic**: a set of UI components and tools that help developers build performant, high-quality mobile and desktop applications using web technologies.
- **Storybook**: a user interface development environment and testing tool that allows us to create and showcase components in isolation.
- **Typescript**: a typed superset of JavaScript that compiles to plain JavaScript, providing powerful tools for building large-scale applications.
- **Web Components**: a set of standards that enable the creation of reusable, encapsulated components using open web technologies.

## Getting Started

Clone the repository via \`ssh\`

\`\`\`sh
git clone git@github.com:juntossomosmais/atomium.git
\`\`\`

Copy \`.npmrc.example\` to \`.npmrc\`.

Replace \`<your-github-token-here>\` in the \`.npmrc\` file with your [GitHub PAT](https://github.com/settings/tokens). Your PAT should have following scopes: \`repo\` and \`write:packages\`.

### Installation

\`\`\`bash
npm i
npm run build
\`\`\`

If you get errors about unresolved dependencies, you may need to run \`npm i --legacy-peer-deps\` instead.

### Running Storybook and Stencil

\`\`\`bash
npm start
\`\`\`

If you want to run React Stories locally, you need to run the following command before \`npm start\`:

\`\`\`bash
npm run docs-react:start
\`\`\`

And if you want to run Vue Stories locally, you need to run the following command before \`npm start\`:

\`\`\`bash
npm run docs-vue:start
\`\`\`

### Running Tests

\`\`\`bash
npm test
\`\`\`

### Building

\`\`\`bash
## Build Libs
npm run build

## Build Storybook
npm run docs:build
\`\`\`

## Main folder structure

* \`apps/docs\`: Contains the main documentation for the project.
* \`apps/docs-react\`: Provides a React version of Storybook for showcasing components.
* \`apps/docs-vue\`: Provides a Vue version of Storybook for showcasing components.
* \`packages/core\`: The core of Atomium, responsible for building all the components.
* \`packages/react\`: The React version of Atomium, automatically generated by Stencil.
* \`packages/vue\`: The Vue version of Atomium, automatically generated by Stencil.
* \`packages/tokens\`: Contains the design tokens for Atomium, where all the tokens are defined.
* \`packages/icons\`: Contains the icons used in Atomium, where all the icons are stored.
* \`utils/**\`: Contains utility modules used throughout the project, providing various helper functions and tools.

## Stories Documentation

We are using [Storybook](https://storybook.js.org/) to document our components.

### Writing Stories

Components stories are written in \`packages/core/**/*.core.mdx\` files to Web Components version and \`packages/core/**/*.react.mdx\` files to React version and are automatically loaded by Storybook. You also can using a shared file called \`packages/**/*.args.ts\` to share the same args between Web Components and React version.

Tokens stories are written in \`packages/tokens/**/*.mdx\` files.

General documentation is written in \`apps/docs/**/*.mdx\` files.

These files are written in [MDX](https://mdxjs.com/).

### Syntax Highlighting

To enable syntax highlighting in your editor, you need to install the following extensions:

- [lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)

## Local test using Alpha/Beta versions

To locally test Atomium using Alpha/Beta versions, follow the steps below:

1. Update the \`.release-please-manifest.json\` file in the root directory of the Atomium project with the next version number + alpha. Ex: the current version is \`2.10.0\`, so the next alpha version can be \`2.11.0-alpha.1\` (OBS: in the example, it is updating only the core lib, update the libs that your changes impact).

![add alpha version to release](https://github.com/user-attachments/assets/91418116-266c-45f1-9cf2-bdf2d6c1a7eb)

2. Add the same version to the repespective \`package.json\` file in the root directory of the lib project. Ex: packages/core/package.json

![add alpha to package](https://github.com/user-attachments/assets/ec4bfbf2-a822-4cf5-b7c4-66575fd36230)

3. Build the Atomium libraries by running the following command in the root directory of the Atomium project

\`\`\`bash
npx nx run @juntossomosmais/atomium:publish-library-alpha
\`\`\`

OBS: you can even share the alpha version with your team, than they can test it locally.

## Local test using NPM Link

To locally test Atomium using NPM Link, follow the steps below:

Build the Atomium libraries by running the following command in the root directory of the Atomium project

\`\`\`bash
npm run build
\`\`\`

Link the Atomium libraries by navigating to the \`node_modules/@juntossomosmais/atomium\` directory

\`\`\`bash
cd node_modules/@juntossomosmais/atomium
npm link
\`\`\`

Import Atomium into your project by linking it using NPM Link. Navigate to your project's directory and run the following command

\`\`\`bash
npm link @juntossomosmais/atomium
\`\`\`

This will create a symbolic link between your project and the locally built Atomium libraries.

Now you can use the imported Atomium components in your project and test them locally. Make sure to revert these changes and remove the NPM Link when you're done testing to avoid any conflicts or unexpected behavior with the actual installed version of Atomium in your project.

By following these steps, you can easily test and verify any customizations or modifications you have made to Atomium locally using NPM Link.

## Deployment

We are using [GitHub Actions](https://github.com/juntossomosmais/atomium/actions), [GitHub Packages](https://github.com/orgs/juntossomosmais/packages?repo_name=atomium) and [release please](https://github.com/googleapis/release-please) to automate the release process.

When a PR is merged into the \`main\` branch, the release process is triggered. The release process will create a new release and publish the packages to GitHub Packages.

### CDN Deployment

The Atomium can be deployed to a CDN using S3. The deployment is [triggered manually using GitHub Actions](https://github.com/juntossomosmais/atomium/actions/runs/13998448879/job/39199209248)

### Publish errors

If you get an error in Github Actions to publish to NPM, you can run the following command to restart the release process:

1. Go to the [Releases](https://github.com/juntossomosmais/atomium/releases) and remove the release that failed
2. Go to the [Tags](https://github.com/juntossomosmais/atomium/tags) and remove the tag that failed or run the following command in your terminal:

\`\`\`bash
git tag -d <tag>
git push origin --delete <tag-name>
\`\`\`

3. Get the last commit hash from the [Commits](https://github.com/juntossomosmais/atomium/commits/main/) and run the following command in your terminal:

\`\`\`bash
git reset --hard <commit-hash>
git push origin main --force
\`\`\`

4. So, a new PR will be created and the release process will be triggered again


## Contributing

**!important**, as it's an internal design system, we don't accept external suggestions to change or add new components.

We only accept contributions from **Juntos Somos Mais** members, but you could like our project and use it as a reference to build your own design system.
`;function t(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Introduction"}),`
`,n.jsx(i,{children:m})]})}function l(e={}){const{wrapper:o}={...s(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t()}export{l as default};
