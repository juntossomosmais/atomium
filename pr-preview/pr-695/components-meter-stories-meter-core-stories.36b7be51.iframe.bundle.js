"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[1577],{"../../packages/core/src/components/meter/stories/meter.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Small:()=>Small,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>meter_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js");const meter_core_stories={title:"Components/Meter",...{decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Meter"}}},argTypes:{type:{control:"select",options:["neutral","success","warning","danger"],defaultValue:{summary:"neutral"},description:"Meter"},size:{control:"select",options:["large","small"],defaultValue:{summary:"large"},description:"Meter"},title:{control:"text",description:"Meter"},min:{control:"number",defaultValue:{summary:"0"},description:"Meter"},max:{control:"number",description:"Meter"},actual:{control:"number",defaultValue:{summary:"0"},description:"Meter"},content:{control:"text",description:"Meter",defaultValue:()=>React.createElement("div",null,"Valor atual: 0")}}}},createMeter=args=>lit.qy`<atom-meter
    .type=${args.type}
    .size=${args.size}
    .title=${args.title}
    .min=${args.min}
    .max=${args.max}
    .actual=${args.actual}
  >
    <div>${args.content||`${args.actual} of ${args.max}`}</div>
  </atom-meter>`,Neutral_args={title:"Meter",type:"neutral",size:"large",min:1,max:6,actual:4,content:""},Success={render:args=>createMeter(args),args:{...Neutral_args,type:"success"}},Warning={render:args=>createMeter(args),args:{...Neutral_args,type:"warning"}},Danger={render:args=>createMeter(args),args:{...Neutral_args,type:"danger"}},Small={render:args=>createMeter(args),args:{...Neutral_args,title:"Small Meter",size:"small"}},__namedExportsOrder=["Success","Warning","Danger","Small"];Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  render: args => createMeter(args),\n  args: {\n    ...Neutral.args,\n    type: 'success'\n  }\n}",...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  render: args => createMeter(args),\n  args: {\n    ...Neutral.args,\n    type: 'warning'\n  }\n}",...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  render: args => createMeter(args),\n  args: {\n    ...Neutral.args,\n    type: 'danger'\n  }\n}",...Danger.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  render: args => createMeter(args),\n  args: {\n    ...Neutral.args,\n    title: 'Small Meter',\n    size: 'small'\n  }\n}",...Small.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-meter-stories-meter-core-stories.36b7be51.iframe.bundle.js.map