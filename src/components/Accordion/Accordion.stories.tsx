import type { Meta, StoryObj } from '@storybook/react';

import Accordion from './Accordion';
import React from 'react';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: 'Accordion Component',
    content: (
      <div style={{ padding: '16px' }}>
        This is a collapsible accordion component.
      </div>
    ),
  },
};
