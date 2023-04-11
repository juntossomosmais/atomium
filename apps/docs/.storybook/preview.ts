import { defineCustomElements } from 'atomium/loader'

import DocumentationTemplate from './DocumentationTemplate.mdx'

import 'atomium-tokens/dist/styles.css'
import 'atomium/dist/atomium/atomium.css'

defineCustomElements()

const customViewports = {
  small: {
    name: 'Small',
    styles: {
      height: '600px',
      width: '576px',
    },
  },
  medium: {
    name: 'Medium',
    styles: {
      height: '600px',
      width: '768px',
    },
  },
  large: {
    name: 'Large',
    styles: {
      height: '600px',
      width: '992px',
    },
  },
  xlarge: {
    name: 'Extra Large',
    styles: {
      height: '600px',
      width: '1200px',
    },
  },
}

const preview = {
  parameters: {
    viewport: {
      viewports: customViewports,
    },
    actions: { argTypesRegex: '^ato.*' },
    docs: {
      page: DocumentationTemplate,
    },
  },
}

export default preview
