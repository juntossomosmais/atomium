import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AtomInput } from '@juntossomosmais/atomium/react'

import { InputComponentArgs, InputStoryArgs } from './input.args'

export default {
  title: 'Components/Input',
  ...InputStoryArgs,
} as Meta

const createInput = (args) => (
  <AtomInput
    label="Example Input"
    placeholder="Placeholder Text"
    clearInput={args.clearInput}
    color={args.color}
    disabled={args.disabled}
    fill={args.fill}
    labelPlacement={args.labelPlacement}
    mode={args.mode}
    readonly={args.readonly}
    shape={args.shape}
    type={args.type}
    passwordToggle={args.passwordToggle}
    value={args.value}
    icon={args.icon}
    helperText={args.helperText}
  />
)

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
    icon: 'search',
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
  render: () => {
    const [hasError, setHasError] = React.useState(false)

    const validateEmail = (email) => {
      return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    }

    const validate = (value) => {
      setHasError(false)

      if (value === '') return

      return validateEmail(value) ? setHasError(false) : setHasError(true)
    }

    return (
      <AtomInput
        label="Email"
        placeholder="Enter a valid email"
        helperText="Example: atomium@juntossomosmais.com.br"
        errorText="Invalid email"
        type="email"
        onAtomChange={(ev) => validate(ev.target.value)}
        hasError={hasError}
      />
    )
  },
}
