import { Meta, StoryObj } from '@storybook/vue3-vite'

import { AtomBreadcrumb } from '@juntossomosmais/atomium/vue'

import { BreadcrumbStoryArgs } from './breadcrumb.args'

export default {
  title: 'Components/Breadcrumb',
  ...BreadcrumbStoryArgs,
} as Meta

const createBreadcrumb = (args) => ({
  components: { AtomBreadcrumb },
  setup() {
    return { args }
  },
  template: `<AtomBreadcrumb :items="args.items" />`,
})

export const Default: StoryObj = {
  render: (args) => createBreadcrumb(args),
  args: {
    items: [
      {
        text: 'First level',
        title: 'Go to first level',
        redirect: () => console.log('/first'),
      },
      {
        text: 'Intermediary level',
        title: 'Go to intermediary level',
        redirect: () => console.log('/intermediary'),
      },
      {
        text: 'Current level',
        title: 'This is the current level',
      },
    ],
  },
}
