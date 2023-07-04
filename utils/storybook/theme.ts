import { create } from '@storybook/theming'

const $blue = 'rgb(0 127 216)'
const $grayDark = 'rgb(33 33 33)'
const $orange = 'rgb(255 125 0)'
const $transparent = 'transparent'
const $white = 'rgb(255 255 255 / 0.9)'
const $white2 = 'rgb(255 255 255 / 0.8)'
const $white3 = 'rgb(240 240 240 / 0.9)'

const $colorPrimary = $blue
const $colorSecondary = $orange

const $borderRadius = 2

export default create({
  base: 'light',

  colorPrimary: $colorPrimary,
  colorSecondary: $colorSecondary,

  // UI
  appBg: $white,
  appContentBg: $white2,
  appBorderColor: $transparent,
  appBorderRadius: $borderRadius,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: $grayDark,
  textInverseColor: $white,

  // Toolbar default and active colors
  barTextColor: $white3,
  barSelectedColor: $white,
  barBg: $colorPrimary,

  // Form colors
  inputBg: $white,
  inputBorder: $white2,
  inputTextColor: $grayDark,
  inputBorderRadius: $borderRadius,

  brandTitle: 'Atomium - Design System',
  brandUrl: 'https://www.juntossomosmais.com.br/',
  brandImage:
    'https://user-images.githubusercontent.com/3603793/77353251-67234580-6d1f-11ea-83dc-ad35695ba582.png',
})
