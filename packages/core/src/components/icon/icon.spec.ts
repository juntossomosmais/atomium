import { SpecPage, newSpecPage } from '@stencil/core/testing'

import { AtomIcon } from './icon'

const URL_MOCK = 'https://atomium.juntossomosmais.com.br/icons'

describe('atom-icon', () => {
  let page: SpecPage

  beforeEach(async () => {
    page = await newSpecPage({
      components: [AtomIcon],
      html: `<atom-icon icon="heart" color="primary" size="large"></atom-icon>`,
    })
  })

  it('should size attributte to be filed with size prop when its an enum type', () => {
    expect(page?.root?.shadowRoot).toEqualHtml(`
      <ion-icon color="primary" icon="${URL_MOCK}/heart.svg" size="large"></ion-icon>
    `)
  })

  it('should style font-size to be filed with size prop when its an number type', async () => {
    page?.root?.setAttribute('size', '10')

    await page.waitForChanges()

    expect(page?.root?.shadowRoot).toEqualHtml(`
      <ion-icon color="primary" icon="${URL_MOCK}/heart.svg" size="" style="font-size: 10px;"></ion-icon>
    `)
  })
})
