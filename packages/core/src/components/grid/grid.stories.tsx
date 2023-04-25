import { withActions } from '@storybook/addon-actions/decorator'
import { Meta, StoryObj } from '@storybook/html'

import { AtomGrid } from './grid'

export default {
  title: 'Components/Grid',
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
} as Meta<AtomGrid>

type Story = StoryObj<AtomGrid>

export const Default: Story = {
  render: () => `
<atom-grid>
  <atom-row>
    <atom-col class="col">1</atom-col>
    <atom-col class="col" size="8" size-sm="10">2</atom-col>
    <atom-col class="col">3</atom-col>
  </atom-row>
</atom-grid>
<atom-grid>
  <atom-row>
    <atom-col class="col">1</atom-col>
    <atom-col class="col">2</atom-col>
    <atom-col class="col">3</atom-col>
    <atom-col class="col">4</atom-col>
    <atom-col class="col">5</atom-col>
    <atom-col class="col">6</atom-col>
  </atom-row>
</atom-grid>
<atom-grid>
  <atom-row>
    <atom-col class="col">1</atom-col>
    <atom-col class="col">2</atom-col>
    <atom-col class="col">3</atom-col>
    <atom-col class="col">4</atom-col>
    <atom-col class="col">5</atom-col>
    <atom-col class="col">6</atom-col>
    <atom-col class="col">7</atom-col>
    <atom-col class="col">8</atom-col>
    <atom-col class="col">9</atom-col>
    <atom-col class="col">10</atom-col>
    <atom-col class="col">11</atom-col>
    <atom-col class="col">12</atom-col>
  </atom-row>
</atom-grid>

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
