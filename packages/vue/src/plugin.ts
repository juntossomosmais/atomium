import { defineCustomElements } from '@juntossomosmais/atomium/loader'
import { Plugin } from 'vue'

function toKebabCase(str) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements(window, {
      ael: (el: any, eventName: string, cb: any, opts: any) =>
        el.addEventListener(
          eventName.startsWith('atom') ? toKebabCase(eventName) : eventName,
          cb,
          opts
        ),
      rel: (el: any, eventName: string, cb: any, opts: any) =>
        el.removeEventListener(
          eventName.startsWith('atom') ? toKebabCase(eventName) : eventName,
          cb,
          opts
        ),
      ce: (eventName: string, opts: any) =>
        new CustomEvent(
          eventName.startsWith('atom') ? toKebabCase(eventName) : eventName,
          opts
        ),
    } as any)
  },
}
