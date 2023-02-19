'use client'

import { Form, InputArea } from './styles'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import useAuth from '@/hooks/useAuth'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useEffect } from 'react'

interface Props {
  method: 'Entrar' | 'Cadastrar'
}

const schema = yup
  .object({
    email: yup
      .string()
      .email('Insira um email válido')
      .required('O email é obrigatório'),
    password: yup
      .string()
      .min(5, 'A senha deve ter pelo menos 5 caracteres')
      .required('A senha é obrigatória'),
  })
  .required()
type FormData = yup.InferType<typeof schema>

export function DefaultForm({ method }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const { SignIn, SignUp, error, setError } = useAuth()

  useEffect(() => {
    setError(null)
  }, [])

  return (
    <Form
      // @ts-ignore
      onSubmit={handleSubmit(method === 'Entrar' ? SignIn : SignUp)}
    >
      <InputArea>
        <div>
          <input
            {...register('email', { required: true })}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
          <span>{errors.email?.message || error?.response.data.message}</span>
        </div>
        <div>
          <input
            {...register('password', { required: true })}
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
          <span>
            {errors.password?.message || error?.response.data.message}
          </span>
        </div>
      </InputArea>

      <button type="submit">{method}</button>

      <Link href={method === 'Entrar' ? '/SignUp' : '/SignIn'}>
        {method === 'Entrar'
          ? 'Ainda não tem uma conta? Crie Agora'
          : 'Já tem uma conta? Entrar'}
      </Link>
    </Form>
  )
}
