import { newSpecPage } from '@stencil/core/testing'
import { AtomRow } from './row'

describe('AtomRow', () => {
  it('should render an at-row element', async () => {
    const page = await newSpecPage({
      components: [AtomRow],
      html: '<atom-row></atom-row>',
    })

    expect(page.root).toEqualHtml(`
      <atom-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </atom-row>
    `)
  })
})
