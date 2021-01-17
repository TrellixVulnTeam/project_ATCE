function updateTime() {
	const hourEl = document.querySelector('#hour');
	const minuteEl = document.querySelector('#minute');
	const secondEl = document.querySelector('#second');
	let d = new Date();
	let hours = d.getHours();
	let minutes = d.getMinutes();
	let seconds = d.getSeconds();
	if (hours >= 0 && hours <= 9) hours = '0' + hours;
	if (minutes >= 0 && minutes <= 9) minutes = '0' + minutes;
	if (seconds >= 0 && seconds <= 9) seconds = '0' + seconds;
	hourEl.innerHTML = hours;
	minuteEl.innerHTML = minutes;
	secondEl.innerHTML = seconds;

	const dateEl = document.querySelector('#date');
	let date = d.getDate();
	if (date >= 0 && date <= 9) date = '0' + date;

	let month = d.getMonth();
	if (month >= 0 && month <= 9) month = '0' + month;
	console.log(month);
	let year = d.getFullYear();
	if (year >= 0 && year <= 9) year = '0' + year;

	dateEl.innerHTML = `${date}/${month}/${year}`;

	const dayEl = document.querySelector('#day');
	let daynumber = d.getDay();
	let day = '';
	switch (daynumber) {
		case 0:
			day = 'Monday';
			break;

		case 1:
			day = 'Tuesday';
			break;

		case 2:
			day = 'Wendsday';
			break;

		case 3:
			day = 'Thursday';
			break;

		case 5:
			day = 'Friday';
			break;

		case 6:
			day = 'Saturday';
			break;

		case 7:
			day = 'Sunday';
			break;
	}
	dayEl.innerHTML = day;
}

window.onload = function() {
	setInterval(updateTime, 10000);
};
