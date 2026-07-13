homeNum = 0
guestNum = 0

homeEl = document.getElementById("home")
guestEl = document.getElementById("guest")

function homeBtn1() {
    homeNum += 1
    homeEl.textContent = homeNum
}
function homeBtn2() {
    homeNum += 2
    homeEl.textContent = homeNum
}
function homeBtn3() {
    homeNum += 3
    homeEl.textContent = homeNum
}

function guestBtn1() {
    guestNum += 1
    guestEl.textContent = guestNum
}
function guestBtn2() {
    guestNum += 2
    guestEl.textContent = guestNum
}
function guestBtn3() {
    guestNum += 3
    guestEl.textContent = guestNum
}