# Portfólio Pessoal | Mariella Pugens

Portfólio pessoal desenvolvido para apresentar minha trajetória profissional, formação, certificações, tecnologias, projetos e experiências na área de desenvolvimento de software.

O projeto foi construído com **HTML, CSS e JavaScript**, utilizando uma arquitetura modular e separação de responsabilidades entre estrutura, estilos, dados e comportamento.

Além de funcionar como portfólio profissional, o projeto também foi desenvolvido como material de estudo para demonstrar conceitos de desenvolvimento **Front-End**, acessibilidade, responsividade, manipulação do DOM, organização de código e automação de deploy.

---

## Sobre o Projeto

O portfólio organiza as principais informações profissionais em diferentes seções:

- Sobre mim;
- Informações pessoais;
- Hobbies;
- Currículo;
- Formação educacional;
- Certificações;
- Idiomas;
- Trabalhos realizados;
- Stack tecnológica;
- Formulário de contato.

A interface possui suporte a **tema claro e escuro**, navegação responsiva para dispositivos móveis, navegação suave entre seções e componentes interativos.

Algumas experiências e projetos profissionais são apresentados de forma resumida para preservar informações protegidas por **acordos de confidencialidade (NDA)**. Nesses casos, são destacadas tecnologias, áreas de atuação e características gerais do trabalho, sem expor informações corporativas ou dados sigilosos.

---

## Objetivos

- Apresentar minha trajetória profissional;
- Disponibilizar meu currículo em PDF;
- Exibir formação e certificações;
- Apresentar tecnologias e conhecimentos técnicos;
- Demonstrar experiências e trabalhos realizados;
- Preservar informações protegidas por NDA;
- Demonstrar conhecimentos em desenvolvimento Front-End;
- Aplicar boas práticas de HTML, CSS e JavaScript;
- Trabalhar conceitos de acessibilidade e HTML semântico;
- Criar uma interface responsiva para diferentes dispositivos;
- Demonstrar organização e modularização de código;
- Servir como material de estudo para estudantes de desenvolvimento web.

---

## Tecnologias utilizadas

### Front-End

- HTML5
- CSS3
- JavaScript (ES Modules)
- CSS Grid
- CSS Flexbox
- CSS Custom Properties
- Media Queries
- Manipulação do DOM
- LocalStorage

### Recursos e conceitos

- HTML semântico;
- Design responsivo;
- Tema claro e escuro;
- Navegação por âncoras;
- Scroll suave;
- Menu responsivo;
- Renderização dinâmica de conteúdo;
- Validação de formulários;
- Modal interativo;
- Acessibilidade com atributos ARIA;
- Organização modular de JavaScript;
- Download de arquivos;
- Preservação de projetos sob NDA.

### Deploy

- GitHub Pages
- GitHub Actions

---

## Estrutura do Projeto

````text
Portfolio/
│
├── .github/
│   └── workflows/
│       └── static.yml
│
├── assets/
│   ├── images/
│   │   ├── lock-light.svg
│   │   ├── lock.svg
│   │   ├── mariella_avatar.png
│   │   ├── moon.svg
│   │   └── sun.svg
│   │
│   ├── utils/
│   │   └── calculateAge.js
│   │
│   └── curriculum_mariella.pdf
│
├── css/
│   ├── base.css
│   ├── components.css
│   ├── layout.css
│   └── variables.css
│
├── js/
│   ├── data.js
│   ├── main.js
│   ├── navigation.js
│   └── render.js
│
├── index.html
└── README.md

---

## Organização do JavaScript

O JavaScript foi dividido em módulos para facilitar a manutenção e separar responsabilidades.

### `data.js`

Centraliza os dados utilizados pelo portfólio, como:

- informações pessoais;
- hobbies;
- formação;
- idiomas;
- certificações;
- projetos;
- stack tecnológica.

Isso permite alterar o conteúdo sem precisar modificar toda a estrutura HTML.

### `render.js`

Responsável por transformar os dados de `data.js` em elementos HTML.

Entre suas funções estão:

- renderização das informações pessoais;
- renderização de hobbies;
- renderização de idiomas;
- renderização da formação;
- renderização das certificações;
- renderização dos projetos;
- renderização da stack tecnológica;
- criação dos links dos projetos.

### `navigation.js`

Controla o sistema de navegação da página:

- navegação por âncoras;
- scroll suave;
- identificação da seção atual;
- destaque do item ativo no menu;
- abertura e fechamento do menu responsivo.

### `main.js`

É o arquivo principal responsável por inicializar e controlar funcionalidades como:

- navegação;
- alternância entre tema claro e escuro;
- persistência do tema utilizando `localStorage`;
- modal;
- validação do formulário de contato.

### `utils.js`

Contém funções utilitárias reutilizáveis.

Entre elas está a função responsável pelo cálculo da idade a partir da data de nascimento:

