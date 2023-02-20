import { Container } from './styles'
import { FlexWrap } from '@/components/FlexWrap'
import { PostCard } from '@/components/PostCard'
import Layout from '@/components/Layout'

import getPosts from '../lib/posts'

export default async function Home() {
  const posts = await getPosts()

  return (
    <Layout>
      <Container>
        <FlexWrap>
          {posts.map((post) => {
            return (
              <PostCard
                key={post.slug}
                title={post.title}
                desc={post.desc}
                image={post.image}
                slug={post.slug}
              />
            )
          })}
        </FlexWrap>
      </Container>
    </Layout>
  )
}
