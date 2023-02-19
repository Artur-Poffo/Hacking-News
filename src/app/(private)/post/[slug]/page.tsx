import { Container, Header, Tags, Author, Content, Warning } from './styles'
import ReactMarkdown from 'react-markdown'

import { DefaultTopic } from '@/components/DefaultTopic'
import Link from 'next/link'

import getPosts from '@/app/lib/posts'

interface PostProps {
  params: {
    slug: string
  }
}

export default async function Post({ params }: PostProps) {
  const posts = await getPosts()
  const post = posts.find((post) => post.slug === params.slug)

  return post ? (
    <Container>
      <Header>
        <h1>{post.title}</h1>
        <Tags>
          <span>{post.date}</span>
          <ul>
            {post.topics.map((topic: string) => {
              return <DefaultTopic key={topic} text={topic} />
            })}
          </ul>
        </Tags>

        <Author>
          <span>Artur Poffo</span>
          <a href="https://github.com/Artur-Poffo">@Artur-Poffo</a>
        </Author>
      </Header>

      <Content>
        <ReactMarkdown>{post.markdown}</ReactMarkdown>
      </Content>
    </Container>
  ) : (
    <Warning>
      <h1>Post não encontrado</h1>
      <Link href="/">voltar</Link>
    </Warning>
  )
}
