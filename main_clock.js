var date = new Date();
var hours, minutes, seconds;
//console.log(hours+":"+minutes+":"+seconds);

function changeClockFormat(unit){
	if(unit <= 9){
		return "0"+unit;
	} else{
		return unit;
	}

}
//control change in second
setInterval(function(){
	date = new Date();
	hours = date.getHours();
	minutes = date.getMinutes();
	seconds = date.getSeconds();
	//formats
	hours = changeClockFormat(hours);
	minutes = changeClockFormat(minutes);
	seconds = changeClockFormat(seconds);
	console.log(hours+":"+minutes+":"+seconds);
	function change_time(hour, minute, second){
		
	}
},1000);

