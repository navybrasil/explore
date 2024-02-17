const routes = {
  "/": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/exploration": "/pages/exploration.html",
  404: "/pages/404.html",
};

function route(event) {
  event = event || window.event;
  event.preventDefault();

  window.history.pushState({}, "", event.target.href);

  handle();
}

function handle() {
  // const pathname = window.location.pathname;
  const { pathname } = window.location; //desistruturar
  const route = routes[pathname] || roudes[404];

  fetch(route)
    .then((data) => data.text())
    .then((html) => (document.querySelector("#app").innerHTML = html));
}
handle();

window.onpopstate = () => handle();
window.route = () => route();

// Alterar a imagem

const homeLink = document.querySelector('a[href="/"]');
const universeLink = document.querySelector('a[href="/universe"]');
const explorationLink = document.querySelector('a[href="/exploration"]');

const headerImage = document.querySelector("#imgHeader");

homeLink.addEventListener("click", () => {
  headerImage.setAttribute("src", "./assets/universeHome.jpg"); // Substitua "new-home-image.jpg" pela sua nova imagem
});

universeLink.addEventListener("click", () => {
  headerImage.setAttribute("src", "./assets/universe.jpg"); // Substitua "new-home-image.jpg" pela sua nova imagem
  // removeDisplay();
});

explorationLink.addEventListener("click", () => {
  headerImage.setAttribute("src", "./assets/exploration.jpg"); // Substitua "new-home-image.jpg" pela sua nova imagem
});

// function removeDisplay() {
//   const app = document.getElementById("app");
//   app.style.display = "block";
//   console.log("Flex");
// }
