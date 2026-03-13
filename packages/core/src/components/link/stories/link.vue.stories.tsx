import { AtomIcon, AtomLink } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, h } from 'vue'

import { LinkVueStoryArgs } from './link.args'

const RouterLink = defineComponent({
  name: 'RouterLink',
  props: {
    to: {
      type: String,
      required: false,
    },
  },
  setup(props, { slots }) {
    return () => h('div', slots.default())
  },
})

const createLink = (
  args,
  textExample = 'It should be used inside router components'
) => ({
  components: { AtomLink, RouterLink },
  setup() {
    return { args }
  },
  template: `
  <router-link to="/nice-example">
    <AtomLink :color="args.color" :type="args.type" :loading="args.loading">
      ${textExample}
    </AtomLink>
  </router-link>
  `,
})

export default {
  title: 'Components/Link',
  component: AtomLink,
  ...LinkVueStoryArgs,
} as Meta

export const Primary: StoryObj = {
  render: (args) => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    loading: false,
  },
}

export const Secondary: StoryObj = {
  render: (args) => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary',
  },
}

export const Loading: StoryObj = {
  render: (args) => ({
    components: { AtomLink, RouterLink },
    setup() {
      return { args }
    },
    template: `
    <router-link to="/nice-example">
      <AtomLink :color="args.color" :type="args.type" loading>
        Loading...
      </AtomLink>
    </router-link>
  `,
  }),
  args: {
    ...Primary.args,
  },
}

export const WithIcon: StoryObj = {
  render: (args) => ({
    components: { AtomLink, AtomIcon },
    setup() {
      return { args }
    },
    template: `
    <router-link to="/nice-example">
      <AtomLink :color="args.color" :type="args.type">
      Nice example with icon
      <AtomIcon
        icon="heart"
        color="primary"
      />
      </AtomLink>
    </router-link>
  `,
  }),
  args: {
    ...Primary.args,
  },
}

export const Button: StoryObj = {
  render: (args) => ({
    components: { AtomLink },
    setup() {
      return { args }
    },
    template: `
          <AtomLink color=${args.color} type=${args.type}>
          It is a button! and can be used to trigger user actions
        </AtomLink>
        `,
  }),
  args: {
    ...Primary.args,
    type: 'button',
  },
}
