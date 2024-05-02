"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[98],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(5231).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./stories/0_Introduction.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _home_runner_work_atomium_atomium_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",pre:"pre",code:"code"},(0,_home_runner_work_atomium_atomium_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Introduction"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"about-react-components",children:"About React Components"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["All ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://stenciljs.com/docs/react",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Components is generated by Stencil"})," using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://stenciljs.com/docs/react#output-targets",target:"_blank",rel:"nofollow noopener noreferrer",children:"Stencil's output target"})," to automatically generate React components from our Atomium's web components."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"The target of this stories is run Atomium's web components in React environment and show how to use the components."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.strong,{children:"!important"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["There is a problem to render the code of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://github.com/storybookjs/storybook/issues/22287",target:"_blank",rel:"nofollow noopener noreferrer",children:"React's components outputed by Stencil in Storybook"}),", so the code of the components is not shown correctly in the stories."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Example, in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"?path=/docs/react_components-button--docs",children:"Button component"}),":"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-jsx",children:"<forwardRef color='primary' fill='solid' mode='md' shape='round' type='button'>\n  Button\n</forwardRef>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"The code above is not shown correctly in the stories, but it is correct in the source code:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-jsx",children:"<AtomButton color='primary' fill='solid' mode='md' shape='round' type='button'>\n  Button\n</AtomButton>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Just keep in mind that when check the code of the components inside Storybook"})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Introduction",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_atomium_atomium_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]}}]);