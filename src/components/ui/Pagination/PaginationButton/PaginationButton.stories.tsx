import type { Meta, StoryObj } from '@storybook/react'

import { PaginationButton } from './PaginationButton'

const meta = {
  component: PaginationButton,
  tags: ['autodocs'],
  title: 'Components/Pagination/PaginationButton',
} satisfies Meta<typeof PaginationButton>

export default meta
type Story = StoryObj<typeof PaginationButton>

export const Base: Story = {
  args: {
    children: '1',
  },
}

export const Active: Story = {
  args: {
    children: '7',

    isActive: true,
  },
}
