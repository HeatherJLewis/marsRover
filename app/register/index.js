const validatePassword = () => {
	const passwordElement = document.getElementById('password');
	const passwordLengthWarning = document.getElementById('length');
	const passwordNumberWarning = document.getElementById('number');
	const passwordLowercaseWarning = document.getElementById('lowercase');
	const passwordUppercaseWarning = document.getElementById('uppercase');
	const submitButton = document.getElementById('submit-button');

	const checkPasswordLength = (event) => {
		if (event.target.value.length < 8) {
			passwordLengthWarning.classList.toggle('hidden');
			submitButton.disabled = true;
		}
	};

	const checkPasswordContainsAtLeastOneNumber = (event) => {
		const regEx = /(\d)/;
		if (!regEx.test(event.target.value)) {
			passwordNumberWarning.classList.toggle('hidden');
			submitButton.disabled = true;
		}
	};

	const checkPasswordContainsAtLeastOneLowercaseCharacter = (event) => {
		const regEx = /([a-z])/;
		if (!regEx.test(event.target.value)) {
			passwordLowercaseWarning.classList.toggle('hidden');
			submitButton.disabled = true;
		}
	};

	const checkPasswordContainsAtLeastOneUppercaseCharacter = (event) => {
		const regEx = /([A-Z])/;
		if (!regEx.test(event.target.value)) {
			passwordUppercaseWarning.classList.toggle('hidden');
			submitButton.disabled = true;
		}
	};

	const clearInputOnFocus = (event) => {
		event.target.value = '';
		passwordLengthWarning.classList.add('hidden');
		passwordNumberWarning.classList.add('hidden');
		passwordLowercaseWarning.classList.add('hidden');
		passwordUppercaseWarning.classList.add('hidden');
		submitButton.disabled = false;
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
