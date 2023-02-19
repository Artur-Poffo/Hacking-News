import { Topic } from './styles'

interface Props {
  text: string
}

export function DefaultTopic({ text }: Props) {
  return <Topic>{text}</Topic>
}
