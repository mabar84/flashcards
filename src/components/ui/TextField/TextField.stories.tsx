import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './TextField'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const CardExample: Story = {
  args: {
    className: 'qwe',
    error: 'qwe32',
    label: 'wer',
    type: 'password',
  },
}
