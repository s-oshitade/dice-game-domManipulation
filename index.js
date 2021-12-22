const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomDiceImage1 = `images/dice${randomNumber1}.png`;
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomDiceImage2 = `images/dice${randomNumber2}.png`;
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

randomNumber1 > randomNumber2 ? document.querySelector("h1").innerHTML = "🥳 Player 1 Wins!" :
randomNumber1 < randomNumber2 ? document.querySelector("h1").innerHTML = "Player 2 Wins 🥳!" : 
document.querySelector("h1").innerHTML = "Draw!";

