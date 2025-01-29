import { AtomDivider } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import { DividerStoryArgs } from './divider.args'

export default {
  title: 'Components/Divider',
  ...DividerStoryArgs,
} as Meta

const createDivider = (args) => ({
  components: { AtomDivider },
  setup() {
    return { args }
  },
  template: `<AtomDivider type="${args.type}" />`,
})

export const Up: StoryObj = {
  render: (args) => createDivider(args),
  args: {
    type: 'up',
  },
}

export const Down: StoryObj = {
  render: (args) => createDivider(args),
  args: {
    type: 'down',
  },
}
