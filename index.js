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

const list = document.querySelector(".list");

// We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
const item = document.querySelector(".item");
const itemWidth = item.offsetWidth;

function handleClick(direction) {
  // Based on the direction we call `scrollBy` with the item width we got earlier
  if (direction === "previous") {
    list.scrollBy({ left: -itemWidth, behavior: "smooth" });
  } else {
    list.scrollBy({ left: itemWidth, behavior: "smooth" });
  }
}

function handleGalery(category) {
  const allImages = document.querySelectorAll("#galeria li");
  const allButtons = document.querySelectorAll("#buttons div");

  allImages.forEach((img) => {
    const imgCategory = img.dataset.category;

    if (category === "all" || imgCategory === category) {
      img.classList.remove("hidden");
    } else {
      img.classList.add("hidden");
    }
  });

  allButtons.forEach((div) => {
    const divCategory = div.id;
    div.classList.remove("bg-gradient-to-r");
    div.classList.remove("from-[#3063d3]");
    div.classList.remove("to-[#814ee5]");
    div.classList.add("bg-[#abbdec]");
    if (divCategory === category) {
      div.classList.add("bg-gradient-to-r");
      div.classList.add("from-[#3063d3]");
      div.classList.add("to-[#814ee5]");
    }
  })

 
}