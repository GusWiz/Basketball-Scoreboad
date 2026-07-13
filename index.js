homeNum = 0
guestNum = 0

homeEl = document.getElementById("home")
guestEl = document.getElementById("guest")

function updateScore(element, value) {
    element.textContent = value

    if (value < 10) {
        element.style.fontSize = "8.25rem"
    } else if (value < 100) {
        element.style.fontSize = "6rem"
    } else {
        element.style.fontSize = "4.5rem"
    }

}

function highlightScore(element1, element2) {
    if (homeNum > guestNum) {
        element1.style.border = "2px solid yellow"
        element2.style.border = "none"
    } else {
        element2.style.border = "2px solid yellow"
        element1.style.border = "none"    
    }
}

function homeBtn1() {
    homeNum += 1
    updateScore(homeEl, homeNum)
    highlightScore(homeEl, guestEl)
}
function homeBtn2() {
    homeNum += 2
    updateScore(homeEl, homeNum)
    highlightScore(homeEl, guestEl)
}
function homeBtn3() {
    homeNum += 3
    updateScore(homeEl, homeNum)
    highlightScore(homeEl, guestEl)
}

function guestBtn1() {
    guestNum += 1
    updateScore(guestEl, guestNum)
    highlightScore(homeEl, guestEl)
}
function guestBtn2() {
    guestNum += 2
    updateScore(guestEl, guestNum)
    highlightScore(homeEl, guestEl)
}
function guestBtn3() {
    guestNum += 3
    updateScore(guestEl, guestNum)
    highlightScore(homeEl, guestEl)
}