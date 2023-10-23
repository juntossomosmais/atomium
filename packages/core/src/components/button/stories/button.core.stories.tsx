import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { ButtonComponentArgs, ButtonStoryArgs } from './button.args'

export default {
  title: 'Components/Button',
  ...ButtonStoryArgs,
} as Meta

const createButton = (args, themeColor = 'light') => {
  return html`
    <div class="theme-${themeColor}">
      <atom-button
        color="${args.color}"
        fill="${args.fill}"
        expand="${args.expand}"
        size="${args.size}"
        disabled="${args.disabled}"
        loading="${args.loading}"
        type="${args.type}"
        mode="${args.mode}"
        shape="${args.shape}"
      >
        ${args.label}
      </atom-button>
    </div>
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

export const White: StoryObj = {
  render: (args) => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    color: 'white',
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

export const CircleButton: StoryObj = {
  render: (args) => html`
    <atom-button
      color="${args.color}"
      fill="${args.fill}"
      expand="${args.expand}"
      size="${args.size}"
      disabled="${args.disabled}"
      loading="${args.loading}"
      type="${args.type}"
      mode="${args.mode}"
      shape="${args.shape}"
    >
      <atom-icon icon="heart"></atom-icon>
    </atom-button>
  `,
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline',
    shape: 'circle',
  },
}

export const Disabled: StoryObj = {
  render: (args) => createButton(args),
  args: {
    ...Primary.args,
    disabled: true,
  },
}

export const IconAndText: StoryObj = {
  render: (args) => html`
    <atom-button
      color="${args.color}"
      fill="${args.fill}"
      expand="${args.expand}"
      size="${args.size}"
      disabled="${args.disabled}"
      loading="${args.loading}"
      type="${args.type}"
      mode="${args.mode}"
      shape="${args.shape}"
    >
      <atom-icon icon="heart"></atom-icon>
      ${args.label}
    </atom-button>
  `,
  args: {
    ...Primary.args,
  },
}
