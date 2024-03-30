import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { Indicator, Root } from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './Checkbox.module.scss'

type Props = {
  icon?: ReactNode
  isChecked?: boolean
} & ComponentPropsWithoutRef<typeof Root>
export const Checkbox = forwardRef<HTMLButtonElement, Props>((props: Props, ref) => {
  const { checked, className, disabled, icon, id, ...restProps } = props
  const classNames = clsx(s.CheckboxRoot, className)

  return (
    <Root
      {...restProps}
      className={classNames}
      defaultChecked={checked}
      disabled={disabled}
      id={id}
      ref={ref}
    >
      <Indicator>{icon}</Indicator>
    </Root>
  )
})
