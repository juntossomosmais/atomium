import { AtomPagination } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import { PaginationComponentArgs, PaginationStoryArgs } from './pagination.args'

export default {
  title: 'Components/Pagination',
  component: AtomPagination,
  ...PaginationStoryArgs,
} as Meta

const createPagination = (args: typeof PaginationComponentArgs) => ({
  components: { AtomPagination },
  setup() {
    return { args }
  },
  template: `
    <AtomPagination
      page="${args.page}"
      count="${args.count}"
    />
  `,
})

export const Default: StoryObj<typeof PaginationComponentArgs> = {
  render: (args) => createPagination(args),
  args: {
    ...PaginationComponentArgs,
  },
}
