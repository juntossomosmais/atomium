import { Category } from '@atomium/storybook-utils/enums/table'
import { withActions } from 'storybook/actions/decorator'

export const SelectStoryArgs = {
  parameters: {
    docs: {
      description: {
        component:
          'Wrapper of Ionic Select component. Read the [Ionic documentation](https://ionicframework.com/docs/api/select) for more information about the available properties and possibilities.',
      },
    },
    actions: {
      handles: [
        'atomChange',
        'atomFocus',
        'atomBlur',
        'atomCancel',
        'atomDismiss',
        'atom-change',
        'atom-focus',
        'atom-blur',
        'atom-cancel',
        'atom-dismiss',
      ],
    },
  },
  decorators: [withActions],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the select',
      table: {
        category: Category.PROPERTIES,
      },
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder of the select',
      table: {
        category: Category.PROPERTIES,
      },
    },
    multiple: {
      control: 'boolean',
      defaultValue: { summary: false },
      description: 'If true, the user can select multiple values at once.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      description: 'If `true`, the user cannot interact with the select.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    readonly: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      description: 'If `true`, the user cannot modify the value.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    icon: {
      control: 'text',
      description: 'The icon of the select',
      table: {
        category: Category.PROPERTIES,
      },
    },
    helperText: {
      control: 'text',
      description: 'The helper text of the select',
      table: {
        category: Category.PROPERTIES,
      },
    },
    value: {
      control: 'text',
      description: 'The value of native select',
      table: {
        category: Category.PROPERTIES,
      },
    },
    errorText: {
      description: 'The error text of the select',
      table: {
        category: Category.PROPERTIES,
      },
    },
    fill: {
      control: 'select',
      options: ['outline', 'solid'],
      defaultValue: { summary: 'solid' },
      description: 'The fill type of the select',
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
    atomChange: {
      action: 'atomChange',
      description:
        'Emitted when the value has changed. This is the main event to listen to if you are doing any manual form validation.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomFocus: {
      action: 'atomFocus',
      description: 'Emitted when the select has focus.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomBlur: {
      action: 'atomBlur',
      description: 'Emitted when the select has blur.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomCancel: {
      action: 'atomCancel',
      description:
        'Emitted when the select has cancel. Only applies when the select interface is "action-sheet".',
      table: {
        category: Category.EVENTS,
      },
    },
    atomDismiss: {
      action: 'atomDismiss',
      description:
        'Emitted when the select has dismiss. Only applies when the select interface is "action-sheet".',
      table: {
        category: Category.EVENTS,
      },
    },
    '--select-max-height': {
      description: 'Add a custom max-height to the select list options.',
      defaultValue: { summary: '250px' },
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
  },
}

export const SelectComponentArgs = {
  disabled: false,
  readonly: false,
  multiple: false,
  label: 'Select example',
  placeholder: 'Select an option',
  mode: 'md',
  fill: 'solid',
  value: '',
  icon: '',
  helperText: '',
  errorText: '',
}
