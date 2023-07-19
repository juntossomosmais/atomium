import { Meta, StoryObj } from '@storybook/web-components'

import { html } from 'lit'

import {
  UploadAreaComponentArgs,
  UploadAreaStoryArgs,
} from './upload-area.args'

export default {
  title: 'Components/UploadArea',
  ...UploadAreaStoryArgs,
} as Meta

const createUploadArea = (args) => {
  return html`
    <atom-upload-area
      id="${args.id}"
      ${args.itemToUpload ? `item-to-upload="${args.itemToUpload}"` : ''}"
      accept="${args.accept}"
      multiple="${args.multiple}"
      ${args.disabled ? 'disabled' : ''}
    >
    </atom-upload-area>
    <script>
    ;(function () {
     let uploadArea =  document
        .querySelector('atom-upload-area');

        uploadArea.addEventListener('change', (event) => {
          console.log('Change Event -  event:', event.target.files)
        })
        uploadArea.addEventListener('invalid', (event) => {
          console.log('Invalid Event -  event:', event)
        })
      })()
    </script>
  `
}

export const Default: StoryObj = {
  render: (args) => createUploadArea(args),
  args: {
    ...UploadAreaComponentArgs,
  },
}

export const Disabled: StoryObj = {
  render: (args) => createUploadArea(args),
  args: { disabled: true, helperText: 'Example of helper text' },
}
export const Multiple: StoryObj = {
  render: (args) => createUploadArea(args),
  args: {
    multiple: true,
  },
}
export const ItemToUpload: StoryObj = {
  render: (args) => createUploadArea(args),
  args: {
    itemToUpload: 'seu comprovante',
  },
}
export const Accept: StoryObj = {
  render: (args) => createUploadArea(args),
  args: {
    itemToUpload: 'sua imagem',
    accept: 'image/*',
  },
}
