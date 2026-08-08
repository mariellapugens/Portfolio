import {
  facts,
  projects,
  stack
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
    .map(project => `
      <li>

        <div class="row">
          <h3>${project.name}</h3>
          <span>${project.year}</span>
        </div>

        <p>${project.desc}</p>

        <small>
          ${project.stack.join(" · ")}
        </small>

      </li>
    `)
    .join("");
}

export function renderStack() {

  const element =
    document.getElementById("stack");

  element.innerHTML = stack
    .map(item => `<li>${item}</li>`)
    .join("");
}