import {
  applyPolyfills,
  defineCustomElements,
} from '@juntossomosmais/atomium/loader'
import { Plugin } from 'vue'

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements()
    })
  },
}
