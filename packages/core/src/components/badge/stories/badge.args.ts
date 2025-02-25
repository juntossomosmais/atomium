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
        'info',
        'success',
        'warning',
        'danger',
        'neutral',
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
    size: {
      control: 'select',
      options: ['default', 'medium', 'large'],
      defaultValue: { summary: 'default' },
      description: 'The size of the button.',
      table: {
        category: 'Properties',
      },
    },
    shape: {
      control: 'select',
      options: ['round', 'rectangle'],
      description: 'The shape of the badge.',
      table: {
        category: 'Properties',
      },
    },
  },
}

export const BadgeComponentArgs = {
  size: 'default',
  shape: 'round',
  type: 'primary',
  label: 'Badge',
}
