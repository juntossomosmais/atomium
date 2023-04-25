import { newSpecPage } from '@stencil/core/testing'
import { AtomButton } from './button'

describe('AtomButton', () => {
  it('should render an ion-button element', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button></atom-button>',
    })

    expect(page.root.shadowRoot.querySelector('ion-button')).toBeTruthy()
  })

  it('should set color prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button color="primary"></atom-button>',
    })

    expect(page.rootInstance.color).toBe('primary')
  })

  it('should set fill prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button fill="outline"></atom-button>',
    })

    expect(page.rootInstance.fill).toBe('outline')
  })

  it('should set size prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button size="small"></atom-button>',
    })

    expect(page.rootInstance.size).toBe('small')
  })

  it('should set disabled prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button disabled></atom-button>',
    })

    expect(page.rootInstance.disabled).toBe(true)
  })

  it('should set type prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button type="submit"></atom-button>',
    })

    expect(page.rootInstance.type).toBe('submit')
  })
  it('should render the slot content', async () => {
    const labelText = 'Click me'

    const page = await newSpecPage({
      components: [AtomButton],
      html: `<atom-button>${labelText}</atom-button>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-button>
        <mock:shadow-root>
          <ion-button color="primary" fill="solid" type="button">
            <slot></slot>
          </ion-button>
        </mock:shadow-root>
        ${labelText}
      </atom-button>
    `)
  })

  it('emits atoClick event on button click', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button>Click</atom-button>',
    })

    await page.waitForChanges()

    const buttonEl = page.root.shadowRoot.querySelector('ion-button')
    const spy = jest.fn()

    page.root.addEventListener('atomClick', spy)
    buttonEl.click()

    page.root.dispatchEvent(new CustomEvent('atomClick'))

    expect(spy).toHaveBeenCalled()
  })
})
