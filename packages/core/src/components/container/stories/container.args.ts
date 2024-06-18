export const ContainerStoryArgs = {
  decorators: [],
  parameters: {
    actions: {
      handles: [],
    },
    docs: {
      description: {
        component:
          'Container is a component that wraps content in application using a max-width and padding to define the width of the content.',
      },
    },
  },
  argTypes: {
    hasPadding: {
      control: 'boolean',
      defaultValue: { summary: true },
      description: 'If false the container will not have padding',
    },
  },
}

export const ContainerComponentArgs = {
  hasPadding: true,
}
