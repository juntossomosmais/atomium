import { toKebabCase } from '@atomium/script-utils/to-kebab-case'
import { defineCustomElements } from '@juntossomosmais/atomium/loader'
import { Plugin } from 'vue'

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements(window, {
      ce: (eventName: string, opts: any) =>
        new CustomEvent(
          eventName.startsWith('atom') ? toKebabCase(eventName) : eventName,
          opts
        ),
    } as any)
  },
}
