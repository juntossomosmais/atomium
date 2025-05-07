import{v as _,x as V}from"./index-xv4GEmKy.js";import{C as e}from"./table-D060eKuu.js";import{w as U}from"./decorator-DFROgT0E.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-CDX9mJzo.js";import"./v4-CtRu48qb.js";const j={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomPrimaryClick","atomSecondaryClick"]},docs:{description:{component:"Wrapper of Ionic Modal component. Read the [Ionic documentation](https://ionicframework.com/docs/api/modal) for more information about the available properties and possibilities."}}},decorators:[U],argTypes:{trigger:{description:"The id of the element that will trigger the modal",table:{category:e.PROPERTIES}},id:{control:"text",description:"The id of the modal",table:{category:e.PROPERTIES}},hasDivider:{control:"boolean",description:"if true, a divider will be added on the header and footer",defaultValue:!1,table:{category:e.PROPERTIES}},hasFooter:{control:"boolean",description:"If false, the footer will not be rendered. Default is true",table:{category:e.PROPERTIES}},headerTitle:{control:"text",description:"The title of the modal",table:{category:e.PROPERTIES}},primaryButtonText:{control:"text",description:"Text of the primary button",table:{category:e.PROPERTIES}},secondaryButtonText:{control:"text",description:"Text of the secondary button",table:{category:e.PROPERTIES}},alertType:{control:"select",options:["alert","error"],description:"Type of alert icon. Available options: alert, error",table:{category:e.PROPERTIES}},progress:{control:"number",description:"Percentage of the progress bar's width",table:{category:e.PROPERTIES}},isOpen:{control:"boolean",description:"If true, the modal will be opened. Default is false",table:{category:e.PROPERTIES},defaultValue:!1},disableSecondaryButton:{control:"boolean",description:"If true, the secondary button will be disabled. Default is false",table:{category:e.PROPERTIES}},disablePrimaryButton:{control:"boolean",description:"If true, the primary button will be disabled. Default is false",table:{category:e.PROPERTIES}},canDismiss:{control:"boolean",description:"If true, the modal can be dismissed by clicking outside the modal. Default is true",table:{category:e.PROPERTIES}},atomCloseClick:{action:"atomCloseClick",description:"Event emitted when the close button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Event emitted after the modal has dismissed. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Event emitted after the modal has presented. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},atomPrimaryClick:{action:"atomPrimaryClick",description:"Event emitted when the primary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},atomSecondaryClick:{action:"atomSecondaryClick",description:"Event emitted when the secondary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},default:{name:"",description:"The default slot is where the content of the modal will be rendered",table:{category:e.SLOTS}},header:{name:"header",description:"The header slot is where the custom header of the modal will be rendered. It is only rendered if the headerTitle property is not set",table:{category:e.SLOTS}},"--atom-modal-zindex":{description:"The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.",defaultValue:{summary:"--zindex-1000"},table:{category:e.CSS_CUSTOM_PROPERTIES}},"--height":{description:"Height of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--max-height":{description:"Maximum height of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--max-width":{description:"Maximum width of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--min-height":{description:"Minimum height of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--min-width":{description:"Minimum width of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--width":{description:"Width of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},present:{description:"Method to present the modal overlay after it has been created.",table:{category:e.METHODS}},dismiss:{description:"Method to close the modal after it has been presented.",table:{category:e.METHODS}},metaData:{control:"object",description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:e.PROPERTIES}}}},o={primaryButtonText:"Primary",secondaryButtonText:"Secondary",hasDivider:!1,disableSecondaryButton:!1,disablePrimaryButton:!1,isOpen:!1,canDismiss:!0},q={title:"Components/Modal",...j},a=(t,H="light")=>({components:{AtomModal:V,AtomButton:_},setup(){return{args:t,themeColor:H}},template:`
    <div>
      <AtomButton id='${t.trigger}'>Open Modal</AtomButton>
      <AtomModal
        alert-type="${t.alertType}"
        has-divider="${t.hasDivider}"
        primary-button-text="${t.primaryButtonText}"
        secondary-button-text="${t.secondaryButtonText}"
        trigger="${t.trigger}"
        progress="${t.progress}"
        disable-primary-button="${t.disablePrimaryButton}"
        disable-secondary-button="${t.disableSecondaryButton}"
        is-open="${t.isOpen}"
        can-dismiss="${t.canDismiss}"
        id="${t.id}"
        meta-data="${t.metaData}"
      >
        <div slot='header'>Custom Header</div>
        <p>Modal Content</p>
      </AtomModal>
    </div>
  `}),r={render:t=>a(t),args:{...o,trigger:"open-modal"}},s={render:t=>a(t),args:{...o,hasDivider:!0,trigger:"open-modal-2"}},n={render:t=>a(t),args:{...o,progress:.5,trigger:"open-modal-3"}},i={render:t=>a(t),args:{...o,alertType:"alert",trigger:"open-modal-4"}},d={render:t=>a(t),args:{...o,alertType:"error",trigger:"open-modal-5"}},l={render:t=>a(t),args:{...o,headerTitle:"Title",trigger:"open-modal-6"}},c={render:t=>a(t),args:{...o,metaData:{primaryButtonTestId:"primary-btn",secondaryButtonTestId:"secondary-btn",closeButtonTestId:"close-btn"},trigger:"open-modal-7"}},m={render:()=>({components:{AtomModal:V,AtomButton:_},setup(){return{ModalComponentArgs:o,themeColor:"light"}},template:`
    <div>
      <AtomButton  @click="isOpen=true">Open the modal to see the example code</AtomButton> or <AtomButton
      fill="clear"
      type="button"
      href="https://github.com/juntossomosmais/atomium/blob/9acac8688128569e033598c2a5f3267746837385/packages/core/src/components/modal/stories/modal.vue.stories.tsx#L145-L166"
      >see the example on GitHub</AtomButton>
      <AtomModal
        disable-primary-button="${o.disablePrimaryButton}"
        disable-secondary-button="${o.disableSecondaryButton}"
        :is-open="isOpen"
        @atom-primary-click="handleClose"
      >
        <div slot='header'>Example to avoid problem on emit event and close modal immediately</div>

     <pre><code class="language-javascript">
      data() {
        return {
          isOpen: false,
        }
      },
      methods: {
        handleClose() {
          // Ensure the modal is closed
          // before emitting the action
          this.isOpen = false
          this.$nextTick(() => {
            // Then emit the action
            this.$emit('emit-once-the-modal-is-closed')
          })

          // Avoid doing this:
          this.isOpen = false
          this.$emit('emit-but-the-modal-is-still-open')
        },
      }
    </code></pre>
      </AtomModal>
    </div>
  `,data(){return{isOpen:!1,other:!1}},methods:{handleClose(){this.isOpen=!1,this.$nextTick(()=>{this.$emit("emit-action-to-dad-component")})}}}),args:{...o},parameters:{docs:{description:{story:"`AtomModal` does not handle Vue emits ($emit) well when they are executed immediately after the modal is closed. This behavior seems to be related to the teleport mechanism used internally. <br/> <br/> In such cases, if the `isOpen` flag is changed to false and a event is emitted, the dad component receives the emit properly, but the modal remains open even though its parent component no longer exists. For this case, use `$nextTick` to ensure that the modal is closed before executing the action. "}}}};var p,h,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal'
  }
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true,
    trigger: 'open-modal-2'
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var T,f,S;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5,
    trigger: 'open-modal-3'
  }
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var E,v,O;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert',
    trigger: 'open-modal-4'
  }
}`,...(O=(v=i.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var P,C,M;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error',
    trigger: 'open-modal-5'
  }
}`,...(M=(C=d.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var x,R,A;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title',
    trigger: 'open-modal-6'
  }
}`,...(A=(R=l.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var I,B,D;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    metaData: {
      primaryButtonTestId: 'primary-btn',
      secondaryButtonTestId: 'secondary-btn',
      closeButtonTestId: 'close-btn'
    },
    trigger: 'open-modal-7'
  }
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var $,k,w;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomModal,
      AtomButton
    },
    setup() {
      return {
        ModalComponentArgs,
        themeColor: 'light'
      };
    },
    template: \`
    <div>
      <AtomButton  @click="isOpen=true">Open the modal to see the example code</AtomButton> or <AtomButton
      fill="clear"
      type="button"
      href="https://github.com/juntossomosmais/atomium/blob/9acac8688128569e033598c2a5f3267746837385/packages/core/src/components/modal/stories/modal.vue.stories.tsx#L145-L166"
      >see the example on GitHub</AtomButton>
      <AtomModal
        disable-primary-button="\${ModalComponentArgs.disablePrimaryButton}"
        disable-secondary-button="\${ModalComponentArgs.disableSecondaryButton}"
        :is-open="isOpen"
        @atom-primary-click="handleClose"
      >
        <div slot='header'>Example to avoid problem on emit event and close modal immediately</div>

     <pre><code class="language-javascript">
      data() {
        return {
          isOpen: false,
        }
      },
      methods: {
        handleClose() {
          // Ensure the modal is closed
          // before emitting the action
          this.isOpen = false
          this.$nextTick(() => {
            // Then emit the action
            this.$emit('emit-once-the-modal-is-closed')
          })

          // Avoid doing this:
          this.isOpen = false
          this.$emit('emit-but-the-modal-is-still-open')
        },
      }
    </code></pre>
      </AtomModal>
    </div>
  \`,
    data() {
      return {
        isOpen: false,
        other: false
      };
    },
    methods: {
      handleClose() {
        // do
        this.isOpen = false;
        this.$nextTick(() => {
          // then emit action
          this.$emit('emit-action-to-dad-component');
        });

        /* don't do this:
         * this.isOpen = false
         * this.$emit('emit-action-to-dad-component') // emit action
         */
      }
    }
  }),
  args: {
    ...ModalComponentArgs
  },
  parameters: {
    docs: {
      description: {
        story: '\`AtomModal\` does not handle Vue emits ($emit) well when they are executed immediately after the modal is closed. This behavior seems to be related to the teleport mechanism used internally. <br/> <br/> In such cases, if the \`isOpen\` flag is changed to false and a event is emitted, the dad component receives the emit properly, but the modal remains open even though its parent component no longer exists. For this case, use \`$nextTick\` to ensure that the modal is closed before executing the action. '
      }
    }
  }
}`,...(w=(k=m.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const J=["Default","Divided","Progress","Alert","ErrorModal","HeaderTitle","AutomatedTest","ReactivityProblemOnEmit"];export{i as Alert,c as AutomatedTest,r as Default,s as Divided,d as ErrorModal,l as HeaderTitle,n as Progress,m as ReactivityProblemOnEmit,J as __namedExportsOrder,q as default};
