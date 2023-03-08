import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

import readme from './readme.md'

export default {
  title: 'Components/Select',
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
}

export const AtoSelect = () => {
  const interfaceOptions = {
    Popover: 'popover',
    'Action Sheet': 'action-sheet',
  }
  const colorOptions = {
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
  const interfaceValue = select('Interface', interfaceOptions, 'popover')
  const colorValue = select('Color', colorOptions, 'primary')
  const modeValue = select('Mode', modeOptions, 'md')
  const cancelTextValue = text('Cancel Text', 'Cancel')
  const okTextValue = text('Ok Text', 'OK')
  const disabledValue = boolean('Disabled', false)
  const multipleValue = boolean('Multiple', false)
  const overlayDismissValue = boolean('Overlay Dismiss', true)
  const labelValue = text('Label', 'Select')
  const labelPositionValue = select(
    'Label Position',
    { Fixed: 'fixed', Stacked: 'stacked' },
    'stacked'
  )

  return `
    <ato-select
      name='select'
      placeholder='Select an option'
      interface=${interfaceValue}
      color=${colorValue}
      mode=${modeValue}
      cancelText=${cancelTextValue}
      okText=${okTextValue}
      disabled=${disabledValue}
      multiple=${multipleValue}
      overlayDismiss=${overlayDismissValue}
      label-text=${labelValue}
      label-position=${labelPositionValue}
    />

    <script>
      document.querySelector('ato-select').addEventListener('atoChange', (e) => {
        console.log('<ato-select> atoChange:', e.detail)
      })

      document.querySelector('ato-select').addEventListener('atoFocus', () => {
        console.log("<ato-select> atoFocus using focus!")
      })

      document.querySelector('ato-select').addEventListener('atoBlur', () => {
        console.log("<ato-select> atoBlur using blur!")
      })

      document.querySelector('ato-select').addEventListener('atoCancel', () => {
        console.log("<ato-select> atoCancel using cancel!")
      })

      document.querySelector('ato-select').addEventListener('atoDimiss', () => {
        console.log("<ato-select> atoDimiss using dismiss!")
      })

      document.querySelector('ato-select').options = [
        { value: 'Red', disabled: false },
        { value: 'Green', disabled: false },
        { value: 'Blue', disabled: false },
        { value: 'Disabled example', selected: false, disabled: true },
      ]
    </script>
  `
}
