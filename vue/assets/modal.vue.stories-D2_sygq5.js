import{I as e,x as t}from"./iframe-Br9ztWDk.js";import{t as n}from"./table-DZkiv1k4.js";import{t as r}from"./decorator-tF45y5qF.js";var i={parameters:{actions:{handles:[`atomCloseClick`,`atomDidDismiss`,`atomDidPresent`,`atomPrimaryClick`,`atomSecondaryClick`]},docs:{description:{component:`Wrapper of Ionic Modal component. Read the [Ionic documentation](https://ionicframework.com/docs/api/modal) for more information about the available properties and possibilities.`}}},decorators:[r],argTypes:{trigger:{description:`The id of the element that will trigger the modal`,table:{category:n.PROPERTIES}},id:{control:`text`,description:`The id of the modal`,table:{category:n.PROPERTIES}},hasDivider:{control:`boolean`,description:`if true, a divider will be added on the header and footer`,defaultValue:!1,table:{category:n.PROPERTIES}},hasFooter:{control:`boolean`,description:`If false, the footer will not be rendered. Default is true`,table:{category:n.PROPERTIES}},headerTitle:{control:`text`,description:`The title of the modal`,table:{category:n.PROPERTIES}},primaryButtonText:{control:`text`,description:`Text of the primary button`,table:{category:n.PROPERTIES}},secondaryButtonText:{control:`text`,description:`Text of the secondary button`,table:{category:n.PROPERTIES}},alertType:{control:`select`,options:[`alert`,`error`],description:`Type of alert icon. Available options: alert, error`,table:{category:n.PROPERTIES}},progress:{control:`number`,description:`Percentage of the progress bar's width`,table:{category:n.PROPERTIES}},isOpen:{control:`boolean`,description:`If true, the modal will be opened. Default is false`,table:{category:n.PROPERTIES},defaultValue:!1},disableSecondaryButton:{control:`boolean`,description:`If true, the secondary button will be disabled. Default is false`,table:{category:n.PROPERTIES}},disablePrimaryButton:{control:`boolean`,description:`If true, the primary button will be disabled. Default is false`,table:{category:n.PROPERTIES}},canDismiss:{control:`boolean`,description:`If true, the modal can be dismissed by clicking outside the modal. Default is true`,table:{category:n.PROPERTIES}},atomCloseClick:{action:`atomCloseClick`,description:"Event emitted when the close button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:n.EVENTS}},atomDidDismiss:{action:`atomDidDismiss`,description:"Event emitted after the modal has dismissed. The event callback recieve `ion-modal` custom component as a param.",table:{category:n.EVENTS}},atomDidPresent:{action:`atomDidPresent`,description:"Event emitted after the modal has presented. The event callback recieve `ion-modal` custom component as a param.",table:{category:n.EVENTS}},atomPrimaryClick:{action:`atomPrimaryClick`,description:"Event emitted when the primary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:n.EVENTS}},atomSecondaryClick:{action:`atomSecondaryClick`,description:"Event emitted when the secondary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:n.EVENTS}},default:{name:``,description:`The default slot is where the content of the modal will be rendered`,table:{category:n.SLOTS}},header:{name:`header`,description:`The header slot is where the custom header of the modal will be rendered. It is only rendered if the headerTitle property is not set`,table:{category:n.SLOTS}},"--atom-modal-zindex":{description:`The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.`,defaultValue:{summary:`--zindex-1000`},table:{category:n.CSS_CUSTOM_PROPERTIES}},"--height":{description:`Height of the modal.`,table:{category:n.CSS_CUSTOM_PROPERTIES}},"--max-height":{description:`Maximum height of the modal.`,table:{category:n.CSS_CUSTOM_PROPERTIES}},"--max-width":{description:`Maximum width of the modal.`,table:{category:n.CSS_CUSTOM_PROPERTIES}},"--min-height":{description:`Minimum height of the modal.`,table:{category:n.CSS_CUSTOM_PROPERTIES}},"--min-width":{description:`Minimum width of the modal.`,table:{category:n.CSS_CUSTOM_PROPERTIES}},"--width":{description:`Width of the modal.`,table:{category:n.CSS_CUSTOM_PROPERTIES}},present:{description:`Method to present the modal overlay after it has been created.`,table:{category:n.METHODS}},dismiss:{description:`Method to close the modal after it has been presented.`,table:{category:n.METHODS}},metaData:{control:`object`,description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:n.PROPERTIES}}}},a={primaryButtonText:`Primary`,secondaryButtonText:`Secondary`,hasDivider:!1,disableSecondaryButton:!1,disablePrimaryButton:!1,isOpen:!1,canDismiss:!0},o={title:`Components/Modal`,...i},s=(n,r=`light`)=>({components:{AtomModal:e,AtomButton:t},setup(){return{args:n,themeColor:r}},template:`
    <div>
      <AtomButton id='${n.trigger}'>Open Modal</AtomButton>
      <AtomModal
        alert-type="${n.alertType}"
        has-divider="${n.hasDivider}"
        primary-button-text="${n.primaryButtonText}"
        secondary-button-text="${n.secondaryButtonText}"
        trigger="${n.trigger}"
        progress="${n.progress}"
        disable-primary-button="${n.disablePrimaryButton}"
        disable-secondary-button="${n.disableSecondaryButton}"
        is-open="${n.isOpen}"
        can-dismiss="${n.canDismiss}"
        id="${n.id}"
        meta-data="${n.metaData}"
      >
        <div slot='header'>Custom Header</div>
        <p>Modal Content</p>
      </AtomModal>
    </div>
  `}),c={render:e=>s(e),args:{...a,trigger:`open-modal`}},l={render:e=>s(e),args:{...a,hasDivider:!0,trigger:`open-modal-2`}},u={render:e=>s(e),args:{...a,progress:.5,trigger:`open-modal-3`}},d={render:e=>s(e),args:{...a,alertType:`alert`,trigger:`open-modal-4`}},f={render:e=>s(e),args:{...a,alertType:`error`,trigger:`open-modal-5`}},p={render:e=>s(e),args:{...a,headerTitle:`Title`,trigger:`open-modal-6`}},m={render:e=>s(e),args:{...a,metaData:{primaryButtonTestId:`primary-btn`,secondaryButtonTestId:`secondary-btn`,closeButtonTestId:`close-btn`},trigger:`open-modal-7`}},h={render:()=>({components:{AtomModal:e,AtomButton:t},setup(){return{ModalComponentArgs:a,themeColor:`light`}},template:`
    <div>
      <AtomButton  @click="isOpen=true">Open the modal to see the example code</AtomButton> or <AtomButton
      fill="clear"
      type="button"
      href="https://github.com/juntossomosmais/atomium/blob/9acac8688128569e033598c2a5f3267746837385/packages/core/src/components/modal/stories/modal.vue.stories.tsx#L145-L166"
      >see the example on GitHub</AtomButton>
      <AtomModal
        disable-primary-button="${a.disablePrimaryButton}"
        disable-secondary-button="${a.disableSecondaryButton}"
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
  `,data(){return{isOpen:!1,other:!1}},methods:{handleClose(){this.isOpen=!1,this.$nextTick(()=>{this.$emit(`emit-action-to-dad-component`)})}}}),args:{...a},parameters:{docs:{description:{story:"`AtomModal` does not handle Vue emits ($emit) well when they are executed immediately after the modal is closed. This behavior seems to be related to the teleport mechanism used internally. <br/> <br/> In such cases, if the `isOpen` flag is changed to false and a event is emitted, the dad component receives the emit properly, but the modal remains open even though its parent component no longer exists. For this case, use `$nextTick` to ensure that the modal is closed before executing the action. "}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true,
    trigger: 'open-modal-2'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5,
    trigger: 'open-modal-3'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert',
    trigger: 'open-modal-4'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error',
    trigger: 'open-modal-5'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title',
    trigger: 'open-modal-6'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`Divided`,`Progress`,`Alert`,`ErrorModal`,`HeaderTitle`,`AutomatedTest`,`ReactivityProblemOnEmit`];export{d as Alert,m as AutomatedTest,c as Default,l as Divided,f as ErrorModal,p as HeaderTitle,u as Progress,h as ReactivityProblemOnEmit,g as __namedExportsOrder,o as default};