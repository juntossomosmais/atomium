import { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

import { TextareaComponentArgs, TextareaStoryArgs } from './textarea.args'

export default {
  title: 'Components/Textarea',
  ...TextareaStoryArgs,
} as Meta

const createTextarea = (args) => {
  return html`
    <atom-textarea
      label="Label example"
      placeholder="Placeholder example"
      color=${args.color}
      disabled=${args.disabled}
      fill=${args.fill}
      label-placement=${args.labelPlacement}
      mode=${args.mode}
      readonly=${args.readonly}
      auto-grow=${args.autoGrow}
      shape=${args.shape}
      rows=${args.rows}
      cols=${args.cols}
      wrap=${args.wrap}
      value=${args.value}
      icon=${args.icon}
      helper-text=${args.helperText}
    ></atom-textarea>
  `
}

export const Default: StoryObj = {
  render: (args) => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
  },
}

export const Disabled: StoryObj = {
  render: (args) => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    disabled: true,
  },
}

export const TextareaIcon: StoryObj = {
  render: (args) => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    icon: 'account-multiple',
  },
}

export const HelperText: StoryObj = {
  render: (args) => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    helperText: 'This is a helper text example',
  },
}

export const ErrorState: StoryObj = {
  render: () => html`
    <atom-textarea
      class="atom-textarea--error-example"
      label="Email"
      placeholder="Enter a valid email"
      helper-text="Example: atomium@juntossomosmais.com.br"
      error-text="Invalid email"
      value="invalid-email"
      has-error="true"
    ></atom-textarea>

    <script>
      ;(function () {
        const textareaEl = document.querySelector(
          '.atom-textarea--error-example'
        )
        textareaEl.addEventListener('atomChange', function (ev) {
          validate(ev.target.value)
        })

        function validateEmail(email) {
          return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/)
        }

        function validate(value) {
          const hasError = value !== '' && !validateEmail(value)
          textareaEl.setAttribute('has-error', hasError)
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

export const WithCounter: StoryObj = {
  render: () => html`
    <atom-textarea
      class="atom-textarea--counter-example"
      label="Counter example"
      placeholder="Start typing..."
      counter="true"
      maxlength="300"
    ></atom-textarea>

    <script>
      ;(function () {
        const formatter =  () => {
          const customTextarea = document.querySelector(
            '.atom-textarea--counter-example'
          )
          customTextarea.counterFormatter = (inputLength, maxLength) =>
            inputLength + '/300'
        })
        formatter()
      })()
    </script>
  `,
}
