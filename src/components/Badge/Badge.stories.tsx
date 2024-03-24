import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';
import React from 'react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  render: (args) => (
    <Badge {...args}>
      <div
        style={{
          height: '38px',
          width: '38px',
          backgroundColor: 'gray',
          borderRadius: '3px',
        }}
      ></div>
    </Badge>
  ),
};

Primary.args = {
  count: 100,
  maxCount: 99,
  variant: 'primary',
  size: 'small',
};

export const Secondary: Story = {
  render: (args) => (
    <Badge {...args}>
      <div
        style={{
          height: '38px',
          width: '38px',
          backgroundColor: 'gray',
          borderRadius: '3px',
        }}
      ></div>
    </Badge>
  ),
};

Secondary.args = {
  count: 100,
  maxCount: 99,
  variant: 'secondary',
  size: 'small',
};

export const Success: Story = {
  render: (args) => (
    <Badge {...args}>
      <div
        style={{
          height: '38px',
          width: '38px',
          backgroundColor: 'gray',
          borderRadius: '3px',
        }}
      ></div>
    </Badge>
  ),
};

Success.args = {
  count: 100,
  maxCount: 99,
  variant: 'success',
  size: 'small',
};

export const Warning: Story = {
  render: (args) => (
    <Badge {...args}>
      <div
        style={{
          height: '38px',
          width: '38px',
          backgroundColor: 'gray',
          borderRadius: '3px',
        }}
      ></div>
    </Badge>
  ),
};

Warning.args = {
  count: 100,
  maxCount: 99,
  variant: 'warning',
  size: 'small',
};

export const Error: Story = {
  render: (args) => (
    <Badge {...args}>
      <div
        style={{
          height: '38px',
          width: '38px',
          backgroundColor: 'gray',
          borderRadius: '3px',
        }}
      ></div>
    </Badge>
  ),
};

Error.args = {
  count: 100,
  maxCount: 99,
  variant: 'error',
  size: 'small',
};

export const Small: Story = {
  render: (args) => (
    <Badge {...args}>
      <div
        style={{
          height: '38px',
          width: '38px',
          backgroundColor: 'gray',
          borderRadius: '3px',
        }}
      ></div>
    </Badge>
  ),
};

Small.args = {
  count: 100,
  maxCount: 99,
  variant: 'success',
  size: 'small',
};

export const Medium: Story = {
  render: (args) => (
    <Badge {...args}>
      <div
        style={{
          height: '38px',
          width: '38px',
          backgroundColor: 'gray',
          borderRadius: '3px',
        }}
      ></div>
    </Badge>
  ),
};

Medium.args = {
  count: 100,
  maxCount: 99,
  variant: 'success',
  size: 'medium',
};

export const Large: Story = {
  render: (args) => (
    <Badge {...args}>
      <div
        style={{
          height: '38px',
          width: '38px',
          backgroundColor: 'gray',
          borderRadius: '3px',
        }}
      ></div>
    </Badge>
  ),
};

Large.args = {
  count: 100,
  maxCount: 99,
  variant: 'success',
  size: 'large',
};
