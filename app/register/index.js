const validatePassword = () => {
	const passwordElement = document.getElementById('password');

	const checkPasswordLength = (event) => {
		if (event.target.value.length < 8) {
			const passwordWarning = document.createElement('p');
			passwordWarning.id = 'password-warning-length';
			passwordWarning.textContent =
        'Your password is too short. It should have more than 8 characters.';
			document.getElementById('password-input').appendChild(passwordWarning);
		}
	};

	const checkPasswordContainsAtLeastOneNumber = (event) => {
		const regEx = /(\d)/;
		if (!regEx.test(event.target.value)) {
			const passwordWarning = document.createElement('p');
			passwordWarning.textContent =
        'Your password needs to contain at least one number.';
			passwordWarning.id = 'password-warning-number';
			document.getElementById('password-input').appendChild(passwordWarning);
		}
	};

	const checkPasswordContainsAtLeastOneLowercaseCharacter = (event) => {
		const regEx = /([a-z])/;
		if (!regEx.test(event.target.value)) {
			const passwordWarning = document.createElement('p');
			passwordWarning.textContent =
        'Your password needs to contain at least one lowercase character.';
			passwordWarning.id = 'password-warning-lowercase';
			document.getElementById('password-input').appendChild(passwordWarning);
		}
	};

	const checkPasswordContainsAtLeastOneUppercaseCharacter = (event) => {
		const regEx = /([A-Z])/;
		if (!regEx.test(event.target.value)) {
			const passwordWarning = document.createElement('p');
			passwordWarning.textContent =
        'Your password needs to contain at least one uppercase character.';
			passwordWarning.id = 'password-warning-uppercase';
			document.getElementById('password-input').appendChild(passwordWarning);
		}
	};

	const clearInputOnFocus = (event) => {
		event.target.value = '';
		document.getElementById('password-warning-length').remove();
		document.getElementById('password-warning-number').remove();
		document.getElementById('password-warning-lowercase').remove();
		document.getElementById('password-warning-uppercase').remove();
	};

	passwordElement.addEventListener(
		'change',
		checkPasswordContainsAtLeastOneUppercaseCharacter
	);
	passwordElement.addEventListener(
		'change',
		checkPasswordContainsAtLeastOneLowercaseCharacter
	);
	passwordElement.addEventListener(
		'change',
		checkPasswordContainsAtLeastOneNumber
	);
	passwordElement.addEventListener('change', checkPasswordLength);
	passwordElement.addEventListener('focus', clearInputOnFocus);
};

validatePassword();
