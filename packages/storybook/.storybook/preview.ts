import { defineCustomElements } from 'atomium/loader'

defineCustomElements()

import '@ionic/core/css/core.css'
import './storybook.css'

export const parameters = {
  actions: { argTypesRegex: '^on|ato|ion.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
