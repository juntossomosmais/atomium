import{i as e}from"./preload-helper-xPQekRTU.js";import{Dt as t,M as n,Ot as r,P as i,kt as a,t as o}from"./iframe-D4Uxzg7T.js";var s,c,l,u=e((()=>{s={parameters:{actions:{handles:[]},docs:{description:{component:`atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions.`}}},argTypes:{color:{control:`select`,options:[`primary`,`secondary`],defaultValue:{summary:`secondary`},description:`The link color.`},type:{control:`select`,options:[`anchor`,`button`],defaultValue:{summary:`anchor`},description:`The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions.`},loading:{control:`boolean`,defaultValue:!1,description:"If `true`, the opacity of the link is reduced."},size:{control:`select`,options:[`small`,`medium`,`large`],defaultValue:{summary:`medium`},description:`The link typhography size.`}}},c=JSON.parse(JSON.stringify(s)),c.parameters.docs.description.component=`atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.`,c.argTypes.type.description=`The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.`,l=JSON.parse(JSON.stringify(s)),l.parameters.docs.description.component=`atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.`,l.argTypes.type.description=`The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.`})),d,f,p,m,h,g,_,v,y;e((()=>{t(),o(),u(),d=r({name:`RouterLink`,props:{to:{type:String,required:!1}},setup(e,{slots:t}){return()=>a(`div`,t.default())}}),f=(e,t=`It should be used inside router components`)=>({components:{AtomLink:i,RouterLink:d},setup(){return{args:e}},template:`
  <router-link to="/nice-example">
    <AtomLink :color="args.color" :type="args.type" :loading="args.loading">
      ${t}
    </AtomLink>
  </router-link>
  `}),p={title:`Components/Link`,component:i,...l},m={render:e=>f(e),args:{type:`anchor`,color:`primary`,loading:!1}},h={render:e=>f(e),args:{...m.args,color:`secondary`}},g={render:e=>({components:{AtomLink:i,RouterLink:d},setup(){return{args:e}},template:`
    <router-link to="/nice-example">
      <AtomLink :color="args.color" :type="args.type" loading>
        Loading...
      </AtomLink>
    </router-link>
  `}),args:{...m.args}},_={render:e=>({components:{AtomLink:i,AtomIcon:n},setup(){return{args:e}},template:`
    <router-link to="/nice-example">
      <AtomLink :color="args.color" :type="args.type">
      Nice example with icon
      <AtomIcon
        icon="heart"
        color="primary"
      />
      </AtomLink>
    </router-link>
  `}),args:{...m.args}},v={render:e=>({components:{AtomLink:i},setup(){return{args:e}},template:`
          <AtomLink color=${e.color} type=${e.type}>
          It is a button! and can be used to trigger user actions
        </AtomLink>
        `}),args:{...m.args,type:`button`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    loading: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Primary`,`Secondary`,`Loading`,`WithIcon`,`Button`]}))();export{v as Button,g as Loading,m as Primary,h as Secondary,_ as WithIcon,y as __namedExportsOrder,p as default};