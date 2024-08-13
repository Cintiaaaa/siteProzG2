// Menu Hamburger
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Dropdown do Perfil
const perfil = document.getElementById("perfil");
const dropdown = document.querySelector(".dropdown");

perfil.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

// Carrossel de Perfis
const carperfils = document.querySelectorAll(".carperfil");
let perfilIndex = 0;

function mostrarPerfil(index) {
  carperfils.forEach((perfil, i) => {
    perfil.style.display = i === index ? "block" : "none";
  });
}

function avaliarPerfil() {
  perfilIndex = (perfilIndex < carperfils.length - 1) ? perfilIndex + 1 : 0;
  mostrarPerfil(perfilIndex);
}

document.querySelectorAll(".btn-like, .btn-dislike").forEach(button => {
  button.addEventListener("click", () => {
    const botoes = button.parentElement;
    botoes.style.display = "none";
    setTimeout(() => {
      avaliarPerfil();
      botoes.style.display = "flex";
    }, 500);
  });
});

mostrarPerfil(perfilIndex);

// Chat
const openChat = document.getElementById("open-chat");
const chat = document.getElementById("chat");
const closeChat = document.getElementById("close-chat");

openChat.addEventListener("click", () => {
  chat.style.display = "flex";
  openChat.style.display = "none";

  document.getElementById('send-chat').addEventListener('click', function() {
    const chatBody = document.getElementsByClassName("chat-body")[0]; // Aqui está a correção
    const messageInput = document.getElementById("chat-input");

    // Cria um novo parágrafo para a mensagem
    const message = document.createElement('p');
    message.textContent = messageInput.value;

    // Adiciona a nova mensagem ao chat
    chatBody.appendChild(message);

    // Limpa o campo de input
    messageInput.value = '';

    // Rola o chat para a última mensagem
    chatBody.scrollTop = chatBody.scrollHeight;
  });

  // Permite o envio da mensagem ao pressionar Enter
  document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      document.getElementById('send-chat').click();
    }
  });
});

closeChat.addEventListener("click", () => {
  chat.style.display = "none";
  openChat.style.display = "block";
});

