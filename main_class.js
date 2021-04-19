

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


