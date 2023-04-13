import { newSpecPage } from '@stencil/core/testing'
import { AtoGrid } from './grid'

describe('AtoGrid', () => {
  it('should render an ion-grid element', async () => {
    const page = await newSpecPage({
      components: [AtoGrid],
      html: '<ato-grid></ato-grid>',
    })

    expect(page.root.querySelector('ion-grid')).toBeTruthy()
  })

  it('should set fixed prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtoGrid],
      html: `
        <ato-grid fixed="true">
          <ato-row>
            <ato-col>1</ato-col>
            <ato-col>2</ato-col>
            <ato-col>3</ato-col>
          </ato-row>
        <ato-grid>
      `,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ato-grid fixed="true">
        <ion-grid fixed="">
          <ato-row>
            <ato-col>1</ato-col>
            <ato-col>2</ato-col>
            <ato-col>3</ato-col>
          </ato-row>
          <ato-grid>
            <ion-grid></ion-grid>
          </ato-grid>
        </ion-grid>
      </ato-grid>
    `)
  })
})
