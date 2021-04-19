
//to dice  - dubblesteen
//console.log(Math.random(0,6));

var guess1 = prompt("Dubblesteen guess 1",1);
//alert(guess1);
var guess2 = prompt("Dubblesteen guess 2", 1);
var integerGuess1 = parseInt(guess1); //integera çevirdik
var integerGuess2 = parseInt(guess2);
var totalInt = integerGuess1 + integerGuess2;
console.log("Total your guess : " + totalInt);
//console.log(totalInt);
//alert(totalInt);
var random1 = Math.random();
var random2  = Math.random();
if(random1 < 1){
	//console.log("dice is smaller than 1");
	random1 = (random1+1) * 6; // no zero in random
	random2 = (random2+1) * 6;
	random1 = Math.floor(random1); // integer
	random2 = Math.floor(random2); 
	if(random1 > 6) {
		random1 = random1 % 6; // integer between 1, 2, 3, 4, 5, 6
	}
	if(random2 > 6) {
		random2 = random2 % 6;  // integer for random2
	}
	var diceTotal = random1 + random2;
	console.log("Dice total :" + diceTotal);
}
if(diceTotal== totalInt){
	console.log("Bravoo you guess the number");
} else{
	console.log( "Difference two numbers : " + (diceTotal - totalInt).toString());
}
//console.log(random1);
//console.log(random2);
document.write("My guess : <br>");
for (var counter1 = 0; counter1 < totalInt; counter1++){
	document.write(" $ ");
}

document.write("<br> Result of dice total: <br>");
var counter2 = 0;
while(counter2 < diceTotal){
	document.write(" * ");
	counter2++;
}



