import { withActions } from '@storybook/addon-actions/decorator'

import { Category } from '@atomium/storybook-utils/enums/table'

export const UploadAreaStoryArgs = {
  decorators: [withActions],
  parameters: {
    actions: {
      // handles: ['atomClick'],
    },
    docs: {
      description: {
        component: 'Upload Area component',
      },
    },
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
    activated: {
      control: 'boolean',
      defaultValue: { summary: false },
      description: 'If true, the upload-area will be activated.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    icon: {
      control: 'text',
      description: 'If have an value, the upload-area will have an icon.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    close: {
      control: 'boolean',
      defaultValue: { summary: false },
      description: 'If true, the upload-area will have a close button.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    mode: {
      control: 'select',
      options: ['md', 'ios'],
      defaultValue: { summary: 'md' },
      description: 'The mode determines which platform styles to use.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    atomClick: {
      action: 'atomClick',
      description: 'Emitted when the upload-area is clicked.',
      table: {
        category: 'Events',
      },
    },
  },
}

export const UploadAreaComponentArgs = {
  mode: 'md',
  disabled: false,
  activated: false,
  close: false,
  label: 'Label',
}
