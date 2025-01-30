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
  template: `
  <div v-if="args.type === 'vertical'" style="height: 100px">
    <AtomDivider :type="args.type" />
  </div>
  <AtomDivider v-else :type="args.type" />
  `,
})

export const Horizontal: StoryObj = {
  render: (args) => createDivider(args),
  args: {
    type: 'horizontal',
  },
}

export const Vertical: StoryObj = {
  render: (args) => createDivider(args),
  args: {
    type: 'vertical',
  },
}
