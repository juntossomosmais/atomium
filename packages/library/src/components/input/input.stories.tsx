import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

import readme from './readme.md'

export default {
  title: 'Components/Input',
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
}

export const AtoInput = () => {
  const colorOptions = {
    Default: '',
    Primary: 'primary',
    Secondary: 'secondary',
    Tertiary: 'tertiary',
    Success: 'success',
    Warning: 'warning',
    Danger: 'danger',
    Light: 'light',
    Medium: 'medium',
    Dark: 'dark',
  }
  const modeOptions = {
    IOS: 'ios',
    MD: 'md',
  }
  const expandOptions = {
    None: '',
    Block: 'block',
  }
  const fillOptions = {
    Default: 'default',
    Outline: 'outline',
    Solid: 'solid',
  }
  const sizeOptions = {
    Small: 'small',
    Default: '',
    Large: 'large',
  }
  const color = select('Color', colorOptions, 'Default')
  const mode = select('Mode', modeOptions, 'md')
  const expand = select('Expand', expandOptions, '')
  const fill = select('Fill', fillOptions, 'Default')
  const size = select('Size', sizeOptions, '')
  const disabled = boolean('Disabled', false)
  const placeholder = text('Placeholder', 'Enter text')
  const type = select('Type', { Text: 'text', Password: 'password' }, 'text')
  const autofocus = boolean('Autofocus', false)
  const clearInput = boolean('Clear Input', false)
  const clearOnEdit = boolean('Clear On Edit', false)
  const pattern = text('Pattern', '')
  const readonly = boolean('Readonly', false)
  const required = boolean('Required', false)
  const spellcheck = boolean('Spellcheck', false)
  const autocapitalize = select(
    'Autocapitalize',
    {
      None: 'none',
      Sentences: 'sentences',
      Words: 'words',
      Characters: 'characters',
    },
    'none'
  )
  const autocomplete = select('Autocomplete', { On: 'on', Off: 'off' }, 'on')
  const inputmode = select(
    'Inputmode',
    {
      None: 'none',
      Decimal: 'decimal',
      Numeric: 'numeric',
      Tel: 'tel',
      Search: 'search',
      Text: 'text',
      Url: 'url',
      Email: 'email',
    },
    'none'
  )
  const iconStart = text('Icon Start', '')
  const iconEnd = text('Icon End', '')

  const positionOptions = {
    Fixed: 'fixed',
    Stacked: 'stacked',
    Floating: 'floating',
  }

  const labelPosition = select('Label Position', positionOptions, 'floating')
  const labelText = text('Label Text', 'Label Text')

  return `
    <ato-input
      label-text="${labelText}"
      label-position="${labelPosition}"
      fill="${fill}"
      color="${color}"
      mode="${mode}"
      expand="${expand}"
      size="${size}"
      disabled="${disabled}"
      placeholder="${placeholder}"
      type="${type}"
      autofocus="${autofocus}"
      clear-input="${clearInput}"
      clear-on-edit="${clearOnEdit}"
      pattern="${pattern}"
      readonly="${readonly}"
      required="${required}"
      spellcheck="${spellcheck}"
      autocapitalize="${autocapitalize}"
      autocomplete="${autocomplete}"
      inputmode="${inputmode}"
      icon-start="${iconStart}"
      icon-end="${iconEnd}"
    />

    <script>
      document.querySelector('ato-input').addEventListener('atoChange', (e) => {
        console.log('<ato-input> atoChange:', e.detail.value)
      })

      document.querySelector('ato-input').addEventListener('atoFocus', () => {
        console.log("<ato-input> atoFocus using focus!")
      })

      document.querySelector('ato-input').addEventListener('atoBlur', () => {
        console.log("<ato-input> atoBlur using blur!")
      })
    </script>

  `
}
