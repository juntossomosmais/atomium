import { Meta, StoryObj } from '@storybook/vue3-vite'

import { AtomIcon } from '@juntossomosmais/atomium/vue'

import { IconComponentArgs, IconStoryArgs } from './icon.args'

export default {
  title: 'Components/Icon',
  component: AtomIcon,
  ...IconStoryArgs,
} as Meta

const createIcon = (args) => ({
  components: { AtomIcon },
  setup() {
    return { args }
  },
  template: `
    <AtomIcon
      icon="${args.icon}"
      color="${args.color}"
      size="${args.size}"
    />
  `,
})

export const Default: StoryObj = {
  render: (args) => createIcon(args),
  args: {
    ...IconComponentArgs,
  },
}
