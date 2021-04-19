

//CLASS OOP- OBJECT ORIENTED PROGRAMMING

// function name(){
// 	return "Fatih ";

// }

// function surname(){
// 	return  "Ugur";
// }

// console.log(name()+" "+surname());

"use strict"

class Cat{
	constructor(name, color, age){
		this.name = name;
		this.color = color;
		this.age = age;

	}
	colorCat(){
		console.log(this.color);
	}
	nameCat(){ //class içinde function yazılmaz. / method gibi davranıyor
		console.log(this.name);
	}
}
//var date = new Date();
var newCat =new Cat("Simon", "white", 3);
newCat.nameCat();
newCat.colorCat();


// BASIC CALCULATOR

class Calculate{
	constructor(number1, number2){
		this.number1 = number1;
		this.number2 = number2;
	}

	sum(){
		return this.number1 + this.number2;
	}

	extraction(){
		return this.number1 - this.number2;
	}

	multiplication(){
		return this.number1 * this.number2;
	}

	division(){
		return this.number1 / this.number2;
	}
}


var calculateNow = new Calculate(10,5);

console.log("Sum: "+calculateNow.sum());
console.log("Extract: "+calculateNow.extraction());
console.log("Multiplicate: "+calculateNow.multiplication());
console.log("Divide: "+calculateNow.division());
console.log("Second example")
var calculateLater = new Calculate(100,60);
console.log("Sum: "+calculateLater.sum());
console.log("Extract: "+calculateLater.extraction());
console.log("Multiplicate: "+calculateLater.multiplication());
console.log("Divide: "+calculateLater.division());



