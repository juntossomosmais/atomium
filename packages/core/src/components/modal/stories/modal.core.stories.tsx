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
        has-footer="${args.hasFooter}"
        header-title="${args.headerTitle}"
      >
        <div slot="header">Custom Header</div>
        <p>Modal Content</p>
      </<atom-modal>
    </div>
  `
}

export const Default: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
  },
}

export const Divided: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true,
  },
}

export const Progress: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5,
  },
}

export const Alert: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert',
  },
}

export const Error: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error',
  },
}

export const HeaderTitle: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title',
  },
}
