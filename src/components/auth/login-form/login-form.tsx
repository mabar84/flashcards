import { useForm } from 'react-hook-form'

import { FormCheckbox } from '@/components/FormCheckbox/FormCheckbox'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/button'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginScheme = z.object({
  email: z.string(),
  password: z.string().min(3),
  rememberMe: z.boolean(),
  // rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof loginScheme>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    delayError: 2000,
    resolver: zodResolver(loginScheme),
  })

  console.log(errors)
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} error={errors.email?.message} labelValue={'email'} />
      <Input {...register('password')} error={errors.password?.message} labelValue={'password'} />

      <FormCheckbox control={control} errorMessage={'123'} name={'rememberMe'} />

      <Button type={'submit'}>Submit</Button>
      <DevTool control={control} />
    </form>
  )
}
