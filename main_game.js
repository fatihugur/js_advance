
// JS rock paper scissors game // 

var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");


class RPS {

	constructor(){
		this.result = ["Rock", "Paper", "Scissor"];
	}
	letsMove1(){
		var key = Math.floor(Math.random()*3);
		var hand = this.result[key];
		this.firstPick = hand;
		console.log("Player 1 chose " + hand);
		return this;
	}

	letsMove2(){
		var key = Math.floor(Math.random()*3);
		var hand = this.result[key];
		this.secondPick = hand;
		console.log("Player 2 chose " + hand);
		return this;
	}

	checkTheGame(){
		if(this.firstPick === this.secondPick){
			return this.replayTheGame();
		} else if(this.firstPick === "Rock" && this.secondPick === "Paper"){
			return 2;
		} else if(this.firstPick === "Rock" && this.secondPick === "Scissor"){
			return 1;	 
		} else if(this.firstPick === "Paper" && this.secondPick === "Scissor"){
			return 2;
		} else if(this.firstPick === "Paper" && this.secondPick === "Rock"){
			return 1;	 
		} else if(this.firstPick === "Scissor" && this.secondPick === "Paper"){
			return 1;
		} else if(this.firstPick === "Scissor" && this.secondPick === "Rock"){
			return 2;	 
		} else{
			console.log("Game Error!");
		}
	}
	replayTheGame(){
		console.log("The game has restarted");
		var whoWin = this.letsMove1().letsMove2().checkTheGame();
		return whoWin;

	}
}

// var rps = new RPS();
// var whoWin = rps.letsMove1().letsMove2().checkTheGame();
// console.log( "Player "+ whoWin + " win the game");

var rps = new RPS();
var whoWin;
for(var counter =0; counter < 100; counter++){
var whoWin = rps.letsMove1().letsMove2().checkTheGame(); // set the winnar
// console.log( "Player "+ whoWin + " win the game"); // show the winnar in console
if(whoWin === 1){
	player1.innerText += "+";
}else if(whoWin ===2){
	player2.innerText += "+";
} else{
	console.log("The game is invalid");
}

}







