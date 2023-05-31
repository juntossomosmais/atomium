import { Meta, StoryObj } from '@storybook/web-components'

import { html } from 'lit'

import { GridCSS, GridStoryArgs } from './grid.args'

export default {
  title: 'Components/Grid',
  ...GridStoryArgs,
} as Meta

// @TODO: Improve all examples
export const Default: StoryObj = {
  render: () => html`
    <atom-grid>
      <atom-col class="col" size="6" size-md="8">
        <div>size=6 & size-md=8</div>
      </atom-col>
      <atom-col class="col" size="6" size-md="4">
        <div>size=6 & size-md=4</div>
      </atom-col>

      <atom-col class="col" size="6" size-md="4">
        <div>size=6 & size-md=4</div>
      </atom-col>
      <atom-col class="col" size="6" size-md="8">
        <div>size=6 & size-md=8</div>
      </atom-col>

      <atom-col class="col" size="6" size-md="8">
        <div>size=6 & size-md=8</div>
      </atom-col>
      <atom-col class="col" size="6" size-md="4">
        <div>size=6 & size-md=4</div>
      </atom-col>
    </atom-grid>

    <style>
      ${GridCSS}
    </style>
  `,
}

// @TODO: Add offset example
export const Offset: StoryObj = {
  render: () => html`
    <atom-grid>
      <atom-col class="col" size="6" size-md="8">
        <div>size=6 & size-md=8</div>
      </atom-col>
      <atom-col class="col" size="6" size-md="4">
        <div>size=6 & size-md=4</div>
      </atom-col>
    </atom-grid>

    <style>
      ${GridCSS}
    </style>
  `,
}

// @TODO: Add Pull example
export const Pull: StoryObj = {
  render: () => html`
    <atom-grid>
      <atom-col class="col" size="6" size-md="8">
        <div>size=6 & size-md=8</div>
      </atom-col>
      <atom-col class="col" size="6" size-md="4">
        <div>size=6 & size-md=4</div>
      </atom-col>
    </atom-grid>

    <style>
      ${GridCSS}
    </style>
  `,
}

// @TODO: Add Push example
export const Push: StoryObj = {
  render: () => html`
    <atom-grid>
      <atom-col class="col" size="6" size-md="8">
        <div>size=6 & size-md=8</div>
      </atom-col>
      <atom-col class="col" size="6" size-md="4">
        <div>size=6 & size-md=4</div>
      </atom-col>
    </atom-grid>

    <style>
      ${GridCSS}
    </style>
  `,
}
