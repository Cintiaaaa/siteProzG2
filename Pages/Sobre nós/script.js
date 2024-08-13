const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

const botaoMenu = document.getElementsByClassName("botao")

botaoMenu.addEventListener('mouseover',()=>{
  botaoMenu.toggle(".botao:hover")
})

document.addEventListener("DOMContentLoaded", () => {
  const perfil = document.getElementById("perfil");
  const dropdown = document.querySelector(".dropdown");

  perfil.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });
  
});
