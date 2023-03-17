let message =""
let player = {
    name : "Manas",
    chips : 150
}
let hasBlackjack = false
let isAlive = false
let gameStarted = false
let cards = []
let sum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $ " + player.chips

function startGame(){
    if(gameStarted === false){
        isAlive = true
        let firstcard = randomCard()
        let secondcard = randomCard()
        sum = firstcard + secondcard
        cards.push(firstcard)
        cards.push(secondcard)
        renderGame()
        gameStarted = true   
    }
}

function randomCard(){
    let rand = Math.ceil( Math.random() * 13 ) 
    if(rand === 1){
        return 11
    }
    else if (rand > 10){
        return 10
    }
    else {
        return rand
    }
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for(let i= 0 ; i<cards.length ; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent ="Sum: " + sum
    if (sum <= 20){
        message = "Do you Want to Draw another Card?"
    }
    else if (sum === 21) {
        message = "You got the Blackjack"
        hasBlackjack = true
    }
    else {
        message = "You are Out of the Game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false){
        let drawnCard = randomCard()
        sum += drawnCard
        cards.push(drawnCard)
        renderGame()
    }
}