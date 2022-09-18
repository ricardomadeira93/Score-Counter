let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let scoreH = 0
let scoreG = 0



function addOneHome() {
    
    scoreH = scoreH + 1
    scoreHome.textContent = scoreH
    
    
}

function addTwoHome() {
    
    scoreH = scoreH + 2
    scoreHome.textContent = scoreH
    
    
}

function addThreeHome() {
    
    scoreH = scoreH + 3
    scoreHome.textContent = scoreH
    
    
}

function addOneGuest() {
    
    scoreG = scoreG + 1
     scoreGuest.textContent = scoreG
    
    
}

function addTwoGuest() {
    
    scoreG = scoreG + 2
     scoreGuest.textContent = scoreG
    
    
}

function addThreeGuest() {
    
    scoreG = scoreG + 3
    scoreGuest.textContent = scoreG
    
    
}

function newGame() {
    scoreG = 0
    scoreH = 0
    scoreHome.textContent = scoreH
    scoreGuest.textContent = scoreG
}