import { h } from '@stencil/core'
import { Meta, StoryObj } from '@storybook/react'

import { AtomCol, AtomGrid, AtomRow } from '@juntossomosmais/atomium/react'

import { GridCSS, GridStoryArgs } from './grid.args'

export default {
  title: 'Components/Grid',
  components: [AtomGrid, AtomCol, AtomRow],
  ...GridStoryArgs,
} as Meta

const createGrid = (args) => (
  <div>
    <AtomGrid>
      <AtomRow>
        <AtomCol className="col">1</AtomCol>
        <AtomCol className="col" size="8" sizeSm="10">
          2
        </AtomCol>
        <AtomCol className="col">3</AtomCol>
      </AtomRow>
    </AtomGrid>
    <AtomGrid>
      <AtomRow>
        <AtomCol className="col">1</AtomCol>
        <AtomCol className="col">2</AtomCol>
        <AtomCol className="col">3</AtomCol>
        <AtomCol className="col">4</AtomCol>
        <AtomCol className="col">5</AtomCol>
        <AtomCol className="col">6</AtomCol>
      </AtomRow>
    </AtomGrid>
    <AtomGrid>
      <AtomRow>
        <AtomCol className="col">1</AtomCol>
        <AtomCol className="col">2</AtomCol>
        <AtomCol className="col">3</AtomCol>
        <AtomCol className="col">4</AtomCol>
        <AtomCol className="col">5</AtomCol>
        <AtomCol className="col">6</AtomCol>
        <AtomCol className="col">7</AtomCol>
        <AtomCol className="col">8</AtomCol>
        <AtomCol className="col">9</AtomCol>
        <AtomCol className="col">10</AtomCol>
        <AtomCol className="col">11</AtomCol>
        <AtomCol className="col">12</AtomCol>
      </AtomRow>
    </AtomGrid>

    <style>{GridCSS}</style>
  </div>
)

export const Default: StoryObj = {
  render: (args) => createGrid(args),
}
