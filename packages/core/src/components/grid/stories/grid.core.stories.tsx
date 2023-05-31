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

export const AutoSize: StoryObj = {
  render: () => html`
    <atom-grid>
      <atom-col class="col" size="auto">
        <div>size=auto</div>
      </atom-col>
      <atom-col class="col" size="auto">
        <div>size=auto</div>
      </atom-col>
      <atom-col class="col">
        <div>default</div>
      </atom-col>
      <atom-col class="col">
        <div>default</div>
      </atom-col>
      <atom-col class="col" size="auto">
        <div>size=auto</div>
      </atom-col>
      <atom-col class="col" size="auto">
        <div>size=auto</div>
      </atom-col>
    </atom-grid>

    <style>
      ${GridCSS}
    </style>
  `,
}

export const Offset: StoryObj = {
  render: () => html`
    <p><b>Column 2</b> has <code>offset</code> set to <code>"3"</code></p>
    <atom-grid>
      <atom-col class="col" size="3">
        <div>1</div>
      </atom-col>
      <atom-col class="col" offset="3">
        <div>2</div>
      </atom-col>
      <atom-col class="col">
        <div>3</div>
      </atom-col>
    </atom-grid>

    <p><b>Column 1</b> has <code>offset</code> set to <code>"4"</code></p>
    <atom-grid>
      <atom-col class="col" size="2" offset="4">
        <div>1</div>
      </atom-col>
      <atom-col class="col" size="2">
        <div>2</div>
      </atom-col>
    </atom-grid>

    <style>
      ${GridCSS}
    </style>
  `,
}

export const PushAndPull: StoryObj = {
  render: () => html`
    <p>
      <b>Column 1</b> has <code>push</code> set to <code>"4"</code> and
      <b>column 2</b> has <code>pull</code> set to <code>"4"</code>
    </p>

    <atom-grid>
      <atom-col class="col" push="4">
        <div>1</div>
      </atom-col>
      <atom-col class="col" pull="4">
        <div>2</div>
      </atom-col>
      <atom-col class="col">
        <div>3</div>
      </atom-col>
    </atom-grid>

    <style>
      ${GridCSS}
    </style>
  `,
}
