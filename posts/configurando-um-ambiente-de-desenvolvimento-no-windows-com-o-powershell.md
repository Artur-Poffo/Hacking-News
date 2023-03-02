---
title: "Configurando um ambiente de desenvolvimento no Windows com o PowerShell"
image: "https://images.unsplash.com/photo-1642176849879-92f85770f212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
description: "Configurando do total zero um ambiente de desenvolvimento muito massa no Windows com PowerShell"
date: "Quinta-Feira, 03 de Março de 2023"
topics: ["configuração", "ambiente", "powershell"]
---

Existe muito conteúdo espalhado sobre "Como configurar o ambiente de desenvolvimento no Linux"
Ou até no WSL(Windows Subsystem for Linux), e realmente o WSL é muito prático, mas eu sei que tem muitas pessoas que gostariam de continuar somente no Windows sem WSL por diversos motivos, seja por não ter um PC ótimo ou qualquer outra preferência pessoal, então estou aqui para tentar fazer o post mais completo possível para criar um ambiente de desenvolvimento tão bom e completo quanto um WSL da vida.

A ideia é esse post se tornar um guia realmente completo com todas as coisas que eu uso no dia a dia, abordando assim temas como: terminal, VScode, Git, configuração do PowerShell com módulos e muito mais. Então vamos começar:

Vamos começar pelo começo, instale a versão mais recente do PowerShell na Microsoft Store, abra a loja, pesquise por `PowerShell` e instale.

## Explicações básicas sobre PowerShell

### O que são módulos do PowerShell?

Os módulos do PowerShell são pacotes de código que podem ser carregados para adicionar funcionalidades específicas ao PowerShell. Eles contêm cmdlets, funções, variáveis e outros recursos que permitem executar tarefas específicas com o PowerShell. Os módulos podem ser criados por terceiros ou pela própria Microsoft, e são distribuídos por meio do PowerShell Gallery ou por outros canais de distribuição. Ao carregar um módulo, o PowerShell torna as funções e os cmdlets contidos nele disponíveis para uso no ambiente de linha de comando, permitindo automatizar tarefas complexas e simplificar a execução de tarefas comuns.

### Instalando módulos no PowerShell

A instalação de um módulo do PowerShell pode ser feita facilmente através da linha de comando. Primeiramente, é necessário abrir o PowerShell e, em seguida, utilizar o cmdlet "Install-Module" seguido pelo nome do módulo que se deseja instalar. Por exemplo, para instalar o módulo do PowerShell chamado "Azure", a sintaxe seria "Install-Module Azure". Ao pressionar Enter, o PowerShell iniciará o processo de instalação do módulo, baixando-o da fonte de distribuição e instalando-o localmente. Em alguns casos, pode ser necessário aceitar a instalação de módulos de fontes não confiáveis, utilizando o parâmetro "-AllowClobber" para sobrescrever módulos existentes ou o parâmetro "-Force" para forçar a instalação sem confirmação. Depois de instalado, o módulo pode ser carregado para uso com o cmdlet "Import-Module" e suas funções e cmdlets podem ser utilizados normalmente dentro do PowerShell.

### O que são **"Aliases"**?

Os "Aliases" no PowerShell são essencialmente apelidos para comandos do PowerShell. Eles permitem que os usuários executem comandos usando nomes curtos e fáceis de lembrar em vez de ter que digitar comandos completos e mais longos. Por exemplo, em vez de digitar "Get-ChildItem", que é um comando usado para listar arquivos e pastas em um diretório, os usuários podem simplesmente digitar "ls", que é um alias para o mesmo comando. Os aliases podem ser úteis para acelerar o processo de digitação de comandos, especialmente para usuários frequentes do PowerShell.

Para definir um novo alias no PowerShell, use o comando "Set-Alias". A sintaxe básica é a seguinte:

```powershell
Set-Alias -Name <alias-name> -Value <command-name>
```

Onde:
- `<alias-name>` é o nome que você deseja usar para o alias.
- `<command-name>` é o nome completo do comando que você deseja atribuir ao alias.

Certo, agora que você já tem o básico preparado e teve uma pequena introdução aos conceitos mais básicos do PowerShell, vamos começar a entrar em subtópicos mais específicos.

## Terminal

Muitos conteúdos da internet recomendam o `Windows Terminal` que realmente é ótimo, mas como eu mencionei, eu vou passar e recomendar para vocês o que eu uso no dia a dia, por isso, venho trazer uma alternativa, o Hyper Terminal

### Mas qual a vantagem desse terminal?

