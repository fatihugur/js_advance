

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
	context(){
		return this;
	}

	sum(){
		this.sumnumber = this.number1 + this.number2;
		return this;
	}

	multiplicate5(){
		console.log(this.sumnumber * 5);
	}
}


var calculateNow = new Calculate(10,5);
calculateNow.sum().multiplicate5(); //Chain method - zincir methodu

// console.log("Sum: "+calculateNow.sum());
// console.log("Extract: "+calculateNow.extraction());
// console.log("Multiplicate: "+calculateNow.multiplication());
// console.log("Divide: "+calculateNow.division());
// console.log("Second example")
// var calculateLater = new Calculate(100,60);
// console.log("Sum: "+calculateLater.sum());
// console.log("Extract: "+calculateLater.extraction());
// console.log("Multiplicate: "+calculateLater.multiplication());
// console.log("Divide: "+calculateLater.division());


// https://www.udemy.com/course/javascript-temelden-profesyonele-kurs-1/learn/lecture/15876460#overview

// NEW CALCULATOR

//First calculator class

class Calculator {

	constructor(num1, num2){
		this.num1 = num1;
		this.num2 = num2;
	}

	sum_num (){
		this.sum_number = this.num1 + this.num2;
		return this;
	}

	multiplicate_five(){
		console.log(this.sum_number * 5);
	}

}

//New calculator class

class anotherCalculator extends Calculator{
	constructor(num1, num2){
		super(num1, num2);

	}
	extract(){
		this.sum_number= this.num1-this.num2;
		return this;
	}

}

var anyAnotherCalculator = new anotherCalculator(10,5);
anyAnotherCalculator.sum_num().multiplicate_five();
// anyAnotherCalculator.sum_num().extract();

