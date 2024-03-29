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
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email', {
          pattern: { message: 'Invalid email', value: emailRegex },
          required: 'Email is required',
        })}
        error={errors.email?.message}
        labelValue={'email'}
      />
      <Input
        {...register('password', {
          minLength: { message: 'Password has to be at least 3 characters long', value: 3 },
          required: 'Password is required',
        })}
        error={errors.password?.message}
        labelValue={'password'}
      />
      <Checkbox checked={value} icon={<CheckedMark />} onCheckedChange={onChange} />

      <Button type={'submit'}>Submit</Button>
    </form>
  )
}

const emailRegex =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
