import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './TextField.module.scss'
export type TextFieldProps = {
  error?: string
  label?: string
  type?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props: TextFieldProps, ref) => {
    const { className, disabled, error, label, type = 'text' } = props

    const classNames = {
      input: clsx(s.input, className),
      label: s.label,
      wrapper: clsx(
        s.wrapper,
        {
          [s.disabled]: disabled,
          [s.error]: error,
          [s.password]: type === 'password',
          [s.search]: type === 'search',
          [s.text]: type === 'text',
        },
        className
      ),
    }

    console.log(classNames.wrapper)

    return (
      <div className={classNames.wrapper}>
        <Typography.Body2 className={classNames.label}>{label}</Typography.Body2>
        <input className={classNames.input} placeholder={label} ref={ref} type={'text'} />
        <button>234</button>
      </div>
    )
  }
)
