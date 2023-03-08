const messageEl = document.getElementById("message-el");
const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");
let hasBlackjack = false
let isAlive = false;
let sum = 0;
let cards = [];
let message = "";

function getRandomNumber() {
    let randomNum = Math.floor (Math.random() * 13) + 1
    if (randomNum > 10) {
        return 10
    }else if (randomNum === 1) {
        return 11
    }else {
        return randomNum
    }
}

function gameFlow() {
    if (sum < 21) {
        message = "DO YOU WANT TO DRAW ANOTHER CARD? "
    }else if (sum === 21) {
        message = "YOU'VE GOT BLACKJACK! "
        hasBlackjack = true
    }else {
        message = "YOU'RE OUT OF THE GAME "
        isAlive = false
    }
    messageEl.textContent = message

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
}

function startGame() {
    isAlive = true
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    gameFlow()
}

function newCard() {
    if (isAlive === true && hasBlackjack === false){
        let card = getRandomNumber()
        sum += card
        cards.push(card)
        gameFlow()
    }
}