Bom, basicamente as maiores vantagens desse terminal são seus plugins produtivos, temas elegantes e atalhos práticos para novas abas.

Após esclarecimentos, vamos continuar [Acesse o site do hyper](https://hyper.is/) e faça o Download, desde já eu quero deixar claro que na primeira vez ao iniciar o terminal, ele vai estar **_extremamente feio_**, mas calma, isso é porque ele está configurado com o tema padrão, que é horroroso kkkkk, porém ele tem uma galeria inteira de temas bem bonitos, então para poupar a sua visão, vamos logo instalar o meu tema favorito, depois eu recomendo que você explore todos os temas e plugins que ele tem disponível no [site oficial](https://hyper.is/), pois aqui eu só vou passar dois deles que são referentes a personalização.

### Instalar o tema hyper-rose-pine

Este tema é o meu favorito, por isso estou recomendando, mas o processo de instalação é basicamente igual para qualquer tema, portanto se sinta a vontade de instalar o tema de sua preferência.

Com o Hyper aberto usa o atalho `Ctrl + ,`, isso vai abrir o arquivo de configuração do Hyper no Bloco de notas ou em qualquer outro editor de texto para você, ao fazer qualquer alteração e salvar(`Ctrl + s`) o Hyper atualiza automaticamente, então já vamos começar a fazer algumas mudanças.

Procure logo no começo do arquivo por `fontSize: algum valor`, essa propriedade vem do `CSS` e refere-se ao tamanho da fonte do terminal, teste valores e verifique qual fica melhor para você.

Agora o tema em sí, desça até o final do arquivo e procure por `plugins: []`, dentro dessas chaves você deve colocar dois valores, `'Nome do tema que você escolheu'` e `'hyper-custom-controls'`.

Após fazer isso, o `plugins: []` deve ficar assim:

```javascript
  plugins: ['Seu tema de preferência', 'hyper-custom-controls']
```

**Lembre-se de colocar o nome dos plugins entre aspas e separar os dois por vírgula.**

Agora deixe-me explicar o que exatamente esses plugins fazem, o primeiro é o tema para deixar o Hyper mais bonito, já o segundo: `hyper-custom-controls` é apenas um toque a mais que eu pessoalmente gosto, ele coloca os botões de maximizar, minimizar e fechar na esquerda e muda a aparência para ficar semelhante a do macOS.

Apenas um detalhe que percebi, por algum motivo que eu desconheço, se você inverter a ordem que mostrei, no caso colocar primeiro o plugin e depois o tema, dependendo do tema isso pode acabar resultando no mau funcionamento do plugin, no meu caso ele nem apareceu os botões, então por garantia deixe o seu tema sempre como o primeiro ;)

Após salvar, feche o terminal e abra de novo por garantia, e se tudo estiver certo, ele já deve estar com o tema que você escolheu e com os botões no canto superior esquerdo.

### Configurar Hyper para abrir o PowerShell

Para fazer o Hyper abrir com PowerShell que você instalou no começo do tutorial, abra novamente o arquivo de configuração do hyper: `Ctrl + ,`, procure e encontre as opções de `shell: ''` e `shellArgs: []`.

Sua opção `shell: ''` deve ficar assim:

```javascript
shell: 'C:\\Users\\<NOME DO SEU USUÁRIO>\\AppData\\Local\\Microsoft\\WindowsApps\\Microsoft.PowerShell_8wekyb3d8bbwe\\pwsh.exe'
```

**Obs: substitua `<NOME DO SEU USUÁRIO>` pelo nome do seu usuário**

Depois disso eu recomendo que você crie uma pasta em algum lugar do seu computador para você guardar todos os seus arquivos, cursos ou projetos sobre desenvolvimento, por exemplo, eu criei o diretório `Development` no meu HD secundário, ficando assim: `D:\\Development`.

Isso serve para deixar seu computador mais organizado e porque com essa pasta criada você pode adicionar mais configuração no Hyper que permite o PowerShell iniciar em um diretório específico, no caso esse que você criou, para fazer essa configuração, aquela segunda opção o `shellArgs: []` deve ficar assim:

```javascript
  shellArgs: ['-noexit', '-command', 'Set-Location <CAMINHO DA SUA PASTA>']
```

**Obs: substitua `<CAMINHO DA SUA PASTA>` pelo caminho da pasta que você criou**

Feche seu terminal e abra novamente, ele deve estar mais ou menos assim:

