import { Component, Host, Prop, h } from '@stencil/core'
import DOMPurify from 'dompurify'

import { isMaxTablet } from '../../utils/screens'

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
    const completedStep = actualStep.completed

    return (
      <Host>
        {isMaxTablet() ? (
          <div>
            {actualStep && (
              <div
                class={`atom-stepper-mobile ${completedStep ? 'completed' : ''}`}
              >
                <div class='number'>
                  {completedStep ? (
                    <atom-icon icon='check' color='white' size={26} />
                  ) : (
                    this.activeStep + 1
                  )}
                </div>
                <div>
                  <div innerHTML={DOMPurify.sanitize(this.stepTitle)}></div>
                  <span class='title'>{actualStep.title}</span>
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
