export const LinkStoryArgs = {
  parameters: {
    actions: {
      handles: [],
    },
    docs: {
      description: {
        component:
          'atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
      defaultValue: { summary: 'secondary' },
      description: 'The link color.',
    },
    type: {
      control: 'select',
      options: ['anchor', 'button'],
      defaultValue: { summary: 'anchor' },
      description:
        'The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions.',
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
      description: 'If `true`, the opacity of the link is reduced.',
    },

    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: { summary: 'medium' },
      description: 'The link typhography size.',
    },
  },
}

const LinkReactStoryArgs = JSON.parse(JSON.stringify(LinkStoryArgs))

LinkReactStoryArgs.parameters.docs.description.component =
  'atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.'

LinkReactStoryArgs.argTypes.type.description =
  'The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.'

const LinkVueStoryArgs = JSON.parse(JSON.stringify(LinkStoryArgs))

LinkVueStoryArgs.parameters.docs.description.component =
  'atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.'

LinkVueStoryArgs.argTypes.type.description =
  'The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.'

export { LinkReactStoryArgs, LinkVueStoryArgs }
