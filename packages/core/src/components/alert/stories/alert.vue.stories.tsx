import { Meta, StoryObj } from '@storybook/vue3-vite'

import { AtomAlert } from '@juntossomosmais/atomium/vue'

import { AlertComponentArgs, AlertStoryArgs } from './alert.args'

export default {
  title: 'Components/Alert',
  ...AlertStoryArgs,
} as Meta

const createAlert = (args) => ({
  components: { AtomAlert },
  setup() {
    return { args }
  },
  template: `
    <AtomAlert
      message-title="${args.messageTitle}"
      message-text="${args.messageText}"
      color="${args.color}"
      close="${args.close}"
      icon="${args.icon}"
      action-text="${args.actionText}"
      @atom-action="handleAction"
    />
    `,
  methods: {
    handleAction() {
      console.log('Action clicked')
    },
  },
})

export const Default: StoryObj = {
  render: (args) => createAlert(args),
  args: {
    ...AlertComponentArgs,
    icon: '',
  },
}

export const Info: StoryObj = {
  render: (args) => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'info',
    icon: 'account-multiple',
  },
}

export const Success: StoryObj = {
  render: (args) => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'success',
    icon: 'heart',
  },
}

export const Warning: StoryObj = {
  render: (args) => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'warning',
    icon: 'alert',
  },
}

export const Danger: StoryObj = {
  render: (args) => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'danger',
    icon: 'account-multiple',
  },
}

export const Close: StoryObj = {
  render: (args) => createAlert(args),
  args: {
    ...AlertComponentArgs,
    close: true,
    icon: '',
  },
}
