import { withActions } from '@storybook/addon-actions/decorator';
export const InputStoryArgs = {
  parameters: {
    actions: {
      handles: ['atomChange', 'atomFocus', 'atomBlur'],
    },
  },
  decorators: [withActions],
  argTypes: {
    label: {
      control: 'text',
    },
    labelPlacement: {
      control: 'select',
      options: ['fixed', 'stacked', 'floating'],
    },
    placeholder: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
    },
    fill: {
      control: 'select',
      options: ['outline', 'solid'],
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'inline-radio',
      options: { text: 'text', password: 'password' },
    },
    mode: {
      control: 'select',
      options: ['ios', 'md'],
    },
    clearInput: {
      control: 'boolean',
    },
    clearOnEdit: {
      control: 'boolean',
    },
    pattern: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    inputmode: {
      control: 'select',
      options: [
        'none',
        'decimal',
        'numeric',
        'tel',
        'search',
        'text',
        'url',
        'email',
      ],
    },
  },
};
export const InputComponentArgs = {
  label: 'Example input',
  labelPlacement: 'floating',
  fill: 'outline',
  color: undefined,
  mode: 'md',
  disabled: false,
  placeholder: 'Placeholder',
  clearInput: false,
  clearOnEdit: false,
};
//# sourceMappingURL=input.args.js.map
