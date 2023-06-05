import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AtomAlert } from '@juntossomosmais/atomium/react'

import { AlertCSS, AlertComponentArgs, AlertStoryArgs } from './alert.args'

export default {
  title: 'Components/Alert',
  ...AlertStoryArgs,
} as Meta

const createAlert = (args) => (
  <div>
    <AtomAlert
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
    </AtomAlert>

    <style>{AlertCSS}</style>
  </div>
)

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
    icon: 'people',
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
    icon: 'warning',
  },
}

export const Danger: StoryObj = {
  render: (args) => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'danger',
    icon: 'people',
  },
}
