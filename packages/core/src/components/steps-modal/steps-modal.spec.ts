import { newSpecPage, SpecPage } from '@stencil/core/testing'

import { AtomStepsModal } from './steps-modal'

Object.defineProperty(document.body, 'classList', {
  value: {
    add: jest.fn(),
    remove: jest.fn(),
  },
})

Object.defineProperty(document.documentElement, 'classList', {
  value: {
    add: jest.fn(),
    remove: jest.fn(),
  },
})

describe('atom-modal', () => {
  let page: SpecPage

  beforeEach(async () => {
    page = await newSpecPage({
      components: [AtomStepsModal],
      html: `
        <atom-button id="open-modal-steps">Open Modal</atom-button>
        <atom-steps-modal
            steps="3"
            trigger="open-modal-steps"
            steps-titles="Step 1, Step 2, Step 3"
        >
        <div slot="step-0">Step 1 Content</div>
        <div slot="step-1">Step 2 Content</div>
        <div slot="step-2">Step 3 Content</div>
      </atom-steps-modal>`,
    })
  })

  it('should render modal with default values', async () => {
    expect(page.root).toEqualHtml(`
        <atom-steps-modal
        steps="3"
        trigger="open-modal-steps"
        steps-titles="Step 1, Step 2, Step 3"
        >
        <atom-modal
            trigger="open-modal-steps"
            alert-type=""
            has-divider="false"
            primary-text="Primary"
            secondary-text="back"
            progress="0"
            has-footer=""
            header-title="Step 1"
            disable-secondary="false"
            disable-primary="false"
            >
            <div class="show">
                <div slot="step-0">Step 1 Content</div>
            </div>
            <div class="hide">
                <div slot="step-1">Step 2 Content</div>
            </div>
            <div class="hide">
                <div slot="step-2">Step 3 Content</div>
            </div>
        </atom-modal
            >
        </atom-steps-modal>
    `)
  })
  it('should change step when handlePrimay is called', async () => {
    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomPrimaryClick'))
    await page.waitForChanges()

    expect(
      page.root?.querySelector('atom-modal')?.getAttribute('header-title')
    ).toBe('Step 2')

    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomPrimaryClick'))

    await page.waitForChanges()

    expect(
      page.root?.querySelector('atom-modal')?.getAttribute('header-title')
    ).toBe('Step 3')
  })

  it('should change step when handleSecondary is called', async () => {
    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomPrimaryClick'))
    await page.waitForChanges()

    expect(
      page.root?.querySelector('atom-modal')?.getAttribute('header-title')
    ).toBe('Step 2')

    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomSecondaryClick'))

    await page.waitForChanges()

    expect(
      page.root?.querySelector('atom-modal')?.getAttribute('header-title')
    ).toBe('Step 1')
  })

  it('should emit atomFinish when last step is reached', async () => {
    const finishSpy = jest.fn()

    page.root?.addEventListener('atomFinish', finishSpy)

    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomPrimaryClick'))
    await page.waitForChanges()
    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomPrimaryClick'))
    await page.waitForChanges()
    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomPrimaryClick'))
    await page.waitForChanges()

    expect(finishSpy).toHaveBeenCalled()
  })

  it('should not change step when handleSecondary is called on first step', async () => {
    const cancelSpy = jest.fn()

    page.root?.addEventListener('atomCancel', cancelSpy)
    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomSecondaryClick'))
    await page.waitForChanges()

    expect(
      page.root?.querySelector('atom-modal')?.getAttribute('header-title')
    ).toBe('Step 1')
    expect(cancelSpy).toHaveBeenCalled()
  })
  it('should apply show class to current step and hide to others', async () => {
    let stepShow = page.root?.querySelector('.show')

    expect(stepShow).not.toBeNull()

    expect(stepShow?.querySelector('div')?.textContent).toBe('Step 1 Content')

    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomPrimaryClick'))

    await page.waitForChanges()

    stepShow = page.root?.querySelector('.show')

    expect(stepShow).not.toBeNull()

    expect(stepShow?.querySelector('div')?.textContent).toBe('Step 2 Content')
  })
})
