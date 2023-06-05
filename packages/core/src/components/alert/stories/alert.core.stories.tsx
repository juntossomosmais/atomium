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
    >
      <div slot="actions">
        <a class="action-link" href="#" title="Action link">Action link</a>
      </div>
    </atom-alert>

    <style>
      {AlertCSS}
    </style>
  `
}

export const Default: StoryObj = {
  render: (args) => createAlert(args),
  args: {
    ...AlertComponentArgs,
  },
}
