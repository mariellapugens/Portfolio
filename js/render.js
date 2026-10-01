// Importa os dados que serão utilizados para preencher automaticamente as informações da página.
import {
  facts,
  hobbies,
  education,
  languages,
  certifications,
  projects,
  stack,
} from "./data.js";

// Função responsável por criar os links dos projetos.
const renderLinks = (links = []) => {
  // Se não houver nenhum link, retorna uma string vazia. Dessa forma, nenhum conteúdo é criado no HTML.
  if (!links.length) return "";

  // Cria o HTML dos links.
  return `
    <div class="project-links">
      ${links
        // Percorre todos os links da lista e Cria um link clicável.
        .map(
          ({ label, url }) => `
            <a
              href="${url}"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              ${label}
            </a>
            -
          `,
        )
        // Junta todos os links gerados em uma única string.
        .join("")}
    </div>
  `;
};

// Função para buscar elementos: Seleciona um elemento HTML pelo seu ID.
export const $ = (id) => document.getElementById(id);

// Função auxiliar que recebe um texto e transforma esse texto em um item de lista <li>.
const tag = (text) => `<li>${text}</li>`;

// Busca o elemento com id="facts".
$("facts").innerHTML = facts
  // Para cada informação, cria um <li>.
  .map((f) => `<li><strong>${f.label}</strong>${f.value}</li>`)
  //junta todos os <li> em uma única string HTML.
  .join("");

// Renderiza a lista de hobbies.
$("hobbies").innerHTML = hobbies.map(tag).join("");

// Renderiza a lista de idiomas.
$("languages").innerHTML = languages.map(tag).join("");

// Renderiza a lista de tecnologias utilizadas.
$("stack").innerHTML = stack.map(tag).join("");

// Busca o elemento com id="education".
$("education").innerHTML = education
  // Percorre cada formação acadêmica.
  .map(
    (e) => `
      <li>
        <div class="row">
          <h3>${e.name}</h3>
          <span class="year">${e.year}</span>
        </div>
        <p>${e.place}</p>
      </li>
    `,
  )
  // Junta todas as formações em uma única string.
  .join("");

// Busca o elemento onde as certificações serão exibidas.
$("certifications").innerHTML = certifications
  // Percorre todas as certificações.
  .map(
    (c) => `
      <li>
        <a
          class="certification-link"
          href="${c.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="certification-mark">✦</div>
          <div>
            <h3>${c.name}</h3>
            <p>${c.issuer}</p>
          </div>
          <span class="year">${c.year} ↗</span>
        </a>
      </li>
    `,
  )
  // Junta todas as certificações em uma única string.
  .join("");

// Busca o elemento com id="projects".
$("projects").innerHTML = projects

  // Percorre todos os projetos.
  .map((p) => {
    // Verifica se o tema atual da página é escuro.
    const isDark = document.body.classList.contains("dark");

    // Verifica se o projeto possui NDA.
    const title = p.nda
      ? // Se tiver NDA, mostra o nome do projeto acompanhado de um cadeado e do texto "NDA".
        `  <h3>
      ${p.name}
      <span
        class="nda-badge themeToggleLock"
        title="Projeto sob acordo de confidencialidade"
      >
        <img
          src="assets/images/${isDark ? "lock.svg" : "lock-light.svg"}"
          alt=""
          aria-hidden="true"
        />
        NDA
      </span>
    </h3>`
      : // Caso não tenha NDA, mostra somente o nome do projeto.
        `<h3>${p.name} </h3>`;

    // Verifica novamente se o projeto possui NDA.
    const link = p.nda
      ? // Se possuir NDA, mostra uma mensagem informando que os detalhes do projeto são confidenciais.
        `<p class="nda-note"><img
          src="assets/images/${isDark ? "lock.svg" : "lock-light.svg"}"
          alt=""
          aria-hidden="true"
        /> Projeto sob acordo de confidencialidade (NDA). Detalhes disponíveis apenas em conversa.</p>`
      : // Se não possuir NDA, não adiciona nenhuma mensagem.
        ``;

    // Retorna o HTML completo de um projeto.
    return `<li>
    <div class="row">${title}</div>
    <p>${p.desc}</p>
    <span class="tech">${p.stack.join(" · ")}</span>
   ${link}
   ${renderLinks(p.links)}
  </li>`;
  })
  // Junta todos os projetos em uma única string HTML.
  .join("");
