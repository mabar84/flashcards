import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const BaseCheckbox: Story = {
  args: {
    children: 'Some text',
    isChecked: false,
  },
}

export const BaseCheckboxWithoutLabel: Story = {
  args: {
    isChecked: false,
  },
}

export const BaseCheckboxDisabled: Story = {
  args: {
    children: 'Some text',
    isDisabled: true,
  },
}
