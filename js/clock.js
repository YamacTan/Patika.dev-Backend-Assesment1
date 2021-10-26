//Write a code for take the date and calendar.


function getName(){
	let username = prompt("Lutfen adinizi giriniz.")
	username = username.charAt(0).toUpperCase() + username.slice(1);
    let name = document.querySelector("#myName")
    name.innerHTML = username;
    
}

function checkDate(){
	let date = new Date()
	let hour = date.getHours();
	let minutes = date.getMinutes()
	let seconds = date.getSeconds();
	let day  = date.getDay();
	

	switch(day){
		case 0:
			day = "Pazartesi"
			break;
		case 1:
			day = "Salı"
			break;
		case 2:
			day = "Çarşamba"
			break;
		case 3:
			day = "Perşembe"
			break;
		case 4:
			day = "Cuma";
			break;
		case 5:
			day = "Cumartesi"
			break;
		case 6:
			day = "Pazar";
			break;
		default:
			console.log("Cannot detect the day info.");
		
	}
	
	//Check the time formats:
	hour = hour < 10 ? "0"+ hour : hour;
	minutes = minutes < 10 ? "0"+ minutes : minutes;
	seconds = seconds < 10 ? "0"+ seconds : seconds;

	let time = `${hour} : ${minutes} : ${seconds} ${day}`

    let clock = document.querySelector("#myClock")
	clock.innerHTML = time;

	//TODO: You can add color shifting in your whole code.
	//clock.style.color = "aqua"
	setTimeout(checkDate,1000); //To make the function keep updating itself.


}

function changeClockColor()
{
	let clock = document.querySelector("#myClock")
	
}
getName();
checkDate();