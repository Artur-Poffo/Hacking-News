---
title: "Tutorial: Criando um blog com Next.js"
image: "https://www.lucascaton.com.br/_next/image?url=%2Fimages%2Fposts%2F2021%2F12%2Fblog-com-nextjs.jpg&w=384&q=75"
description: "Criando um blog com Next.js, para iniciantes!"
date: "Domingo, 19 de fevereiro de 2023"
topics: ["tutoriais", "reactjs", "nextjs"]
---

Next.js é tão sensacional que meio que virou meu framework padrão para novos projetos. Além disso, eu também migrei vários outros projetos, include esse site/blog que você está lendo nesse exato momento, conforme documentei aqui.

Nesse tutorial, vamos desenvolver um blog com Next.js, React e Tailwind CSS. Os posts serão escritos em Markdown e convertidos para HTML no final.

E aí, bora codar? 😉

## Criando e configurando o projeto

Antes de continuar, você precisa ter o Node.js e o Yarn instalados.

Abra o terminal e rode o seguinte comando para criar o projeto:

```bash
  yarn create next-app -e with-tailwindcss blog
```

Agora, acesse o diretório do projeto e adicione as bibliotecas que vamos precisar:

```bash
  cd blog
  yarn add react-markdown gray-matter @tailwindcss/typography
```

Essas bibliotecas servem para:

* **React Markdown**: converter Markdown para HTML.
* **Gray Matter**: interpretar front matters (veremos mais sobre isso a seguir).
* **Plugin "typography" do Tailwind CSS**: estilização básica decente para artigos/posts.

## Escrevendo o post inicial

Crie um diretório `posts` na raiz do projeto e dentro, crie um arquivo chamado `hello-world.md` com o conteúdo que você desejar:

```markdown
 ---
  title: "Hello World"
  date: "07/12/2021"
  ---

  Olá mundo!

  **Texto em negrito** e _texto em itálico_.

  - Lista
  - com
  - vários
  - items
```

## O que é "Front Matter"?

O bloco no começo de arquivos markdowns, entre os traços `(---)` é o que chamamos de "Front Matter" e é onde geralmente definimos metadados do post. Esse bloco precisa necessariamente estar no começo do arquivo e precisa usar uma sintaxe YAML válida.

```yml
title: "Hello World"
date: "07/12/2021"
```

## Preparando a página inicial

Vamos mover o componente `<Head>` do arquivo `pages/index.js` para `pages/_app.js` e renomear o conteúdo da tag `<title>`:

### pages/_app.js

```jsx
import Head from "next/head";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meu blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp
```

Depois vamos deixar apenas um título `Posts` na página inicial:

### pages/index.js

```jsx
const Blog = () => {
  return <h1>Posts</h1>;
};

export default Blog;
```

## Conferindo se está tudo bem até aqui

Vamos rodar o servidor para ver se está tudo certo até agora. No terminal, rode:

```bash
npm run dev
```

Abra o navegador e acesse <localhost:3000>. Você deve ver algo assim:

