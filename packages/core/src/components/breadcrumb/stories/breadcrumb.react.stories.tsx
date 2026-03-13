import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { AtomBreadcrumb } from '@juntossomosmais/atomium/react'

import { BreadcrumbStoryArgs } from './breadcrumb.args'

export default {
  title: 'Components/Breadcrumb',
  ...BreadcrumbStoryArgs,
} as Meta

const createBreadcrumb = (args) => (
  <AtomBreadcrumb items={args.items}></AtomBreadcrumb>
)

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
