const addTodaysDate = () => {
	const dateToday = document.createTextNode(
		String(new Date().toLocaleString())
	);

	document.getElementById('dateHeading').append(dateToday);
};

const addTimeZoneDifference = () => {
	const usersHoursFromGMT = new Date().getTimezoneOffset() / 60;
	const usersHoursFromKennedy = usersHoursFromGMT + 5;

	const aheadBehindText = usersHoursFromKennedy > 0 ? 'ahead of' : 'behind';
	const hoursAheadBehind = document.createTextNode(
		`${usersHoursFromKennedy} hours ${aheadBehindText} the Kennedy Space Centre`
	);

	document.getElementById('kennedyTime').append(hoursAheadBehind);
};

const addCurrentTimeAtKennedySpaceCentre = () => {
	const kennedyTime = new Date().toLocaleTimeString(undefined, {
		timeZone: 'America/New_York',
	});

	document.getElementById('kennedyTimeNow').append(kennedyTime);
};

const earthDayMilliseconds = 24 * 60 * 60 * 1000;
const solDayMilliseconds =
  earthDayMilliseconds + 39 * 60 * 1000 + 35.244 * 1000;
console.log(earthDayMilliseconds, solDayMilliseconds);
const solConversionFactor = solDayMilliseconds / earthDayMilliseconds;
console.log(solConversionFactor);
const calculateSols = () => {
	const earthDaysSinceLanding =
    (Date.now() - new Date(2012, 7, 6, 5, 17, 57).getTime()) /
    (1000 * 60 * 60 * 24);
	const solsSinceLanding = earthDaysSinceLanding / solConversionFactor;
	console.log(solsSinceLanding);
};

calculateSols();
addTodaysDate();
addTimeZoneDifference();
addCurrentTimeAtKennedySpaceCentre();
