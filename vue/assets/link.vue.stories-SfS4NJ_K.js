import{p as s,m as x}from"./index-DmMOGdpq.js";import{d as w,h as N}from"./vue.esm-bundler-DLYZ4EJx.js";import"./iframe-EiPok4Xl.js";import"../sb-preview/runtime.js";const A={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions."}}},argTypes:{color:{control:"select",options:["primary","secondary"],defaultValue:{summary:"primary"},description:"The link color."},type:{control:"select",options:["anchor","button"],defaultValue:{summary:"anchor"},description:"The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions."}}},b=JSON.parse(JSON.stringify(A));b.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.";b.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.";const i=JSON.parse(JSON.stringify(A));i.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.";i.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.";const T=w({name:"RouterLink",props:{to:{type:String,required:!1}},setup(e,{slots:a}){return()=>N("div",a.default())}}),S=(e,a="It should be used inside router components")=>({components:{AtomLink:s,RouterLink:T},setup(){return{args:e}},template:`
  <router-link to="/nice-example">
    <AtomLink :color="args.color" :type="args.type">
      ${a}
    </AtomLink>
  </router-link>
  `}),$={title:"Components/Link",component:s,...i},r={render:e=>S(e),args:{type:"anchor",color:"primary"}},n={render:e=>S(e),args:{...r.args,color:"secondary"}},o={render:e=>({components:{AtomLink:s,AtomIcon:x},setup(){return{args:e}},template:`
    <router-link to="/nice-example">
      <AtomLink :color="args.color" :type="args.type">
      Nice example with icon
      <AtomIcon
        icon="heart"
        color="primary"
      />
      </AtomLink>
    </router-link>
  `}),args:{...r.args}},t={render:e=>({components:{AtomLink:s},setup(){return{args:e}},template:`
          <AtomLink color=${e.color} type=${e.type}>
          It is a button! and can be used to trigger user actions
        </AtomLink>
        `}),args:{...r.args,type:"button"}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary'
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,d,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,y,k;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var h,L,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(L=t.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};const J=["Primary","Secondary","WithIcon","Button"];export{t as Button,r as Primary,n as Secondary,o as WithIcon,J as __namedExportsOrder,$ as default};
