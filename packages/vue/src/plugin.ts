import {
  applyPolyfills,
  defineCustomElements,
} from '@juntossomosmais/atomium/loader'
import { Plugin } from 'vue'

function toKebabCase(str: string) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements(window, {
        ce: (eventName: string, opts: any) =>
          new CustomEvent(
            eventName.startsWith('atom') ? toKebabCase(eventName) : eventName,
            opts
          ),
      } as any)
    })
  },
}
