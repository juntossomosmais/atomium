import{p as r,m as v}from"./index-BIG-y4-M.js";import{d as O,h as P}from"./vue.esm-bundler-Dk4JuX4g.js";import"./iframe-Z2K8kvhI.js";import"../sb-preview/runtime.js";const w={parameters:{actions:{handles:[]},docs:{description:{component:"atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions."}}},argTypes:{color:{control:"select",options:["primary","secondary"],defaultValue:{summary:"primary"},description:"The link color."},type:{control:"select",options:["anchor","button"],defaultValue:{summary:"anchor"},description:"The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions."},loading:{control:"boolean",defaultValue:!1,description:"If `true`, the opacity of the link is reduced."}}},N=JSON.parse(JSON.stringify(w));N.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.";N.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.";const c=JSON.parse(JSON.stringify(w));c.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.";c.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.";const I=O({name:"RouterLink",props:{to:{type:String,required:!1}},setup(e,{slots:i}){return()=>P("div",i.default())}}),T=(e,i="It should be used inside router components")=>({components:{AtomLink:r,RouterLink:I},setup(){return{args:e}},template:`
  <router-link to="/nice-example">
    <AtomLink :color="args.color" :type="args.type" :loading="args.loading">
      ${i}
    </AtomLink>
  </router-link>
  `}),_={title:"Components/Link",component:r,...c},n={render:e=>T(e),args:{type:"anchor",color:"primary",loading:!1}},o={render:e=>T(e),args:{...n.args,color:"secondary"}},t={render:e=>({components:{AtomLink:r,RouterLink:I},setup(){return{args:e}},template:`
    <router-link to="/nice-example">
      <AtomLink :color="args.color" :type="args.type" loading>
        Loading...
      </AtomLink>
    </router-link>
  `}),args:{...n.args}},a={render:e=>({components:{AtomLink:r,AtomIcon:v},setup(){return{args:e}},template:`
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
        `}),args:{...n.args,type:"button"}};var p,m,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    loading: false
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var y,k,L;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(L=(k=t.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var h,f,A;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(A=(f=a.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var b,S,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const B=["Primary","Secondary","Loading","WithIcon","Button"];export{s as Button,t as Loading,n as Primary,o as Secondary,a as WithIcon,B as __namedExportsOrder,_ as default};
