
//HTML JS relations // js identifier
var rose = document.getElementById("rose");
// rose.innerHTML += "<div>animation</div>";  //innerHTML


//STYLE CSS 
rose.style.color = "white";
rose.style.height = "400px";
rose.style.width = "400px";
rose.style.position = "fixed"; //fixed position
rose.style.left = "1px"; // 1px left
rose.style.top = "1px"; // 1px top
// rose.style.transform = "translateX(-50%) translateY(-50%)"; // set middel
rose.style.backgroundImage = "url(https://www.desicomments.com/dc3/02/227574/227574.jpg)";


var isReverseTop = false;
var isReverseLeft = false;
function animate(element, top, left){
	var topOfElement = parseInt(element.style.top.split("px")[0]);
	if(topOfElement >= (window.innerHeight-parseInt(element.style.height.split("px")))){
		isReverseTop = true;
	}else if(topOfElement <= 0){
		isReverseTop = false;
	}
	element.style.top = (top + topOfElement).toString()+"px";
	var leftOfElement = parseInt(element.style.left.split("px")[0]);
	if(leftOfElement >= (window.innerWidth-parseInt(element.style.width.split("px")))){
		isReverseLeft = true;
	}else if(leftOfElement <= 0){
		isReverseLeft = false;
	}
	element.style.left = (left + leftOfElement).toString()+"px";

}

var timer = setInterval(function(){
	if(isReverseTop == true && isReverseLeft == true){
		animate(rose, -1,-1);

	}else if(isReverseTop == false && isReverseLeft == true){
		animate(rose, 1,-1);

	} else if(isReverseTop == true && isReverseLeft == false){
		animate(rose, -1,1);

	} else if(isReverseTop == false && isReverseLeft == false){
		animate(rose, 1,1);
	}

	
}, 10);

// clearInterval(timer);