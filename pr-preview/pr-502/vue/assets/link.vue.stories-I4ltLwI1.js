import{p as s}from"./index-CMgLZ-KK.js";import{d as L,h as b}from"./vue.esm-bundler-DLYZ4EJx.js";import"./iframe-ChddrKna.js";import"../sb-preview/runtime.js";const k={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions."}}},argTypes:{color:{control:"select",options:["primary","secondary"],defaultValue:{summary:"primary"},description:"The link color."},type:{control:"select",options:["anchor","button"],defaultValue:{summary:"anchor"},description:"The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions."}}},h=JSON.parse(JSON.stringify(k));h.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.";h.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.";const a=JSON.parse(JSON.stringify(k));a.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.";a.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.";const S=L({name:"RouterLink",props:{to:{type:String,required:!1}},setup(e,{slots:t}){return()=>b("div",t.default())}}),f=(e,t="It should be used inside router components")=>({components:{AtomLink:s,RouterLink:S},setup(){return{args:e}},template:`
  <router-link to="/nice-example">
    <AtomLink :color="args.color" :type="args.type">
      ${t}
    </AtomLink>
  </router-link>
  `}),v={title:"Components/Link",component:s,...a},r={render:e=>f(e),args:{type:"anchor",color:"primary"}},o={render:e=>f(e),args:{...r.args,color:"secondary"}},n={render:e=>({components:{AtomLink:s},setup(){return{args:e}},template:`
          <AtomLink color=${e.color} type=${e.type}>
          It is a button! and can be used to trigger user actions
        </AtomLink>
        `}),args:{...r.args,type:"button"}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,g,y;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const x=["Primary","Secondary","Button"];export{n as Button,r as Primary,o as Secondary,x as __namedExportsOrder,v as default};
