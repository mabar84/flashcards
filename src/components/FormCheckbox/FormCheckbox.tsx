import { ReactNode } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'

type Props<T extends FieldValues> = UseControllerProps<T> & {
  icon?: ReactNode
}
export const FormCheckbox = <T extends FieldValues>(props: Props<T>) => {
  const { control, defaultValue, icon, name } = props

  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    name,
  })

  return <Checkbox checked={value} icon={icon} name={name} onCheckedChange={onChange} ref={ref} />
}
