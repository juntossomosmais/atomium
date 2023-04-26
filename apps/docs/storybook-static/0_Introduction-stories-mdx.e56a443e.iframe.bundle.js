"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[2746],{"../../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer,_:()=>defaultComponents});var react=__webpack_require__("../../node_modules/react/index.js"),client=__webpack_require__("../../node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.bD,a:dist.Ct,...dist.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(1040).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(dist.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.UG,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./stories/0_Introduction.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>_0_Introduction_stories});__webpack_require__("../../node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Introduction",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Introduction"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:'# Atomium\n\n> Atomium is an internal design system for [Juntos Somos Mais](https://juntossomosmais.com.br/), using Web Components\n\n**!important**, as it\'s an internal design system, we don\'t accept external suggestions to change or add new components\n\n| Project | Package                                                                                                 | Version                                                                                                                                                                                            | Documentation                         |\n| ------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |\n| Core | [`@juntossomosmais/atomium`](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium) | <img src="https://img.shields.io/github/package-json/v/:juntossomosmais/:atomium?filename=packages%2Fcore%2Fpackage.json" alt="version"> | [README](./packages/core/README.md)   |\n| React | [`@juntossomosmais/atomium/react`](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium) | <img src="https://img.shields.io/github/package-json/v/:juntossomosmais/:atomium?filename=packages%2Fcore%2Fpackage.json" alt="version"> | [README](./packages/react/README.md)  |\n| Tokens | [`@juntossomosmais/atomium-tokens`](https://github.com/juntossomosmais/atomium/pkgs/npm/atomium-tokens) | <img src="https://img.shields.io/github/package-json/v/:juntossomosmais/:atomium?filename=packages%2Ftokens%2Fpackage.json" alt="version"> | [README](./packages/tokens/README.md) |\n\n## About\n\nIt is built using a variety of powerful technologies, including:\n\n- **NX**: a set of extensible dev tools for monorepos, which helps us build and manage multiple projects within a single repository.\n- **Stencil**: a web component compiler that generates standard-compliant components using TypeScript, JSX, and HTML.\n- **Ionic**: a set of UI components and tools that help developers build performant, high-quality mobile and desktop applications using web technologies.\n- **Storybook**: a user interface development environment and testing tool that allows us to create and showcase components in isolation.\n- **Typescript**: a typed superset of JavaScript that compiles to plain JavaScript, providing powerful tools for building large-scale applications.\n- **Web Components**: a set of standards that enable the creation of reusable, encapsulated components using open web technologies.\n\n## Getting Started\n\n### Installation\n\n```bash\nnpm i\n```\n\n### Running Storybook and Stencil\n\n```bash\nnpm start\n```\n\n### Running Tests\n\n```bash\nnpm test\n```\n\n### Building\n\n```bash\n## Build Libs\nnpm run core:build\nnpm run tokens:build\n\n## Build Storybook\nnpm run storybook:build\n```\n\n## Contributing\n\nAll contributions must follow the code patterns of our [Front-end Guideline](https://github.com/juntossomosmais/frontend-guideline)\n'})]})}}};const _0_Introduction_stories=componentMeta},"../../node_modules/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{var m=__webpack_require__("../../node_modules/react-dom/index.js");exports.createRoot=m.createRoot,exports.hydrateRoot=m.hydrateRoot}}]);