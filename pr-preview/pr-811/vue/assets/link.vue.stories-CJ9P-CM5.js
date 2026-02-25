import{Z as r,$ as u,W as g,a0 as y}from"./iframe-D2cqz6gf.js";import"./preload-helper-PPVm8Dsz.js";const p={parameters:{actions:{handles:[]},docs:{description:{component:"atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions."}}},argTypes:{color:{control:"select",options:["primary","secondary"],defaultValue:{summary:"secondary"},description:"The link color."},type:{control:"select",options:["anchor","button"],defaultValue:{summary:"anchor"},description:"The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions."},loading:{control:"boolean",defaultValue:!1,description:"If `true`, the opacity of the link is reduced."},size:{control:"select",options:["small","medium","large"],defaultValue:{summary:"medium"},description:"The link typhography size."}}},m=JSON.parse(JSON.stringify(p));m.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.";m.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.";const c=JSON.parse(JSON.stringify(p));c.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.";c.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.";const d=u({name:"RouterLink",props:{to:{type:String,required:!1}},setup(e,{slots:i}){return()=>y("div",i.default())}}),l=(e,i="It should be used inside router components")=>({components:{AtomLink:r,RouterLink:d},setup(){return{args:e}},template:`
  <router-link to="/nice-example">
    <AtomLink :color="args.color" :type="args.type" :loading="args.loading">
      ${i}
    </AtomLink>
  </router-link>
  `}),L={title:"Components/Link",component:r,...c},n={render:e=>l(e),args:{type:"anchor",color:"primary",loading:!1}},o={render:e=>l(e),args:{...n.args,color:"secondary"}},t={render:e=>({components:{AtomLink:r,RouterLink:d},setup(){return{args:e}},template:`
    <router-link to="/nice-example">
      <AtomLink :color="args.color" :type="args.type" loading>
        Loading...
      </AtomLink>
    </router-link>
  `}),args:{...n.args}},a={render:e=>({components:{AtomLink:r,AtomIcon:g},setup(){return{args:e}},template:`
    <router-link to="/nice-example">
      <AtomLink :color="args.color" :type="args.type">
      Nice example with icon
      <AtomIcon
        icon="heart"
        color="primary"
      />
      </AtomLink>
    </router-link>
  `}),args:{...n.args}},s={render:e=>({components:{AtomLink:r},setup(){return{args:e}},template:`
          <AtomLink color=${e.color} type=${e.type}>
          It is a button! and can be used to trigger user actions
        </AtomLink>
        `}),args:{...n.args,type:"button"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    loading: false
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AtomLink,
      RouterLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <router-link to="/nice-example">
      <AtomLink :color="args.color" :type="args.type" loading>
        Loading...
      </AtomLink>
    </router-link>
  \`
  }),
  args: {
    ...Primary.args
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AtomLink,
      AtomIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <router-link to="/nice-example">
      <AtomLink :color="args.color" :type="args.type">
      Nice example with icon
      <AtomIcon
        icon="heart"
        color="primary"
      />
      </AtomLink>
    </router-link>
  \`
  }),
  args: {
    ...Primary.args
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AtomLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
          <AtomLink color=\${args.color} type=\${args.type}>
          It is a button! and can be used to trigger user actions
        </AtomLink>
        \`
  }),
  args: {
    ...Primary.args,
    type: 'button'
  }
}`,...s.parameters?.docs?.source}}};const f=["Primary","Secondary","Loading","WithIcon","Button"];export{s as Button,t as Loading,n as Primary,o as Secondary,a as WithIcon,f as __namedExportsOrder,L as default};
