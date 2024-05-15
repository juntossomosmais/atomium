import { Meta, StoryObj } from '@storybook/vue3'

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
      messageTitle="${args.messageTitle}"
      messageText="${args.messageText}"
      color="${args.color}"
      icon="${args.icon}"
    />
    `,
})

export const Default: StoryObj = {
  render: (args) => createAlert(args),
  args: {
    ...AlertComponentArgs,
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
