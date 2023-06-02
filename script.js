let nomesContatos       = []
let numerosContatos     = []
let aviso               = document.getElementById("aviso")

function adicionarContato(){
    const nomeContato       = document.getElementById("nome-contato").value
    const numeroContato     = document.getElementById("numero-contato").value
    aviso.style.display     = "none"

    if(numerosContatos.includes(numeroContato)){
        aviso.style.display             = "flex"
        aviso.innerHTML                 = "Numero de contato já adicionado"
        aviso.style.backgroundColor     = "red"
        alert("deu errado")
    }else if(!numerosContatos.includes(numeroContato)){
        nomesContatos.push(nomeContato)
        numerosContatos.push(numeroContato)
        
        aviso.style.display         = "flex"
        aviso.innerHTML             = "Contato adicionado"
        aviso.style.backgroundColor = "green"
    }else{
        aviso.style.display = "none"
    }
    linhas()
}

function linhas(){

}

function ativarFormulario(){
    if(nomesContatos.length >= 1){
        
    }
}
