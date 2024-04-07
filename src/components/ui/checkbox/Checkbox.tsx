import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { CheckedMark } from '@/assets/icons/CheckedMark'
import { Indicator, Root } from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  errorMessage?: string
  icon?: ReactNode
  isChecked?: boolean
} & ComponentPropsWithoutRef<typeof Root>
export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (props: CheckboxProps, ref) => {
    const { checked, className, disabled, errorMessage, icon, id, ...restProps } = props
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
        <Indicator>{icon ? icon : <CheckedMark />}</Indicator>
        <p>{errorMessage}</p>
      </Root>
    )
  }
)
