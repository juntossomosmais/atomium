import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { ModalComponentArgs, ModalStoryArgs } from './modal.args'

export default {
  title: 'Components/Modal',
  ...ModalStoryArgs,
} as Meta

const createModal = (args) => {
  return html`
    <div>
      <atom-button id="open-modal">Open Modal</atom-button>
      <atom-modal
        alert-type="${args.alertType}"
        has-divider="${args.hasDivider}"
        primary-text="${args.primaryText}"
        secondary-text="${args.secondaryText}"
        trigger="open-modal"
        progress="${args.progress}"
      >
        <div slot="header">Custom Header</div>
        <p>Modal Content</p>
      </<atom-modal>
    </div>
  `
}

export const Modal: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
  },
}
