
//JS NAVIGATIONS
// var parent = document.getElementsByClassName("parent")[0];
// var firstChild = parent.firstChild;
// var lastChild = parent.lastChild;
// var children = parent.children;
// var jr = document.getElementsByClassName("firstJr")[0];
// console.log(jr.parentElement.children[0]);

//MOUSE ACTIONS - EVENT LISTENERS

var button = document.getElementsByTagName("button")[0];
// button.onclick = function() { 			//ONCLICK
// 	alert("Buton clicked");
// }
button.onfocus = function(){
	console.log("Focused on button"); 	//ONFOCUS
};
button.mouseover = function(){       	//MOUSEOVER
	console.log("Mouse is over");
};
button.mouseenter = function(){			//MOUSE ENTER
	console.log("Mouse is enter"); 
};
button.ondblclick = function(){				//ONDBLCLICK
	console.log("Button dubble clicked");
};