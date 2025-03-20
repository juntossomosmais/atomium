import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'atom-stepper',
  styleUrl: 'stepper.scss',
  shadow: true,
})
export class AtomStepper {
  @Prop() steps: {
    title: string
    completed: boolean
    actual?: boolean
    disabled?: boolean
  }[]

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
    return (
      <Host>
        <ul class='atom-stepper'>
          {this.steps.map(({ title, completed, actual, disabled }, index) => (
            <li
              class={`
                step
                ${actual ? 'active' : ''}
                ${this.isLastActive(index)} ${this.isCompleted(completed)}
                ${this.isLastActive(index)}
                ${disabled ? 'disabled' : ''}
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
          ))}
        </ul>
      </Host>
    )
  }
}
