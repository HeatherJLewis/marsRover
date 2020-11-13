const addTodaysDate = () => {
	const dateToday = document.createTextNode(String((new Date()).toLocaleString()));

	document.getElementById('dateHeading')
		.append(dateToday);
};

const addTimeZoneDifference = () => {
	const usersHoursFromGMT = ((new Date()).getTimezoneOffset())/60;
	const usersHoursFromKennedy = usersHoursFromGMT + 5;

	const aheadBehindText = usersHoursFromKennedy > 0 ? 'ahead of' : 'behind';
	const hoursAheadBehind = document.createTextNode(`${usersHoursFromKennedy} hours ${aheadBehindText} the Kennedy Space Centre`);

	document.getElementById('kennedyTime')
		.append(hoursAheadBehind);
};

const addCurrentTimeAtKennedySpaceCentre = () => {
	const kennedyTime = (new Date()).toLocaleTimeString(undefined, {
		timeZone: 'America/New_York'
	});

	document.getElementById('kennedyTimeNow')
		.append(kennedyTime);
};

addTodaysDate();
addTimeZoneDifference();
addCurrentTimeAtKennedySpaceCentre();
