let nome = window.document.getElementById("nome") // acessando input que tem elemento nome
let email = document.querySelector("#email") // acessando input email
let assunto = document.querySelector("#assunto") // acessando input assunto
let nomeOk = false
let emailOK = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = '100%' //alterando tamanho do campo input
email.style.width = '100%'//alterando tamanho do campo input
assunto.style.width = '100%'//alterando tamanho do campo input

function validaNome(){
    let txt = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
       txt.innerHTML = "Nome Inválido" //innerHTML coloca valor na div , se for menor vai aparecer essa msg
       txt.style.color = "red"
    }else {
        txt.innerHTML = "Nome Válido"
        txt.style.color = "green"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) { // se nao tiver @
       txtEmail.innerHTML = "Email Inválido"
       txtEmail.style.color = "red"

    }else {
       txtEmail.innerHTML = "Email Válido"
       txtEmail.style.color = "green"
       emailOK = true
    }

}

function validaAssunto(){
   let txtAssunto = document.querySelector("#txtAssunto") 

   if (assunto.value.length >= 100){
       txtAssunto.innerHTML = "Texto é muito grande, digie no máximo 100 caracteres"
       txtAssunto.style.color = "red"
       txtAssunto.style.display = "block"

    }else {
        txtAssunto.style.display = "none" // display= como ele aparece e se tiver menos que 100 não vai aparecer
        assuntoOk = true
    }
   }

   function enviar(){
       if (nomeOk == true && emailOK == true && assuntoOk == true){
           alert ("Formulário Enviado com sucesso")
       }else {
        alert ("Preencha o formulário corretamente antes de enviar ...")
       }
   }

   function mapaZoom(){
      mapa.style.width = " 800px"
      mapa.style.height = "600px"
   }

   function mapaNormal(){
    mapa.style.width = " 450px"
    mapa.style.height = "250px"

   }