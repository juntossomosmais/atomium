import { Meta, StoryObj } from '@storybook/web-components'

import { html } from 'lit'

import { BreadcrumbStoryArgs } from './breadcrumb.args'

export default {
  title: 'Components/Breadcrumb',
  ...BreadcrumbStoryArgs,
} as Meta

const createBreadcrumb = () => {
  return html`
    <atom-breadcrumb />

    <script>
      ;(function () {
        const breadcrumbsElements = document.querySelectorAll('atom-breadcrumb')

        breadcrumbsElements.forEach((atomBreadcrumb) => {
          atomBreadcrumb.items = [
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
          ]
        })
      })()
    </script>
  `
}

export const Default: StoryObj = {
  render: () => createBreadcrumb(),
}
