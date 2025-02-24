import { AtomBadge } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import { BadgeStoryArgs } from './payment-banner.args'

export default {
  title: 'Components/Payment Banner',
  ...BadgeStoryArgs,
} as Meta

const createBadge = (args) => ({
  components: { AtomBadge },
  setup() {
    return { args }
  },
  template: `
    <AtomBadge type="${args.type}">{{ args.label }}</AtomBadge>
  `,
})

export const Primary: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    type: 'primary',
    label: 'Badge',
  },
}
