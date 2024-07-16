import{s as m}from"./index-DPJJ6TmL.js";import{b as C}from"./vue.esm-bundler-DLYZ4EJx.js";import{C as e}from"./table-D060eKuu.js";import{w as F}from"./decorator-DZmxGtIB.js";import"./iframe-DXUVIoZQ.js";import"../sb-preview/runtime.js";import"./preview-errors-B42RpLod.js";import"./index-DrFu-skq.js";const V={parameters:{docs:{description:{component:"Wrapper of Ionic Textarea component. Read the [Ionic documentation](https://ionicframework.com/docs/api/textarea) for more information about the available properties and possibilities."}},actions:{handles:["atomChange","atomFocus","atomBlur","atomInput","atom-change","atom-focus","atom-blur","atom-input"]}},decorators:[F],argTypes:{labelPlacement:{control:"select",options:["floating","stacked"],defaultValue:{summary:"floating"},description:"To control how the label is placed relative to the control",table:{category:e.PROPERTIES}},color:{control:"select",options:["primary","secondary","danger"],defaultValue:{summary:"secondary"},description:"The color to use from your application's color palette.",table:{category:e.PROPERTIES}},fill:{control:"select",options:["outline","solid"],defaultValue:{summary:"solid"},description:"The fill type of the input",table:{category:e.PROPERTIES}},shape:{control:"select",options:["round","undefined"],defaultValue:{summary:"round"},description:'The shape of the input, if "round" it will be rounded, if "undefined" it will be square',table:{category:e.PROPERTIES}},rows:{control:"number",defaultValue:{summary:4},description:"The number of rows to display by default.",table:{category:e.PROPERTIES}},wrap:{control:"select",options:["hard","soft","off"],description:"How the text in the textarea is wrapped.",table:{category:e.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:e.PROPERTIES}},autoGrow:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the element height will increase based on the value.",table:{category:e.PROPERTIES}},disabled:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot interact with the input.",table:{category:e.PROPERTIES}},readonly:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot modify the value.",table:{category:e.PROPERTIES}},icon:{control:"text",description:"The icon of the input",table:{category:e.PROPERTIES}},value:{control:"text",description:"The value of native input",table:{category:e.PROPERTIES}},helperText:{control:"text",description:"The helper text of the input",table:{category:e.PROPERTIES}},label:{description:"The label of the input",table:{category:e.PROPERTIES}},placeholder:{description:"The placeholder of the input",table:{category:e.PROPERTIES}},errorText:{description:"The error text of the input",table:{category:e.PROPERTIES}},hasError:{description:"If `true`, the input will be in an error state.",table:{category:e.PROPERTIES}},cols:{description:"The number of cols to display by default.",table:{category:e.PROPERTIES}},maxLength:{description:"The maximum value length for an input.",table:{category:e.PROPERTIES}},minLength:{description:"The minimum value length for an input.",table:{category:e.PROPERTIES}},counter:{description:"If `true`, a counter will be shown counting the number of characters.",table:{category:e.PROPERTIES}},counterFormatter:{description:"Function that accepts a current value of the input, and returns the string to be displayed in the input counter. Note that the returned string must contain the current value within it somewhere, otherwise the counter will not update as the user types. `(inputLength: number, maxLength: number) => string | undefined`",table:{category:e.PROPERTIES}},clearOnEdit:{description:'If `true`, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.',table:{category:e.PROPERTIES}},enterKeyHint:{defaultValue:{summary:"enter"},description:'A hint to the browser for which enter key to display. Possible values: "enter", "done", "go", "next", "previous", "search", and "send".',table:{category:e.PROPERTIES}},required:{description:"If `true`, the input is required.",table:{category:e.PROPERTIES}},inputmode:{description:"A hint to the browser for which keyboard to display. Accepts the following values: - `none` - `text` - `tel` - `url` - `email` - `numeric` - `decimal` - `search`",table:{category:e.PROPERTIES}},debounce:{description:"The amount of time, in milliseconds, to wait to trigger the `atomChange` event after each keystroke.",table:{category:e.PROPERTIES}},atomChange:{action:"atomChange",description:'Depending on the way the users interacts with the element, the `atomChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<atom-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the users interaction is typing.',table:{category:e.EVENTS}},atomInput:{action:"atomInput",description:"Event fires when the value of an `<atom-input>` element has been changed. For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is InputEvent; for others, the interface is Event. If the input is cleared on edit, the type is null.",table:{category:e.EVENTS}},atomFocus:{action:"atomFocus",description:"Emitted when the input has focus.",table:{category:e.EVENTS}},atomBlur:{action:"atomBlur",description:"Emitted when the input has blur.",table:{category:e.EVENTS}},setFocus:{description:"`setFocus()` sets focus on the specified `atom-input`. Use this method instead of the global `input.focus()`.",table:{category:e.METHODS}},getInputElement:{description:"`getInputElement()` returns the native `<input>` element used under the hood. A common use-case is to access the native input when using a `HTMLInputElement` object is necessary.",table:{category:e.METHODS}}}},c={color:"secondary",labelPlacement:"floating",fill:"solid",shape:"round",rows:4,mode:"md",disabled:!1,readonly:!1,value:"",helperText:"",icon:""},q={title:"Components/Textarea",...V},u=t=>({components:{AtomTextarea:m},setup(){return{args:t}},template:`
    <AtomTextarea
      label='Example Textarea'
      placeholder='Placeholder Text'
      color="${t.color}"
      disabled="${t.disabled}"
      fill="${t.fill}"
      labelPlacement="${t.labelPlacement}"
      mode="${t.mode}"
      readonly="${t.readonly}"
      autoGrow="${t.autoGrow}"
      shape="${t.shape}"
      rows="${t.rows}"
      cols="${t.cols}"
      wrap="${t.wrap}"
      value="${t.value}"
      icon="${t.icon}"
      helperText="${t.helperText}"
    />
  `}),r={render:t=>u(t),args:{...c}},o={render:t=>u(t),args:{...c,disabled:!0}},n={render:t=>u(t),args:{...c,icon:"account-multiple"}},s={render:t=>u(t),args:{...c,helperText:"This is a helper text example"}},l={render:()=>({components:{AtomTextarea:m},setup(){const t=C(!1),p=a=>a.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);return{hasError:t,validate:a=>{if(t.value=!1,a!=="")return p(a)?t.value=!1:t.value=!0}}},template:`
      <AtomTextarea
        label='Email'
        placeholder='Enter a valid email'
        helperText='Example: atomium@juntossomosmais.com.br'
        errorText='Invalid email'
        type='email'
        @input="validate($event.target.value)"
        :hasError="hasError"
      />
    `})},i={render:()=>({components:{AtomTextarea:m},methods:{counterFormatter(t,p){return`${t}/300`}},template:`
      <AtomTextarea
        label='Counter example'
        placeholder='Start typing...'
        counter="true"
        maxlength="300"
        :counterFormatter="counterFormatter"
      />
    `})};var d,h,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var E,g,T;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    disabled: true
  }
}`,...(T=(g=o.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var b,y,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    icon: 'account-multiple'
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var P,R,v;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    helperText: 'This is a helper text example'
  }
}`,...(v=(R=s.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var I,w,S;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomTextarea
    },
    setup() {
      const hasError = ref(false);
      const validateEmail = email => {
        return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/);
      };
      const validate = value => {
        hasError.value = false;
        if (value === '') return;
        return validateEmail(value) ? hasError.value = false : hasError.value = true;
      };
      return {
        hasError,
        validate
      };
    },
    template: \`
      <AtomTextarea
        label='Email'
        placeholder='Enter a valid email'
        helperText='Example: atomium@juntossomosmais.com.br'
        errorText='Invalid email'
        type='email'
        @input="validate($event.target.value)"
        :hasError="hasError"
      />
    \`
  })
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var O,$,A;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomTextarea
    },
    methods: {
      counterFormatter(inputLength, maxLength) {
        return \`\${inputLength}/300\`;
      }
    },
    template: \`
      <AtomTextarea
        label='Counter example'
        placeholder='Start typing...'
        counter="true"
        maxlength="300"
        :counterFormatter="counterFormatter"
      />
    \`
  })
}`,...(A=($=i.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};const B=["Default","Disabled","TextareaIcon","HelperText","ErrorState","WithCounter"];export{r as Default,o as Disabled,l as ErrorState,s as HelperText,n as TextareaIcon,i as WithCounter,B as __namedExportsOrder,q as default};
