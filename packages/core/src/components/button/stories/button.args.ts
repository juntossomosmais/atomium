import { withActions } from '@storybook/addon-actions/decorator'

export const ButtonStoryArgs = {
  parameters: {
    actions: {
      handles: ['atomClick'],
    },
  },
  decorators: [withActions],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the button',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
      defaultValue: { summary: 'primary' },
      description: "The color to use from your application's color palette.",
    },
    fill: {
      control: 'select',
      options: ['solid', 'clear', 'outline'],
      defaultValue: { summary: 'solid' },
      description:
        'Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is "solid" except inside of a toolbar, where the default is `"clear"`.',
    },
    expand: {
      control: 'select',
      options: ['none', 'block'],
      description: 'Set to `"block"` for a full-width button.',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      defaultValue: { summary: 'default' },
      description: 'The size of the button.',
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, the user cannot interact with the button.',
    },
    loading: {
      control: 'boolean',
      description: 'If `true`, the button will be show a loading indicator.',
    },
    href: {
      description:
        'Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.',
    },
    rel: {
      description:
        'The relationship of the linked URL as space-separated link types.',
    },
    target: {
      description:
        'Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.',
    },
    download: {
      description: 'This attribute instructs browsers to download a URL.',
    },
    type: {
      control: 'select',
      options: ['none', 'submit', 'reset', 'button'],
      defaultValue: { summary: 'button' },
      description: 'The type of the button.',
    },
    mode: {
      control: 'select',
      options: ['md', 'ios'],
      defaultValue: { summary: 'md' },
      description: 'The mode determines which platform styles to use.',
    },
    atomClick: {
      action: 'atomClick',
      description: 'Emitted when the button is clicked.',
    },
  },
}

export const ButtonComponentArgs = {
  label: 'Button',
  color: 'primary',
  fill: 'solid',
  size: 'default',
  type: 'button',
  mode: 'md',
  expand: undefined,
  disabled: false,
  loading: false,
}
