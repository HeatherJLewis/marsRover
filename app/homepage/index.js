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
const millisecondsSinceLanding =
  Date.now() - new Date(2012, 7, 6, 5, 17, 57).getTime();
const earthDaysSinceLanding = millisecondsSinceLanding / EARTH_DAY_MILLISECONDS;

const addNumberOfSols = () => {
	const solDayMilliseconds =
    EARTH_DAY_MILLISECONDS + 39 * 60 * 1000 + 35.244 * 1000;
	const solConversionFactor = solDayMilliseconds / EARTH_DAY_MILLISECONDS;

	const numberOfSols = Math.round(earthDaysSinceLanding / solConversionFactor);

	document.getElementById('sol-number').append(`${numberOfSols} sols`);
};

const addNumberOfEarthDays = () => {
	document
		.getElementById('earth-number')
		.append(`${Math.round(earthDaysSinceLanding)} Earth days`);
};

const getPhotoOfTheDay = () => {
	fetch('/apod')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			document.getElementById('apod').setAttribute('src', `${data.url}`);
			document.getElementById(
				'apod-explanation'
			).innerText = `${data.explanation}`;
			document.getElementById('image-caption').innerText =
        'The Astronomy Photo Of The Day';
		})
		.catch((error) => {
			console.log(`Unable to retieve photo: ${error.message}`);
		});
};

const getUsername = () => {
	fetch('/getUsername')
		.then((response) => {
			return response.json();
		})
		.then(({ username }) => {
			document.getElementById(
				'logged-in'
			).textContent = `${username}, welcome to NASA`;
		})
		.catch((error) => {
			console.log(error);
		});
};

getPhotoOfTheDay();
getUsername();
addNumberOfSols();
addNumberOfEarthDays();
addTodaysDate();
addTimeZoneDifference();
addCurrentTimeAtKennedySpaceCentre();
