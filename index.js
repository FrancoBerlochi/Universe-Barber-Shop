window.addEventListener("scroll", () => { 
  const header = document.getElementById("header");
  if (window.scrollY > 10) {
    header.classList.add("bg-[#f1f1f1b6]");
    header.classList.remove("bg-white");
  }
  else {
    header.classList.remove("bg-[#f1f1f1b6]");
    header.classList.add("bg-white");
  }
})  

function updateUniverseClass() {
  const universe = document.getElementById("Universe");
  if (!universe) return;
  if (window.innerWidth < 768) {
    universe.classList.add("appear-mobile");
    universe.classList.remove("appear");
  } else {
    universe.classList.remove("appear-mobile");
    universe.classList.add("appear");
  }
}

// Ejecutar al cargar la página
window.addEventListener("DOMContentLoaded", updateUniverseClass);

// Ejecutar al cambiar el tamaño
window.addEventListener("resize", updateUniverseClass);

document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector(".burger-check");
  const menuLinks = document.querySelectorAll(".burger-nav a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      checkbox.checked = false;
      document.body.classList.remove("overflow-hidden"); // también quitás el no-scroll
    });
  });

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });
});