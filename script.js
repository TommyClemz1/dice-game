var ran = Math.random();
ran = ran * 6;
ran = Math.floor(ran)+1;
console.log(ran);


if (ran ===1 ) {
 const img = document.getElementById("dice1");
 img.src = "./images/dice1.png";
}
if (ran ===2 ) {
 const img = document.getElementById("dice1");
 img.src = "./images/dice2.png";
}
if (ran ===3 ) {
 const img = document.getElementById("dice1");
 img.src = "./images/dice3.png";
}
if (ran ===4 ) {
 const img = document.getElementById("dice1");
 img.src = "./images/dice4.png";
}
if (ran ===5 ) {
 const img = document.getElementById("dice1");
 img.src = "./images/dice5.png";
}
if (ran ===6 ) {
 const img = document.getElementById("dice1");
 img.src = "./images/dice6.png";
}





    var ran_2 = Math.random();
ran_2 = ran_2 * 6;
ran_2 = Math.floor(ran_2)+1;
console.log(ran_2);



if (ran_2 === 1) {
 const img_2 = document.getElementById("dice2");
 img_2.src = "./images/dice1.png";
}

if (ran_2 === 2) {
 const img_2 = document.getElementById("dice2");
 img_2.src = "./images/dice2.png";
}

if (ran_2 === 3) {
 const img_2 = document.getElementById("dice2");
 img_2.src = "./images/dice3.png";
}

if (ran_2 === 4) {
 const img_2 = document.getElementById("dice2");
 img_2.src = "./images/dice4.png";
}

if (ran_2 === 5) {
 const img_2 = document.getElementById("dice2");
 img_2.src = "./images/dice5.png";
}

if (ran_2 === 6) {
 const img_2 = document.getElementById("dice2");
 img_2.src = "./images/dice6.png";
}




if (ran >ran_2) {
  var text = document.querySelector("h1");
 text.textContent="🥳Player 1 wins!";


console.log("RAN 1");
}
if (ran_2 >ran) {
  var text = document.querySelector("h1");
 text.textContent="🥳Player 2 wins!";



console.log("RAN2");
}
if(ran===ran_2){
  var text = document.querySelector("h1");
 text.textContent="IT IS A DRAW!";



}
