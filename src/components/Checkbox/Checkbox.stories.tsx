import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Example/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'This is a checkbox component.',
    onChange: (isChecked) => {
      console.log(isChecked);
    },
  },
};

export const Disabled: Story = {
  args: { label: 'This is a checkbox component.', disabled: true },
};
