import { Component, Host, Prop, h } from '@stencil/core'
import DOMPurify from 'dompurify'

import { isMaxTablet } from '../../utils/screens'

@Component({
  tag: 'atom-stepper',
  styleUrl: 'stepper.scss',
  shadow: true,
})
export class AtomStepper {
  @Prop({ mutable: true }) steps: Array<{
    title: string
    completed: boolean
  }> = []
  @Prop() activeStep: number
  @Prop() stepTitle?: string
  @Prop() disabledUnrenderedStep?: boolean = true

  private readonly addCompletedClass = (completed: boolean) =>
    completed ? 'is-completed' : ''

  private readonly isLastActive = (index: number) => {
    const currentStep = this.steps[index]
    const nextStep = this.steps[index + 1]

    const currentStepIsTheLastCompleted =
      currentStep?.completed && nextStep && !nextStep.completed

    return currentStepIsTheLastCompleted ? 'is-last' : ''
  }

  render() {
    const actualStep = this.steps[this.activeStep]
    const completedStep = actualStep?.completed

    return (
      <Host role='stepper'>
        {isMaxTablet() ? (
          <div>
            {actualStep && (
              <div class='atom-stepper-mobile'>
                <div
                  class={`
                  number
                  ${completedStep ? 'is-completed' : ''}
                  `}
                >
                  {completedStep ? (
                    <atom-icon icon='check' color='white' size={26} />
                  ) : (
                    this.activeStep + 1
                  )}
                </div>
                <div>
                  <div innerHTML={DOMPurify.sanitize(this?.stepTitle)}></div>
                  <span class='title'>{actualStep.title}</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <ul class='atom-stepper'>
            {this.steps.map(({ title, completed }, index) => {
              const isActive = index === this.activeStep
              const shouldDisabled =
                this.disabledUnrenderedStep && index > this.activeStep

              return (
                <li
                  class={`
                    step
                    ${this.isLastActive(index)}
                    ${this.addCompletedClass(completed)}
                    ${shouldDisabled ? 'is-disabled' : ''}
                  `}
                  key={index}
                >
                  <div class='number'>
                    {this.addCompletedClass(completed) ? (
                      <atom-icon icon='check' color='white' size={16} />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span
                    class={`
                      title
                      ${isActive ? 'is-active' : ''}
                    `}
                  >
                    {title}
                  </span>
                </li>
              )
            })}
          </ul>
        )}
      </Host>
    )
  }
}
