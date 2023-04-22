let arr = document.querySelectorAll(".content");
const targetDate = new Date();
targetDate.setHours(targetDate.getHours() + 336);



const countdownTimer = setInterval(() => {
	let currentTime = new Date().getTime();

	let timeRemaining = targetDate - currentTime;

	let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	let hours = Math.floor(
		(timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
	hours = days.toString().padStart(2, "0");
	hours = hours.toString().padStart(2, "0");
	minutes = minutes.toString().padStart(2, "0");
	seconds = seconds.toString().padStart(2, "0");
	let currentDays = `${days}`;
	let currentHours = `${hours}`;
	let currentMin = `${minutes}`;
	let currentSec = `${seconds}`;
	
	arr[0].innerHTML = days;
	arr[1].innerHTML = hours;
	arr[2].innerHTML = minutes;
	arr[3].innerHTML = seconds;


	if (timeRemaining < 0) {
		clearInterval(countdown);
	}
}, 1000);
