import { AtomButton, AtomModal } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3-vite'

import { ModalComponentArgs, ModalStoryArgs } from './modal.args'

export default {
  title: 'Components/Modal',
  ...ModalStoryArgs,
} as Meta

const createModal = (args, themeColor = 'light') => ({
  components: { AtomModal, AtomButton },
  setup() {
    return { args, themeColor }
  },
  template: `
    <div>
      <AtomButton id='${args.trigger}'>Open Modal</AtomButton>
      <AtomModal
        alert-type="${args.alertType}"
        has-divider="${args.hasDivider}"
        primary-button-text="${args.primaryButtonText}"
        secondary-button-text="${args.secondaryButtonText}"
        trigger="${args.trigger}"
        progress="${args.progress}"
        disable-primary-button="${args.disablePrimaryButton}"
        disable-secondary-button="${args.disableSecondaryButton}"
        is-open="${args.isOpen}"
        can-dismiss="${args.canDismiss}"
        id="${args.id}"
        meta-data="${args.metaData}"
      >
        <div slot='header'>Custom Header</div>
        <p>Modal Content</p>
      </AtomModal>
    </div>
  `,
})

export const Default: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal',
  },
}

export const Divided: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true,
    trigger: 'open-modal-2',
  },
}

export const Progress: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5,
    trigger: 'open-modal-3',
  },
}

export const Alert: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert',
    trigger: 'open-modal-4',
  },
}

export const ErrorModal: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error',
    trigger: 'open-modal-5',
  },
}

export const HeaderTitle: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title',
    trigger: 'open-modal-6',
  },
}

export const AutomatedTest: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    metaData: {
      primaryButtonTestId: 'primary-btn',
      secondaryButtonTestId: 'secondary-btn',
      closeButtonTestId: 'close-btn',
    },
    trigger: 'open-modal-7',
  },
}

export const ReactivityProblemOnEmit: StoryObj = {
  render: () => ({
    components: { AtomModal, AtomButton },
    setup() {
      return { ModalComponentArgs, themeColor: 'light' }
    },
    template: `
    <div>
      <AtomButton  @click="isOpen=true">Open the modal to see the example code</AtomButton> or <AtomButton
      fill="clear"
      type="button"
      href="https://github.com/juntossomosmais/atomium/blob/9acac8688128569e033598c2a5f3267746837385/packages/core/src/components/modal/stories/modal.vue.stories.tsx#L145-L166"
      >see the example on GitHub</AtomButton>
      <AtomModal
        disable-primary-button="${ModalComponentArgs.disablePrimaryButton}"
        disable-secondary-button="${ModalComponentArgs.disableSecondaryButton}"
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
  `,
    data() {
      return {
        isOpen: false,
        other: false,
      }
    },
    methods: {
      handleClose() {
        // do
        this.isOpen = false
        this.$nextTick(() => {
          // then emit action
          this.$emit('emit-action-to-dad-component')
        })

        /* don't do this:
         * this.isOpen = false
         * this.$emit('emit-action-to-dad-component') // emit action
         */
      },
    },
  }),
  args: {
    ...ModalComponentArgs,
  },
  parameters: {
    docs: {
      description: {
        story:
          '`AtomModal` does not handle Vue emits ($emit) well when they are executed immediately after the modal is closed. This behavior seems to be related to the teleport mechanism used internally. <br/> <br/> In such cases, if the `isOpen` flag is changed to false and a event is emitted, the dad component receives the emit properly, but the modal remains open even though its parent component no longer exists. For this case, use `$nextTick` to ensure that the modal is closed before executing the action. ',
      },
    },
  },
}