```javascript
calculateAge(birthDate);
````

---

## Organização do CSS

Os estilos foram separados em arquivos para facilitar a manutenção.

### `variables.css`

Centraliza as variáveis visuais do projeto:

- cores;
- cores do tema escuro;
- bordas;
- raio dos componentes.

Exemplo:

```css
:root {
  --bg: #fdf5f8;
  --card: #ffffff;
  --text: #4a3350;
  --primary: #a55bd0;
  --radius: 20px;
}
```

O tema escuro utiliza a classe:

```css
body.dark
```

permitindo alterar diversas características visuais através das mesmas variáveis CSS.

### `base.css`

Contém estilos globais, como:

- reset;
- tipografia;
- elementos de formulário;
- títulos;
- links;
- footer;
- animações.

### `layout.css`

Responsável principalmente pela estrutura da página:

- cabeçalho;
- navegação;
- conteúdo principal;
- grids;
- hero;
- currículo;
- responsividade.

### `components.css`

Contém os estilos dos componentes visuais:

- botões;
- cards;
- tags;
- projetos;
- certificações;
- badges de NDA;
- CTA;
- formulário;
- mensagens de erro;
- modal;
- componentes do tema escuro.

---

## Tema claro e escuro

O portfólio possui alternância entre **tema claro e tema escuro**.

O JavaScript adiciona ou remove a classe:

```javascript
document.body.classList.toggle("dark", isDark);
```

O CSS utiliza essa classe para substituir as variáveis visuais:

```css
body.dark {
  --bg: #1d1522;
  --card: #2a1f31;
  --text: #f3e6f0;
}
```

A preferência do usuário também é armazenada no `localStorage`, permitindo que o tema escolhido seja mantido entre acessos.

---

## Responsividade

A interface foi desenvolvida para diferentes tamanhos de tela.

São utilizadas **Media Queries** para adaptar:

- menu de navegação;
- hero;
- avatar;
- grids;
- currículo;
- cards;
- componentes de contato.

Em telas menores, o menu principal é transformado em um menu responsivo controlado por JavaScript.

---

## Acessibilidade

O projeto utiliza alguns recursos voltados à acessibilidade, incluindo:

- HTML semântico;
- `alt` nas imagens;
- `aria-label` nos botões;
- `aria-expanded` no menu responsivo;
- `role="dialog"` no modal;
- `aria-modal="true"`;
- `aria-labelledby` no modal;
- foco direcionado ao botão de fechamento do modal;
- indicadores visuais de foco em campos de formulário;
- navegação por teclado utilizando a tecla `Escape` para fechar o modal.

---

## Formulário de contato

O formulário possui validação realizada pelo JavaScript.

São verificados:

- preenchimento do nome;
- formato do e-mail;
- preenchimento da mensagem.

Os erros são apresentados diretamente nos campos correspondentes.

O formulário atualmente funciona como uma **simulação de envio**. Após uma validação bem-sucedida, os campos são limpos e uma mensagem de sucesso é apresentada em um modal.

---

## Projetos sob NDA

Alguns trabalhos realizados durante a experiência profissional estão protegidos por acordos de confidencialidade.

Para esses projetos, o portfólio apresenta informações que podem ser compartilhadas publicamente, como:

- tecnologias utilizadas;
- áreas de atuação;
- descrição geral dos desafios;
- características técnicas;
- stack utilizada.

Informações confidenciais, código proprietário, dados de clientes e detalhes protegidos não são disponibilizados publicamente.

---

## Currículo

O portfólio disponibiliza o currículo em formato PDF através de um botão de download.

Arquivo:

```text
assets/curriculum_mariella.pdf
```

---

## Deploy

O projeto utiliza **GitHub Pages** para hospedagem e **GitHub Actions** para automatizar o processo de publicação.

O workflow está localizado em:

```text
.github/workflows/deploy.yml
```

O deploy é executado automaticamente após um `push` na branch configurada no workflow.

O processo realiza:

```text
Push para o GitHub
       ↓
GitHub Actions
       ↓
Checkout do repositório
       ↓
Configuração do GitHub Pages
       ↓
Upload dos arquivos
       ↓
Deploy
       ↓
Portfólio publicado
```

Também é possível executar o workflow manualmente através da aba **Actions** do GitHub.

---

## Executando localmente

Por ser uma aplicação web estática, não é necessário um backend para executar o projeto.

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta:

```bash
cd portfolio
```

Depois, abra o projeto utilizando um servidor local.

Uma opção simples é utilizar a extensão **Live Server** no Visual Studio Code.

Isso é especialmente recomendado porque o projeto utiliza **JavaScript Modules (`import` / `export`)**, que funcionam melhor através de um servidor HTTP local do que abrindo o `index.html` diretamente pelo sistema de arquivos.

---

## Finalidade educacional

Além de apresentar minha trajetória profissional, este projeto foi estruturado para demonstrar conceitos importantes de desenvolvimento web, como:

- HTML semântico;
- CSS moderno;
- Flexbox;
- CSS Grid;
- responsividade;
- CSS Custom Properties;
- JavaScript moderno;
- ES Modules;
- manipulação do DOM;
- eventos;
- validação de formulários;
- LocalStorage;
- acessibilidade;
- organização de arquivos;
- separação de responsabilidades;
- automação de deploy.

A estrutura pode servir como referência para estudantes que desejam compreender como organizar uma aplicação Front-End estática de pequeno porte.

---

## Autora

**Mariella Pugens**

Desenvolvedora Front End

```text
Frontend · IA · Mentoria
```

---

## Status

Projeto em evolução contínua.

Novas melhorias, conteúdos, componentes e ajustes de acessibilidade podem ser incorporados ao longo do desenvolvimento.
