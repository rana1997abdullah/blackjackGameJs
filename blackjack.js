let firstCard ;
let secondCard ;
let sum = 0;
let hasblackjack = false
let isAlive = false
let message=""
let message_el = document.getElementById('message')
let sum_el = document.getElementById('sum')
let card_el = document.getElementById('cards')
let cardsArr=[];
let playerObj = {
  name: "Rana",
  chips: "145"
}
let player_el = document.getElementById('player-el')
player_el.textContent = playerObj.name+" : $"+playerObj.chips
function startGame(){
  isAlive = true
  firstCard = getRandomCard()
  secondCard = getRandomCard()
  sum = firstCard + secondCard
  cardsArr=[firstCard,secondCard]
  renderGame()
}
function getRandomCard(){
  let cardNumber = Math.floor(Math.random()*13)+1
  if(cardNumber == 1) return 11
  else if (cardNumber > 10) return 10
  return cardNumber
}
function renderGame(){
 
  sum_el.textContent ="Sum: " + sum
card_el.textContent = "Cards: "

for(let i=0;i<cardsArr.length; i++){
  card_el.textContent+= cardsArr[i]+" "
}

if(sum <= 20)
  {
    message="Do you want to draw a new card?"
    message_el.textContent = message
  }
  else if(sum === 21){
      hasblackjack = true
      message = "You've got Blackjack!"
      message_el.textContent = message
    }
  else {
      message = "You're out of the game"
        isAlive = false
        message_el.textContent = message
  
  }
}
function newCard(){
  if(isAlive && !hasblackjack){
  let newCard = getRandomCard()
  sum += newCard
  cardsArr.push(newCard)
  renderGame()
  }
}

let hands=["r","p","s"]
function handsgame(){
  let index = Math.floor(Math.random()*3)
  console.log(index)
  return hands[index]
}
console.log(handsgame())
console.log(handsgame())
console.log(handsgame())
console.log(handsgame())
console.log(handsgame())
console.log(handsgame())
console.log(handsgame())
console.log(handsgame())
console.log(handsgame())
console.log(handsgame())
console.log(handsgame())
console.log(handsgame())
console.log(handsgame())
// const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"]
// let password='';
// for(let i=0;i<15;i++){
//   let index = Math.floor(Math.random()*characters.length)
// password+=characters[index]
// }
// const span = document.querySelector("span");

// span.onclick = function() {
//   document.execCommand("copy");
// }

// span.addEventListener("copy", function(event) {
//   event.preventDefault();
//   if (event.clipboardData) {
//     event.clipboardData.setData("text/plain", span.textContent);
//     console.log(event.clipboardData.getData("text"))
//   }
// });
// <span>text</span>
// console.log(password)