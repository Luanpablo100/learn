function intervalo () {
    console.log("Mensagem constante")
}

function timeout() {
  console.log('Mensagem após 1s')
}

setInterval(intervalo, 3000) //- exibe algo em um intervalo de tempo varias vezes
setTimeout(timeout, 1000) // exibe algo em um intervalo de tempo apenas um vez

function callback() {
// Função a ser executada a cada 1 segundo
}

// Variável com o intervalo do setInterval()
var intervalo = setInterval( callback, 1000 );

// Código não muito interessante

// Parando o intervalo
clearInterval( intervalo );