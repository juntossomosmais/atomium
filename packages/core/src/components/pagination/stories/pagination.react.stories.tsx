import { AtomPagination } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PaginationComponentArgs, PaginationStoryArgs } from './pagination.args'

export default {
  title: 'Components/Pagination',
  component: AtomPagination,
  ...PaginationStoryArgs,
} as Meta

const createPagination = (args: typeof PaginationComponentArgs) => (
  <AtomPagination count={args.count} page={args.page} />
)

export const Default: StoryObj<typeof PaginationComponentArgs> = {
  render: (args) => createPagination(args),
  args: {
    ...PaginationComponentArgs,
  },
}
