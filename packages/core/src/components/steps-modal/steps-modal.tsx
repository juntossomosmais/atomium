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
  @Prop({ mutable: true }) currentStep: number = 1
  @Prop() trigger?: string
  @Prop() stepsTitles: string
  @Prop({ mutable: true }) isOpen: boolean = false

  @Event() atomFinish: EventEmitter
  @Event() atomCancel: EventEmitter
  @Event() atomNextStep: EventEmitter
  @Event() atomPreviousStep: EventEmitter
  @Event() atomCloseClick: EventEmitter
  @Event() atomDidDismiss: EventEmitter
  @Event() atomDidPresent: EventEmitter

  @Element() el!: HTMLElement

  private stepsTitlesArray: string[] = []

  componentWillLoad() {
    if (
      this.currentStep > this.steps ||
      this.currentStep < 1 ||
      this.currentStep === undefined
    ) {
      this.currentStep = 1
    }

    this.stepsTitlesArray = this.stepsTitles.split(',')
  }

  private handleStep = (step: number) => {
    this.currentStep = step
  }

  private handlePrimaryClick = () => {
    if (this.currentStep === this.steps) {
      this.atomFinish.emit()
    } else {
      this.handleStep(this.currentStep + 1)
      this.atomNextStep.emit(this.currentStep)
      forceUpdate(this.el)
    }
  }

  private handleCloseClick = () => {
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

  render() {
    return (
      <Host>
        <atom-modal
          trigger={this.trigger}
          alert-type=''
          has-divider='false'
          primary-text='Primary'
          secondary-text='back'
          progress={this.currentStep / this.steps}
          has-footer=''
          header-title={this.stepsTitlesArray[this.currentStep - 1].trim()}
          disable-secondary='false'
          disable-primary='false'
          onAtomPrimaryClick={this.handlePrimaryClick}
          onAtomSecondaryClick={this.handleSecondaryClick}
          isOpen={this.isOpen}
          onAtomDidDismiss={this.atomDidDismiss.emit}
          onAtomDidPresent={this.atomDidPresent.emit}
          onAtomCloseClick={this.handleCloseClick}
        >
          {this.stepsTitlesArray.map((title, index) => (
            <div class={this.currentStep === index + 1 ? 'show' : 'hide'}>
              <slot name={`step-${index + 1}`}></slot>
            </div>
          ))}
        </atom-modal>
      </Host>
    )
  }
}
