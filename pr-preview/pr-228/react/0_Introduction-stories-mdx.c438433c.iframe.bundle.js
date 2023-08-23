"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[2746],{"../../node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react=__webpack_require__("../../node_modules/react/index.js"),client=__webpack_require__("../../node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.bD,a:dist.Ct,...dist.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(1040).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./stories/0_Introduction.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>_0_Introduction_stories});__webpack_require__("../../node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=(__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs"),__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Introduction"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"about-react-components",children:"About React Components"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["All ",(0,jsx_runtime.jsx)(_components.a,{href:"https://stenciljs.com/docs/react",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Components is generated by Stencil"})," using ",(0,jsx_runtime.jsx)(_components.a,{href:"https://stenciljs.com/docs/react#output-targets",target:"_blank",rel:"nofollow noopener noreferrer",children:"Stencil's output target"})," to automatically generate React components from our Atomium's web components."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The target of this stories is run Atomium's web components in React environment and show how to use the components."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"!important"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["There is a problem to render the code of ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/storybookjs/storybook/issues/22287",target:"_blank",rel:"nofollow noopener noreferrer",children:"React's components outputed by Stencil in Storybook"}),", so the code of the components is not shown correctly in the stories."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Example, in ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/react_components-button--docs",children:"Button component"}),":"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'<forwardRef color="primary" fill="solid" mode="md" shape="round" type="button">\n  Button\n</forwardRef>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The code above is not shown correctly in the stories, but it is correct in the source code:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'<AtomButton color="primary" fill="solid" mode="md" shape="round" type="button">\n  Button\n</AtomButton>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Just keep in mind that when check the code of the components inside Storybook"})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Introduction",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const _0_Introduction_stories=componentMeta}}]);