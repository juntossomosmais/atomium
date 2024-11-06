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
  @Prop() primaryText?: string
  @Prop() secondaryText?: string
  @Prop() closeOnFinish?: boolean

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

  componentWillLoad() {
    const isInvalidCurrentStep =
      this.currentStep > this.steps ||
      this.currentStep < 1 ||
      this.currentStep === undefined

    if (isInvalidCurrentStep) {
      this.currentStep = 1
    }

    this.stepsTitlesArray = this.stepsTitles.split(',')
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

  private handleCloseClick = () => {
    this.isOpen = false
    this.currentStep = 1
    this.atomCloseClick.emit()
  }

  private handleSecondaryClick = () => {
    if (this.currentStep === 1) {
      this.atomCancel.emit()

      return
    }

    this.handleStep(this.currentStep - 1)
    this.atomPreviousStep.emit(this.currentStep)
  }

  private handleDidPresent = () => {
    this.isOpen = true
    this.atomDidPresent.emit(this.currentStep)
  }

  private handleDidDismiss = () => {
    this.isOpen = false
    this.atomDidDismiss.emit(this.currentStep)
    this.currentStep = 1
  }

  render() {
    return (
      <Host>
        <atom-modal
          trigger={this.trigger}
          alert-type=''
          primary-text={this.primaryText}
          secondary-text={this.secondaryText}
          progress={this.currentStep / this.steps}
          has-footer=''
          header-title={this.stepsTitlesArray[this.currentStep - 1].trim()}
          disable-secondary='false'
          disable-primary='false'
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