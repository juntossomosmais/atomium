import { newSpecPage } from '@stencil/core/testing'

import { AtoIcon } from './icon'

describe('ato-icon', () => {
  it('should render ion-icon element', async () => {
    const page = await newSpecPage({
      components: [AtoIcon],
      html: `<ato-icon icon="heart" color="primary" size="large"></ato-icon>`,
    })

    if (!page?.root?.shadowRoot) {
      throw new Error('page.root is undefined')
    }

    const ionIcon = page.root.shadowRoot.querySelector('ion-icon')
    expect(ionIcon).toBeTruthy()
  })
})
