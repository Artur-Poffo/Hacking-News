import { Container, FormArea, BgImage } from './styles'
import { DefaultForm } from '@/components/DefaultForm'

interface Props {
  method: 'Entrar' | 'Cadastrar'
  image: string
}

export function FormScreen({ method, image }: Props) {
  return (
    <Container>
      <FormArea>
        <h1>{method}</h1>

        <DefaultForm method={method} />
      </FormArea>

      <BgImage image={image} />
    </Container>
  )
}
