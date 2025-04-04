"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[281],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>withActions});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID=(Object.defineProperty,"storybook/actions"),EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject},{document:decorator_document,Element}=external_STORYBOOK_MODULE_GLOBAL_.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:"actions",skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/popover/stories/popover.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Click:()=>Click,Hover:()=>Hover,Opened:()=>Opened,__namedExportsOrder:()=>__namedExportsOrder,default:()=>popover_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const PopoverComponentArgs={element:"atomium-element",placement:"top",text:"Supporting line text lorem ipsum dolor sit amet, consectetur",action:"hover",label:"Title",actionText:"Action Button",open:!1},popover_core_stories={title:"Components/Popover",...{parameters:{actions:{handles:["atomOpen","atomClose"]},decorators:[__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs").w],docs:{description:{component:"Popover is a component that provides more information to the user and allows them to perform quick actions within the context of the problem."}},layout:"centered"},argTypes:{placement:{control:"select",defaultValue:{summary:"top"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","right","left"],description:"Determines placement for popover",table:{category:table.b.PROPERTIES}},action:{control:"select",defaultValue:{summary:"hover"},options:["hover","click"],description:"Determines the trigger action for the popover: `hover` or `click`.",table:{category:table.b.PROPERTIES}},element:{control:"text",description:"Specifies the element responsible for opening/closing the popover.",table:{category:table.b.PROPERTIES}},open:{control:"boolean",description:"Controls whether the popover is open or closed.",table:{category:table.b.PROPERTIES}},label:{control:"text",description:"Determines a title for popover.",table:{category:table.b.PROPERTIES}},text:{control:"text",description:"Determines a text for popover.",table:{category:table.b.PROPERTIES}},actionText:{control:"text",description:"Determines a text for action button.",table:{category:table.b.PROPERTIES}},buttonAction:{description:"Event emitted when the action button is clicked. Action needs to be click to show the button.",table:{category:table.b.EVENTS}},atomOpen:{description:"Event emitted when hover element, but for mobile when click in element.",table:{category:table.b.EVENTS}},atomClose:{description:"Event emitted when the popover is closed.",table:{category:table.b.EVENTS}}}}},createPopover=(args,buttonText="hover")=>lit.qy`
    <div style="height: 300px; display: flex; align-items: center;">
      <atom-button
        fill="solid"
        size="large"
        id="${buttonText}"
        aria-describedby="atom-popover"
      >
        ${buttonText}
      </atom-button>
      <atom-popover
        id="atom-popover"
        placement="${args.placement}"
        element="${buttonText}"
        label="${args.label}"
        action="${args.action}"
        action-text="${args.actionText}"
        open="${args.open}"
      >
        ${args.text}
      </atom-popover>
    </div>
  `,Hover={render:args=>createPopover(args,"Hover"),args:{...PopoverComponentArgs,placement:"top",open:!1}},Click={render:args=>createPopover(args,"Click"),args:{...PopoverComponentArgs,placement:"right",action:"click",open:!1}},Opened={render:args=>createPopover(args,"Opened"),args:{...PopoverComponentArgs,placement:"left",action:"click",open:!0}},__namedExportsOrder=["Hover","Click","Opened"];Hover.parameters={...Hover.parameters,docs:{...Hover.parameters?.docs,source:{originalSource:"{\n  render: args => createPopover(args, 'Hover'),\n  args: {\n    ...PopoverComponentArgs,\n    placement: 'top',\n    open: false\n  }\n}",...Hover.parameters?.docs?.source}}},Click.parameters={...Click.parameters,docs:{...Click.parameters?.docs,source:{originalSource:"{\n  render: args => createPopover(args, 'Click'),\n  args: {\n    ...PopoverComponentArgs,\n    placement: 'right',\n    action: 'click',\n    open: false\n  }\n}",...Click.parameters?.docs?.source}}},Opened.parameters={...Opened.parameters,docs:{...Opened.parameters?.docs,source:{originalSource:"{\n  render: args => createPopover(args, 'Opened'),\n  args: {\n    ...PopoverComponentArgs,\n    placement: 'left',\n    action: 'click',\n    open: true\n  }\n}",...Opened.parameters?.docs?.source}}}},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);
//# sourceMappingURL=components-popover-stories-popover-core-stories.cca44f9d.iframe.bundle.js.map