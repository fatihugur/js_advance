
//HTML JS relations // js identifier
var fatih1 = document.getElementById("fatih1");
// fatih1.innerText = "Fatih5";   //innerText
fatih1.innerHTML += "<div>Fatih7</div>";  //innerHTML
var fatih2 = document.getElementsByClassName("fatih2")[0];  //work as array  // getELementsByClassName
fatih2.innerText = "Fatih3";
console.log(document. getElementsByClassName("fatih2").length); // see 2 in console // getELementsByClassName

var fatih3 = document.getElementsByName("fatih3")[0]; // getElementsByName
fatih3.innerText = "Fatih 10";

var fatih4 = document.getElementsByTagName("section")[0]; // getElementsByTagName
fatih4.innerText += " Fatih Ugur"