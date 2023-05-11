import { withActions } from '@storybook/addon-actions/decorator'

import { Category } from '@atomium/storybook-utils/enums/table'

export const InputStoryArgs = {
  parameters: {
    docs: {
      description: {
        component:
          'Wrapper of Ionic Input component. Read the [Ionic documentation](https://ionicframework.com/docs/api/input) for more information about the available properties and possibilities.',
      },
    },
    actions: {
      handles: ['atomChange', 'atomFocus', 'atomBlur', 'atomInput'],
    },
  },
  decorators: [withActions],
  argTypes: {
    labelPlacement: {
      control: 'select',
      options: ['floating', 'stacked'],
      defaultValue: { summary: 'floating' },
      description: 'To control how the label is placed relative to the control',
      table: {
        category: Category.PROPERTIES,
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      defaultValue: { summary: 'secondary' },
      description: "The color to use from your application's color palette.",
      table: {
        category: Category.PROPERTIES,
      },
    },
    fill: {
      control: 'select',
      options: ['outline', 'solid'],
      defaultValue: { summary: 'solid' },
      description: 'The fill type of the input',
      table: {
        category: Category.PROPERTIES,
      },
    },
    shape: {
      control: 'select',
      options: ['round', 'undefined'],
      defaultValue: { summary: 'round' },
      description:
        'The shape of the input, if "round" it will be rounded, if "undefined" it will be square',
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
    type: {
      control: 'select',
      options: [
        'date',
        'datetime-local',
        'email',
        'month',
        'number',
        'password',
        'search',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
      defaultValue: { summary: 'text' },
      description: 'The type of control to display.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      description: 'If `true`, the user cannot interact with the input.',
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
    clearInput: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      description:
        'If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    passwordToggle: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      description:
        'If `true`, a password toggle icon will appear in the input. Clicking it will reveal the password.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    icon: {
      control: 'text',
      description: 'The icon of the input',
      table: {
        category: Category.PROPERTIES,
      },
    },
    value: {
      control: 'text',
      description: 'The value of native input',
      table: {
        category: Category.PROPERTIES,
      },
    },
    helperText: {
      control: 'text',
      description: 'The helper text of the input',
      table: {
        category: Category.PROPERTIES,
      },
    },
    label: {
      description: 'The label of the input',
      table: {
        category: Category.PROPERTIES,
      },
    },
    placeholder: {
      description: 'The placeholder of the input',
      table: {
        category: Category.PROPERTIES,
      },
    },
    errorText: {
      description: 'The error text of the input',
      table: {
        category: Category.PROPERTIES,
      },
    },
    hasError: {
      description: 'If `true`, the input will be in an error state.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    multiple: {
      description:
        'If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to "email", otherwise it is ignored.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    max: {
      description:
        'The maximum value, which must not be less than its minimum (min attribute) value.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    min: {
      description:
        'The minimum value, which must not be greater than its maximum (max attribute) value.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    maxLength: {
      description: 'The maximum value length for an input.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    minLength: {
      description: 'The minimum value length for an input.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    counter: {
      description:
        'If `true`, a counter will be shown counting the number of characters.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    clearOnEdit: {
      description:
        'If `true`, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    pattern: {
      description:
        'A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is "text", "search", "tel", "url", "email", "date", or "password", otherwise it is ignored. When the type attribute is "date", pattern will only be used in browsers that do not support the "date" input type natively.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    required: {
      description: 'If `true`, the input is required.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    inputmode: {
      description:
        'A hint to the browser for which keyboard to display. Accepts the following values: - `none` - `text` - `tel` - `url` - `email` - `numeric` - `decimal` - `search`',
      table: {
        category: Category.PROPERTIES,
      },
    },
    atomChange: {
      action: 'atomChange',
      description:
        'Depending on the way the users interacts with the element, the `atomChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<atom-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the users interaction is typing.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomInput: {
      action: 'atomInput',
      description:
        'Event fires when the value of an `<atom-input>` element has been changed. For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is InputEvent; for others, the interface is Event. If the input is cleared on edit, the type is null.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomFocus: {
      action: 'atomFocus',
      description: 'Emitted when the input has focus.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomBlur: {
      action: 'atomBlur',
      description: 'Emitted when the input has blur.',
      table: {
        category: Category.EVENTS,
      },
    },
    setFocus: {
      description:
        '`setFocus()` sets focus on the specified `atom-input`. Use this method instead of the global `input.focus()`.',
      table: {
        category: Category.METHODS,
      },
    },
    getInputElement: {
      description:
        '`getInputElement()` returns the native `<input>` element used under the hood. A common use-case is to access the native input when using a `HTMLInputElement` object is necessary.',
      table: {
        category: Category.METHODS,
      },
    },
  },
}

export const InputComponentArgs = {
  color: 'secondary',
  labelPlacement: 'floating',
  fill: 'solid',
  shape: 'round',
  mode: 'md',
  type: 'text',
  disabled: false,
  clearInput: false,
  readonly: false,
  passwordToggle: false,
}
