export const TagStoryArgs = {
  decorators: [],
  parameters: {
    actions: {
      handles: [],
    },
    docs: {
      description: {
        component:
          'Tags are non-interactive elements used to categorize, highlight or organize items in the interface. Because they have short keywords, they help in the quick recognition of a category or element. \n \n Wrapper of Ionic Badge component. Read the [Ionic documentation](https://ionicframework.com/docs/api/badge) for more information about the available properties and possibilities.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'neutral', 'dark', 'light'],
      defaultValue: { summary: 'success' },
      description:
        'The type of the tag, the component will receive the color according to its type.',
    },
    icon: {
      control: 'text',
      description: 'The name of the icon to use.',
    },
    label: {
      control: 'text',
      description: 'The label of the tag',
    },
    customBackgroundColor: {
      control: 'text',
      description: 'The background color',
    },
    customTextColor: {
      control: 'text',
      description: 'The text and icon (if exists) color',
    },
  },
}
