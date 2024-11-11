import { newSpecPage, SpecPage } from '@stencil/core/testing'

import { AtomStepsModal } from './steps-modal'

describe('atom-steps-modal', () => {
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
            primary-text="Next"
            secondary-text="Previous"
        >
        <div slot="step-1">Step 1 Content</div>
        <div slot="step-2">Step 2 Content</div>
        <div slot="step-3">Step 3 Content</div>
      </atom-steps-modal>`,
    })
  })

  it('should render modal with default values', async () => {
    expect(page.root).toEqualHtml(`
        <atom-steps-modal
          primary-text="Next"
          secondary-text="Previous"
          steps="3"
          trigger="open-modal-steps"
          steps-titles="Step 1, Step 2, Step 3"
        >
        <atom-modal
            trigger="open-modal-steps"
            alert-type=""
            class="atom-steps-modal"
            primary-text="Next"
            progress="0.3333333333333333"
            secondary-text="Previous"
            has-footer=""
            has-divider=""
            header-title="Step 1"
            part="steps-modal"
            >
            <div class="atom-steps-modal__step" style="display: block;">
                <div slot="step-1">Step 1 Content</div>
            </div>
            <div class="atom-steps-modal__step" style="display: none;">
                <div slot="step-2">Step 2 Content</div>
            </div>
            <div class="atom-steps-modal__step" style="display: none;">
                <div slot="step-3">Step 3 Content</div>
            </div>
        </atom-modal
            >
        </atom-steps-modal>
    `)
  })
  it('should change step when handlePrimary is called', async () => {
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

    expect(finishSpy).toHaveBeenCalledTimes(1)
  })

  it('should pass disable primary and disable secondary button to  atom modal when it is set', async () => {
    page.setContent(`
        <atom-button id="open-modal-steps">Open Modal</atom-button>
        <atom-steps-modal
            steps="3"
            trigger="open-modal-steps"
            steps-titles="Step 1, Step 2, Step 3"
            primary-text="Next"
            secondary-text="Previous"
            disable-primary-button
            disable-secondary-button
        >
        <div slot="step-1">Step 1 Content</div>
        <div slot="step-2">Step 2 Content</div>
        <div slot="step-3">Step 3 Content</div>
      </atom-steps-modal>
          `)
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-steps-modal
        primary-text="Next"
        secondary-text="Previous"
        steps="3"
        trigger="open-modal-steps"
        steps-titles="Step 1, Step 2, Step 3"
        disable-primary-button=""
        disable-secondary-button=""
      >
      <atom-modal
          trigger="open-modal-steps"
          alert-type=""
          class="atom-steps-modal"
          primary-text="Next"
          progress="0.3333333333333333"
          secondary-text="Previous"
          has-footer=""
          has-divider=""
          header-title="Step 1"
          disable-primary=""
          disable-secondary=""
          part="steps-modal"
          >
          <div class="atom-steps-modal__step" style="display: block;">
              <div slot="step-1">Step 1 Content</div>
          </div>
          <div class="atom-steps-modal__step" style="display: none;">
              <div slot="step-2">Step 2 Content</div>
          </div>
          <div class="atom-steps-modal__step" style="display: none;">
              <div slot="step-3">Step 3 Content</div>
          </div>
      </atom-modal
          >
      </atom-steps-modal>
  `)
  })

  it('should call stopImmediatePropagation when handleDidPresent, handleDidDismiss and handleCloseClick is called', async () => {
    const stopImmediatePropagationSpy = jest.fn()

    page.root?.addEventListener('atomDidPresent', stopImmediatePropagationSpy)
    page.root?.addEventListener('atomDidDismiss', stopImmediatePropagationSpy)
    page.root?.addEventListener('atomCloseClick', stopImmediatePropagationSpy)

    page.rootInstance.handleDidPresent(new Event('atomDidPresent'))
    page.rootInstance.handleDidDismiss(new Event('atomDidDismiss'))
    page.rootInstance.handleCloseClick(new Event('atomCloseClick'))

    expect(stopImmediatePropagationSpy).toHaveBeenCalledTimes(3)
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
    let stepShow = page.root?.querySelector('[style="display: block;"]')

    expect(stepShow).not.toBeNull()

    expect(stepShow?.querySelector('div')?.textContent).toBe('Step 1 Content')

    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomPrimaryClick'))

    await page.waitForChanges()

    stepShow = page.root?.querySelector('[style="display: block;"]')

    expect(stepShow).not.toBeNull()

    expect(stepShow?.querySelector('div')?.textContent).toBe('Step 2 Content')
  })

  it('should emit atomNextStep when handlePrimary is called', async () => {
    const nextStepSpy = jest.fn()

    page.root?.addEventListener('atomNextStep', nextStepSpy)

    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomPrimaryClick'))

    expect(nextStepSpy).toHaveBeenCalled()
    expect(
      nextStepSpy.mock.calls[nextStepSpy.mock.calls.length - 1][0].detail
    ).toBe(2)
  })

  it('should emit atomPreviousStep with current step when handleSecondary is called', async () => {
    const previousStepSpy = jest.fn()

    page.root?.addEventListener('atomPreviousStep', previousStepSpy)

    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomPrimaryClick'))
    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomSecondaryClick'))

    expect(previousStepSpy).toHaveBeenCalled()
    expect(
      previousStepSpy.mock.calls[previousStepSpy.mock.calls.length - 1][0]
        .detail
    ).toBe(1)
  })

  it('should open directly on a specific step when currentStep is set', async () => {
    page = await newSpecPage({
      components: [AtomStepsModal],
      html: `
        <atom-button id="open-modal-steps">Open Modal</atom-button>
        <atom-steps-modal
            steps="3"
            trigger="open-modal-steps"
            steps-titles="Step 1, Step 2, Step 3"
            current-step="2"
        >
        <div slot="step-0">Step 1 Content</div>
        <div slot="step-1">Step 2 Content</div>
        <div slot="step-2">Step 3 Content</div>
      </atom-steps-modal>`,
    })

    expect(
      page.root?.querySelector('atom-modal')?.getAttribute('header-title')
    ).toBe('Step 2')
  })
  it('should close modal when closeOnFinish is set', async () => {
    page = await newSpecPage({
      components: [AtomStepsModal],
      html: `
        <atom-button id="open-modal-steps">Open Modal</atom-button>
        <atom-steps-modal
            steps="3"
            trigger="open-modal-steps"
            steps-titles="Step 1, Step 2, Step 3"
            close-on-finish
        >
        <div slot="step-1">Step 1 Content</div>
        <div slot="step-2">Step 2 Content</div>
        <div slot="step-3">Step 3 Content</div>
      </atom-steps-modal>`,
    })

    page.rootInstance.handlePrimaryClick()
    page.rootInstance.handlePrimaryClick()
    page.rootInstance.handlePrimaryClick()

    await page.waitForChanges()

    expect(page.rootInstance.isOpen).toBe(false)
  })
  it('should emit atomIsOpenChange when modal is opened or closed', async () => {
    const isOpenChangeSpy = jest.fn()

    page.root?.addEventListener('atomIsOpenChange', isOpenChangeSpy)

    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomIsOpenChange', { detail: true }))

    await page.waitForChanges()

    expect(isOpenChangeSpy).toHaveBeenCalledTimes(1)
    expect(isOpenChangeSpy.mock.calls[0][0].detail).toBe(true)

    page.root
      ?.querySelector('atom-modal')
      ?.dispatchEvent(new CustomEvent('atomIsOpenChange', { detail: false }))

    await page.waitForChanges()

    expect(isOpenChangeSpy).toHaveBeenCalledTimes(2)
    expect(isOpenChangeSpy.mock.calls[1][0].detail).toBe(false)
  })
})
