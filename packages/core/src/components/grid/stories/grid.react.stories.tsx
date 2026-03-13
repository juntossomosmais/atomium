import { AtomCol, AtomGrid } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'


import { GridStoryArgs } from './grid.args'

import './grid.css'

export default {
  title: 'Components/Grid',
  components: [AtomGrid, AtomCol],
  ...GridStoryArgs,
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div>
      <AtomGrid>
        <AtomCol class='col' size='8'>
          <div>size=8</div>
        </AtomCol>
        <AtomCol class='col' size='6' sizeMd='4'>
          <div>size=6 & sizeMd=4</div>
        </AtomCol>
        <AtomCol class='col' size='4' sizeMd='4'>
          <div>size=4 & sizeMd=4</div>
        </AtomCol>
        <AtomCol class='col' size='8' sizeMd='6'>
          <div>size=8 & sizeMd=6</div>
        </AtomCol>
        <AtomCol class='col' size='8' sizeMd='10'>
          <div>size=8 & sizeMd=10</div>
        </AtomCol>
        <AtomCol class='col' size='8' sizeMd='10'>
          <div>size=8 & sizeMd=10</div>
        </AtomCol>
        <AtomCol class='col' size='8' sizeMd='6'>
          <div>size=8 & sizeMd=6</div>
        </AtomCol>
      </AtomGrid>
    </div>
  ),
}

export const AutoSize: StoryObj = {
  render: () => (
    <div>
      <AtomGrid>
        <AtomCol className='col' size='auto'>
          <div>size=auto</div>
        </AtomCol>
        <AtomCol className='col' size='auto'>
          <div>size=auto</div>
        </AtomCol>
        <AtomCol className='col'>
          <div>default</div>
        </AtomCol>
        <AtomCol className='col'>
          <div>default</div>
        </AtomCol>
        <AtomCol className='col' size='auto'>
          <div>size=auto</div>
        </AtomCol>
        <AtomCol className='col' size='auto'>
          <div>size=auto</div>
        </AtomCol>
      </AtomGrid>
    </div>
  ),
}

export const Offset: StoryObj = {
  render: () => (
    <div>
      <p>
        <b>Column 2</b> has <code>offset</code> set to <code>"3"</code>
      </p>
      <AtomGrid>
        <AtomCol className='col' size='3'>
          <div>1</div>
        </AtomCol>
        <AtomCol className='col' offset='3'>
          <div>2</div>
        </AtomCol>
        <AtomCol className='col'>
          <div>3</div>
        </AtomCol>
      </AtomGrid>

      <p>
        <b>Column 1</b> has <code>offset</code> set to <code>"4"</code>
      </p>
      <AtomGrid>
        <AtomCol className='col' size='2' offset='4'>
          <div>1</div>
        </AtomCol>
        <AtomCol className='col' size='2'>
          <div>2</div>
        </AtomCol>
      </AtomGrid>
    </div>
  ),
}

export const PushAndPull: StoryObj = {
  render: () => (
    <div>
      <p>
        <b>Column 1</b> has <code>push</code> set to <code>"4"</code> and
        <b>column 2</b> has <code>pull</code> set to <code>"4"</code>
      </p>

      <AtomGrid>
        <AtomCol className='col' push='4' size='4'>
          <div>1</div>
        </AtomCol>
        <AtomCol className='col' pull='4' size='4'>
          <div>2</div>
        </AtomCol>
        <AtomCol className='col'>
          <div>3</div>
        </AtomCol>
      </AtomGrid>
    </div>
  ),
}
