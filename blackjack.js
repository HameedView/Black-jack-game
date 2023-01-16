
let firstcard = 10
let secondcard = 4
let cards = [firstcard, secondcard] //Array - ordered list of items
let sum = firstcard + secondcard
let hasblackcard = false
let isalive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function StartGame(){
     renderGame()
}

function renderGame(){
   // cardsEl.textContent = "Cards: " +  cards 
    cardsEl.textContent =  "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " 
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to draw a new card 😂"
    }else if(sum === 21){
        message = "wohooo! you have gotten balckjack 😁"
        hasblackcard = true
    }else{
        message = "you're out of thr game 😀 "
        isalive = false
    }
    messageEl.textContent = message
}
function NewCard(){
    console.log("Drawing a new card from the desk")
    let card = 6
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}



