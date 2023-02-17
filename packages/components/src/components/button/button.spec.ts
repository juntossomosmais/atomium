import { newSpecPage } from '@stencil/core/testing'
import { AtButton } from './button'

describe('AtButton', () => {
  it('should render an ion-button element', async () => {
    const page = await newSpecPage({
      components: [AtButton],
      html: '<at-button></at-button>',
    })

    expect(page.root.shadowRoot.querySelector('ion-button')).toBeTruthy()
  })

  it('should set color prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtButton],
      html: '<at-button color="red"></at-button>',
    })

    expect(page.rootInstance.color).toBe('red')
  })

  it('should set fill prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtButton],
      html: '<at-button fill="outline"></at-button>',
    })

    expect(page.rootInstance.fill).toBe('outline')
  })

  it('should set size prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtButton],
      html: '<at-button size="small"></at-button>',
    })

    expect(page.rootInstance.size).toBe('small')
  })

  it('should set disabled prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtButton],
      html: '<at-button disabled></at-button>',
    })

    expect(page.rootInstance.disabled).toBe(true)
  })

  it('should set type prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtButton],
      html: '<at-button type="submit"></at-button>',
    })

    expect(page.rootInstance.type).toBe('submit')
  })
  it('should render the slot content', async () => {
    const labelText = 'Click me'

    const page = await newSpecPage({
      components: [AtButton],
      html: `<at-button>${labelText}</at-button>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualLightHtml(`
      <at-button fill="solid" size="default">
        ${labelText}
      </at-button>
    `)
  })
})
