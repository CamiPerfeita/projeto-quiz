const enunciado = document.getElementById("Enunciado")
const btnAlternativa1 = document.getElementById("Alternativa1")
const btnAlternativa2 = document.getElementById("Alternativa2")
const btnAlternativa3 = document.getElementById("Alternativa3")
const btnAlternativa4 = document.getElementById("Alternativa4")

const perguntas = [{
    pergunta: "Qual é o dia de hoje?",
    alternativas: ["10","20","22","24"],
    resposta: 3
},{
    pergunta: "Qual é o dia de amanhã?",
    alternativas: ["25","20","22","26"],
    resposta: 3
},{
    pergunta: "Qual é o dia de amanhã?",
    alternativas: ["25","20","22","24"],
    resposta: 0
},]

let atualPergunta = 0

function atualizarPerguntas (){
    enunciado.textContent = perguntas[atualPergunta].pergunta
    btnAlternativa1.textContent = perguntas[atualPergunta].alternativas[0]
    btnAlternativa2.textContent = perguntas[atualPergunta].alternativas[1]
    btnAlternativa3.textContent = perguntas[atualPergunta].alternativas[2]
    btnAlternativa4.textContent = perguntas[atualPergunta].alternativas[3]
}

function verificarRespostas(respostaUsuario){
    if(respostaUsuario ===perguntas[atualPergunta].resposta){

    }else{

    }
}

btnAlternativa1.addEventListener("click", function(){verificarRespostas(0)})
btnAlternativa2.addEventListener("click", function(){verificarRespostas(1)})
btnAlternativa3.addEventListener("click", function(){verificarRespostas(2)})