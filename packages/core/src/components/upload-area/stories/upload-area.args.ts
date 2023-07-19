import { withActions } from '@storybook/addon-actions/decorator'

import { Category } from '@atomium/storybook-utils/enums/table'

export const UploadAreaStoryArgs = {
  decorators: [withActions],
  parameters: {
    docs: {
      description: {
        component: 'Upload Area custom component. ',
      },
    },
    actions: {
      handles: ['change', 'invalid'],
    },
    argTypes: {
      disabled: {
        control: 'boolean',
        defaultValue: { summary: false },
        description: 'If true, the user cannot interact with the upload-area.',
        table: {
          category: Category.PROPERTIES,
        },
      },
      multiple: {
        control: 'boolean',
        defaultValue: { summary: false },
        description: 'If true, the user cannot interact with the upload-area.',
        table: {
          category: Category.PROPERTIES,
        },
      },
      itemToUpload: {
        control: 'text',
        defaultValue: { summary: 'o arquivo' },
        description: 'If true, the user cannot interact with the upload-area.',
        table: {
          category: Category.PROPERTIES,
        },
      },
      id: {
        control: 'text',
        description: 'If have an value, the upload-area will have an icon.',
        table: {
          category: Category.PROPERTIES,
        },
      },
      accept: {
        control: 'text',
        description:
          'HTML accept attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept',
        table: {
          category: Category.PROPERTIES,
        },
      },
      change: {
        action: 'change',
        description: 'Emitted when the upload-area is clicked.',
        table: {
          category: Category.EVENTS,
        },
      },
      invalid: {
        action: 'invalid',
        description: 'Emitted when the upload-area is clicked.',
        table: {
          category: Category.EVENTS,
        },
      },
    },
  },
}

export const UploadAreaComponentArgs = {
  disabled: false,
  multiple: false,
  itemToUpload: 'o arquivo',
  id: 'my-upload-area',
  accept: '',
}
