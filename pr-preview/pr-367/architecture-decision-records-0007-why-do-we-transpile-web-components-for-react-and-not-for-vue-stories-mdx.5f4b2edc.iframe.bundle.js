"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[4995],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react=__webpack_require__("../../node_modules/react/index.js"),client=__webpack_require__("../../node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.bD,a:dist.Ct,...dist.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(1040).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./stories/architecture-decision-records/0007-why-do-we-transpile-web-components-for-react-and-not-for-vue.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _home_runner_work_atomium_atomium_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,_home_runner_work_atomium_atomium_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Docs/Architecture Decision Records/ADR 0007: Why do we transpile Web Components for React and not for Vue?"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"adr-0007-why-do-we-transpile-web-components-for-react-and-not-for-vue",children:"ADR 0007: Why do we transpile Web Components for React and not for Vue?"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["🗓️ 2023-04 · ✍️ ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://twitter.com/felipefialho_",target:"_blank",rel:"nofollow noopener noreferrer",children:"@felipefialho"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"context",children:"Context"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"We need to use Web Components in our projects built with Vue and React (Next.js) while maintaining a good Developer Experience (DX)."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"problems",children:"Problems"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"react",children:"React"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["We need to use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"Event Listeners"})," to handle events and methods when using Web Components"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["React ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.a,{href:"https://legacy.reactjs.org/docs/events.html",target:"_blank",rel:"nofollow noopener noreferrer",children:["use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"SyntheticEvent"})," to handle events"]}),", and we need to convert it to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"CustomEvent"})," to use Web Components"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["Props that use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"array"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"object"})," need to be converted to JSON for compatibility"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["We need to use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"ref"})," to access the Web Component API in React"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:"Sometimes, we need to create wrappers to effectively use Web Components in React"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:"Overall, the Developer Experience in React is not optimal when working with Web Components"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"vue",children:"Vue"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["Props that use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"array"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"object"})," need to be converted to JSON for compatibility"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"decision",children:"Decision"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"To address these challenges, we have decided to use Stencil to create a transpiled version of Web Components specifically for React, while keeping the original version for Vue."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Currently, we are using Vue 2 (as of April 2022), and the transpiler of Stencil is not compatible with Vue 2, however, Vue provides a good DX and seamless compatibility with Web Components."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"In the future, when we migrate to Vue 3, we may reevaluate this decision and consider transpiling Web Components for Vue as well."})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Architecture Decision Records/ADR 0007: Why do we transpile Web Components for React and not for Vue?",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_atomium_atomium_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"../../node_modules/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{var m=__webpack_require__("../../node_modules/react-dom/index.js");exports.createRoot=m.createRoot,exports.hydrateRoot=m.hydrateRoot}}]);