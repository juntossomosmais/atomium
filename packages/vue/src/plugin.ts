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
        ael: (el: any, eventName: string, cb: any, opts: any) =>
          el.addEventListener(eventName.toLowerCase(), cb, opts),
        rel: (el: any, eventName: string, cb: any, opts: any) =>
          el.removeEventListener(eventName.toLowerCase(), cb, opts),
        ce: (eventName: string, opts: any) =>
          new CustomEvent(toKebabCase(eventName), opts),
      } as any)
    })
  },
}
