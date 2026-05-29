import { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

import { LinkStoryArgs } from './link.args'

export default {
  title: 'Components/Link',
  ...LinkStoryArgs,
} as Meta

const createLink = (
  args,
  textExample = 'It should be used inside router components'
) => {
  return html`
    <a href="/nice-example">
      <atom-link
        type="${args.type}"
        color="${args.color}"
        loading="${args.loading}"
        size="${args.size}"
      >
        ${textExample}
      </atom-link>
    </a>
  `
}

export const Default: StoryObj = {
  render: (args) => createLink(args),
  args: {
    type: 'anchor',
    color: 'secondary',
    size: 'medium',
    loading: false,
  },
}

export const Primary: StoryObj = {
  render: (args) => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    size: 'medium',
    loading: false,
  },
}

export const Secondary: StoryObj = {
  render: (args) => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary',
  },
}

export const Loading: StoryObj = {
  render: (args) => html`
    <a href="/nice-example">
      <atom-link type="${args.type}" color="${args.color}" loading>
        Loading...
      </atom-link>
    </a>
  `,
  args: {
    ...Default.args,
  },
}

export const WithIcon: StoryObj = {
  render: (args) => html`
    <a href="/nice-example">
      <atom-link type="${args.type}" color="${args.color}">
        <span> Nice example with icon </span>
        <atom-icon icon="heart" />
      </atom-link>
    </a>
  `,
  args: {
    ...Default.args,
    color: 'secondary',
  },
}

export const Button: StoryObj = {
  render: (args) => html`
    <atom-link type="${args.type}" color="${args.color}">
      It is a button! and can be used to trigger user actions
    </atom-link>
  `,
  args: {
    ...Default.args,
    type: 'button',
  },
}

export const Size: StoryObj = {
  render: (args) => html`
    <atom-link size="${args.size}" color="${args.color}">
      It is a large link, using large font size
    </atom-link>
  `,
  args: {
    ...Default.args,
    size: 'large',
  },
}
