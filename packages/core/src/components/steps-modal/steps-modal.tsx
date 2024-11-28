import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  forceUpdate,
  h,
} from '@stencil/core'

@Component({
  tag: 'atom-steps-modal',
  styleUrl: 'steps-modal.scss',
  shadow: false,
})
export class AtomStepsModal {
  @Prop() steps: number
  @Prop({ mutable: true }) currentStep = 1
  @Prop() trigger?: string
  @Prop() stepsTitles: string
  @Prop({ mutable: true }) isOpen = false
  @Prop() closeOnFinish?: boolean
  @Prop() disablePrimaryButton?: boolean
  @Prop() disableSecondaryButton?: boolean
  @Prop() lockedInitialStep?: number
  @Prop() primaryButtonTextsByStep: string
  @Prop() secondaryButtonTextsByStep: string

  @Event() atomFinish: EventEmitter
  @Event() atomCancel: EventEmitter
  @Event() atomNextStep: EventEmitter
  @Event() atomPreviousStep: EventEmitter
  @Event() atomCloseClick: EventEmitter
  @Event() atomDidDismiss: EventEmitter
  @Event() atomDidPresent: EventEmitter
  @Event() atomIsOpenChange: EventEmitter

  @Element() el!: HTMLElement

  private stepsTitlesArray: string[] = []
  private primaryButtonTextsArray: string[] = []
  private secondaryButtonTextsArray: string[] = []

  componentWillLoad() {
    const isInvalidCurrentStep =
      this.currentStep > this.steps ||
      this.currentStep < 1 ||
      this.currentStep === undefined

    if (isInvalidCurrentStep) {
      this.currentStep = 1
    }

    if (this.lockedInitialStep && this.lockedInitialStep >= 1) {
      this.currentStep = this.lockedInitialStep
    }

    this.stepsTitlesArray = this.stepsTitles.split(',')
    this.primaryButtonTextsArray = this.primaryButtonTextsByStep.split(',')
    this.secondaryButtonTextsArray = this.secondaryButtonTextsByStep.split(',')
  }

  private handleStep = (step: number) => {
    this.currentStep = step
  }

  private handleNextStep = () => {
    const { atomNextStep, el, currentStep, handleStep } = this

    handleStep(currentStep + 1)
    atomNextStep.emit(currentStep + 1)
    forceUpdate(el)
  }

  private handleFinish = () => {
    this.atomFinish.emit()

    if (this.closeOnFinish) {
      this.isOpen = false
    }
  }

  private handlePrimaryClick = () => {
    const { currentStep, steps, handleNextStep, handleFinish } = this

    return currentStep === steps ? handleFinish() : handleNextStep()
  }

  private handleCloseClick = (e: Event) => {
    e.stopImmediatePropagation()
    this.isOpen = false
    this.atomCloseClick.emit()
  }

  private handleSecondaryClick = () => {
    if (this.currentStep === this.lockedInitialStep) {
      this.atomCancel.emit()

      return
    }

    if (this.currentStep === 1) {
      this.atomCancel.emit()

      return
    }

    this.handleStep(this.currentStep - 1)
    this.atomPreviousStep.emit(this.currentStep)
  }

  private handleDidPresent = (e: Event) => {
    e.stopImmediatePropagation()
    this.isOpen = true
    this.atomDidPresent.emit(this.currentStep)
  }

  private handleDidDismiss = (e: Event) => {
    e.stopImmediatePropagation()
    this.isOpen = false
    this.atomDidDismiss.emit(this.currentStep)
    this.currentStep = this.lockedInitialStep ?? 1
  }

  private get secondaryButtonText() {
    return this.secondaryButtonTextsArray[this.currentStep - 1].trim()
  }

  private get primaryButtonText() {
    return this.primaryButtonTextsArray[this.currentStep - 1].trim()
  }

  private get progress() {
    if (!this.lockedInitialStep) return this.currentStep / this.steps

    const currentStepAdjustedAsInitial =
      this.currentStep - this.lockedInitialStep + 1
    const stepsQuantityAdjustedToCustomInitial =
      this.steps + 1 - this.lockedInitialStep

    return currentStepAdjustedAsInitial / stepsQuantityAdjustedToCustomInitial
  }

  render() {
    return (
      <Host>
        <atom-modal
          trigger={this.trigger}
          alert-type=''
          primary-button-text={this.primaryButtonText}
          secondary-button-text={this.secondaryButtonText}
          progress={this.progress}
          has-footer=''
          header-title={this.stepsTitlesArray[this.currentStep - 1].trim()}
          disable-primary-button={this.disablePrimaryButton}
          disable-secondary-button={this.disableSecondaryButton}
          onAtomPrimaryClick={this.handlePrimaryClick}
          onAtomSecondaryClick={this.handleSecondaryClick}
          is-open={this.isOpen}
          has-divider
          onAtomDidDismiss={this.handleDidDismiss}
          onAtomDidPresent={this.handleDidPresent}
          onAtomCloseClick={this.handleCloseClick}
          onAtomIsOpenChange={(e) => {
            e.stopImmediatePropagation()
            this.atomIsOpenChange.emit(e.detail)
          }}
          class='atom-steps-modal'
          part='steps-modal'
        >
          {this.stepsTitlesArray.map((title, index) => (
            <div
              class='atom-steps-modal__step'
              style={{
                display: this.currentStep === index + 1 ? 'block' : 'none',
              }}
            >
              <slot name={`step-${index + 1}`}></slot>
            </div>
          ))}
        </atom-modal>
      </Host>
    )
  }
}
