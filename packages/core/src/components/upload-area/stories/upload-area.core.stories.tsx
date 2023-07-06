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
  return html` <atom-upload-area id="testupload" /> `
}

export const Default: StoryObj = {
  render: (args) => createUploadArea(args),
  args: {
    ...UploadAreaComponentArgs,
  },
}
