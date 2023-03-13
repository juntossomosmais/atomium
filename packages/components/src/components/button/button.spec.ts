import { newSpecPage } from '@stencil/core/testing'
import { AtoButton } from './button'

describe('AtoButton', () => {
  it('should render an ion-button element', async () => {
    const page = await newSpecPage({
      components: [AtoButton],
      html: '<ato-button></ato-button>',
    })

    expect(page.root.shadowRoot.querySelector('ion-button')).toBeTruthy()
  })

  it('should set color prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtoButton],
      html: '<ato-button color="primary"></ato-button>',
    })

    expect(page.rootInstance.color).toBe('primary')
  })

  it('should set fill prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtoButton],
      html: '<ato-button fill="outline"></ato-button>',
    })

    expect(page.rootInstance.fill).toBe('outline')
  })

  it('should set size prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtoButton],
      html: '<ato-button size="small"></ato-button>',
    })

    expect(page.rootInstance.size).toBe('small')
  })

  it('should set disabled prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtoButton],
      html: '<ato-button disabled></ato-button>',
    })

    expect(page.rootInstance.disabled).toBe(true)
  })

  it('should set type prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtoButton],
      html: '<ato-button type="submit"></ato-button>',
    })

    expect(page.rootInstance.type).toBe('submit')
  })
  it('should render the slot content', async () => {
    const labelText = 'Click me'

    const page = await newSpecPage({
      components: [AtoButton],
      html: `<ato-button>${labelText}</ato-button>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ato-button color="primary" fill="solid" size="default">
        <mock:shadow-root>
          <ion-button class="btn-default btn-solid-primary" type="button">
            <slot></slot>
          </ion-button>
        </mock:shadow-root>
        ${labelText}
      </ato-button>
    `)
  })

  it('emits atoClick event on button click', async () => {
    const page = await newSpecPage({
      components: [AtoButton],
      html: '<ato-button>Click</ato-button>',
    })

    await page.waitForChanges()

    const buttonEl = page.root.shadowRoot.querySelector('ion-button')
    const spy = jest.fn()

    page.root.addEventListener('atoClick', spy)
    buttonEl.click()

    page.root.dispatchEvent(new CustomEvent('atoClick'))

    expect(spy).toHaveBeenCalled()
  })
})
