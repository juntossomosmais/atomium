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
  @Prop() steps: number = 0
  @Prop({ mutable: true }) currentStep: number = 0
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
    this.stepsTitlesArray = this.stepsTitles.split(',')
  }

  private handleStep = (step: number) => {
    this.currentStep = step
  }

  private handlePrimaryClick = () => {
    if (this.currentStep === this.steps - 1) {
      this.atomFinish.emit()
    } else {
      this.handleStep(this.currentStep + 1)
      this.atomNextStep.emit()
      forceUpdate(this.el)
    }
  }

  private handleCloseClick = () => {
    this.currentStep = 0
    this.atomCloseClick.emit()
  }

  private handleSecondaryClick = () => {
    if (this.currentStep === 0) {
      this.atomCancel.emit()

      return
    }

    this.atomPreviousStep.emit()
    this.handleStep(this.currentStep - 1)
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
          header-title={this.stepsTitlesArray[this.currentStep].trim()}
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
            <div class={this.currentStep === index ? 'show' : 'hide'}>
              <slot name={`step-${index}`}></slot>
            </div>
          ))}
        </atom-modal>
      </Host>
    )
  }
}
