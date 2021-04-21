
//JS NAVIGATIONS
// var parent = document.getElementsByClassName("parent")[0];
// var firstChild = parent.firstChild;
// var lastChild = parent.lastChild;
// var children = parent.children;
// var jr = document.getElementsByClassName("firstJr")[0];
// console.log(jr.parentElement.children[0]);

//MOUSE ACTIONS - EVENT LISTENERS

// var button = document.getElementsByTagName("button")[0];
// // button.onclick = function() { 			//ONCLICK
// // 	alert("Buton clicked");
// // }
// button.onfocus = function(){
// 	console.log("Focused on button"); 	//ONFOCUS
// };
// button.mouseover = function(){       	//MOUSEOVER
// 	console.log("Mouse is over");
// };
// button.mouseenter = function(){			//MOUSE ENTER
// 	console.log("Mouse is enter"); 
// };
// button.ondblclick = function(){				//ONDBLCLICK
// 	console.log("Button dubble clicked");
// };

// Create a button

var button = document.createElement("button");
button.innerText = "Button is created";
button.onclick = function(event){
	alert("Button is created");
}
document.getElementById("buttonContainer").appendChild(button);

//create a ptext

var ptext = document.createElement("p");
ptext.innerText = "Text is created";
document. getElementById("pTextContainer").appendChild(ptext);

//create an image

var img = document.createElement("img");
img.src = "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg";
img.style.width = "100%";
img.style. height = "auto";
img.alt = "birds"
img.onclick = function() {
	window.open("https://www.github.com/fatihugur", "_blank");
}
document.getElementById("imgContainer").appendChild(img);

var footer = document.createElement("footer");
footer.innerText = "Footer";
footer.style.backgroundColor = "#ff0022";
footer.style.height = "10vh";
footer.style.width = "100%";
footer.style.padding = "10px";
document.body.appendChild(footer);







