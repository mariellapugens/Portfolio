// Importa a função que busca de elementos pelo ID.
import { $ } from "./render.js";

// Exporta a função para que ela possa ser utilizada em outros arquivos JavaScript.
export function initNavigation() {
  // Busca o elemento <nav> pelo ID "nav".
  const nav = $("nav");

  // Busca o botão responsável por abrir/fechar o menu em telas menores.
  const menuToggle = $("menuToggle");

  // Busca todas as seções que possuem a classe ".page" e transforma essa NodeList em um Array.
  const sections = [...document.querySelectorAll(".page")];

  // Seleciona todos os links <a> cujo href começa com "#".
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    // Adiciona um evento de clique para cada link.
    link.addEventListener("click", (e) => {
      //Obtém o valor do href. Se o href for "#projetos", o slice(1) remove o primeiro caractere "#" e deixa apenas "projetos".
      const id = link.getAttribute("href").slice(1);

      // Procura na página um elemento que tenha esse ID.
      const target = $(id);

      // Se o elemento não existir, interrompe a função.
      if (!target) return;

      // Impede o comportamento padrão do link.
      e.preventDefault();

      // Atualiza a URL para mostrar a âncora escolhida.
      history.replaceState(null, "", "#" + id);

      // Faz a página rolar suavemente até a seção selecionada.
      target.scrollIntoView({ behavior: "smooth" });

      // Fecha o menu depois que o usuário seleciona uma seção.
      nav.classList.remove("open");

      // Atualiza o atributo de acessibilidade indicando que o menu está fechado.
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Função responsável por descobrir qual seção está atualmente visível durante a rolagem.
  function highlightNav() {
    // Pega a posição vertical atual da página. window.scrollY indica quantos pixels o usuário já rolou para baixo.
    // O +120 cria uma margem de 120 pixels para que a mudança de seção aconteça antes de chegar exatamente ao topo dela.
    const pos = window.scrollY + 120;

    // Define inicialmente como seção atual a primeira seção encontrada.
    let current = sections[0]?.id;

    // Percorre todas as seções da página.
    sections.forEach((section) => {
      // Se a posição da seção já tiver sido alcançada pelo usuário, ela passa a ser considerada a seção atual.
      if (section.offsetTop <= pos) {
        current = section.id;
      }
    });

    // Busca todos os links dentro do menu.
    nav.querySelectorAll("a").forEach((link) => {
      // Adiciona ou remove a classe "active".
      link.classList.toggle(
        "active",
        link.getAttribute("href") === "#" + current,
      );
    });
  }

  // Executa highlightNav() sempre que o usuário rolar a página.
  window.addEventListener("scroll", highlightNav, {
    // Informa ao navegador que o evento não chamará preventDefault().
    passive: true,
  });

  // Executa a função uma vez imediatamente. Isso garante que o menu já comece destacando a seção correta, mesmo antes de o usuário rolar.
  highlightNav();

  // Adiciona um evento de clique ao botão do menu.
  menuToggle.addEventListener("click", () => {
    // Adiciona a classe "open" ao menu se ele estiver fechado. Se já estiver aberto, remove a classe.
    const open = nav.classList.toggle("open");

    // Atualiza o atributo aria-expanded. Esse atributo informa para tecnologias assistivas
    // se o menu está aberto ou fechado.
    menuToggle.setAttribute("aria-expanded", String(open));
  });
}
