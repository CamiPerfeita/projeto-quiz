const nomeCadastro = document.getElementById("NomeCadastro")
const emailCadastro = document.getElementById("EmailCadastro")
const senhaCadastro = document.getElementById("SenhaCadastro")
const btnCadastro = document.getElementById("btnCadastro")

const emailLogin = document.getElementById("EmailLogin")
const senhaLogin = document.getElementById("SenhaLogin")
const btnLogin = document.getElementById("btnLogin")

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

btnCadastro.addEventListener("click", function(){
    let valorNomeCadastro = nomeCadastro.value
    let valorEmailCadastro = emailCadastro.value
    let valorSenhaCadastro = senhaCadastro.value

    cadastro = {
        nome: valorNomeCadastro,
        nome: valorEmailCadastro,
        nome: valorSenhaCadastro
    }
    9
    usuarios.push(cadastro)

    localStorage.setItem("usuarios", JSON.stringify(cadastro));
})