import { defineCustomElements } from 'atomium/loader'

import '@ionic/core/css/core.css'
import 'atomium-tokens/dist/styles.css'

import './preview.css'

defineCustomElements()

export const parameters = {
  actions: { argTypesRegex: '^on|ato|ion.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
