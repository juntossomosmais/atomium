import { Category } from '@atomium/storybook-utils/enums/table'

export const IconStoryArgs = {
  parameters: {
    docs: {
      description: {
        component:
          'Wrapper of Ionic Icon component. Read the [Ionic documentation](https://ionicframework.com/docs/api/icon) for more information about the available properties and possibilities.',
      },
    },
  },
  argTypes: {
    icon: {
      control: 'text',
      description: 'The name of the icon to use.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    color: {
      control: 'select',
      description: 'The color to use from your application palette.',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'danger',
        'light',
        'medium',
        'dark',
      ],
      table: {
        category: Category.PROPERTIES,
      },
    },
    size: {
      control: 'select',
      description: 'The size of the icon.',
      options: ['small', 'large'],
      table: {
        category: Category.PROPERTIES,
      },
    },
    fontSize: {
      control: 'text',
      description:
        'Alternative prop to customize the icon with a specific size. When size is set, this prop is ignored.',
      table: {
        category: Category.PROPERTIES,
      },
    },
  },
}

export const IconComponentArgs = {
  icon: 'heart',
  color: 'secondary',
  size: '',
}
