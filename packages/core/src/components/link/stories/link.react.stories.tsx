import { AtomIcon, AtomLink } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react-vite'

import { LinkReactStoryArgs } from './link.args'

const Link = ({ children }) => {
  return <>{children}</>
}

export default {
  title: 'Components/Link',
  component: AtomLink,
  ...LinkReactStoryArgs,
} as Meta

const createLink = (
  args,
  textExample = 'It should be used inside Link (Next) component'
) => (
  <Link>
    <a>
      <AtomLink color={args.color} type={args.type}>
        {textExample}
      </AtomLink>
    </a>
  </Link>
)

export const Primary: StoryObj = {
  render: (args) => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    loading: false,
  },
}

export const Secondary: StoryObj = {
  render: (args) => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary',
  },
}

export const Loading: StoryObj = {
  render: (args) => (
    <Link>
      <a>
        <AtomLink color={args.color} type={args.type} loading>
          Loading...
        </AtomLink>
      </a>
    </Link>
  ),
  args: {
    ...Primary.args,
  },
}

export const WithIcon: StoryObj = {
  render: (args) => (
    <Link>
      <a>
        <AtomLink color={args.color} type={args.type}>
          Nice example with icon
          <AtomIcon icon='heart' color='primary' />
        </AtomLink>
      </a>
    </Link>
  ),
  args: {
    ...Primary.args,
  },
}

export const Button: StoryObj = {
  render: (args) => (
    <AtomLink color={args.color} type={args.type}>
      It is a button! and can be used to trigger user actions
    </AtomLink>
  ),
  args: {
    ...Primary.args,
    type: 'button',
  },
}
