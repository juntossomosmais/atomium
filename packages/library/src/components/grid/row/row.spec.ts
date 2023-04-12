import { newSpecPage } from '@stencil/core/testing'
import { AtoRow } from './row'

describe('AtoRow', () => {
  it('should render an at-row element', async () => {
    const page = await newSpecPage({
      components: [AtoRow],
      html: '<ato-row></ato-row>',
    })

    expect(page.root).toEqualHtml(`
      <ato-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ato-row>
    `)
  })
})
