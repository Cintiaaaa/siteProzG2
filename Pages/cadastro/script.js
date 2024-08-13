function mostrarPopup(input, label){
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", function(){
        label.classList.add("required-popup")
    })
    
    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", function(){
        label.classList.remove("required-popup")
    })
    }

let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

usernameInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.length < 3){
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
        usernameHelper.classList.add("visible")
        usernameHelper.innerText = "Seu username precisa conter no mínimo 3 caracteres."
    } else {
        usernameInput.classList.add("correct")
        usernameInput.classList.remove("error")
        usernameHelper.classList.remove("visible")
    }
})

let lastnameInput = document.getElementById("lastname");
let lastnameLabel = document.querySelector('label[for="lastname"]');
let lastnameHelper = document.getElementById("lastname-helper");

lastnameInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.length < 3){
        lastnameInput.classList.remove("correct")
        lastnameInput.classList.add("error")
        lastnameHelper.classList.add("visible")
        lastnameHelper.innerText = "Seu sobrenome precisa conter no mínimo 3 caracteres."
    } else {
        lastnameInput.classList.add("correct")
        lastnameInput.classList.remove("error")
        lastnameHelper.classList.remove("visible")
    }
})

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

emailInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.includes("@") && valor.includes(".com")){
        emailInput.classList.add("correct")
        emailInput.classList.remove("error")
        emailHelper.classList.remove("visible")
    } else {
        emailInput.classList.remove("correct")
        emailInput.classList.add("error")
        emailHelper.innerText = "Email inválido"
        emailHelper.classList.add("visible")
    }
})


let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById("idade-helper");

idadeInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor < 50){
        idadeInput.classList.remove("correct")
        idade.classList.add("error")
        idadeHelper.classList.add("visible")
        idadeHelper.innerText = "Você precisa ter no mínimo 50 anos."
    } else {
        idadeInput.classList.add("correct")
        idadeInput.classList.remove("error")
        idadeHelper.classList.remove("visible")
    }
})

let estadoCivilInput = document.getElementById("estado civil");
let estadoCivilLabel = document.querySelector('label[for="estado civil"]');
let estadoCivilHelper = document.getElementById("estado civil-helper");

estadoCivilInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.length < 4){
        estadoCivilInput.classList.remove("correct")
        estadoCivilInput.classList.add("error")
        estadoCivilHelper.classList.add("visible")
        estadoCivilHelper.innerText = "Campo obrigatório."
    } else {
        estadoCivilInput.classList.add("correct")
        estadoCivilInput.classList.remove("error")
        estadoCivilHelper.classList.remove("visible")
    }
})

let celularInput = document.getElementById("celular");
let celularLabel = document.querySelector('label[for="celular"]');
let celularHelper = document.getElementById("celular-helper");

celularInput.addEventListener("change", function(evento){
    let valor = evento.target.value

const regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;
if (!regexTelefone.test(celular.value)) {
        celularInput.classList.remove("correct")
        celularInput.classList.add("error")
        celularHelper.classList.add("visible")
        celularHelper.innerText = "Por favor, insira um número de telefone válido."
    } else {
        celularInput.classList.add("correct")
        celularInput.classList.remove("error")
        celularHelper.classList.remove("visible")
    }
})

let hobbieInput = document.getElementById("hobbie").addEventListener('submit', function(event) {
    const checkboxes = document.querySelectorAll('input[name="hobbie"]');
    let peloMenosUmMarcado = false;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            peloMenosUmMarcado = true;
        }
    });

    if (!peloMenosUmMarcado) {
        alert("Você deve selecionar pelo menos uma opção de hobbie.");
        event.preventDefault(); // Impede o envio do formulário
    }
})

let biografiaInput = document.getElementById("biografia");
let biografiaLabel = document.querySelector('label[for="biografia"]');
let biografiaHelper = document.getElementById("biografia-helper");

biografiaInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.length < 80){
        biografiaInput.classList.remove("correct")
        biografiaInput.classList.add("error")
        biografiaHelper.classList.add("visible")
        biografiaHelper.innerText = "Seu texto precisa conter no mínimo 120 caracteres."
    } else {
        biografiaInput.classList.add("correct")
        biografiaInput.classList.remove("error")
        biografiaHelper.classList.remove("visible")
    }
})

let educacaoInput = document.getElementById("educacao");
let educacaoLabel = document.querySelector('label[for="educacao"]');
let educacaoHelper = document.getElementById("educacao-helper");

educacaoInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.length < 80){
        educacaoInput.classList.remove("correct")
        educacaoInput.classList.add("error")
        educacaoHelper.classList.add("visible")
        educacaoHelper.innerText = "Seu texto precisa conter no mínimo 120 caracteres."
    } else {
        educacaoInput.classList.add("correct")
        educacaoInput.classList.remove("error")
        educacaoHelper.classList.remove("visible")
    }
})

let profissionalInput = document.getElementById("profissional");
let profissionalLabel = document.querySelector('label[for="profissional"]');
let profissionalHelper = document.getElementById("profissional-helper");

profissionalInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.length < 80){
        profissionalInput.classList.remove("correct")
        profissionalInput.classList.add("error")
        profissionalHelper.classList.add("visible")
        profissionalHelper.innerText = "Seu texto precisa conter no mínimo 120 caracteres."
    } else {
        profissionalInput.classList.add("correct")
        profissionalInput.classList.remove("error")
        profissionalHelper.classList.remove("visible")
    }
})

let checkbox = document.getElementById("termos");
if(checkbox.checked) {
    console.log("O cliente marcou o checkbox");
} else {
    console.log("O cliente não marcou o checkbox");
}

function funcao1()
{
alert("Cadastro Realizado com Sucesso!");
}