![Homepage](https://www.lucascaton.com.br/_next/image?url=%2Fimages%2Fposts%2F2021%2F12%2Fblog1.png&w=1200&q=75)

## Criando e estilizando o cabeçalho

Vamos adicionar as tags `<header>` e `<main>` ao arquivo `pages/_app.js` com algumas classes do Tailwind CSS:

```diff
 import Head from "next/head";
+import Link from "next/link";
+
 import "tailwindcss/tailwind.css";

 function MyApp({ Component, pageProps }) {
@@ -9,7 +11,17 @@ function MyApp({ Component, pageProps }) {
         <link rel="icon" href="/favicon.ico" />
       </Head>

-      <Component {...pageProps} />
+      <header className="py-10 bg-gradient-to-r from-green-400 to-blue-500 text-center">
+        <Link href="/">
+          <a>
+            <h2 className="text-5xl font-bold text-white">Meu blog</h2>
+          </a>
+        </Link>
+      </header>
+
+      <main className="my-6 mx-auto p-6 bg-white sm:shadow-lg rounded prose lg:prose-xl">
+        <Component {...pageProps} />
+      </main>
     </>
   );
 }
```

## Personalizando a tipografia do Tailwind CSS

Vamos extender alguns comportamentos padrões de tipografia do Tailwind CSS e carregar o plugin oficial `@tailwindcss/typography`.

```diff
 darkMode: false, // or 'media' or 'class'
   theme: {
-    extend: {},
+    extend: {
+      typography: {
+        DEFAULT: {
+          css: {
+            a: {
+              color: "#3182ce",
+              "&:hover": {
+                color: "#2c5282",
+              },
+            },
+          },
+        },
+      },
+    },
   },
   variants: {
     extend: {},
   },
-  plugins: [],
+  plugins: [require("@tailwindcss/typography")],
 };
```

## Adicionando classes CSS na tag <body>

Para fazer isso, precisamos criar um arquivo `pages/_document.js` com o seguinte conteúdo:

```jsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
 static async getInitialProps(ctx) {
   const initialProps = await Document.getInitialProps(ctx);
   return { ...initialProps };
 }

 render() {
   return (
     <Html>
       <Head />
       <body className="bg-white sm:bg-gray-50">
         <Main />
         <NextScript />
       </body>
     </Html>
   );
 }
}

export default MyDocument;
```

Repare que eu adicionei as classes `bg-white` e `sm:bg-gray-50` na tag `<body>`.

> Veja mais detalhes sobre pages/_document.js na [documentação oficial](https://nextjs.org/docs/advanced-features/custom-document).

## Lendo o conteúdo dos posts

Crie um arquivo `lib/posts.js` que será responsável por ler os arquivos Markdown e retornar uma lista de posts:

```js
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

const getPosts = async () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = await fs.readdir(postsDirectory);

  return await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const document = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: document.data.title,
        date: document.data.date,
        markdown: document.content,
      };
    })
  );
};

export default getPosts;
```

Cada post é representado por um objeto com as seguintes chaves:

- **Slug:** Representação do post que pode ser usada na URL. Para isso, vamos usar o nome do arquivo sem sua extensão (.md).
- **title:** Metadado definido no front matter
- **data** Metadado definido no front matter
- **markdown:** Conteúdo principal do arquivo Markdown

Repare que estamos usando a biblioteca `gray-matter` para ler os metadados definidos no front matter de cada post.

## Adicionando os posts à página inicial

Vamos importar a função `getPosts` do arquivo que acabamos de criar na página inicial, ou seja, no arquivo `pages/index.js` e fazer um loop para exibir links e títulos de cada um dos posts:

```jsx
import Link from "next/link";

import getPosts from "../lib/posts";

const Blog = ({ posts }) => {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/${slug}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts(),
    },
  };
}

export default Blog;
```

Vamos ver no navegador como nosso blog está ficando:

![Lista de posts](https://www.lucascaton.com.br/_next/image?url=%2Fimages%2Fposts%2F2021%2F12%2Fblog2.png&w=1920&q=75)

Massa!

## Criando as páginas dos posts com rotas dinâmicas

Ao tentar clicar no link do post Hello World que vemos da página acima, um erro 404 (página não encontrada) será mostrada. Isso é esperado, afinal, ainda não criamos essa página 🙃

Bora criá-la, então. Como queremos um mesmo template para os posts, mas com rotas dinâmicas (baseadas no nome de seus arquivos), vamos criar e nomear o arquivo dos posts com colchetes: `pages/[slug].js`.

Seu conteúdo pode ser algo mais ou menos assim:

```jsx
import getPosts from "../lib/posts";

const Post = ({ title, date, markdown }) => (
  <article>
    <h1>{title}</h1>
    <time className="font-extralight tracking-wider text-gray-500">{date}</time>
    {markdown}
  </article>
);

export const getStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map((post) => `/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === slug);

  return { props: post };
};

export default Post;
```

Agora vamos verificar como ficou no navegador...

![Página do post](https://www.lucascaton.com.br/_next/image?url=%2Fimages%2Fposts%2F2021%2F12%2Fblog3.png&w=1920&q=75)

Ok, está ficando legal, mas ainda falta converter o Markdown.

## Convertendo o Markdown para HTML

Vamos usar a bilioteca `ReactMarkdown` para fazer isso. Atualize o arquivo `pages/[slug].js` para:

```diff
+import ReactMarkdown from "react-markdown";
+
 import getPosts from "../lib/posts";

 const Post = ({ title, date, markdown }) => (
   <article>
     <h1>{title}</h1>
     <time className="font-extralight tracking-wider text-gray-500">{date}</time>
-    {markdown}
+    <ReactMarkdown>{markdown}</ReactMarkdown>
   </article>
 );
```

Vamos testar novamente:

![Página do post](https://www.lucascaton.com.br/_next/image?url=%2Fimages%2Fposts%2F2021%2F12%2Fblog4.png&w=1920&q=75)

Ah, bem melhor!

## Resultado final 🎉

![Blog Final](https://www.lucascaton.com.br/_next/image?url=%2Fimages%2Fposts%2F2021%2F12%2Fblog-com-nextjs.jpg&w=1920&q=75)

