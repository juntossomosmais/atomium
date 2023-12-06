"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[2746],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react=__webpack_require__("../../node_modules/react/index.js"),client=__webpack_require__("../../node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.bD,a:dist.Ct,...dist.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(1040).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./stories/0_Introduction.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>_0_Introduction_stories});__webpack_require__("../../node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs");const READMEraw_namespaceObject='![atomium-readme](https://github.com/juntossomosmais/atomium/assets/3603793/fb180815-7bd7-45f7-ad14-bd1677079931)\n\n<div align="center">\n  <h1>Atomium - Design System</h1>\n  <p>\n    <a href="https://github.com/juntossomosmais/atomium/actions/workflows/release-and-publish-packages.yml">\n      <img\n        alt="Release Status"\n        src="https://img.shields.io/github/actions/workflow/status/juntossomosmais/atomium/release-and-publish-packages.yml?label=Release%20Status"\n      />\n    </a>\n    <img\n      alt="Coverage"\n      src="https://sonarcloud.io/api/project_badges/measure?project=juntossomosmais_atomium_core&metric=coverage&token=e53244a1ea46d45209292ff36bf9e5a1748105ce"\n    />\n  </p>\n  <br />\n</div>\n\n> Atomium is an internal design system for [Juntos Somos Mais](https://juntossomosmais.com.br/), using Web Components\n\n| Project | Package                                                                                                 | Version                                                                                                                                                                                            | Documentation                         |\n| ------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |\n| Core | [`@juntossomosmais/atomium`](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium) | <img src="https://img.shields.io/github/package-json/v/juntossomosmais/atomium?filename=packages%2Fcore%2Fpackage.json" alt="version"> | [README](./packages/core/README.md)   |\n| React | [`@juntossomosmais/atomium/react`](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium) | <img src="https://img.shields.io/github/package-json/v/juntossomosmais/atomium?filename=packages%2Fcore%2Fpackage.json" alt="version"> | [README](./packages/react/README.md)  |\n| Tokens | [`@juntossomosmais/atomium-tokens`](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium-tokens) | <img src="https://img.shields.io/github/package-json/v/juntossomosmais/atomium?filename=packages%2Ftokens%2Fpackage.json" alt="version"> | [README](./packages/tokens/README.md) |\n\n## About\n\nIt is built using a variety of powerful technologies, including:\n\n- **NX**: a set of extensible dev tools for monorepos, which helps us build and manage multiple projects within a single repository.\n- **Stencil**: a web component compiler that generates standard-compliant components using TypeScript, JSX, and HTML.\n- **Ionic**: a set of UI components and tools that help developers build performant, high-quality mobile and desktop applications using web technologies.\n- **Storybook**: a user interface development environment and testing tool that allows us to create and showcase components in isolation.\n- **Typescript**: a typed superset of JavaScript that compiles to plain JavaScript, providing powerful tools for building large-scale applications.\n- **Web Components**: a set of standards that enable the creation of reusable, encapsulated components using open web technologies.\n\n## Getting Started\n\nClone the repository via `ssh`\n\n```sh\ngit clone git@github.com:juntossomosmais/atomium.git\n```\n\nCopy `.npmrc.example` to `.npmrc`.\n\nReplace `<your-github-token-here>` in the `.npmrc` file with your [GitHub PAT](https://github.com/settings/tokens). Your PAT should have following scopes: `repo` and `write:packages`.\n\n### Installation\n\n```bash\nnpm i\nnpm run build\n```\n\n### Running Storybook and Stencil\n\n```bash\nnpm start\n```\n\nIf you want to run React Stories locally, you need to run the following command before `npm start`:\n\n```bash\nnpm run docs-react:start\n```\n\n### Running Tests\n\n```bash\nnpm test\n```\n\n### Building\n\n```bash\n## Build Libs\nnpm run build\n\n## Build Storybook\nnpm run docs:build\n```\n\n## Main folder structure\n\n* `apps/docs`: Contains the main documentation for the project.\n* `apps/docs-react`: Provides a React version of Storybook for showcasing components.\n* `packages/core`: The core of Atomium, responsible for building all the components.\n* `packages/react`: The React version of Atomium, automatically generated by Stencil.\n* `packages/tokens`: Contains the design tokens for Atomium, where all the tokens are defined.\n* `packages/icons`: Contains the icons used in Atomium, where all the icons are stored.\n* `utils/**`: Contains utility modules used throughout the project, providing various helper functions and tools.\n\n## Stories Documentation\n\nWe are using [Storybook](https://storybook.js.org/) to document our components.\n\n### Writing Stories\n\nComponents stories are written in `packages/core/**/*.core.mdx` files to Web Components version and `packages/core/**/*.react.mdx` files to React version and are automatically loaded by Storybook. You also can using a shared file called `packages/**/*.args.ts` to share the same args between Web Components and React version.\n\nTokens stories are written in `packages/tokens/**/*.mdx` files.\n\nGeneral documentation is written in `apps/docs/**/*.mdx` files.\n\nThese files are written in [MDX](https://mdxjs.com/).\n\n### Syntax Highlighting\n\nTo enable syntax highlighting in your editor, you need to install the following extensions:\n\n- [lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)\n\n## Local test using NPM Link\n\nTo locally test Atomium using NPM Link, follow the steps below:\n\nBuild the Atomium libraries by running the following command in the root directory of the Atomium project\n\n```bash\nnpm run core:build\n```\n\nLink the Atomium libraries by navigating to the `node_modules/@juntossomosmais/atomium` directory\n\n```bash\ncd node_modules/@juntossomosmais/atomium\nnpm link\n```\n\nImport Atomium into your project by linking it using NPM Link. Navigate to your project\'s directory and run the following command\n\n```bash\nnpm link @juntossomosmais/atomium\n```\n\nThis will create a symbolic link between your project and the locally built Atomium libraries.\n\nNow you can use the imported Atomium components in your project and test them locally. Make sure to revert these changes and remove the NPM Link when you\'re done testing to avoid any conflicts or unexpected behavior with the actual installed version of Atomium in your project.\n\nBy following these steps, you can easily test and verify any customizations or modifications you have made to Atomium locally using NPM Link.\n\n## Contributing\n\n**!important**, as it\'s an internal design system, we don\'t accept external suggestions to change or add new components.\n\nWe only accept contributions from **Juntos Somos Mais** members, but you could like our project and use it as a reference to build your own design system.\n';var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Introduction"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:READMEraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Introduction",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const _0_Introduction_stories=componentMeta,__namedExportsOrder=["__page"]},"../../node_modules/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{var m=__webpack_require__("../../node_modules/react-dom/index.js");exports.createRoot=m.createRoot,exports.hydrateRoot=m.hydrateRoot}}]);