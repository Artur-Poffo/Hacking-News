---
title: "Tutorial: Criando um blog com Next.js"
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

![Imagem da Home](https://www.lucascaton.com.br/_next/image?url=%2Fimages%2Fposts%2F2021%2F12%2Fblog1.png&w=1200&q=75)

> Testing

> Esse post foi retirado do blog: [Lucas Caton](https://www.lucascaton.com.br/) apenas para testar interface e etilização, créditos a ele.