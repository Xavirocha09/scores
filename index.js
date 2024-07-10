let homeEl=document.getElementById("home-el")
let guestEl=document.getElementById("guest-el")
let homescore=0
let guestscore=0

function addOne(){
    homescore+=1
    homeEl.textContent=homescore
}

function addTwo(){
    homescore+=2
    homeEl.textContent=homescore
}

function addThree(){
    homescore+=3
    homeEl.textContent=homescore
}

function addOneGuest() {
    guestscore+=1
    guestEl.textContent=guestscore
}

function addTwoGuest() {
    guestscore+=2
    guestEl.textContent=guestscore
}

function addThreeGuest() {
    guestscore+=3
    guestEl.textContent=guestscore
}

function resetHome(){
    homescore=0
    homeEl.textContent=homescore
}

function resetGuest(){
    guestscore=0
    guestEl.textContent=guestscore
}

function reset(){
    homescore=0
    guestscore=0
    homeEl.textContent=homescore
    guestEl.textContent=guestscore
}