export const DividerStoryArgs = {
  decorators: [],
  parameters: {
    actions: {
      handles: [],
    },
    docs: {
      description: {
        component:
          'Badges are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Badge) for more information about this component.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['up', 'down'],
      defaultValue: { summary: 'down' },
      description:
        'The type of the badge, the component will receive the color according to its type.',
    },
  },
}
