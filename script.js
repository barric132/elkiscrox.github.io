const horizontal = 8;
const vertical = 4;
const container = document.querySelector(".container");
const colorArray = [
  "red",
  "red",
  "orange",
  "orange",
  "yellow",
  "yellow",
  "green",
  "green",
  "blue",
  "blue",
  "salmon",
  "salmon",
  "plum",
  "plum",
  "white",
  "white",
  "pink",
  "pink",
  "purple",
  "purple",
  "brown",
  "brown",
  "khaki",
  "khaki",
  "gray",
  "gray",
  "coral",
  "coral",
  "#8000FF",
  "#8000FF",
  "#0B4C5F",
  "#0B4C5F",

];
let counntt = 1;
let colorSelect = colorArray.slice();
let color = [];
let successCards = [];
let gameStart;
const shuffle = () => {
  for (let i = 0; colorSelect.length > 0; i++) {
    color = color.concat(
      colorSelect.splice(Math.floor(Math.random() * colorSelect.length), 1)
    );
  }
};
const setting = (hori, verti) => {
  for (let i = 0; i < hori * verti; i++) {
    const card = document.createElement("div");
    const cardInner = document.createElement("div");
    const cardFront = document.createElement("div");
    const cardBack = document.createElement("div");
    card.classList.add("card");
    cardInner.classList.add("card-inner");
    cardFront.classList.add("card-front");
    cardBack.classList.add("card-back");
    container.appendChild(card);
    card.appendChild(cardInner);
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardBack.style.backgroundColor = color[i];
  }
  const Cards = document.querySelectorAll(".card");
  let clickFlag = false;
  let cardArray = [];
  Cards.forEach((aCard, index) => {
    setTimeout(() => {
      aCard.classList.add("flipped");
    }, 1000 + 100 * index);
  });
  Cards.forEach((aCard, _) => {
    setTimeout(() => {
      aCard.classList.remove("flipped");
    }, 5000);
  });
  setTimeout(() => {
    clickFlag = true;
  }, 5500);
  Cards.forEach((card, _) => {
    card.addEventListener("click", () => {
      if (clickFlag && !successCards.includes(card)) {
        card.classList.toggle("flipped");
        cardArray.push(card);
        if (cardArray.length === 2) {
          let cardA =
            cardArray[0].querySelector(".card-back").style.backgroundColor;
          let cardB =
            cardArray[1].querySelector(".card-back").style.backgroundColor;
          if (cardA == cardB) {
            successCards.push(cardArray[0]);
            successCards.push(cardArray[1]);
            cardArray = [];
               if(counntt === 1 || counntt === 5 || counntt === 9 || counntt === 13){
                    p1Score++;
                    p1Show.textContent=p1Score;
                      if(p1Score === winningScore){
                          gameOver=true;
                          alert("1팀 우승!!");
                        }
                }
              
               if(counntt === 2 || counntt === 6 || counntt === 10 || counntt === 14){
                    p2Score++;
                    p2Show.textContent=p2Score;
                       if(p2Score === winningScore){
                           gameOver=true;
                          alert("2팀 우승!!");
                         }
                }

               if(counntt === 3 || counntt === 7 || counntt === 11 || counntt === 15){
                     p3Score++;
                     p3Show.textContent=p3Score;
                        if(p3Score === winningScore){
                          gameOver=true;
                          alert("3팀 우승!!");
                         }
                  }

               if(counntt === 4 || counntt === 8 || counntt === 12 || counntt === 16){
                      p4Score++;
                      p4Show.textContent=p4Score;
                         if(p4Score === winningScore){
                            gameOver=true;
                            alert("4팀 우승!!");
                           }
                    }
              gihoe++;
              count.textContent=gihoe;
                if(counntt === 17)
                alert("게임이 너무 길어 재시작합니다.");
                    window.location.reload;


            if (successCards.length == 32) {
              const array = [p1Score, p2Score, p3Score, p4Score];
              alert("우승자는" + Math.max(array));
              container.innerHTML = "";
              successCards = [];
              color = [];
              colorSelect = colorArray.slice();
              gameStart = null;
              shuffle();
              setting(horizontal, vertical);
            }
          }
          else {
            clickFlag = false;

            setTimeout(() => {
              cardArray[0].classList.remove("flipped");
              cardArray[1].classList.remove("flipped");
              clickFlag = true;
              cardArray = [];
              gihoe--;
                if (gihoe === 0){
                  alert("기회를 모두 소진하였습니다.");
                  alert("다음팀 차례입니다.");
                  gihoe = 2;
                  counntt++;
                }
              count.textContent = gihoe;
            }, 1000);
          }
        }
      }
    });
  });
};

shuffle();
setting(horizontal, vertical);