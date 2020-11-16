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

const EARTH_DAY_MILLISECONDS = 24 * 60 * 60 * 1000;
const SOL_DAY_MILLISECONDS =
  EARTH_DAY_MILLISECONDS + 39 * 60 * 1000 + 35.244 * 1000;
const solConversionFactor = SOL_DAY_MILLISECONDS / EARTH_DAY_MILLISECONDS;

const calculateSols = () => {
	const millisecondsSinceLanding =
    Date.now() - new Date(2012, 7, 6, 5, 17, 57).getTime();
	const earthDaysSinceLanding =
    millisecondsSinceLanding / EARTH_DAY_MILLISECONDS;
	return Math.round(earthDaysSinceLanding / solConversionFactor);
};

const addNumberOfSols = () => {
	const numberOfSols = calculateSols();
	document.getElementById('sol-number').append(`${numberOfSols} sols`);
};

addNumberOfSols();
addTodaysDate();
addTimeZoneDifference();
addCurrentTimeAtKennedySpaceCentre();
