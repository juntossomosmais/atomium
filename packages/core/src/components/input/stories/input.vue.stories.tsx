import { AtomInput } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

import { InputComponentArgs, InputStoryArgs } from './input.args'

export default {
  title: 'Components/Input',
  ...InputStoryArgs,
} as Meta

const createInput = (args) => ({
  components: { AtomInput },
  setup() {
    return { args }
  },
  template: `
    <AtomInput
      label='Label example'
      placeholder='Placeholder Text'
      clearInput="${args.clearInput}"
      color="${args.color}"
      disabled="${args.disabled}"
      fill="${args.fill}"
      labelPlacement="${args.labelPlacement}"
      mode="${args.mode}"
      readonly="${args.readonly}"
      shape="${args.shape}"
      type="${args.type}"
      passwordToggle="${args.passwordToggle}"
      value="${args.value}"
      ${args.icon ? `icon="${args.icon}"` : ''}
      helperText="${args.helperText}"
    />
  `,
})

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

export const ErrorState = {
  render: () => ({
    components: { AtomInput },
    setup() {
      const hasError = ref(false)

      const validateEmail = (email) => {
        return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      }

      const validate = (value) => {
        hasError.value = false

        if (value === '') return

        return validateEmail(value)
          ? (hasError.value = false)
          : (hasError.value = true)
      }

      return { hasError, validate }
    },
    template: `
      <AtomInput
        label="Email"
        placeholder="Type your email"
        color="danger"
        :hasError="hasError"
        @input="validate($event.target.value)"
      />
    `,
  }),
}
