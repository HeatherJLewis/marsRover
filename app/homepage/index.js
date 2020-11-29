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
	fetch('/user/getUsername')
		.then((response) => {
			return response.json();
		})
		.then(({ username }) => {
			document.getElementById(
				'logged-in'
			).textContent = `Welcome to your favourite astronomy page, ${username}!`;
			document.getElementById('login-link').remove();
			document.getElementById('register-link').remove();

			const roverMapList = document.getElementById('navbar');

			const roverMapLink = document.createElement('a');
			roverMapLink.href = '/user/rover';
			roverMapLink.textContent = 'Rover';
			roverMapList.appendChild(roverMapLink);

			const calculatorLink = document.createElement('a');
			calculatorLink.href = '/user/calculator';
			calculatorLink.textContent = 'Calculator';
			roverMapList.appendChild(calculatorLink);

			const userAccountLink = document.createElement('a');
			userAccountLink.href = '/user/account';
			userAccountLink.textContent = 'Account';
			roverMapList.appendChild(userAccountLink);

			const logoutLink = document.createElement('a');
			logoutLink.href = '/user/logout';
			logoutLink.textContent = 'Logout';
			roverMapList.appendChild(logoutLink);
		})
		.catch((error) => {
			console.log(error);
		});
};

const stickyNavBar = () => {
	const navbar = document.getElementById('navbar');
	const offsetPositionOfNavBar = navbar.offsetTop;

	const toggleStickyClass = () => {
		if (window.pageYOffset >= offsetPositionOfNavBar) {
			navbar.classList.add('sticky');
		} else {
			navbar.classList.remove('sticky');
		}
	};

	window.onscroll = () => toggleStickyClass();
};

stickyNavBar();
getPhotoOfTheDay();
getUsername();
addNumberOfSols();
addNumberOfEarthDays();
addTodaysDate();
addTimeZoneDifference();
addCurrentTimeAtKennedySpaceCentre();
