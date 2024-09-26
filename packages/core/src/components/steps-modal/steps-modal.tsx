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
  @Prop() currentStep: number = 0
  @Prop() trigger?: string
  @Prop() stepsTitles: string

  @Event() atomFinish: EventEmitter

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
      forceUpdate(this.el)
    }
  }

  private handleSecondaryClick = () => {
    if (this.currentStep === 0) {
      return
    }

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
          header-title={this.stepsTitlesArray[this.currentStep]}
          disable-secondary='false'
          disable-primary='false'
          onAtomPrimaryClick={this.handlePrimaryClick}
          onAtomSecondaryClick={this.handleSecondaryClick}
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
