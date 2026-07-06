function setupIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setupMenu() {
  const button = document.querySelector(".menu-button");
  const menu = document.querySelector("#mobile-menu");
  if (!button || !menu) {
    return;
  }

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    menu.hidden = expanded;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setupIcons();
  setupMenu();
});
