import { Form, InputArea } from './styles'

interface Props {
  method: 'Entrar' | 'Cadastrar'
}

export function DefaultForm({ method }: Props) {
  return (
    <Form>
      <InputArea>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
        />
      </InputArea>

      <button type="submit">{method}</button>
    </Form>
  )
}
