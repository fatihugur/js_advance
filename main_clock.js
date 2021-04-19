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
// setInterval(function(){
// 	date = new Date();
// 	hours = date.getHours();
// 	minutes = date.getMinutes();
// 	seconds = date.getSeconds();
// 	//formats
// 	hours = changeClockFormat(hours);
// 	minutes = changeClockFormat(minutes);
// 	seconds = changeClockFormat(seconds);
// 	console.log(hours+":"+minutes+":"+seconds);
// 	function change_time(hour, minute, second){
		
// 	}
// },1000);

hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();

function increase_second(second){
	second += 1;
	if(second >59){
		minutes = increase_minute(minutes);
		second = 0;
	}
	return second;

}

function increase_minute(minute){
	minute += 1;
	if(minute > 59){
		hours = increase_hour(hours);
		minute = 0;
	}
	return minute;

}

function increase_hour(hour){
	hour += 1;
	if(hour > 23){
		hours = 0;
	} 
	return hour;
}

setInterval(function(){
	seconds = increase_second(seconds);
	console.log(changeClockFormat(hours)+":"+changeClockFormat(minutes)+":"+changeClockFormat(seconds));

}, 1000);
