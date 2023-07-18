import { Meta, StoryObj } from '@storybook/web-components'

import { html } from 'lit'

import { AlertComponentArgs, AlertStoryArgs } from './alert.args'

export default {
  title: 'Components/Alert',
  ...AlertStoryArgs,
} as Meta

const createAlert = (args) => {
  return html`
    <atom-alert
      message-title=${args.messageTitle}
      message-text=${args.messageText}
      icon=${args.icon}
      color=${args.color}
      close=${args.close}
      action-text=${args.actionText}
    >
    </atom-alert>
  `
}

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
