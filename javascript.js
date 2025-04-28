let cards = document.querySelectorAll(".memory-card");
let count = document.getElementById("count")
let status = document.getElementById("status")


let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;
let num = 0;


function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.toggle("flip")
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        
    }else{
        hasFlippedCard= false;
        secondCard =this;
        checkForMatch(); 
        getCount();
      }
      
      
}

function checkForMatch(){
let isMatch = firstCard.dataset.name == secondCard.dataset.name;
isMatch? disableCards() : unflipCards();
      
}

function disableCards(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

function unflipCards(){
    lockBoard = true;
 setTimeout(() => {
   firstCard.classList.remove("flip");
   secondCard.classList.remove("flip");
 }, 400);
 lockBoard = false;
}

function resetBoard(){
    [hasFlippedCard, lockBoard]= [false, false];
    [firstCard, secondCard] = [null, null];
}
(function shuffle(){
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random()*12);
        card.style.order = randomPosition;
    });
})();

cards.forEach(card => card.addEventListener("click", flipCard));



function getCount() {
    let isMatch = firstCard.dataset.name == secondCard.dataset.name;
  if (isMatch) {
       num = num+1; 
       count.innerText= num;   
    } 
     chechStatus();
  }

 function chechStatus(){
    if(num === 8 ){
       status.innerText="Congradulations, you won!!🎈🎉🎊";
    }else{
        return;
    }
 };
 