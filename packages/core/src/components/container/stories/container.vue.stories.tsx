import { AtomContainer } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import { ContainerStoryArgs } from './container.args'

import './container.css'

export default {
  title: 'Components/Container',
  ...ContainerStoryArgs,
} as Meta

const createContainer = (args) => ({
  components: { AtomContainer },
  setup() {
    return { args }
  },
  template: `
    <AtomContainer class="wrapper" hasPadding="${args.hasPadding}">
      <h1 class="title">Container Title</h1>
      <p class="text">
        This is a sample content inside the container to demonstrate its behavior
        and appearance with and without padding. Adjust the controls to see how it
        changes.
      </p>
    </AtomContainer>
  `,
})

export const Default: StoryObj = {
  render: (args) => createContainer(args),
  args: {
    hasPadding: true,
  },
}

export const NoPadding: StoryObj = {
  render: (args) => createContainer(args),
  args: {
    hasPadding: false,
  },
}
