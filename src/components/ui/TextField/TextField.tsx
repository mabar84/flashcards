import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Search } from '@/assets/icons/Search'
import { SwitchingEye } from '@/assets/icons/SwitchingEye/SwitchingEye'
import { Typography } from '@/components/ui/Typography'
import { CheckedCross } from '@/components/ui/checkbox/CheckedCross'
import { clsx } from 'clsx'

import s from './TextField.module.scss'

export type TextFieldProps = {
  clearInput?: () => void
  error?: string
  label?: string
  type?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props: TextFieldProps, ref) => {
    const { className, clearInput, disabled, error, label, onChange, type = 'text', value } = props

    const [showPassword, setShowPassword] = useState(type === 'text')
    const showButton = (!!value || type === 'password') && type !== 'text'
    const showEye = type === 'password'
    const showSearch = type === 'search'
    const currentType = showPassword ? 'text' : 'password'
    const classNames = {
      button: s.button,
      input: s.input,
      inputWrapper: clsx(s.inputWrapper, {
        [s.error]: error,
        [s.password]: type === 'password',
        [s.search]: type === 'search',
      }),
      label: s.label,
      searchGlass: s.searchGlass,
      textError: s.textError,
      textField: clsx(s.textField, disabled && s.disabled, className),
    }

    console.log(classNames.textField)

    const onClickHandler = () => {
      if (type === 'password') {
        setShowPassword(prev => !prev)
      } else {
        clearInput && clearInput()
      }
    }

    return (
      <div className={classNames.textField}>
        <Typography.Body2 className={classNames.label}>{label}</Typography.Body2>
        <div className={classNames.inputWrapper}>
          {showSearch && <Search className={s.searchGlass} />}
          <input
            className={classNames.input}
            onChange={onChange}
            placeholder={label}
            ref={ref}
            type={currentType}
            value={value}
          />
          {showButton && (
            <button className={classNames.button} onClick={onClickHandler}>
              {showEye ? <SwitchingEye isOpen={showPassword} /> : <CheckedCross />}
            </button>
          )}
        </div>
        {error && <Typography.Caption className={classNames.textError}>{error}</Typography.Caption>}
      </div>
    )
  }
)
