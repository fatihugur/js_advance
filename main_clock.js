var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
//console.log(hours+":"+minutes+":"+seconds);

function changeClockFormat(unit){
	if(unit <= 9){
		return "0"+unit;
	} else{
		return unit;
	}

}

hours = changeClockFormat(hours);
minutes = changeClockFormat(minutes);
seconds = changeClockFormat(seconds);
console.log(hours+":"+minutes+":"+seconds);