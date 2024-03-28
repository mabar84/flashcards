import { useController, useForm } from 'react-hook-form'

import { CheckedMark } from '@/assets/icons/CheckedMark'
import { Input } from '@/components/ui/Input'
import { Checkbox } from '@/components/ui/checkbox'

import { Button } from '../../ui/button'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: true,
    name: 'rememberMe',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} labelValue={'email'} />
      <Input {...register('password')} labelValue={'password'} />
      <Checkbox checked={value} icon={<CheckedMark />} onCheckedChange={onChange} />

      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
