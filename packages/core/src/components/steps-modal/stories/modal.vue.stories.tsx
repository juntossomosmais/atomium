import { AtomButton, AtomModal } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import { ModalComponentArgs, ModalStoryArgs } from './modal.args'

export default {
  title: 'Components/StepsModal',
  ...ModalStoryArgs,
} as Meta

const createModal = (args, themeColor = 'light') => ({
  components: { AtomModal, AtomButton },
  setup() {
    return { args, themeColor }
  },
  template: `
    <div>
      <AtomButton id='open-modal'>Open Modal</AtomButton>
      <AtomModal
        alert-type="${args.alertType}"
        has-divider="${args.hasDivider}"
        primary-text="${args.primaryText}"
        secondary-text="${args.secondaryText}"
        trigger="open-modal"
        progress="${args.progress}"
        disable-primary="${args.disablePrimary}"
        disable-secondary="${args.disableSecondary}"
      >
        {{ args.label }}
      </AtomModal>
    </div>
  `,
})

export const Default: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
  },
}

export const Divided: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true,
  },
}

export const Progress: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5,
  },
}

export const Alert: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert',
  },
}

export const Error: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error',
  },
}

export const HeaderTitle: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title',
  },
}
