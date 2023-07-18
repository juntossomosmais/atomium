"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[3371],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>withActions});var chunk_OPEUWD42=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs"),actions=(...args)=>{let options=chunk_OPEUWD42.vc,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...chunk_OPEUWD42.vc,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=(0,chunk_OPEUWD42.aD)(namesObject[name],options)})),actionsObject},chunk_VWCVBQ22=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs"),dist=__webpack_require__("../../node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),{document:decorator_document,Element}=dist.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:chunk_VWCVBQ22.Sz,skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/select/stories/select.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,ErrorText:()=>ErrorText,HelperText:()=>HelperText,Multiple:()=>Multiple,SelectIcon:()=>SelectIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>select_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),decorator=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const SelectComponentArgs={color:"secondary",disabled:!1,readonly:!1,multiple:!1,label:"Select example",placeholder:"Select an option",mode:"md",fill:"solid"},select_core_stories={title:"Components/Select",...{parameters:{docs:{description:{component:"Wrapper of Ionic Select component. Read the [Ionic documentation](https://ionicframework.com/docs/api/select) for more information about the available properties and possibilities."}},actions:{handles:["atomChange","atomFocus","atomBlur","atomCancel","atomDismiss"]}},decorators:[decorator.R],argTypes:{label:{control:"text",description:"The label of the select",table:{category:table.W.PROPERTIES}},placeholder:{control:"text",description:"The placeholder of the select",table:{category:table.W.PROPERTIES}},color:{control:"select",options:["primary","secondary","danger"],defaultValue:{summary:"secondary"},description:"The color to use from your application's color palette.",table:{category:table.W.PROPERTIES}},multiple:{control:"boolean",defaultValue:{summary:!1},description:"If true, the user can select multiple values at once.",table:{category:table.W.PROPERTIES}},disabled:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot interact with the select.",table:{category:table.W.PROPERTIES}},readonly:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot modify the value.",table:{category:table.W.PROPERTIES}},icon:{control:"text",description:"The icon of the select",table:{category:table.W.PROPERTIES}},helperText:{control:"text",description:"The helper text of the select",table:{category:table.W.PROPERTIES}},value:{description:"The value of native select",table:{category:table.W.PROPERTIES}},errorText:{description:"The error text of the select",table:{category:table.W.PROPERTIES}},fill:{control:"select",options:["outline","solid"],defaultValue:{summary:"solid"},description:"The fill type of the select",table:{category:table.W.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:table.W.PROPERTIES}},atomChange:{action:"atomChange",description:"Emitted when the value has changed. This is the main event to listen to if you are doing any manual form validation.",table:{category:table.W.EVENTS}},atomFocus:{action:"atomFocus",description:"Emitted when the select has focus.",table:{category:table.W.EVENTS}},atomBlur:{action:"atomBlur",description:"Emitted when the select has blur.",table:{category:table.W.EVENTS}},atomCancel:{action:"atomCancel",description:'Emitted when the select has cancel. Only applies when the select interface is "action-sheet".',table:{category:table.W.EVENTS}},atomDismiss:{action:"atomDismiss",description:'Emitted when the select has dismiss. Only applies when the select interface is "action-sheet".',table:{category:table.W.EVENTS}}}}},createSelect=args=>lit.dy`
    <atom-select
      placeholder=${args.placeholder}
      color=${args.color}
      fill=${args.fill}
      disabled=${args.disabled}
      readonly=${args.readonly}
      multiple=${args.multiple}
      label=${args.label}
      helper-text=${args.helperText}
      error-text=${args.errorText}
      icon=${args.icon}
      mode=${args.mode}
    />

    <script>
      ;(function () {
        const atomSelectElements = document.querySelectorAll('atom-select')

        atomSelectElements.forEach((atomSelect) => {
          atomSelect.options = [
            { id: '1', value: 'Red', disabled: false },
            { id: '2', value: 'Green', disabled: false },
            { id: '3', value: 'Blue', disabled: false },
            { id: '4', value: 'Disabled example', disabled: true },
          ]

          atomSelect.addEventListener('atomChange', (event) => {
            console.log('atomChange', event)
          })
        })
      })()
    </script>
  `,Default={render:args=>createSelect(args),args:{...SelectComponentArgs}},Disabled={render:args=>createSelect(args),args:{...SelectComponentArgs,disabled:!0}},SelectIcon={render:args=>createSelect(args),args:{...SelectComponentArgs,icon:"people"}},HelperText={render:args=>createSelect(args),args:{...SelectComponentArgs,helperText:"Example of helper text"}},ErrorText={render:args=>createSelect(args),args:{...SelectComponentArgs,errorText:"Example of error text"}},Multiple={render:args=>createSelect(args),args:{...SelectComponentArgs,multiple:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createSelect(args),\n  args: {\n    ...SelectComponentArgs\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: args => createSelect(args),\n  args: {\n    ...SelectComponentArgs,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},SelectIcon.parameters={...SelectIcon.parameters,docs:{...SelectIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createSelect(args),\n  args: {\n    ...SelectComponentArgs,\n    icon: 'people'\n  }\n}",...SelectIcon.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:"{\n  render: args => createSelect(args),\n  args: {\n    ...SelectComponentArgs,\n    helperText: 'Example of helper text'\n  }\n}",...HelperText.parameters?.docs?.source}}},ErrorText.parameters={...ErrorText.parameters,docs:{...ErrorText.parameters?.docs,source:{originalSource:"{\n  render: args => createSelect(args),\n  args: {\n    ...SelectComponentArgs,\n    errorText: 'Example of error text'\n  }\n}",...ErrorText.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:"{\n  render: args => createSelect(args),\n  args: {\n    ...SelectComponentArgs,\n    multiple: true\n  }\n}",...Multiple.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","SelectIcon","HelperText","ErrorText","Multiple"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);