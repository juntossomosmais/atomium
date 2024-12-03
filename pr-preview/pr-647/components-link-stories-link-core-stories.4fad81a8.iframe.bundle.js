"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[535],{"../../packages/core/src/components/link/stories/link.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Button:()=>Button,Default:()=>Default,Loading:()=>Loading,Primary:()=>Primary,Secondary:()=>Secondary,Size:()=>Size,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>link_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js");const LinkStoryArgs={parameters:{actions:{handles:[]},docs:{description:{component:"atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions."}}},argTypes:{color:{control:"select",options:["primary","secondary"],defaultValue:{summary:"secondary"},description:"The link color."},type:{control:"select",options:["anchor","button"],defaultValue:{summary:"anchor"},description:"The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions."},loading:{control:"boolean",defaultValue:!1,description:"If `true`, the opacity of the link is reduced."},size:{control:"select",options:["small","medium","large"],defaultValue:{summary:"medium"},description:"The link typhography size."}}},LinkReactStoryArgs=JSON.parse(JSON.stringify(LinkStoryArgs));LinkReactStoryArgs.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.",LinkReactStoryArgs.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.";const LinkVueStoryArgs=JSON.parse(JSON.stringify(LinkStoryArgs));LinkVueStoryArgs.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.",LinkVueStoryArgs.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.";const link_core_stories={title:"Components/Link",...LinkStoryArgs},createLink=(args,textExample="It should be used inside router components")=>lit.qy`
    <a href="/nice-example">
      <atom-link
        type="${args.type}"
        color="${args.color}"
        loading="${args.loading}"
        size="${args.size}"
      >
        ${textExample}
      </atom-link>
    </a>
  `,Default={render:args=>createLink(args),args:{type:"anchor",color:"secondary",size:"medium",loading:!1}},Primary={render:args=>createLink(args),args:{type:"anchor",color:"primary",size:"medium",loading:!1}},Secondary={render:args=>createLink(args),args:{...Primary.args,color:"secondary"}},Loading={render:args=>lit.qy`
    <a href="/nice-example">
      <atom-link type="${args.type}" color="${args.color}" loading>
        Loading...
      </atom-link>
    </a>
  `,args:{...Default.args}},WithIcon={render:args=>lit.qy`
    <a href="/nice-example">
      <atom-link type="${args.type}" color="${args.color}">
        <span> Nice example with icon </span>
        <atom-icon icon="heart" />
      </atom-link>
    </a>
  `,args:{...Default.args,color:"secondary"}},Button={render:args=>lit.qy`
    <atom-link type="${args.type}" color="${args.color}">
      It is a button! and can be used to trigger user actions
    </atom-link>
  `,args:{...Default.args,type:"button"}},Size={render:args=>lit.qy`
    <atom-link size="${args.size}" color="${args.color}">
      It is a large link, using large font size
    </atom-link>
  `,args:{...Default.args,size:"large"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createLink(args),\n  args: {\n    type: 'anchor',\n    color: 'secondary',\n    size: 'medium',\n    loading: false\n  }\n}",...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: args => createLink(args),\n  args: {\n    type: 'anchor',\n    color: 'primary',\n    size: 'medium',\n    loading: false\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  render: args => createLink(args),\n  args: {\n    ...Primary.args,\n    color: 'secondary'\n  }\n}",...Secondary.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <a href="/nice-example">\n      <atom-link type="${args.type}" color="${args.color}" loading>\n        Loading...\n      </atom-link>\n    </a>\n  `,\n  args: {\n    ...Default.args\n  }\n}',...Loading.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <a href="/nice-example">\n      <atom-link type="${args.type}" color="${args.color}">\n        <span> Nice example with icon </span>\n        <atom-icon icon="heart" />\n      </atom-link>\n    </a>\n  `,\n  args: {\n    ...Default.args,\n    color: \'secondary\'\n  }\n}',...WithIcon.parameters?.docs?.source}}},Button.parameters={...Button.parameters,docs:{...Button.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <atom-link type="${args.type}" color="${args.color}">\n      It is a button! and can be used to trigger user actions\n    </atom-link>\n  `,\n  args: {\n    ...Default.args,\n    type: \'button\'\n  }\n}',...Button.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <atom-link size="${args.size}" color="${args.color}">\n      It is a large link, using large font size\n    </atom-link>\n  `,\n  args: {\n    ...Default.args,\n    size: \'large\'\n  }\n}',...Size.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Primary","Secondary","Loading","WithIcon","Button","Size"]}}]);
//# sourceMappingURL=components-link-stories-link-core-stories.4fad81a8.iframe.bundle.js.map