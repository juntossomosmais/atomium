import { Component, Host, Prop, h } from '@stencil/core'

import { isMobile } from '../../utils/screens'

@Component({
  tag: 'atom-stepper',
  styleUrl: 'stepper.scss',
  shadow: true,
})
export class AtomStepper {
  @Prop() steps: {
    title: string
    completed: boolean
  }[]
  @Prop() stepTitle?: string
  @Prop() activeStep: number
  @Prop() disabledStep?: number[]

  private readonly isCompleted = (completed: boolean) =>
    completed ? 'completed' : ''

  private readonly isLastActive = (index: number) => {
    const currentStep = this.steps[index]
    const nextStep = this.steps[index + 1]

    const currentStepIsTheLastCompleted =
      currentStep.completed && nextStep && !nextStep.completed

    return currentStepIsTheLastCompleted ? 'last' : ''
  }

  render() {
    const actualStep = this.steps[this.activeStep]

    return (
      <Host>
        {!isMobile() ? (
          <div>
            {actualStep && (
              <div class='atom-stepper-mobile'>
                <div class='number'>{this.activeStep}</div>
                <div>
                  <div innerHTML={this.stepTitle}></div>
                  <p>{actualStep.title}</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <ul class='atom-stepper'>
            {this.steps.map(({ title, completed }, index) => {
              const isDisabled = this.disabledStep?.includes(index)
              const isActive = index === this.activeStep

              return (
                <li
                  class={`
                    step
                    ${isActive ? 'active' : ''}
                    ${this.isLastActive(index)}
                    ${this.isCompleted(completed)}
                    ${isDisabled ? 'disabled' : ''}
                  `}
                  key={index}
                >
                  <div class='number'>
                    {this.isCompleted(completed) ? (
                      <atom-icon icon='check' color='white' size={16} />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span class='title'>{title}</span>
                </li>
              )
            })}
          </ul>
        )}
      </Host>
    )
  }
}
