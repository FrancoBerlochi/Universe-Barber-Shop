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