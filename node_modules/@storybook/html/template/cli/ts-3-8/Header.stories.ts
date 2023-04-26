import type { Meta, StoryObj } from '@storybook/html';
import type { HeaderProps } from './Header';
import { createHeader } from './Header';

const meta: Meta<HeaderProps> = {
  title: 'Example/Header',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/html/writing-docs/docs-page
  tags: ['autodocs'],
  render: (args) => createHeader(args),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/html/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/7.0/html/api/argtypes
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

export default meta;
type Story = StoryObj<HeaderProps>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
