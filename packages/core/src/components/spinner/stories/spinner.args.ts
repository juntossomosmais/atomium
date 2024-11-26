import { Category } from '@atomium/storybook-utils/enums/table'

export const SpinnerStoryArgs = {
  decorators: [],
  parameters: {
    actions: {
      handles: [],
    },
    docs: {
      description: {
        component:
          'Spinners are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Spinner) for more information about this component.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'dark'],
      defaultValue: { summary: 'primary' },
      description:
        'The type of the Spinner, the component will receive the color according to its type.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    size: {
      control: 'number',
      defaultValue: { summary: 40 },
      description: 'The size of the Spinner.',
      table: {
        category: Category.PROPERTIES,
      },
    },
  },
}
