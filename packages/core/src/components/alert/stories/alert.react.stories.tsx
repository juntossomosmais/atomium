import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AlertCSS, AlertComponentArgs, AlertStoryArgs } from './alert.args'

export default {
  title: 'Components/Alert',
  ...AlertStoryArgs,
} as Meta

const createAlert = (args) => (
  <div>
    <atom-alert
      message-title={args.messageTitle}
      message-text={args.messageText}
      icon={args.icon}
      color={args.color}
      close={args.close}
    >
      <div slot="actions">
        <a className="action-link" href="#" title="Action link">
          Action link
        </a>
      </div>
    </atom-alert>

    <style>{AlertCSS}</style>
  </div>
)

export const Default: StoryObj = {
  render: (args) => createAlert(args),
  args: {
    ...AlertComponentArgs,
  },
}
