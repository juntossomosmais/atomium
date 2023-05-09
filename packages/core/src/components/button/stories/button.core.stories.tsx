import { Meta, StoryObj } from '@storybook/web-components'

import { html } from 'lit'

import { ButtonComponentArgs, ButtonStoryArgs } from './button.args'

export default {
  title: 'Components/Button',
  ...ButtonStoryArgs,
} as Meta

const createButton = (args) => {
  return html`
    <atom-button
      color="${args.color}"
      fill="${args.fill}"
      expand="${args.expand}"
      size="${args.size}"
      disabled="${args.disabled}"
      loading="${args.loading}"
      type="${args.type}"
      mode="${args.mode}"
    >
      ${args.label}
    </atom-button>
  `
}

export const Primary: StoryObj = {
  render: (args) => createButton(args),
  args: {
    ...ButtonComponentArgs,
  },
}

export const Secondary: StoryObj = {
  render: (args) => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline',
  },
}

export const Text: StoryObj = {
  render: (args) => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'clear',
  },
}
