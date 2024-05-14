import { Meta, StoryObj } from '@storybook/vue3'

import { AtomTag } from '@juntossomosmais/atomium/vue'

import { TagStoryArgs } from './tag.args'

export default {
  title: 'Components/Tag',
  ...TagStoryArgs,
} as Meta

const createTag = (args) => ({
  components: { AtomTag },
  setup() {
    return { args }
  },
  template: `
    <AtomTag
      icon="${args.icon}"
      customBackgroundColor="${args.customBackgroundColor}"
      customTextColor="${args.customTextColor}"
      color="${args.color}"
    >
      {{ args.label }}
    </AtomTag>
  `,
})

export const Success: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'success',
    label: 'Promotion',
    icon: '',
  },
}

export const SuccessWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'success',
    label: 'Promotion',
    icon: 'tag',
  },
}

export const Danger: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'danger',
    label: 'Canceled',
    icon: '',
  },
}

export const DangerWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'danger',
    label: 'Canceled',
    icon: 'close-circle-outline',
  },
}

export const Warning: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'warning',
    label: 'In Progress',
    icon: '',
  },
}

export const WarningWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'warning',
    label: 'In Progress',
    icon: 'timer-outline',
  },
}

export const Info: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'info',
    label: 'Partial Delivery',
    icon: '',
  },
}

export const InfoWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'info',
    label: 'Partial Delivery',
    icon: 'truck',
  },
}

export const Dark: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'dark',
    label: 'Most rescued',
    icon: '',
  },
}

export const DarkWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'dark',
    label: 'Most rescued',
    icon: 'wallet-giftcard',
  },
}

export const Light: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'light',
    label: 'More Points',
    icon: '',
  },
}

export const LightWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'light',
    label: 'More Points',
    icon: 'plus-thick',
  },
}

export const CustomColor: StoryObj = {
  render: (args) => createTag(args),
  args: {
    label: 'Most Loved',
    icon: 'heart',
    customBackgroundColor: '#a006fa',
    customTextColor: '#00ff95',
  },
}
