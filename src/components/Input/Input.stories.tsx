import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};

export const Error: Story = {
  args: { variant: 'error' },
};

export const Success: Story = {
  args: { variant: 'success' },
};

export const Label: Story = {
  args: { label: 'E-mail' },
};
