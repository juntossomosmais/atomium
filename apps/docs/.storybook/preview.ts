import { defineCustomElements } from '@juntossomosmais/atomium/loader'

import { CustomViewports } from '@atomium/storybook-utils/custom-viewports'
import DocumentationTemplate from '@atomium/storybook-utils/templates/DocumentationTemplate.mdx'

import '@atomium/storybook-utils/preview.css'

import '@juntossomosmais/atomium-tokens/tokens.css'
import '@juntossomosmais/atomium/dist/core/core.css'

defineCustomElements()

const preview = {
  parameters: {
    viewport: {
      viewports: CustomViewports,
    },
    actions: { argTypesRegex: '^atom.*' },
    docs: {
      page: DocumentationTemplate,
    },
  },
}

export default preview
