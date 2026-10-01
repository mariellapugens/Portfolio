//Importa função para buscar elementos:
import { $ } from "./render.js";
// Importa a função responsável por iniciar a navegação do site.
import { initNavigation } from "./navigation.js";

// Chama função de navegação.
initNavigation();

// Busca o botão responsável por trocar o entre temas.
const themeToggle = $("themeToggle");

// Função responsável por aplicar o tema escolhido.
function applyTheme(theme) {
  // Verifica se o tema recebido é "dark".
  const isDark = theme === "dark";

  // Adiciona ou remove a classe "dark" do <body>.
  // Se isDark for true, adiciona a classe.
  // Se for false, remove a classe.
  document.body.classList.toggle("dark", isDark);

  //Altera o conteúdo do botão de tema entre os icones: sol ou lua.
  themeToggle.innerHTML = `
    <img
      src="assets/images/${isDark ? "sun" : "moon"}.svg"
      alt=""
      aria-hidden="true"
    />
  `;

  // Altera o texto acessível do botão.
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Ativar tema claro" : "Ativar tema escuro",
  );
}

// Recupera o tema salvo no navegador usando localStorage ou salva o tema claro como padrão, caso não tenha tema salvo.
applyTheme(localStorage.getItem("tema") || "light");

//Captura o click do usuário.
themeToggle.addEventListener("click", () => {
  // Verifica se o tema atual é escuro. Se sim, muda para claro. Se não, muda para escuro.
  const next = document.body.classList.contains("dark") ? "light" : "dark";

  // Salva a escolha do usuário no navegador.
  localStorage.setItem("tema", next);

  // Aplica o novo tema.
  applyTheme(next);
});

// Busca o elemento do modal na página.
const modal = $("modal");

// Função responsável por abrir o modal e definir seu conteúdo.
function showModal(title, text) {
  $("modalTitle").textContent = title;
  $("modalText").textContent = text;

  //Faz o modal ficar visível.
  modal.hidden = false;

  // Coloca o foco no botão de fechar.
  $("modalClose").focus();
}

// Captura o click no botão de fechar.
$("modalClose").addEventListener("click", () => {
  // Fecha o modal.
  modal.hidden = true;
});

// Permite fechar o modal clicando fora do seu conteúdo.
modal.addEventListener("click", (e) => {
  // Verifica se o usuário clicou no fundo do modal.
  if (e.target === modal) {
    // Fecha o modal.
    modal.hidden = true;
  }
});

// Permite fechar o modal pressionando a tecla ESC.
document.addEventListener("keydown", (e) => {
  // Verifica se a tecla ESC foi clicada.
  if (e.key === "Escape") {
    // Fecha o modal.
    modal.hidden = true;
  }
});

// Busca o formulário de contato pelo ID.
const form = $("contactForm");

// Expressão regular para verificar se o email possui formato válido.
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// // Função responsável por exibir ou remover mensagens de erro nos campos do formulário.
function setError(field, msg) {
  // Busca o elemento responsável pela mensagem de erro.
  // Exemplo: se field for "nome", procura pelo elemento com id="erro-nome".
  $("erro-" + field).textContent = msg;

  // Adiciona a classe "invalid" ao campo quando existe uma mensagem.
  $(field).classList.toggle("invalid", Boolean(msg));
}

// Executa esta função quando o usuário tentar enviar o formulário.
form.addEventListener("submit", (e) => {
  // Impede o comportamento padrão do formulário.
  e.preventDefault();

  // Obtém os valores dos campos.
  // trim() remove espaços extras no começo e no final do texto.
  const nome = $("nome").value.trim();
  const email = $("email").value.trim();
  const mensagem = $("mensagem").value.trim();

  // Variável utilizada para controlar se todos os campos
  // foram preenchidos corretamente.
  let ok = true;

  // Verifica se o nome foi preenchido. Se estiver preenchido, não mostra erro. Caso contrário, mostra a mensagem de erro.
  setError("nome", nome ? "" : "Informe seu nome.");

  // Se o nome estiver vazio, o formulário será considerado inválido.
  if (!nome) {
    ok = false;
  }

  // Primeiro verifica se o campo de email está vazio.
  if (!email) {
    // Mostra uma mensagem informando que o e-mail é obrigatório.
    setError("email", "Informe seu e-mail.");
    // Marca o formulário como inválido.
    ok = false;
    // Se o e-mail foi preenchido, verifica seu formato.
  } else if (!emailRegex.test(email)) {
    // Mostra uma mensagem informando que o e-mail é inválido.
    setError("email", "E-mail inválido (ex: usuario@dominio.com).");
    // Marca o formulário como inválido.
    ok = false;
  } else {
    // Se o e-mail estiver correto, remove as mensagens de erro.
    setError("email", "");
  }

  // Verifica se o campo mensagem foi preenchido.
  setError("mensagem", mensagem ? "" : "Escreva uma mensagem.");
  // Se a mensagem estiver vazia, marca o formulário como inválido.
  if (!mensagem) {
    ok = false;
  }

  // Se algum campo estiver inválido: Abre um modal informando que existem erros no formulário.
  if (!ok) {
    showModal("Ops!", "Verifique os campos destacados e tente novamente.");
    // Interrompe a execução para impedir o envio.
    return;
  }

  // Limpa todos os campos do formulário e faz uma simulação de envio.
  form.reset();
  // Exibe uma mensagem de sucesso.
  showModal("Obrigado!", "Mensagem enviada com sucesso!");
});
