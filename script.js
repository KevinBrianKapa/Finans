// Seleciona todos os botões de cabeçalho do accordion
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    // Fecha todos os outros accordions
    document.querySelectorAll(".accordion-body").forEach(body => {
      if (body !== header.nextElementSibling) {
        body.style.display = "none";
      }
    });

    // Alterna a visibilidade do conteúdo atual
    const body = header.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
});
