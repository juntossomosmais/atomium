import { newSpecPage } from '@stencil/core/testing'
import { AtomGrid } from './grid'

describe('AtoGrid', () => {
  it('should render an ion-grid element', async () => {
    const page = await newSpecPage({
      components: [AtomGrid],
      html: '<atom-grid></atom-grid>',
    })

    expect(page.root?.shadowRoot?.querySelector('ion-grid')).toBeTruthy()
  })

  it('should set fixed prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomGrid],
      html: `
        <atom-grid fixed="true">
          <atom-row>
            <atom-col>1</atom-col>
            <atom-col>2</atom-col>
            <atom-col>3</atom-col>
          </atom-row>
        <atom-grid>
      `,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-grid fixed="true">
        <mock:shadow-root>
          <ion-grid class="atom-grid" fixed="">
            <slot></slot>
          </ion-grid>
        </mock:shadow-root>
        <atom-row>
          <atom-col>1</atom-col>
          <atom-col>2</atom-col>
          <atom-col>3</atom-col>
        </atom-row>
        <atom-grid>
          <mock:shadow-root>
            <ion-grid class="atom-grid">
              <slot></slot>
            </ion-grid>
          </mock:shadow-root>
        </atom-grid>
      </atom-grid>
    `)
  })
})
