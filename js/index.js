const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const cracker = screen1.querySelector('img')
const BtnRepet = document.querySelector('#BtnRepet')

let phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão."
]

document.addEventListener('keydown', function (e){
  if(e.key == 'Enter' && screen2.classList.contains('hide')){
    openCookie()
  } else if(e.key == 'Escape' && screen1.classList.contains('hide')){
    newCookie()
  }
})

cracker.addEventListener('click', function() {
  openCookie()
})

BtnRepet.addEventListener('click', function() {
  newCookie()
})

function openCookie(){
  let randomNumber = Math.floor(Math.random() * phrases.length)
  
  screen1.classList.add('hide')
  screen2.classList.remove('hide')

  screen2.querySelector('.message').innerText = phrases[randomNumber]
}

function newCookie(){
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
}