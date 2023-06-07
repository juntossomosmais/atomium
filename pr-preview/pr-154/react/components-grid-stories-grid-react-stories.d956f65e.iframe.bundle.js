"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[8192],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>withActions});var chunk_OPEUWD42=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs"),actions=(...args)=>{let options=chunk_OPEUWD42.vc,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...chunk_OPEUWD42.vc,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=(0,chunk_OPEUWD42.aD)(namesObject[name],options)})),actionsObject},chunk_VWCVBQ22=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs"),dist=__webpack_require__("../../node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),{document:decorator_document,Element}=dist.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:chunk_VWCVBQ22.Sz,skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/grid/stories/grid.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoSize:()=>AutoSize,Default:()=>Default,Offset:()=>Offset,PushAndPull:()=>PushAndPull,__namedExportsOrder:()=>__namedExportsOrder,default:()=>grid_react_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../packages/core/react/dist/esm/index.js"),decorator=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const GridStoryArgs={decorators:[decorator.R],parameters:{docs:{description:{component:"Wrapper of the [Ionic Grid](https://ionicframework.com/docs/api/grid) component. Read the Ionic documentation for more information about the available properties and possibilities.<br><br>In our custom implementation, we have simplified the Ionic grid system by introducing the `AtomGrid` component. This component acts as a wrapper for the grid, eliminating the need for using the `ion-row` component directly. Instead, we can directly use the `atom-grid` and `atom-col` components to create our grid layout. This approach streamlines the structure and usage of the grid system, making it more intuitive and efficient for developers.<br><br>The default number of columns in the grid is `16`, but this can be changed by setting the `--grid-columns` CSS custom property. The default gap between the columns is `var(--spacing-base)` and `var(--spacing-xs)` in small screens, but this can be changed by setting the `--grid-gap` CSS custom property.<br><br>You could check our default tokens values for the grid system in the [tokens/grid](/docs/tokens-grid--docs) section."}}},argTypes:{fixed:{description:"If `true`, the Grid will be fixed and will have a consistent width based on the screen size.",defaultValue:{summary:!1},table:{category:table.W.PROPERTIES}},size:{description:"Columns can be set to specific sizes to take up a certain number out of the total number of columns, or resize their width based on the content, it accepts responsive values like `size-sm`, `size-md`, `size-lg`, `size-xl`",table:{category:table.W.PROPERTIES}},offset:{description:"Columns can be offset to the right by a certain number of columns, it accepts responsive values like `offset-sm`, `offset-md`, `offset-lg`, `offset-xl`",table:{category:table.W.PROPERTIES}},pull:{description:"Columns can be pulled to the left by a certain number of columns",table:{category:table.W.PROPERTIES}},push:{description:"Columns can be pushed to the right by a certain number of columns",table:{category:table.W.PROPERTIES}},"--grid-gap":{description:"Defines the space between the elements in a row of the Grid system. For screens below `medium` size, the gap value will be `var(--spacing-xsmall)`.",defaultValue:{summary:"var(--spacing-base)"},table:{category:table.W.CSS_CUSTOM_PROPERTIES}}}},GridCSS="\n  .col > div {\n    box-shadow:\n      0px 2px 1px -1px var(--color-neutral-light-3),\n      0px 1px 2px 0px var(--color-neutral-light-4),\n      0px 1px 3px 0px var(--color-neutral-light-4);\n    border-radius: var(--border-radius);\n    color: var(--color-neutral-light-2);\n    padding: var(--spacing-xsmall);\n    text-align: center;\n  }\n";var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const grid_react_stories={title:"Components/Grid",components:[esm.pV,esm.vr],...GridStoryArgs},Default={render:()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)(esm.pV,{children:[(0,jsx_runtime.jsx)(esm.vr,{class:"col",size:"8",children:(0,jsx_runtime.jsx)("div",{children:"size=8"})}),(0,jsx_runtime.jsx)(esm.vr,{class:"col",size:"6",sizeMd:"4",children:(0,jsx_runtime.jsx)("div",{children:"size=6 & sizeMd=4"})}),(0,jsx_runtime.jsx)(esm.vr,{class:"col",size:"4",sizeMd:"4",children:(0,jsx_runtime.jsx)("div",{children:"size=4 & sizeMd=4"})}),(0,jsx_runtime.jsx)(esm.vr,{class:"col",size:"8",sizeMd:"6",children:(0,jsx_runtime.jsx)("div",{children:"size=8 & sizeMd=6"})}),(0,jsx_runtime.jsx)(esm.vr,{class:"col",size:"8",sizeMd:"10",children:(0,jsx_runtime.jsx)("div",{children:"size=8 & sizeMd=10"})}),(0,jsx_runtime.jsx)(esm.vr,{class:"col",size:"8",sizeMd:"10",children:(0,jsx_runtime.jsx)("div",{children:"size=8 & sizeMd=10"})}),(0,jsx_runtime.jsx)(esm.vr,{class:"col",size:"8",sizeMd:"6",children:(0,jsx_runtime.jsx)("div",{children:"size=8 & sizeMd=6"})})]}),(0,jsx_runtime.jsx)("style",{children:GridCSS})]})},AutoSize={render:()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)(esm.pV,{children:[(0,jsx_runtime.jsx)(esm.vr,{className:"col",size:"auto",children:(0,jsx_runtime.jsx)("div",{children:"size=auto"})}),(0,jsx_runtime.jsx)(esm.vr,{className:"col",size:"auto",children:(0,jsx_runtime.jsx)("div",{children:"size=auto"})}),(0,jsx_runtime.jsx)(esm.vr,{className:"col",children:(0,jsx_runtime.jsx)("div",{children:"default"})}),(0,jsx_runtime.jsx)(esm.vr,{className:"col",children:(0,jsx_runtime.jsx)("div",{children:"default"})}),(0,jsx_runtime.jsx)(esm.vr,{className:"col",size:"auto",children:(0,jsx_runtime.jsx)("div",{children:"size=auto"})}),(0,jsx_runtime.jsx)(esm.vr,{className:"col",size:"auto",children:(0,jsx_runtime.jsx)("div",{children:"size=auto"})})]}),(0,jsx_runtime.jsx)("style",{children:GridCSS})]})},Offset={render:()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("b",{children:"Column 2"})," has ",(0,jsx_runtime.jsx)("code",{children:"offset"})," set to ",(0,jsx_runtime.jsx)("code",{children:'"3"'})]}),(0,jsx_runtime.jsxs)(esm.pV,{children:[(0,jsx_runtime.jsx)(esm.vr,{className:"col",size:"3",children:(0,jsx_runtime.jsx)("div",{children:"1"})}),(0,jsx_runtime.jsx)(esm.vr,{className:"col",offset:"3",children:(0,jsx_runtime.jsx)("div",{children:"2"})}),(0,jsx_runtime.jsx)(esm.vr,{className:"col",children:(0,jsx_runtime.jsx)("div",{children:"3"})})]}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("b",{children:"Column 1"})," has ",(0,jsx_runtime.jsx)("code",{children:"offset"})," set to ",(0,jsx_runtime.jsx)("code",{children:'"4"'})]}),(0,jsx_runtime.jsxs)(esm.pV,{children:[(0,jsx_runtime.jsx)(esm.vr,{className:"col",size:"2",offset:"4",children:(0,jsx_runtime.jsx)("div",{children:"1"})}),(0,jsx_runtime.jsx)(esm.vr,{className:"col",size:"2",children:(0,jsx_runtime.jsx)("div",{children:"2"})})]}),(0,jsx_runtime.jsx)("style",{children:GridCSS})]})},PushAndPull={render:()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("b",{children:"Column 1"})," has ",(0,jsx_runtime.jsx)("code",{children:"push"})," set to ",(0,jsx_runtime.jsx)("code",{children:'"4"'})," and",(0,jsx_runtime.jsx)("b",{children:"column 2"})," has ",(0,jsx_runtime.jsx)("code",{children:"pull"})," set to ",(0,jsx_runtime.jsx)("code",{children:'"4"'})]}),(0,jsx_runtime.jsxs)(esm.pV,{children:[(0,jsx_runtime.jsx)(esm.vr,{className:"col",push:"4",size:"4",children:(0,jsx_runtime.jsx)("div",{children:"1"})}),(0,jsx_runtime.jsx)(esm.vr,{className:"col",pull:"4",size:"4",children:(0,jsx_runtime.jsx)("div",{children:"2"})}),(0,jsx_runtime.jsx)(esm.vr,{className:"col",children:(0,jsx_runtime.jsx)("div",{children:"3"})})]}),(0,jsx_runtime.jsx)("style",{children:GridCSS})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <div>\n      <AtomGrid>\n        <AtomCol class="col" size="8">\n          <div>size=8</div>\n        </AtomCol>\n        <AtomCol class="col" size="6" sizeMd="4">\n          <div>size=6 & sizeMd=4</div>\n        </AtomCol>\n        <AtomCol class="col" size="4" sizeMd="4">\n          <div>size=4 & sizeMd=4</div>\n        </AtomCol>\n        <AtomCol class="col" size="8" sizeMd="6">\n          <div>size=8 & sizeMd=6</div>\n        </AtomCol>\n        <AtomCol class="col" size="8" sizeMd="10">\n          <div>size=8 & sizeMd=10</div>\n        </AtomCol>\n        <AtomCol class="col" size="8" sizeMd="10">\n          <div>size=8 & sizeMd=10</div>\n        </AtomCol>\n        <AtomCol class="col" size="8" sizeMd="6">\n          <div>size=8 & sizeMd=6</div>\n        </AtomCol>\n      </AtomGrid>\n\n      <style>{GridCSS}</style>\n    </div>\n}',...Default.parameters?.docs?.source}}},AutoSize.parameters={...AutoSize.parameters,docs:{...AutoSize.parameters?.docs,source:{originalSource:'{\n  render: () => <div>\n      <AtomGrid>\n        <AtomCol className="col" size="auto">\n          <div>size=auto</div>\n        </AtomCol>\n        <AtomCol className="col" size="auto">\n          <div>size=auto</div>\n        </AtomCol>\n        <AtomCol className="col">\n          <div>default</div>\n        </AtomCol>\n        <AtomCol className="col">\n          <div>default</div>\n        </AtomCol>\n        <AtomCol className="col" size="auto">\n          <div>size=auto</div>\n        </AtomCol>\n        <AtomCol className="col" size="auto">\n          <div>size=auto</div>\n        </AtomCol>\n      </AtomGrid>\n\n      <style>{GridCSS}</style>\n    </div>\n}',...AutoSize.parameters?.docs?.source}}},Offset.parameters={...Offset.parameters,docs:{...Offset.parameters?.docs,source:{originalSource:'{\n  render: () => <div>\n      <p>\n        <b>Column 2</b> has <code>offset</code> set to <code>"3"</code>\n      </p>\n      <AtomGrid>\n        <AtomCol className="col" size="3">\n          <div>1</div>\n        </AtomCol>\n        <AtomCol className="col" offset="3">\n          <div>2</div>\n        </AtomCol>\n        <AtomCol className="col">\n          <div>3</div>\n        </AtomCol>\n      </AtomGrid>\n\n      <p>\n        <b>Column 1</b> has <code>offset</code> set to <code>"4"</code>\n      </p>\n      <AtomGrid>\n        <AtomCol className="col" size="2" offset="4">\n          <div>1</div>\n        </AtomCol>\n        <AtomCol className="col" size="2">\n          <div>2</div>\n        </AtomCol>\n      </AtomGrid>\n\n      <style>{GridCSS}</style>\n    </div>\n}',...Offset.parameters?.docs?.source}}},PushAndPull.parameters={...PushAndPull.parameters,docs:{...PushAndPull.parameters?.docs,source:{originalSource:'{\n  render: () => <div>\n      <p>\n        <b>Column 1</b> has <code>push</code> set to <code>"4"</code> and\n        <b>column 2</b> has <code>pull</code> set to <code>"4"</code>\n      </p>\n\n      <AtomGrid>\n        <AtomCol className="col" push="4" size="4">\n          <div>1</div>\n        </AtomCol>\n        <AtomCol className="col" pull="4" size="4">\n          <div>2</div>\n        </AtomCol>\n        <AtomCol className="col">\n          <div>3</div>\n        </AtomCol>\n      </AtomGrid>\n\n      <style>{GridCSS}</style>\n    </div>\n}',...PushAndPull.parameters?.docs?.source}}};const __namedExportsOrder=["Default","AutoSize","Offset","PushAndPull"]},"../../packages/core/react/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{rl:()=>AtomButton,IE:()=>AtomChip,vr:()=>AtomCol,pV:()=>AtomGrid,HX:()=>AtomIcon,dU:()=>AtomInput,Vm:()=>AtomSelect,Li:()=>AtomTextarea});var react=__webpack_require__("../../node_modules/react/index.js");const camelToDashCase=str=>str.replace(/([A-Z])/g,(m=>`-${m[0].toLowerCase()}`)),getClassName=(classList,newProps,oldProps)=>{const newClassProp=newProps.className||newProps.class,oldClassProp=oldProps.className||oldProps.class,currentClasses=arrayToMap(classList),incomingPropClasses=arrayToMap(newClassProp?newClassProp.split(" "):[]),oldPropClasses=arrayToMap(oldClassProp?oldClassProp.split(" "):[]),finalClassNames=[];return currentClasses.forEach((currentClass=>{incomingPropClasses.has(currentClass)?(finalClassNames.push(currentClass),incomingPropClasses.delete(currentClass)):oldPropClasses.has(currentClass)||finalClassNames.push(currentClass)})),incomingPropClasses.forEach((s=>finalClassNames.push(s))),finalClassNames.join(" ")},isCoveredByReact=eventNameSuffix=>{if("undefined"==typeof document)return!0;{const eventName="on"+eventNameSuffix;let isSupported=eventName in document;if(!isSupported){const element=document.createElement("div");element.setAttribute(eventName,"return;"),isSupported="function"==typeof element[eventName]}return isSupported}},syncEvent=(node,eventName,newEventHandler)=>{const eventStore=node.__events||(node.__events={}),oldEventHandler=eventStore[eventName];oldEventHandler&&node.removeEventListener(eventName,oldEventHandler),node.addEventListener(eventName,eventStore[eventName]=function handler(e){newEventHandler&&newEventHandler.call(this,e)})},arrayToMap=arr=>{const map=new Map;return arr.forEach((s=>map.set(s,s))),map},mergeRefs=(...refs)=>value=>{refs.forEach((ref=>{((ref,value)=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)})(ref,value)}))};var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const createReactComponent=(tagName,ReactComponentContext,manipulatePropsFunction,defineCustomElement)=>{void 0!==defineCustomElement&&defineCustomElement();const displayName=tagName.toLowerCase().split("-").map((segment=>segment.charAt(0).toUpperCase()+segment.slice(1))).join("");const ReactComponent=class extends react.Component{constructor(props){super(props),this.setComponentElRef=element=>{this.componentEl=element}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(prevProps){((node,newProps,oldProps={})=>{if(node instanceof Element){const className=getClassName(node.classList,newProps,oldProps);""!==className&&(node.className=className),Object.keys(newProps).forEach((name=>{if("children"!==name&&"style"!==name&&"ref"!==name&&"class"!==name&&"className"!==name&&"forwardedRef"!==name)if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2),eventNameLc=eventName[0].toLowerCase()+eventName.substring(1);isCoveredByReact(eventNameLc)||syncEvent(node,eventNameLc,newProps[name])}else node[name]=newProps[name],"string"==typeof newProps[name]&&node.setAttribute(camelToDashCase(name),newProps[name])}))}})(this.componentEl,this.props,prevProps)}render(){const _a=this.props,{children,forwardedRef,style,className,ref}=_a,cProps=__rest(_a,["children","forwardedRef","style","className","ref"]);let propsToPass=Object.keys(cProps).reduce(((acc,name)=>{const value=cProps[name];if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(eventName)&&(acc[name]=value)}else{const type=typeof value;"string"!==type&&"boolean"!==type&&"number"!==type||(acc[camelToDashCase(name)]=value)}return acc}),{});manipulatePropsFunction&&(propsToPass=manipulatePropsFunction(this.props,propsToPass));const newProps=Object.assign(Object.assign({},propsToPass),{ref:mergeRefs(forwardedRef,this.setComponentElRef),style});return(0,react.createElement)(tagName,newProps,children)}static get displayName(){return displayName}};return ReactComponentContext&&(ReactComponent.contextType=ReactComponentContext),((ReactComponent,displayName)=>{const forwardRef=(props,ref)=>react.createElement(ReactComponent,Object.assign({},props,{forwardedRef:ref}));return forwardRef.displayName=displayName,react.forwardRef(forwardRef)})(ReactComponent,displayName)};__webpack_require__("../../node_modules/react-dom/index.js");var loader=__webpack_require__("../../packages/core/loader/index.js");(0,loader.mP)().then((()=>(0,loader.q4)()));const AtomButton=createReactComponent("atom-button"),AtomChip=createReactComponent("atom-chip"),AtomCol=createReactComponent("atom-col"),AtomGrid=createReactComponent("atom-grid"),AtomIcon=createReactComponent("atom-icon"),AtomInput=createReactComponent("atom-input"),AtomSelect=createReactComponent("atom-select"),AtomTextarea=createReactComponent("atom-textarea")},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category}({})}}]);