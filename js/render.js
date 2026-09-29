// ===== Renderização =====

import {
  facts,
  hobbies,
  education,
  languages,
  certifications,
  projects,
  stack,
} from "./data.js";

const renderLinks = (links = []) => {
  if (!links.length) return "";

  return `
    <div class="project-links">
      ${links
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
        .join("")}
    </div>
  `;
};

// Seleciona elementos pelo ID
export const $ = (id) => document.getElementById(id);

// Gera itens de lista
const tag = (text) => `<li>${text}</li>`;

// Renderiza informações pessoais
$("facts").innerHTML = facts
  .map((f) => `<li><strong>${f.label}</strong>${f.value}</li>`)
  .join("");

// Renderiza listas simples
$("hobbies").innerHTML = hobbies.map(tag).join("");
$("languages").innerHTML = languages.map(tag).join("");
$("stack").innerHTML = stack.map(tag).join("");

// Renderiza formação acadêmica
$("education").innerHTML = education
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
  .join("");

// Renderiza certificações
$("certifications").innerHTML = certifications
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
  .join("");

// Renderiza projetos
$("projects").innerHTML = projects
  .map((p) => {
    const isDark = document.body.classList.contains("dark");
    const title = p.nda
      ? `  <h3>
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
      : `<h3>${p.name} </h3>`;
    const link = p.nda
      ? `<p class="nda-note"><img
          src="assets/images/${isDark ? "lock.svg" : "lock-light.svg"}"
          alt=""
          aria-hidden="true"
        /> Projeto sob acordo de confidencialidade (NDA). Detalhes disponíveis apenas em conversa.</p>`
      : ``;
    return `<li>
    <div class="row">${title}</div>
    <p>${p.desc}</p>
    <span class="tech">${p.stack.join(" · ")}</span>
   ${link}
   ${renderLinks(p.links)}
  </li>`;
  })
  .join("");
