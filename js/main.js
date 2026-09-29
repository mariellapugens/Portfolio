// ===== Inicialização =====

import { $ } from "./render.js";
import { initNavigation } from "./navigation.js";

initNavigation();

// ===== Tema claro/escuro =====

const themeToggle = $("themeToggle");

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark", isDark);

  themeToggle.innerHTML = `
    <img
      src="assets/images/${isDark ? "sun" : "moon"}.svg"
      alt=""
      aria-hidden="true"
    />
  `;

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Ativar tema claro" : "Ativar tema escuro",
  );
}

applyTheme(localStorage.getItem("tema") || "light");

themeToggle.addEventListener("click", () => {
  const next = document.body.classList.contains("dark") ? "light" : "dark";

  localStorage.setItem("tema", next);

  applyTheme(next);
});

// ===== Modal =====

const modal = $("modal");

function showModal(title, text) {
  $("modalTitle").textContent = title;
  $("modalText").textContent = text;

  modal.hidden = false;

  $("modalClose").focus();
}

$("modalClose").addEventListener("click", () => {
  modal.hidden = true;
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.hidden = true;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.hidden = true;
  }
});

// ===== Formulário de contato =====

const form = $("contactForm");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Exibe ou remove erros dos campos
function setError(field, msg) {
  $("erro-" + field).textContent = msg;

  $(field).classList.toggle("invalid", Boolean(msg));
}

// Validação do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = $("nome").value.trim();
  const email = $("email").value.trim();
  const mensagem = $("mensagem").value.trim();

  let ok = true;

  // Nome
  setError("nome", nome ? "" : "Informe seu nome.");

  if (!nome) {
    ok = false;
  }

  // E-mail
  if (!email) {
    setError("email", "Informe seu e-mail.");
    ok = false;
  } else if (!emailRegex.test(email)) {
    setError("email", "E-mail inválido (ex: usuario@dominio.com).");

    ok = false;
  } else {
    setError("email", "");
  }

  // Mensagem
  setError("mensagem", mensagem ? "" : "Escreva uma mensagem.");

  if (!mensagem) {
    ok = false;
  }

  // Exibe erros
  if (!ok) {
    showModal("Ops!", "Verifique os campos destacados e tente novamente.");

    return;
  }

  // Simulação de envio
  form.reset();

  showModal("Obrigado!", "Mensagem enviada com sucesso!");
});
