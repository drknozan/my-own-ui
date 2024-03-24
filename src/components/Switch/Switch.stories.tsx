import type { Meta, StoryObj } from '@storybook/react';

import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  args: {
    onSwitch: (value: boolean) => {
      console.log(value);
    },
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    onSwitch: (value: boolean) => {
      console.log(value);
    },
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    onSwitch: (value: boolean) => {
      console.log(value);
    },
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    onSwitch: (value: boolean) => {
      console.log(value);
    },
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    onSwitch: (value: boolean) => {
      console.log(value);
    },
    variant: 'error',
  },
};

export const Small: Story = {
  args: {
    onSwitch: (value: boolean) => {
      console.log(value);
    },
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    onSwitch: (value: boolean) => {
      console.log(value);
    },
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    onSwitch: (value: boolean) => {
      console.log(value);
    },
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    onSwitch: (value: boolean) => {
      console.log(value);
    },
    disabled: true,
  },
};
