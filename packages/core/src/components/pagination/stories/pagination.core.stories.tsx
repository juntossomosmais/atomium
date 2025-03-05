import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { PaginationComponentArgs, PaginationStoryArgs } from './pagination.args'

export default {
  title: 'Components/Pagination',
  ...PaginationStoryArgs,
} as Meta

const createPagination = (args: typeof PaginationComponentArgs) => {
  return html`<atom-pagination page="${args.page}" count="${args.count}" />`
}

export const Default: StoryObj<typeof PaginationComponentArgs> = {
  render: (args) => createPagination(args),
  args: PaginationComponentArgs,
}
