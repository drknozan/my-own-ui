import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Primary', variant: 'primary' },
};

export const Secondary: Story = {
  args: { children: 'Secondary', variant: 'secondary' },
};

export const Outlined: Story = {
  args: { children: 'Outlined', variant: 'outlined' },
};

export const Success: Story = {
  args: { children: 'Success', variant: 'success' },
};

export const Warning: Story = {
  args: { children: 'Warning', variant: 'warning' },
};

export const Error: Story = {
  args: { children: 'Error', variant: 'error' },
};

export const Small: Story = {
  args: { children: 'Small', size: 'small' },
};

export const Medium: Story = {
  args: { children: 'Medium', size: 'medium' },
};

export const Large: Story = {
  args: { children: 'Large', size: 'large' },
};
