import { withActions } from '@storybook/addon-actions/decorator'
import { Meta, StoryObj } from '@storybook/html'

import { AtoGrid } from './grid'

export default {
  title: 'Ionic Components/Grid',
  decorators: [withActions],
  parameters: {
    docs: {
      description: {
        component:
          'Wrapper of the [Ionic Grid](https://ionicframework.com/docs/api/grid) component.',
      },
    },
  },
  argTypes: {
    fixed: {
      description:
        'If `true`, the Grid will be fixed and will have a consistent width based on the screen size.',
      defaultValue: { summary: false },
    },
    size: {
      description:
        'Columns can be set to specific sizes to take up a certain number out of the total number of columns, or resize their width based on the content, it accepts responsive values like `size-sm`, `size-md`, `size-lg`, `size-xl`',
    },
    offset: {
      description:
        'Columns can be offset to the right by a certain number of columns, it accepts responsive values like `offset-sm`, `offset-md`, `offset-lg`, `offset-xl`',
    },
    pull: {
      description:
        'Columns can be pulled to the left by a certain number of columns',
    },
    push: {
      description:
        'Columns can be pushed to the right by a certain number of columns',
    },
  },
} as Meta<AtoGrid>

type Story = StoryObj<AtoGrid>

export const Default: Story = {
  render: () => `
<ato-grid>
  <ato-row>
    <ato-col class="col">1</ato-col>
    <ato-col class="col" size="8" size-sm="10">2</ato-col>
    <ato-col class="col">3</ato-col>
  </ato-row>
</ato-grid>
<ato-grid>
  <ato-row>
    <ato-col class="col">1</ato-col>
    <ato-col class="col">2</ato-col>
    <ato-col class="col">3</ato-col>
    <ato-col class="col">4</ato-col>
    <ato-col class="col">5</ato-col>
    <ato-col class="col">6</ato-col>
  </ato-row>
</ato-grid>
<ato-grid>
  <ato-row>
    <ato-col class="col">1</ato-col>
    <ato-col class="col">2</ato-col>
    <ato-col class="col">3</ato-col>
    <ato-col class="col">4</ato-col>
    <ato-col class="col">5</ato-col>
    <ato-col class="col">6</ato-col>
    <ato-col class="col">7</ato-col>
    <ato-col class="col">8</ato-col>
    <ato-col class="col">9</ato-col>
    <ato-col class="col">10</ato-col>
    <ato-col class="col">11</ato-col>
    <ato-col class="col">12</ato-col>
  </ato-row>
</ato-grid>

<style>
  .col {
    background-color: var(--color-neutral-light-2);
    border: solid 1px var(--color-neutral-white);
    color: var(--color-neutral-white);
    text-align: center;
  }
</style>
  `,
}
