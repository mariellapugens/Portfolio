import {
  facts,
  projects,
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

export function renderProjects() {

  const element =
    document.getElementById("projects");

  element.innerHTML = projects
     .map(
    (p) => `<li>
      <div class="row"><h3>${p.name}</h3><span class="year">${p.year}</span></div>
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
        <div class="certification-mark">✦</div>
       <div>
         <h3>${certification.name}</h3>
         <p>${certification.issuer}</p>
        </div>
        <span class="year">${certification.year}</span>
      </li>`,)
    .join("");
}