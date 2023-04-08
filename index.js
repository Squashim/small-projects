let arr = document.querySelectorAll(".content");
const overlays = document.getElementsByClassName("overlay");
console.log(overlays);
const targetDate = new Date();
targetDate.setHours(targetDate.getHours() + 336);

let lastDays = "";
let lastHours = "";
let lastMin = "";
let lastSec = "";

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

	if (currentDays !== lastDays) {
		arr[0].innerHTML = days;
		overlays[0].classList.toggle("flip");
		lastDays = currentDays;
	}
	if (currentHours !== lastHours) {
		arr[1].innerHTML = hours;
		overlays[1].classList.toggle("flip");
		lastHours = currentHours;
	}
	if (currentMin !== lastMin) {
		arr[2].innerHTML = minutes;
		overlays[2].classList.toggle("flip");
		lastMin = currentMin;
	}
	if (currentSec !== lastSec) {
		arr[3].innerHTML = seconds;
		overlays[3].classList.toggle("flip");
		lastSec = currentSec;
	}

	if (timeRemaining < 0) {
		clearInterval(countdown);
	}
}, 1000);
