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
        'success',
        'warning',
        'danger',
        'light',
        'dark',
        'purple',
      ],
      defaultValue: { summary: 'primary' },
      description:
        'The type of the badge, the component will receive the color according to its type.',
    },
    children: {
      control: 'text',
      description: 'The content of the badge',
    },
  },
}