![Print do terminal](https://images2.imgbox.com/12/de/5zXHDPSA_o.png)

Boa, tá começando a tomar forma 

Perceba que ele já iniciou no diretório que você configurou, pode parecer besta mas é bem prático.

Basicamente essa é a configuração do Hyper, agora vamos conhecer uma ferramenta muito legal para melhor a experiência com o terminal que não é muito conhecida.

## Oh-My-Posh, uma alternativa ao Oh-My-Zsh do Linux

Acho que todo mundo conhece o zsh + oh-my-zsh do Linux né? Então você sabia que existe uma alternativa tão boa quanto e que funciona de forma nativa no Windows, inclusive com PowerShell?

Bom, existe e esse é o [oh-my-posh](https://ohmyposh.dev/), inclusive ele tem por padrão o tema `spaceship` que é bem conhecido no oh-my-zsh, então vamos instalar e configurar essa ferramenta e o tema `spaceship`.

Outra recomendação minha é que você instale e configure o Winget do Windows que é basicamente um gerenciador de pacotes oficiais da Microsoft para instalar e gerenciar aplicativos por linha de comando.

Para isso, entre na Microsoft Store e pesquise por `winget`, instale a primeira opção que é oficial da Microsoft.

É basicamente isso, para descobrir os principais comandos navegue pela [documentação oficial](https://learn.microsoft.com/pt-br/windows/package-manager/winget/), apesar de ser bem intuitivo, ele usa comandos como: `install`. `search`, `list`, etc.

Agora, vamos continuar...

No seu terminal com PowerShell instale o oh-my-posh com winget:

```powershell
  winget install JanDeDobbeleer.OhMyPosh -s winget
```

**_Pronto para verificar se está tudo instalado corretamente digite:_**

```powershell
  oh-my-posh --version
```

### Iniciar oh-my-posh com o PowerShell e definir tema

No repositório oficial do oh-my-posh nós temos esse diretório [`themes`](https://github.com/JanDeDobbeleer/oh-my-posh/tree/main/themes) onde encontramos os arquivos de configuração dos temas padrão já prontos, inclusive o do `spaceship` que eu vou instalar aqui.

Execute o seguinte comando para editar as configurações de usuário do PowerShell com o bloco de notas(Por enquanto kkkk):

```powershell
  notepad $PROFILE
```

Nas primeiras linhas adicione:

```powershell
# Prompt
oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/spaceship.omp.json' | Invoke-Expression
```

**Isso está basicamente pegando o arquivo de configuração do spaceship no repositório do oh-my-posh e dizendo para ele iniciar com aquele tema. Se você quiser mudar o tema, acesse o [repositório do oh-my-posh](https://github.com/JanDeDobbeleer/oh-my-posh/tree/main/themes) escolha um da sua preferência e substitua apenas o nome do antigo tema, no meu caso `spaceship.omp.json`.**

Mas tem um detalhe.

Vários temas do oh-my-posh usam caracteres especiais que não se encontram na maior parte das fontes, então quando você selecionar um tema com esses caracteres a interface vai ficar toda quebrada, porém existe uma solução.

O [Nerd Fonts](https://www.nerdfonts.com/) é um projeto Open-Source que disponibiliza fontes conhecidas no mundo _dev_, como a Fira Code, por exemplo, mas com o adicional de ter esses ícones por padrão, e é exatamente disso que precisamos, então [acesse a página de download deles](https://www.nerdfonts.com/font-downloads) e escolha a fonte da sua preferência, neste post irei usar a `Blex Mono Nerd Font`.

Faça o download da sua fonte, faça a descompactação da pasta, abra a pasta e selecione tudo com: `Ctrl + a`, aperte com botão direito e selecione `instalar`, aguarde o processo terminar.

Após instalar a fonte, precisamos configurar o Hyper para usar essa fonte e não a padrão.

Abra seu terminal Hyper use: `Ctrl + ,` para entrar no arquivo de configurações e procure logo no começo do arquivo pela opção de `fontFamily: '"<SUA FONTE>"'`

Caso você não saiba exatamente o nome da fonte, abra a configuração de fonte do seu Windows e pesquise pelo nome padrão da fonte que você escolheu no site, no meu caso `Blex Mono`.

**Obs: As fontes do Nerd Fonts vem com várias variações da mesma fonte, tipo peso da fonte com negrito ou sem, etc.**

Vai aparecer uma lista de variações da fonte que você instalou, escolha uma copie o nome e cole lá na configuração do Hyper, que deve ficar assim no final:

```javascript
  fontFamily: '"BlexMono NFM"'
```

Reinicie seu terminal e veja o tema do oh-my-posh em ação:

![Print do terminal com oh-my-posh](https://images2.imgbox.com/0c/c0/R9WoWwsU_o.png)

**_Pronto, configurado e bonitão 👍_**

Mas ainda podemos melhorar ele usando os **_Módulos do PowerShell_**

## Instalando e configurando alguns módulos do PowerShell

Vamos primeiro instalar todas as ferramentas e depois atualizar o usuário PowerShell de uma vez só!

### Instalar Terminal-Icons

Esse módulo adiciona ícones para as pastas e arquivos do seu terminal

```bash
  Install-Module -Name Terminal-Icons -Repository PSGallery
```

### Instalar PSReadLine

O PSReadLine fornece uma experiência de edição de linha de comando aprimorada no console do PowerShell.

Se você instalou a versão mais recente do PowerShell, provavelmente já tem o PSReadLine instalado por padrão, mas por garantia execute:

```powershell
  Install-Module -Name PSReadLine -AllowClobber -Force
```

### Instalar Fzf e PSFzf

É um filtro Unix interativo para linha de comando que pode ser usado com qualquer lista; arquivos, histórico de comandos, processos, nomes de host, favoritos, git commits, etc.

Fzf Com Winget:

```powershell
  winget install junegunn.fzf
```

PSFzf:

```
  Install-Module -Name PSFzf
```

### Atualizar usuário

Entre no seu arquivo de configuração com: `notepad $PROFILE` e após a inicialização do oh-my-posh, pule uma linha e cole o seguinte:

```powershell
# Alias
Set-Alias -Name ll -Value ls
Set-Alias -Name g -Value git

# Icons
Import-Module -Name Terminal-Icons

#PSReadline
Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -PredictionViewStyle ListView

# Fzf
Import-Module PSFzf
Set-PsFzfOption -PSReadlineChordProvider 'Ctrl+f' -PSReadlineChordReverseHistory 'Ctrl+r'
```

**Eu coloquei apenas dois aliases mas o ideal é que você adicione conforme sinta necessidade.**

Agora quando você começar a digitar vai aparecer uma lista com sugestões de comandos que você já usou antes, você pode navegar entre as sugestões usando as setas do teclado.

![Print do terminal com PSReadLine](https://images2.imgbox.com/95/90/pe4Ou0pf_o.png)

Além disso, se você usar o atalho `Ctrl + r`, você poderá ver a lista dos últimos comandos que usou.

Quanto ao Módulo Terminal-Icons, você poderá perceber que sempre que der um `ls` as pastas e arquivos estarão com ícones personalizados.

Por exemplo, esse é um `ls` no diretório raiz aqui do Hacking-News:

![Print do terminal com Terminal-Icons](https://images2.imgbox.com/5a/87/ho2sVuTi_o.png)

## Visual Studio Code

[Acesse o site oficial e instale](https://code.visualstudio.com/) é bem simples.

### Tema que eu recomendo

Para combinar com o terminal eu recomendo o tema `Rosé Pine` e o tema de ícones `Material icon Theme`.

### Extensões iniciais

Aí vai uma lista de extensões que eu uso no dia a dia:

- Thunder Client
- Live Server
- Auto Close Tag
- Auto Rename Tag
- Code Spell Checker
- Color Highlight
- CSS-in-JS
- ESlint
- EditorConfig
- GitLens
- Markdown All in one
- Indent-rainbow
- Rainbow Brackets
- Tabnine
- vscode-styled-components

Essas extensões são mais iniciais e vocês vão usar muito, mas conforme vocês forem estudando coisas novas, vão ter extensões oficias dessas tecnologias que serão necessárias para uma melhor experiência, tipo a extensão do Prisma ou do GraphQL, por exemplo.

### Outras configurações

As outras configurações são muito pessoais tipo tamanho da fonte, altura das linhas e enfim, então eu vou simplesmente colar minha configuração `JSON` inteira aqui, quem quiser copiar para usar beleza, mas não vejo tanta necessidade.

Se você quiser copiar, primeiro acesse as configurações em JSON do seu vscode, para fazer isso use o atalho `Ctrl + Shift + p` e escreva JSON e procure por `abrir as configurações do usuário`.

Você verá um arquivo .JSON com todas as configurações do seu vscode, selecione tudo com `Ctrl + a`, e substitua pelo seguinte:

```json
{
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "workbench.startupEditor": "newUntitledFile",
  "editor.fontSize": 17,
  "editor.cursorBlinking": "expand",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.smoothScrolling": true,
  "javascript.suggest.autoImports": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.rulers": [
    80,
    120
  ],
  "extensions.ignoreRecommendations": true,
  "typescript.tsserver.log": "off",
  "files.associations": {
    ".sequelizerc": "javascript",
    ".stylelintrc": "json",
    "*.tsx": "typescriptreact",
    ".env.*": "dotenv",
    ".prettierrc": "json"
  },
  "screencastMode.onlyKeyboardShortcuts": true,
  "cSpell.userWords": [
    "chakra",
    "clsx",
    "Dotenv",
    "fastify",
    "Fastify",
    "feedbackwidget",
    "Hono",
    "IUGU",
    "jupiter",
    "middlewares",
    "mixpanel",
    "monaco",
    "nestjs",
    "Omni",
    "Onboarded",
    "pallas",
    "prefetch",
    "rocketseat",
    "rotion",
    "trpc",
    "TRPC",
    "unfollow",
    "Unfollow",
    "unform",
    "Unform",
    "unmark",
    "upsert"
  ],
  "editor.parameterHints.enabled": false,
  "editor.renderLineHighlight": "gutter",
  "cSpell.language": "en,pt",
  "editor.lineHeight": 28,
  "typescript.updateImportsOnFileMove.enabled": "never",
  "editor.suggestSelection": "first",
  "explorer.confirmDelete": false,
  "gitlens.codeLens.recentChange.enabled": false,
  "terminal.integrated.showExitAlert": false,
  "[prisma]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "Prisma.prisma"
  },
  "typescript.suggest.autoImports": true,
  "terminal.integrated.env.osx": {
    "FIG_NEW_SESSION": "1"
  },
  "workbench.editor.labelFormat": "short",
  "editor.fontLigatures": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "liveshare.featureSet": "insiders",
  "cSpell.enableFiletypes": [
    "!asciidoc",
    "!c",
    "!cpp",
    "!csharp",
    "!go",
    "!handlebars",
    "!haskell",
    "!jade",
    "!java",
    "!latex",
    "!php",
    "!pug",
    "!python",
    "!restructuredtext",
    "!rust",
    "!scala",
    "!scss"
  ],
  "editor.acceptSuggestionOnCommitCharacter": false,
  "explorer.compactFolders": false,
  "git.enableSmartCommit": true,
  "editor.accessibilitySupport": "off",
  "explorer.confirmDragAndDrop": false,
  "terminal.integrated.fontSize": 15,
  "terminal.integrated.fontFamily": "BlexMono NFM",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
    // "source.organizeImports": true
  },
  "editor.semanticHighlighting.enabled": false,
  "breadcrumbs.enabled": true,
  "editor.fontFamily": "BlexMono NFM",
  "gitlens.codeLens.authors.enabled": false,
  "editor.tabSize": 2,
  "security.workspace.trust.untrustedFiles": "newWindow",
  "files.exclude": {
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/.hg": true,
    "**/.svn": true,
    "**/.git": true
    // "node_modules": true
  },
  "tabnine.experimentalAutoImports": true,
  "gitlens.codeLens.enabled": false,
  "workbench.iconTheme": "material-icon-theme",
  "polacode.transparentBackground": true,
  "polacode.target": "snippet",
  "editor.minimap.enabled": false,
  "update.mode": "start",
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "workbench.editor.untitled.hint": "hidden",
  "workbench.colorTheme": "Rosé Pine",
  "editor.formatOnSave": true,
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "RainbowBrackets.depreciation-notice": false,
  "terminal.integrated.defaultProfile.windows": "PowerShell"
}
```

**Pronto 🙂**

## Instalando ferramentas iniciais

As ferramentas que você vai usar vão variar muito dependendo do que você pretende desenvolver, então vou passar duas ferramentas essenciais para desenvolver para Javascript(Minha Stack).

### Git com Winget

```powershell
  winget install --id Git.Git -e --source winget
```

### Node com Winget

```powershell
  winget install OpenJS.NodeJS.LTS
```

**_Pronto, apenas com isso você já consegue fazer muita coisa, conforme você for sentindo necessidade instale mais ferramentas, como um banco de dados, por exemplo._**

## Bônus

Além do Winget oficial da microsoft, existem outros dois gerenciadores de pacotes bastante conhecidos para Windows, o [Chocolatey](https://chocolatey.org/) e o [Scoop](https://scoop.sh/#/) caso queiram dar uma olhada.

## Conclusão 🎉

Descobrimos hoje o passo a passo para fazer um ambiente de desenvolvimento bem massa no Windows sem precisar necessariamente do WSL. Espero que tenham gostado do resultado.