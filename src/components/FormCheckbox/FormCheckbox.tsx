import { ReactNode } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import { CheckboxProps } from '@/components/ui/checkbox/Checkbox'

type Props<T extends FieldValues> = UseControllerProps<T> & {
  icon?: ReactNode
} & Omit<CheckboxProps, 'defaultValue' | 'errorMassage' | 'onChange' | 'value'>
export const FormCheckbox = <T extends FieldValues>(props: Props<T>) => {
  const { control, defaultValue, disabled, errorMessage, icon, name } = props

  const {
    field: { onChange, ref, value },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
  })

  return (
    <Checkbox
      checked={value}
      disabled={disabled}
      errorMessage={error?.message && errorMessage}
      icon={icon}
      name={name}
      onCheckedChange={onChange}
      ref={ref}
    />
  )
}
