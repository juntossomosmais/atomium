import { defineCustomElements } from '../../components/loader'

defineCustomElements()

import '@ionic/core/css/core.css'
import './storybook.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
