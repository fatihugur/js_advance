var email = "fatihugur@gmail.com";
switch(email){
	case "fatihugur@gmail.com":
	console.log("Emailiniz fatihugur@gmail.com");
	break;

	case "fatihugur1@gmail.com":
	console.log("Emailiniz fatihugur1@gmail.com");
	break;
	default:
	console.log("Email adresiniz ayni degil!");
}

console.log("Merhaba Fatih");

//WHILE - önce kontrol edip sonra yazdırıyor
var counter = 0;
var value= 5;
var result = 0;
while( counter < 100){
//console.log("Fatih Ugur");
//counter = counter + 1 ;
result = result + value * counter;
document.write(value * counter + "<br>");
counter = counter + 1;
}
console.log(result);

//DO WHILE - önce yazdırıp sonra kontrol ediyor
var counter1 = 0;
do{
	counter1++;
	console.log(counter1 + ") Fatih Ugur");
	//counter1 = counter1;
	//counter1 += 1;

}while(counter1 < 10);


// FOR LOOP - MATH.RANDOM

for(var counter2 = 0; counter2 <= 100; counter2 += counter2 +10){
	//console.log(counter2);
	if(counter2 * counter2 %4 == 0){
		var random = Math.random() * 10;
		 //console.log(counter2);
		 console.log(random);
	}

}


//ARRAY WITH FOR LOOP

var array = [ "Hello", "I am Fatih", "Welcome", "How are you?"];

for(var counter3 = 0; counter3 < array.length; counter3++){
	console.log(array[counter3]);
}

console.log("ARRAY FOR IN CONCEPT");


var arraynew = ["Fatih", "Yannick", "Riyan", "Dan", "Sibert"];

for (element in arraynew){
	console.log(arraynew[element]);

}

//same as for (element in arraynew) {}
// for (var i =0; i < arraynew.length; i++){

// }


// ARRAY - JSON FOR IN CONCEPT

var array1 = {"data": "key"};
for(element in array1){
	console.log(element); // data
	console.log(array1[element]); //key
}



//TRY CATCH METHOD
//ERROR HANDLING

try{
	var fatih = "Fatih";
	//var 1 = 1; //Uncaught SyntaxError: Unexpected number
	var n1 = 1 // no error
	for(i < 12; i=10; i++){
		console.log(i); // ReferenceError: i is not defined
	}

}catch(error){ 
	document.write(error);
	
}









