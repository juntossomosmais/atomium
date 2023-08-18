export const BadgeStoryArgs = {
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
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'danger',
        'light',
        'dark',
      ],
      defaultValue: { summary: 'primary' },
      description:
        'The type of the badge, the component will receive the color according to its type.',
    },
    label: {
      control: 'text',
      description: 'The label of the badge',
    },
  },
}
