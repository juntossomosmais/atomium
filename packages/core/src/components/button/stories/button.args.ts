import { Category } from '@atomium/storybook-utils/enums/table'
import { withActions } from '@storybook/addon-actions/decorator'

export const ButtonStoryArgs = {
  parameters: {
    actions: {
      handles: ['click'],
    },
    docs: {
      description: {
        component:
          'Wrapper of Ionic Button component. Read the [Ionic documentation](https://ionicframework.com/docs/api/button) for more information about the available properties and possibilities.',
      },
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
      options: ['primary', 'secondary', 'white'],
      defaultValue: { summary: 'primary' },
      description: "The color to use from your application's color palette.",
      table: {
        category: Category.PROPERTIES,
      },
    },
    fill: {
      control: 'select',
      options: ['solid', 'clear', 'outline', 'outline-filled'],
      defaultValue: { summary: 'solid' },
      description:
        'Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is "solid" except inside of a toolbar, where the default is `"clear"`.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    expand: {
      control: 'select',
      options: ['none', 'block'],
      description: 'Set to `"block"` for a full-width button.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      defaultValue: { summary: 'default' },
      description: 'The size of the button.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, the user cannot interact with the button.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    loading: {
      control: 'boolean',
      description: 'If `true`, the button will be show a loading indicator.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    href: {
      description:
        'Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    rel: {
      description:
        'The relationship of the linked URL as space-separated link types.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    target: {
      description:
        'Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    download: {
      description: 'This attribute instructs browsers to download a URL.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    type: {
      control: 'select',
      options: ['none', 'submit', 'reset', 'button'],
      defaultValue: { summary: 'button' },
      description: 'The type of the button.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    shape: {
      control: 'select',
      options: ['round', 'circle'],
      description: 'The shape of the button.',
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
