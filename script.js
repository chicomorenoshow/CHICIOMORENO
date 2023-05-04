const menuHambButton = document.querySelector(".menu-hamb-button")
const navBarLinks = document.querySelector(".navbar-links")
const menuOverlay = document.querySelector(".menu-overlay")

menuHambButton.addEventListener("click", () => {
  menuHambButton.classList.toggle("isOpen")
  navBarLinks.classList.toggle("show")
  menuOverlay.classList.toggle("show")
})

menuOverlay.addEventListener("click", () => {
  menuHambButton.classList.remove("isOpen")
  navBarLinks.classList.remove("show")
  menuOverlay.classList.remove("show")
})

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}