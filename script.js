let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let hscore = 0
let gscore = 0

function gplusone() { 
  gscore += 1
  guestEl.textContent = gscore 
}

function gplustwo() {
  gscore += 2
  guestEl.textContent = gscore
}

function gplusthree() {
  gscore += 3
  guestEl.textContent = gscore
}

function hplusone() { 
  hscore += 1
  homeEl.textContent = hscore 
}

function hplustwo() {
  hscore += 2
  homeEl.textContent = hscore
}

function hplusthree() {
  hscore += 3
  homeEl.textContent = hscore
}