import { useController, useForm } from 'react-hook-form'

import { CheckedMark } from '@/assets/icons/CheckedMark'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().min(1),
  // email: z.string().email(),
  password: z.string().min(3).max(5),
  rememberMe: z.any(),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} error={errors.email?.message} labelValue={'email'} />
      <Input {...register('password')} error={errors.password?.message} labelValue={'password'} />
      <Checkbox
        checked={value}
        icon={<CheckedMark />}
        name={'rememberMe'}
        onCheckedChange={onChange}
        ref={ref}
      />

      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
