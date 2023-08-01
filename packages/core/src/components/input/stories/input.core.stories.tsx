import { Meta, StoryObj } from '@storybook/web-components'

import { html } from 'lit'

import { InputComponentArgs, InputStoryArgs } from './input.args'

export default {
  title: 'Components/Input',
  ...InputStoryArgs,
} as Meta

const createInput = (args) => {
  return html`
    <atom-input
      required=${args.required}
      label="Label example"
      placeholder="Placeholder Text"
      clear-input=${args.clearInput}
      color=${args.color}
      disabled=${args.disabled}
      fill=${args.fill}
      label-placement=${args.labelPlacement}
      mode=${args.mode}
      readonly=${args.readonly}
      shape=${args.shape}
      type=${args.type}
      password-toggle=${args.passwordToggle}
      value=${args.value}
      icon=${args.icon}
      helper-text=${args.helperText}
      type=${args.type}
    ></atom-input>
  `
}

export const Default: StoryObj = {
  render: (args) => createInput(args),
  args: {
    ...InputComponentArgs,
  },
}

export const Password: StoryObj = {
  render: (args) => createInput(args),
  args: {
    ...InputComponentArgs,
    type: 'password',
    passwordToggle: true,
  },
}

export const Disabled: StoryObj = {
  render: (args) => createInput(args),
  args: {
    ...InputComponentArgs,
    disabled: true,
  },
}

export const InputIcon: StoryObj = {
  render: (args) => createInput(args),
  args: {
    ...InputComponentArgs,
    icon: 'magnify',
  },
}

export const HelperText: StoryObj = {
  render: (args) => createInput(args),
  args: {
    ...InputComponentArgs,
    helperText: 'This is a helper text example',
  },
}

export const ErrorState: StoryObj = {
  render: () => html`
    <atom-input
      class="atom-input--error-example"
      label="Email"
      placeholder="Enter a valid email"
      helper-text="Example: atomium@juntossomosmais.com.br"
      error-text="Invalid email"
      value="invalid-email"
      type="email"
    ></atom-input>

    <script>
      ;(function () {
        const inputEl = document.querySelector('.atom-input--error-example')
        inputEl.addEventListener('atomChange', function (ev) {
          validate(ev.target.value)
        })

        function validateEmail(email) {
          return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/)
        }

        function validate(value) {
          const hasError = value !== '' && !validateEmail(value)
          inputEl.setAttribute('has-error', hasError)
        }
      })()
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'To check this behavior working you need to look the [canvas of component](/story/components-input--error-text)',
      },
    },
  },
}
