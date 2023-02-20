import Link from 'next/link'
import { Card, Image, Content } from './styles'

interface Props {
  image: string
  title: string
  desc: string
  slug: string
}

export function PostCard({ image, title, desc, slug }: Props) {
  return (
    <Link href={`/post/${slug}`}>
      <Card>
        <Image image={image} />

        <Content>
          <h4>{title}</h4>
          <p>{desc}</p>
        </Content>
      </Card>
    </Link>
  )
}
