import type { Meta, StoryObj } from '@storybook/react';

import Slider from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Example/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: { min: 0, max: 100, onChange: (value) => console.log(value) },
};
