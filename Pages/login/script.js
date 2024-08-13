document.getElementById('buttonPerfil').addEventListener('click', validarlogin);
document.getElementById('email').addEventListener('blur', validarEmail);
document.getElementById('senha').addEventListener('blur', validarSenha);
document.getElementById('email').addEventListener('focus', removerMensagemObrigatoria);
document.getElementById('senha').addEventListener('focus', removerMensagemObrigatoria);

function validarEmail() {
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value) {
        email.style.backgroundColor = '';
        mostrarMensagemObrigatoria(email);
    } else if (!emailRegex.test(email.value)) {
        email.style.backgroundColor = '#f8d7da'; // Vermelho claro
    } else {
        email.style.backgroundColor = '#d4edda'; // Verde claro
    }
}

function validarSenha() {
    const senha = document.getElementById('senha');

    if (!senha.value) {
        senha.style.backgroundColor = '';
        mostrarMensagemObrigatoria(senha);
    } else if (senha.value.length <= 3) {
        senha.style.backgroundColor = '#f8d7da'; // Vermelho claro
    } else {
        senha.style.backgroundColor = '#d4edda'; // Verde claro
    }
}

function validarlogin(event) {
    event.preventDefault(); // Previne o envio do formulário

    const emailCorreto = 'dominique@gmail.com';
    const senhaCorreta = '1234';

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === emailCorreto && senha === senhaCorreta) {
        window.location.href = '../perfil/index.html'; // Redireciona para o perfil
    } else {
        alert('Email ou senha incorreta');
    }
}

function mostrarMensagemObrigatoria(input) {
    if (input.nextElementSibling && input.nextElementSibling.className === 'mensagem-erro') return;
    const mensagem = document.createElement('span');
    mensagem.textContent = 'Campo obrigatório';
    mensagem.className = 'mensagem-erro';
    input.parentElement.appendChild(mensagem);
}

function removerMensagemObrigatoria(event) {
    const mensagensErro = event.target.parentElement.querySelectorAll('.mensagem-erro');
    mensagensErro.forEach(mensagem => mensagem.remove());
}

document.getElementById('toggleSenha').addEventListener('click', function () {
    const senhaInput = document.getElementById('senha');
    const toggleSenhaImg = document.getElementById('toggleSenha');

    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        toggleSenhaImg.src = './img/senha-do-olho.png';
    } else {
        senhaInput.type = 'password';
        toggleSenhaImg.src = './img/0.webp';
    }
});