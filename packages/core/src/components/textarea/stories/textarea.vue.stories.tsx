import { AtomTextarea } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import { TextareaComponentArgs, TextareaStoryArgs } from './textarea.args'

export default {
  title: 'Components/Textarea',
  ...TextareaStoryArgs,
} as Meta

const createTextarea = (args) => ({
  components: { AtomTextarea },
  setup() {
    return { args }
  },
  template: `
    <AtomTextarea
      label='Example Textarea'
      placeholder='Placeholder Text'
      color="${args.color}"
      disabled="${args.disabled}"
      fill="${args.fill}"
      labelPlacement="${args.labelPlacement}"
      mode="${args.mode}"
      readonly="${args.readonly}"
      autoGrow="${args.autoGrow}"
      shape="${args.shape}"
      rows="${args.rows}"
      cols="${args.cols}"
      wrap="${args.wrap}"
      value="${args.value}"
      icon="${args.icon}"
      helperText="${args.helperText}"
    />
  `,
})

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

export const ErrorState = {
  render: () => ({
    components: { AtomTextarea },
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
      <AtomTextarea
        label='Email'
        placeholder='Enter a valid email'
        helperText='Example: atomium@juntossomosmais.com.br'
        errorText='Invalid email'
        type='email'
        @input="validate($event.target.value)"
        :hasError="hasError"
        value="invalid-email"
      />
    `,
  }),
}

export const WithCounter: StoryObj = {
  render: () => ({
    components: { AtomTextarea },
    methods: {
      counterFormatter(inputLength, maxLength) {
        return `${inputLength}/300`
      },
    },
    template: `
      <AtomTextarea
        label='Counter example'
        placeholder='Start typing...'
        counter="true"
        maxlength="300"
        :counterFormatter="counterFormatter"
      />
    `,
  }),
}
