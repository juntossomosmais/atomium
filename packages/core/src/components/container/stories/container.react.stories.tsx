import { AtomContainer } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { ContainerComponentArgs, ContainerStoryArgs } from './container.args'

import './container.css'

export default {
  title: 'Components/Container',
  component: AtomContainer,
  ...ContainerStoryArgs,
} as Meta

const createContainer = (args) => (
  <AtomContainer className='wrapper' hasPadding={args.hasPadding}>
    <h1 className='title'>Container Title</h1>
    <p className='text'>
      This is a sample content inside the container to demonstrate its behavior
      and appearance with and without padding. Adjust the controls to see how it
      changes.
    </p>
  </AtomContainer>
)

export const Default: StoryObj = {
  render: (args) => createContainer(args),
  args: {
    ...ContainerComponentArgs,
  },
}
