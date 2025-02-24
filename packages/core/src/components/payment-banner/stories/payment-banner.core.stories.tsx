import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { BadgeStoryArgs } from './payment-banner.args'

export default {
  title: 'Components/Payment Banner',
  ...BadgeStoryArgs,
} as Meta

const createBadge = (args) => {
  return html`
    <atom-payment-banner icon="${args.icon}">
      ${args.label}
    </atom-payment-banner>
  `
}

export const Primary: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'heart',
  },
}
