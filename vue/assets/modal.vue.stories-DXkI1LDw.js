import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,R as n,t as r}from"./iframe-Bh0p7hu1.js";import{n as i,t as a}from"./table-CVkdcsHV.js";import{n as o,t as s}from"./decorator-CbEWp_u4.js";var c,l,u=e((()=>{i(),s(),c={parameters:{actions:{handles:[`atomCloseClick`,`atomDidDismiss`,`atomDidPresent`,`atomPrimaryClick`,`atomSecondaryClick`]},docs:{description:{component:`Wrapper of Ionic Modal component. Read the [Ionic documentation](https://ionicframework.com/docs/api/modal) for more information about the available properties and possibilities.`}}},decorators:[o],argTypes:{trigger:{description:`The id of the element that will trigger the modal`,table:{category:a.PROPERTIES}},id:{control:`text`,description:`The id of the modal`,table:{category:a.PROPERTIES}},hasDivider:{control:`boolean`,description:`if true, a divider will be added on the header and footer`,defaultValue:!1,table:{category:a.PROPERTIES}},hasFooter:{control:`boolean`,description:`If false, the footer will not be rendered. Default is true`,table:{category:a.PROPERTIES}},headerTitle:{control:`text`,description:`The title of the modal`,table:{category:a.PROPERTIES}},primaryButtonText:{control:`text`,description:`Text of the primary button`,table:{category:a.PROPERTIES}},secondaryButtonText:{control:`text`,description:`Text of the secondary button`,table:{category:a.PROPERTIES}},alertType:{control:`select`,options:[`alert`,`error`],description:`Type of alert icon. Available options: alert, error`,table:{category:a.PROPERTIES}},progress:{control:`number`,description:`Percentage of the progress bar's width`,table:{category:a.PROPERTIES}},isOpen:{control:`boolean`,description:`If true, the modal will be opened. Default is false`,table:{category:a.PROPERTIES},defaultValue:!1},disableSecondaryButton:{control:`boolean`,description:`If true, the secondary button will be disabled. Default is false`,table:{category:a.PROPERTIES}},disablePrimaryButton:{control:`boolean`,description:`If true, the primary button will be disabled. Default is false`,table:{category:a.PROPERTIES}},canDismiss:{control:`boolean`,description:`If true, the modal can be dismissed by clicking outside the modal. Default is true`,table:{category:a.PROPERTIES}},atomCloseClick:{action:`atomCloseClick`,description:"Event emitted when the close button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:a.EVENTS}},atomDidDismiss:{action:`atomDidDismiss`,description:"Event emitted after the modal has dismissed. The event callback recieve `ion-modal` custom component as a param.",table:{category:a.EVENTS}},atomDidPresent:{action:`atomDidPresent`,description:"Event emitted after the modal has presented. The event callback recieve `ion-modal` custom component as a param.",table:{category:a.EVENTS}},atomPrimaryClick:{action:`atomPrimaryClick`,description:"Event emitted when the primary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:a.EVENTS}},atomSecondaryClick:{action:`atomSecondaryClick`,description:"Event emitted when the secondary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:a.EVENTS}},default:{name:``,description:`The default slot is where the content of the modal will be rendered`,table:{category:a.SLOTS}},header:{name:`header`,description:`The header slot is where the custom header of the modal will be rendered. It is only rendered if the headerTitle property is not set`,table:{category:a.SLOTS}},"--atom-modal-zindex":{description:`The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.`,defaultValue:{summary:`--zindex-1000`},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--height":{description:`Height of the modal.`,table:{category:a.CSS_CUSTOM_PROPERTIES}},"--max-height":{description:`Maximum height of the modal.`,table:{category:a.CSS_CUSTOM_PROPERTIES}},"--max-width":{description:`Maximum width of the modal.`,table:{category:a.CSS_CUSTOM_PROPERTIES}},"--min-height":{description:`Minimum height of the modal.`,table:{category:a.CSS_CUSTOM_PROPERTIES}},"--min-width":{description:`Minimum width of the modal.`,table:{category:a.CSS_CUSTOM_PROPERTIES}},"--width":{description:`Width of the modal.`,table:{category:a.CSS_CUSTOM_PROPERTIES}},present:{description:`Method to present the modal overlay after it has been created.`,table:{category:a.METHODS}},dismiss:{description:`Method to close the modal after it has been presented.`,table:{category:a.METHODS}},metaData:{control:`object`,description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:a.PROPERTIES}}}},l={primaryButtonText:`Primary`,secondaryButtonText:`Secondary`,hasDivider:!1,disableSecondaryButton:!1,disablePrimaryButton:!1,isOpen:!1,canDismiss:!0}})),d,f,p,m,h,g,_,v,y,b,x;e((()=>{r(),u(),d={title:`Components/Modal`,...c},f=(e,r=`light`)=>({components:{AtomModal:n,AtomButton:t},setup(){return{args:e,themeColor:r}},template:`
    <div>
      <AtomButton id='${e.trigger}'>Open Modal</AtomButton>
      <AtomModal
        alert-type="${e.alertType}"
        has-divider="${e.hasDivider}"
        primary-button-text="${e.primaryButtonText}"
        secondary-button-text="${e.secondaryButtonText}"
        trigger="${e.trigger}"
        progress="${e.progress}"
        disable-primary-button="${e.disablePrimaryButton}"
        disable-secondary-button="${e.disableSecondaryButton}"
        is-open="${e.isOpen}"
        can-dismiss="${e.canDismiss}"
        id="${e.id}"
        meta-data="${e.metaData}"
      >
        <div slot='header'>Custom Header</div>
        <p>Modal Content</p>
      </AtomModal>
    </div>
  `}),p={render:e=>f(e),args:{...l,trigger:`open-modal`}},m={render:e=>f(e),args:{...l,hasDivider:!0,trigger:`open-modal-2`}},h={render:e=>f(e),args:{...l,progress:.5,trigger:`open-modal-3`}},g={render:e=>f(e),args:{...l,alertType:`alert`,trigger:`open-modal-4`}},_={render:e=>f(e),args:{...l,alertType:`error`,trigger:`open-modal-5`}},v={render:e=>f(e),args:{...l,headerTitle:`Title`,trigger:`open-modal-6`}},y={render:e=>f(e),args:{...l,metaData:{primaryButtonTestId:`primary-btn`,secondaryButtonTestId:`secondary-btn`,closeButtonTestId:`close-btn`},trigger:`open-modal-7`}},b={render:()=>({components:{AtomModal:n,AtomButton:t},setup(){return{ModalComponentArgs:l,themeColor:`light`}},template:`
    <div>
      <AtomButton  @click="isOpen=true">Open the modal to see the example code</AtomButton> or <AtomButton
      fill="clear"
      type="button"
      href="https://github.com/juntossomosmais/atomium/blob/9acac8688128569e033598c2a5f3267746837385/packages/core/src/components/modal/stories/modal.vue.stories.tsx#L145-L166"
      >see the example on GitHub</AtomButton>
      <AtomModal
        disable-primary-button="${l.disablePrimaryButton}"
        disable-secondary-button="${l.disableSecondaryButton}"
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
  `,data(){return{isOpen:!1,other:!1}},methods:{handleClose(){this.isOpen=!1,this.$nextTick(()=>{this.$emit(`emit-action-to-dad-component`)})}}}),args:{...l},parameters:{docs:{description:{story:"`AtomModal` does not handle Vue emits ($emit) well when they are executed immediately after the modal is closed. This behavior seems to be related to the teleport mechanism used internally. <br/> <br/> In such cases, if the `isOpen` flag is changed to false and a event is emitted, the dad component receives the emit properly, but the modal remains open even though its parent component no longer exists. For this case, use `$nextTick` to ensure that the modal is closed before executing the action. "}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true,
    trigger: 'open-modal-2'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5,
    trigger: 'open-modal-3'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert',
    trigger: 'open-modal-4'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error',
    trigger: 'open-modal-5'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title',
    trigger: 'open-modal-6'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Divided`,`Progress`,`Alert`,`ErrorModal`,`HeaderTitle`,`AutomatedTest`,`ReactivityProblemOnEmit`]}))();export{g as Alert,y as AutomatedTest,p as Default,m as Divided,_ as ErrorModal,v as HeaderTitle,h as Progress,b as ReactivityProblemOnEmit,x as __namedExportsOrder,d as default};