import { AtomDivider } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DividerStoryArgs } from './divider.args'

export default {
  title: 'Components/Divider',
  component: AtomDivider,
  ...DividerStoryArgs,
} as Meta

const createDivider = (args) =>
  args.type === 'up' ? (
    <div
      style={{
        height: '100px',
      }}
    >
      <AtomDivider type={args.type} />
    </div>
  ) : (
    <AtomDivider type={args.type} />
  )

export const Down: StoryObj = {
  render: (args) => createDivider(args),
  args: {
    type: 'down',
  },
}

export const Up: StoryObj = {
  render: (args) => createDivider(args),
  args: {
    type: 'up',
  },
}
