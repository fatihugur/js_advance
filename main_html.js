
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

//STYLE CSS 

fatih1.style.backgroundColor = "#FF0000";  //.style. attribute
fatih1.style.color = "white";
fatih1.style.margin = "10px 30px 10px 30px"; 
fatih1.style.padding= "10px 10px 10px 10px";
fatih1.style.height = "10vh";
fatih1.style.transform = "skewX(20deg)";
fatih1.style.display = "block";  //none / block


fatih3.style.backgroundColor = "yellow";
fatih3.style.margin = "10px 30px 10px 30px"; 
fatih3.style.padding= "10px 10px 10px 10px";
fatih3.style.transform ="rotate(-20deg)";
fatih3.style.fontSize = "30px";
fatih3.style.fontWeight = "bold";
fatih3.style.position = "fixed"; //fixed position
fatih3.style.left = "50%"; // %50 left
fatih3.style.top = "50%"; // %50 top
fatih3.style.transform = "translateX(-50%) translateY(-50%)"; // set middel
fatih3.style.backgroundImage = "url(https://www.desicomments.com/dc3/02/227574/227574.jpg)";
fatih3.style.height = "400px";
fatih3.style.width = "400px";
fatih3.style.color = "white";
