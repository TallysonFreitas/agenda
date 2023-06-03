let nomesContatos       = []
let numerosContatos     = []
let aviso               = document.getElementById("aviso")



function adicionarContato(){
    const nomeContato       = document.getElementById("nome-contato").value
    const numeroContato     = document.getElementById("numero-contato").value
    aviso.style.display     = "none"

    if(numerosContatos.includes(numeroContato) && numeroContato != "" && nomeContato != ""){
        aviso.style.display             = "flex"
        aviso.innerHTML                 = "Numero de contato já adicionado"
        aviso.style.backgroundColor     = "red"
        alert("deu errado")
    }else if(!numerosContatos.includes(numeroContato) && numeroContato != "" && nomeContato != ""){
        nomesContatos.push(nomeContato)
        numerosContatos.push(numeroContato)
        
        aviso.style.display         = "flex"
        aviso.innerHTML             = "Contato adicionado"
        aviso.style.backgroundColor = "green"
        ativarFormulario()
        lin()

    }else if(numeroContato == "" || nomeContato == ""){
        aviso.style.display = "flex"
        aviso.style.backgroundColor     = "red"
        aviso.innerHTML                 = "Numero ou Nome de contato Invalido"
    }else{
        aviso.style.display = "none"
    }
    
    
}

function lin(){
    const nomeContato       = document.getElementById("nome-contato").value
    const numeroContato     = document.getElementById("numero-contato").value
    let linhas      = document.getElementById("saida")
    let linha       = `<tr><td><img src="images/boy.png" alt"contato"></td><td>${nomeContato}</td><td>${numeroContato}</td></tr>`
    linhas.innerHTML += linha
}

function ativarFormulario(){
    if(nomesContatos.length >= 1){
        document.getElementById("tabela").style.display = "flex"
    }
}
