import { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

import { ContainerComponentArgs, ContainerStoryArgs } from './container.args'

import './container.css'

export default {
  title: 'Components/Container',
  ...ContainerStoryArgs,
} as Meta

const createContainer = (args) => {
  return html`
    <atom-container class="wrapper" has-padding="${args.hasPadding}">
      <section>
        <h1 class="title">Container Title</h1>
        <p class="text">
          This is a sample content inside the container to demonstrate its
          behavior and appearance with and without padding. Adjust the controls
          to see how it changes.
        </p>
      </section>
    </atom-container>
  `
}

export const Default: StoryObj = {
  render: (args) => createContainer(args),
  args: {
    ...ContainerComponentArgs,
  },
}
