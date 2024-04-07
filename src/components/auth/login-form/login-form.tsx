import { useForm } from 'react-hook-form'

import { FormCheckbox } from '@/components/FormCheckbox/FormCheckbox'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginScheme = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof loginScheme>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginScheme),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} error={errors.email?.message} labelValue={'email'} />
      <Input {...register('password')} error={errors.password?.message} labelValue={'password'} />

      <FormCheckbox control={control} defaultValue name={'rememberMe'} />

      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
