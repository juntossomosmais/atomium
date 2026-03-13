import{$ as e,A as t,M as n,et as r}from"./iframe-DHKEqBzE.js";var i={parameters:{actions:{handles:[]},docs:{description:{component:`atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions.`}}},argTypes:{color:{control:`select`,options:[`primary`,`secondary`],defaultValue:{summary:`secondary`},description:`The link color.`},type:{control:`select`,options:[`anchor`,`button`],defaultValue:{summary:`anchor`},description:`The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions.`},loading:{control:`boolean`,defaultValue:!1,description:"If `true`, the opacity of the link is reduced."},size:{control:`select`,options:[`small`,`medium`,`large`],defaultValue:{summary:`medium`},description:`The link typhography size.`}}},a=JSON.parse(JSON.stringify(i));a.parameters.docs.description.component=`atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.`,a.argTypes.type.description=`The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.`;var o=JSON.parse(JSON.stringify(i));o.parameters.docs.description.component=`atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.`,o.argTypes.type.description=`The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.`;var s=e({name:`RouterLink`,props:{to:{type:String,required:!1}},setup(e,{slots:t}){return()=>r(`div`,t.default())}}),c=(e,t=`It should be used inside router components`)=>({components:{AtomLink:n,RouterLink:s},setup(){return{args:e}},template:`
  <router-link to="/nice-example">
    <AtomLink :color="args.color" :type="args.type" :loading="args.loading">
      ${t}
    </AtomLink>
  </router-link>
  `}),l={title:`Components/Link`,component:n,...o},u={render:e=>c(e),args:{type:`anchor`,color:`primary`,loading:!1}},d={render:e=>c(e),args:{...u.args,color:`secondary`}},f={render:e=>({components:{AtomLink:n,RouterLink:s},setup(){return{args:e}},template:`
    <router-link to="/nice-example">
      <AtomLink :color="args.color" :type="args.type" loading>
        Loading...
      </AtomLink>
    </router-link>
  `}),args:{...u.args}},p={render:e=>({components:{AtomLink:n,AtomIcon:t},setup(){return{args:e}},template:`
    <router-link to="/nice-example">
      <AtomLink :color="args.color" :type="args.type">
      Nice example with icon
      <AtomIcon
        icon="heart"
        color="primary"
      />
      </AtomLink>
    </router-link>
  `}),args:{...u.args}},m={render:e=>({components:{AtomLink:n},setup(){return{args:e}},template:`
          <AtomLink color=${e.color} type=${e.type}>
          It is a button! and can be used to trigger user actions
        </AtomLink>
        `}),args:{...u.args,type:`button`}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    loading: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};var h=[`Primary`,`Secondary`,`Loading`,`WithIcon`,`Button`];export{m as Button,f as Loading,u as Primary,d as Secondary,p as WithIcon,h as __namedExportsOrder,l as default};