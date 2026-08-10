import {
  facts,
  challanges,
  stack, 
  certifications
} from "./data.js";

export function renderFacts() {

  const element =
    document.getElementById("facts");

  element.innerHTML = facts
    .map(item => `
      <li>
        <strong>${item.label}</strong>
        ${item.value}
      </li>
    `)
    .join("");
}

export function renderChallenges() {

  const element =
    document.getElementById("challenges");

  element.innerHTML = challanges
     .map(
    (p) => `<li>
      <div class="row"><h3>${p.challange}</h3></div>
      <p>${p.desc}</p>
      <span class="tech">${p.stack.join(" · ")}</span>
    </li>`,
  )
  .join("");
}

export function renderStack() {

  const element =
    document.getElementById("stack");

  element.innerHTML = stack
    .map(item => `<li>${item}</li>`)
    .join("");
}

export function renderCertifications() {
    
  const element =
    document.getElementById("certifications");

  element.innerHTML = certifications
    .map((certification) => `<li>
  <a class="certification-link" href="${certification.url}" target="_blank" rel="noopener noreferrer" aria-label="Abrir certificação: ${certification.name}">
        <div class="certification-mark">✦</div>
        <div>
          <h3>${certification.name}</h3>
          <p>${certification.issuer}</p>
        </div>
        <span class="year">${certification.year} ↗</span>
      </a>
    </li>`,)
    .join("");
}