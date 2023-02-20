import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const getPosts = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = await fs.readdir(postsDirectory)

  return await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')
      const document = matter(fileContents)

      return {
        slug: filename.replace(/\.md$/, ''),
        title: document.data.title,
        desc: document.data.description,
        image: document.data.image,
        date: document.data.date,
        topics: document.data.topics,
        markdown: document.content,
      }
    }),
  )
}

export default getPosts
