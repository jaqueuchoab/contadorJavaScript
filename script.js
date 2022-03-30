const iniciar = document.querySelector('[data-button="buttonIniciar"]')
const resetar = document.querySelector('[data-button="buttonResetar"]')
const pausar = document.querySelector('[data-button="buttonPausar"]')
const span = document.querySelector('span')
const spanValue = document.querySelector('span').innerText

iniciar.addEventListener('click', runIniciar)
resetar.addEventListener('click', resetResetar)
pausar.addEventListener('click', stopPausar)

let contador
let time = Number(spanValue)

function runIniciar() {
  contador = setInterval(() => {
    time++
    if (time < 10) {
      span.innerText = '0' + time
    } else {
      span.innerText = time
    }
  }, 1000)
  iniciar.setAttribute('disabled', '')
  return 0
}

function stopPausar() {
  clearInterval(contador)
  iniciar.removeAttribute('disabled')
}

function resetResetar() {
  time = span.innerText = '00'
  stopPausar()
}
