import { CustomViewports } from '@atomium/storybook-utils/custom-viewports'
import DocumentationTemplate from '@atomium/storybook-utils/templates/DocumentationTemplate.mdx'

import '@atomium/storybook-utils/preview.css'

import '@juntossomosmais/atomium-tokens/tokens.css'
import '@juntossomosmais/atomium/core.css'

const preview = {
  parameters: {
    viewport: {
      options: CustomViewports,
    },
    docs: {
      page: DocumentationTemplate,
    },
  },

  tags: ['autodocs']
}

export default preview
