import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '.'

const meta = {
  args: {
    placeholder: 'Input',
  },
  component: Input,
  title: 'Components/ui/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputTypeText: Story = {
  args: {
    labelValue: 'input',
  },
}

export const InputTypeTextError: Story = {
  args: {
    error: 'Error!',
    labelValue: 'input',
  },
}

export const InputTypeTextDisabled: Story = {
  args: {
    disabled: true,
    labelValue: 'input',
  },
}

export const InputTypePassword: Story = {
  args: {
    labelValue: 'input',
  },
}

export const InputTypePasswordError: Story = {
  args: {
    error: 'Error!',
    labelValue: 'input',
  },
}
export const InputTypePasswordDisabled: Story = {
  args: {
    disabled: true,
    labelValue: 'input',
  },
}

export const InputTypeSearch: Story = {
  args: {},
}

export const InputTypeSearchError: Story = {
  args: {
    error: 'Error!',
  },
}

export const InputTypeSearchDisabled: Story = {
  args: {
    disabled: true,
  },
}
