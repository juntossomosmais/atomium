"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[4825],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>withActions});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID=(Object.defineProperty,"storybook/actions"),EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject},{document:decorator_document,Element}=external_STORYBOOK_MODULE_GLOBAL_.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:"actions",skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/modal/stories/modal.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alert:()=>Alert,AutomatedTest:()=>AutomatedTest,Default:()=>Default,Divided:()=>Divided,ErrorModal:()=>ErrorModal,HeaderTitle:()=>HeaderTitle,Progress:()=>Progress,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const ModalComponentArgs={primaryButtonText:"Primary",secondaryButtonText:"Secondary",hasDivider:!1,disableSecondaryButton:!1,disablePrimaryButton:!1,isOpen:!1,canDismiss:!0},modal_core_stories={title:"Components/Modal",...{parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomPrimaryClick","atomSecondaryClick"]},docs:{description:{component:"Wrapper of Ionic Modal component. Read the [Ionic documentation](https://ionicframework.com/docs/api/modal) for more information about the available properties and possibilities."}}},decorators:[__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs").w],argTypes:{trigger:{description:"The id of the element that will trigger the modal",table:{category:table.b.PROPERTIES}},id:{control:"text",description:"The id of the modal",table:{category:table.b.PROPERTIES}},hasDivider:{control:"boolean",description:"if true, a divider will be added on the header and footer",defaultValue:!1,table:{category:table.b.PROPERTIES}},hasFooter:{control:"boolean",description:"If false, the footer will not be rendered. Default is true",table:{category:table.b.PROPERTIES}},headerTitle:{control:"text",description:"The title of the modal",table:{category:table.b.PROPERTIES}},primaryButtonText:{control:"text",description:"Text of the primary button",table:{category:table.b.PROPERTIES}},secondaryButtonText:{control:"text",description:"Text of the secondary button",table:{category:table.b.PROPERTIES}},alertType:{control:"select",options:["alert","error"],description:"Type of alert icon. Available options: alert, error",table:{category:table.b.PROPERTIES}},progress:{control:"number",description:"Percentage of the progress bar's width",table:{category:table.b.PROPERTIES}},isOpen:{control:"boolean",description:"If true, the modal will be opened. Default is false",table:{category:table.b.PROPERTIES},defaultValue:!1},disableSecondaryButton:{control:"boolean",description:"If true, the secondary button will be disabled. Default is false",table:{category:table.b.PROPERTIES}},disablePrimaryButton:{control:"boolean",description:"If true, the primary button will be disabled. Default is false",table:{category:table.b.PROPERTIES}},canDismiss:{control:"boolean",description:"If true, the modal can be dismissed by clicking outside the modal. Default is true",table:{category:table.b.PROPERTIES}},atomCloseClick:{action:"atomCloseClick",description:"Event emitted when the close button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:table.b.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Event emitted after the modal has dismissed. The event callback recieve `ion-modal` custom component as a param.",table:{category:table.b.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Event emitted after the modal has presented. The event callback recieve `ion-modal` custom component as a param.",table:{category:table.b.EVENTS}},atomPrimaryClick:{action:"atomPrimaryClick",description:"Event emitted when the primary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:table.b.EVENTS}},atomSecondaryClick:{action:"atomSecondaryClick",description:"Event emitted when the secondary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:table.b.EVENTS}},default:{name:"",description:"The default slot is where the content of the modal will be rendered",table:{category:table.b.SLOTS}},header:{name:"header",description:"The header slot is where the custom header of the modal will be rendered. It is only rendered if the headerTitle property is not set",table:{category:table.b.SLOTS}},"--atom-modal-zindex":{description:"The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.",defaultValue:{summary:"--zindex-1000"},table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--height":{description:"Height of the modal.",table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--max-height":{description:"Maximum height of the modal.",table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--max-width":{description:"Maximum width of the modal.",table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--min-height":{description:"Minimum height of the modal.",table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--min-width":{description:"Minimum width of the modal.",table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--width":{description:"Width of the modal.",table:{category:table.b.CSS_CUSTOM_PROPERTIES}},present:{description:"Method to present the modal overlay after it has been created.",table:{category:table.b.METHODS}},dismiss:{description:"Method to close the modal after it has been presented.",table:{category:table.b.METHODS}},metaData:{control:"object",description:'Object containing data-testid for modal actions such as primary and secondary buttons. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:table.b.PROPERTIES}}}}},createModal=args=>lit.qy`
    <div>
      <atom-button id="open-modal">Open Modal</atom-button>
      <atom-modal
        alert-type="${args.alertType}"
        has-divider="${args.hasDivider}"
        primary-button-text="${args.primaryButtonText}"
        secondary-button-text="${args.secondaryButtonText}"
        trigger="open-modal"
        progress="${args.progress}"
        has-footer="${args.hasFooter}"
        header-title="${args.headerTitle}"
        disable-secondary-button="${args.disableSecondaryButton}"
        disable-primary-button="${args.disablePrimaryButton}"
        is-open="${args.isOpen}"
        can-dismiss="${args.canDismiss}"
        id="${args.id}"
      >
        <div slot="header">Custom Header</div>
        <p>Modal Content</p>
      </<atom-modal>
    </div>

     <script>
     ;(function () {
      document.querySelector('atom-modal').metaData = ${JSON.stringify(args.metaData||{})}
      })()
      </script>
  `,Default={render:args=>createModal(args),args:{...ModalComponentArgs}},Divided={render:args=>createModal(args),args:{...ModalComponentArgs,hasDivider:!0}},Progress={render:args=>createModal(args),args:{...ModalComponentArgs,progress:.5}},Alert={render:args=>createModal(args),args:{...ModalComponentArgs,alertType:"alert"}},ErrorModal={render:args=>createModal(args),args:{...ModalComponentArgs,alertType:"error"}},HeaderTitle={render:args=>createModal(args),args:{...ModalComponentArgs,headerTitle:"Title"}},AutomatedTest={render:args=>createModal(args),args:{...ModalComponentArgs,metaData:{primaryButtonTestId:"primary-btn",secondaryButtonTestId:"secondary-btn",closeButtonTestId:"close-btn"}}},__namedExportsOrder=["Default","Divided","Progress","Alert","ErrorModal","HeaderTitle","AutomatedTest"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createModal(args),\n  args: {\n    ...ModalComponentArgs\n  }\n}",...Default.parameters?.docs?.source}}},Divided.parameters={...Divided.parameters,docs:{...Divided.parameters?.docs,source:{originalSource:"{\n  render: args => createModal(args),\n  args: {\n    ...ModalComponentArgs,\n    hasDivider: true\n  }\n}",...Divided.parameters?.docs?.source}}},Progress.parameters={...Progress.parameters,docs:{...Progress.parameters?.docs,source:{originalSource:"{\n  render: args => createModal(args),\n  args: {\n    ...ModalComponentArgs,\n    progress: 0.5\n  }\n}",...Progress.parameters?.docs?.source}}},Alert.parameters={...Alert.parameters,docs:{...Alert.parameters?.docs,source:{originalSource:"{\n  render: args => createModal(args),\n  args: {\n    ...ModalComponentArgs,\n    alertType: 'alert'\n  }\n}",...Alert.parameters?.docs?.source}}},ErrorModal.parameters={...ErrorModal.parameters,docs:{...ErrorModal.parameters?.docs,source:{originalSource:"{\n  render: args => createModal(args),\n  args: {\n    ...ModalComponentArgs,\n    alertType: 'error'\n  }\n}",...ErrorModal.parameters?.docs?.source}}},HeaderTitle.parameters={...HeaderTitle.parameters,docs:{...HeaderTitle.parameters?.docs,source:{originalSource:"{\n  render: args => createModal(args),\n  args: {\n    ...ModalComponentArgs,\n    headerTitle: 'Title'\n  }\n}",...HeaderTitle.parameters?.docs?.source}}},AutomatedTest.parameters={...AutomatedTest.parameters,docs:{...AutomatedTest.parameters?.docs,source:{originalSource:"{\n  render: args => createModal(args),\n  args: {\n    ...ModalComponentArgs,\n    metaData: {\n      primaryButtonTestId: 'primary-btn',\n      secondaryButtonTestId: 'secondary-btn',\n      closeButtonTestId: 'close-btn'\n    }\n  }\n}",...AutomatedTest.parameters?.docs?.source}}}},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);
//# sourceMappingURL=components-modal-stories-modal-core-stories.9d60c87d.iframe.bundle.js.map