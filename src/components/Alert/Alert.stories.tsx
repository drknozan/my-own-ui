import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
  args: {
    title: 'Alert title!',
    description: 'This is alert component description.',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Alert title!',
    description: 'This is alert component description.',
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    title: 'Alert title!',
    description: 'This is alert component description.',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    title: 'Alert title!',
    description: 'This is alert component description.',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    title: 'Alert title!',
    description: 'This is alert component description.',
    variant: 'error',
  },
};
