import { newSpecPage, SpecPage } from '@stencil/core/testing'

import { AtomModal } from './modal'

describe('atom-modal', () => {
  let page: SpecPage

  beforeEach(async () => {
    page = await newSpecPage({
      components: [AtomModal],
      html: `
        <atom-modal
          trigger="button"
          primary-text="Primary"
          secondary-text="Secondary"
          disable-primary="true"
        >
          Modal content
        </atom-modal>`,
    })
  })

  it('should render modal with default values', async () => {
    expect(page.root).toEqualHtml(`
      <atom-modal primary-text="Primary" secondary-text="Secondary" trigger="button" disable-primary="true">
        <ion-modal aria-describedby="atom-modal__content" aria-labelledby="atom-modal__header-title" class="atom-modal" trigger="button">
          <header class="atom-modal__header">
            <div id="atom-modal__header-title"></div>
            <atom-button aria-label="close" class="atom-modal__close" fill="clear" shape="circle">
              <atom-icon aria-hidden="true" class="atom-modal__close-icon" icon="close"></atom-icon>
            </atom-button>
          </header>
          <div class="atom-modal__content" id="atom-modal__content">
            Modal content
          </div>
          <footer class="atom-modal__footer">
            <atom-button class="atom-modal__btn-action atom-modal__btn-action--secondary" color="secondary" fill="outline">
              Secondary
            </atom-button>
            <atom-button class="atom-modal__btn-action atom-modal__btn-action--primary" color="primary" disabled="">
              Primary
            </atom-button>
          </footer>
        </ion-modal>
      </atom-modal>
    `)
  })

  it('should render header slot when headerTitle is not passed', async () => {
    await page.setContent(`
      <atom-modal>
        Modal content
        <div slot="header">Custom Header</div>
      </atom-modal>
    `)

    expect(page.root?.textContent).toContain('Custom Header')
  })

  it('should render header from prop when headerTitle is passed', async () => {
    await page.setContent(`
      <atom-modal header-title="Header from prop">
        Modal content
        <div slot="header">Custom Header</div>
      </atom-modal>
    `)

    expect(page.root?.innerHTML).not.toContain('<div hidden="" slot="header">')
    expect(page.root?.textContent).toContain('Header from prop')
  })

  it('should render icon type when alertType is passed', async () => {
    await page.setContent(`
      <atom-modal alert-type="error">
        Modal content
      </atom-modal>
    `)

    expect(page.root?.innerHTML).toContain(
      'atom-modal__icon-type atom-modal__icon-type--error'
    )
  })

  it('should render progress bar when progress is passed', async () => {
    await page.setContent(`
      <atom-modal progress="0.5">
        Modal content
      </atom-modal>
    `)

    expect(page.root?.innerHTML).toContain(
      '<ion-progress-bar value="0.5" color="primary">'
    )
  })

  it('should content contain divided class', async () => {
    await page.setContent(`
      <atom-modal has-divider="true">
        Modal content
      </atom-modal>
    `)

    expect(page.root?.innerHTML).toContain('atom-modal__content--divided')
  })

  it('should emit click events when clicked', async () => {
    const closeButton = page.root?.querySelector('.atom-modal__close')
    const primaryButton = page.root?.querySelector(
      '.atom-modal__btn-action--primary'
    )
    const secondaryButton = page.root?.querySelector(
      '.atom-modal__btn-action--secondary'
    )
    const spyClose = jest.fn()
    const spyPrimary = jest.fn()
    const spySecondary = jest.fn()

    page.rootInstance.modal = {
      dismiss: jest.fn(),
    }
    page.root?.addEventListener('atomCloseClick', spyClose)
    page.root?.addEventListener('atomPrimaryClick', spyPrimary)
    page.root?.addEventListener('atomSecondaryClick', spySecondary)

    closeButton?.dispatchEvent(new Event('click'))
    primaryButton?.dispatchEvent(new Event('click'))
    secondaryButton?.dispatchEvent(new Event('click'))

    expect(spyClose).toHaveBeenCalled()
    expect(spyPrimary).toHaveBeenCalled()
    expect(spySecondary).toHaveBeenCalled()
  })
})
