import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

import readme from './readme.md'

export default {
  title: 'Components/Button',
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
}

export const AtoButton = () => {
  const colorOptions = {
    Default: '',
    Red: 'red',
    Green: 'green',
    Blue: 'blue',
  }
  const fillOptions = {
    Solid: 'solid',
    Outline: 'outline',
    Clear: 'clear',
  }
  const sizeOptions = {
    Default: 'default',
    Small: 'small',
    Large: 'large',
  }
  const color = select('Color', colorOptions, '')
  const fill = select('Fill', fillOptions, 'solid')
  const size = select('Size', sizeOptions, 'default')
  const disabled = boolean('Disabled', false)
  const type = select(
    'Type',
    { Button: 'button', Submit: 'submit', Reset: 'reset' },
    'button'
  )

  return `
    <ato-button
      color=${color}
      fill=${fill}
      size=${size}
      type=${type}
      disabled=${disabled}>
        ${text('Label', 'Click me')}
    </ato-button>`
}
