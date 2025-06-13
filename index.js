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