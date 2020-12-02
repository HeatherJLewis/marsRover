const validatePassword = () => {
	const passwordElement = document.getElementById('password');
	const submitButton = document.getElementById('submit-button');

	const hideWarningMessageAndDisableSubmit = (warningMessageElement) => {
		document.getElementById(warningMessageElement).classList.toggle('hidden');
		submitButton.disabled = true;
	};

	const checkPassword = (event) => {
		if (event.target.value.length < 8) {
			hideWarningMessageAndDisableSubmit('length');
		}

		const regExCheckNumber = /([0-9])/;
		if (!regExCheckNumber.test(event.target.value)) {
			hideWarningMessageAndDisableSubmit('number');
		}

		const regExCheckLowercase = /([a-z])/;
		if (!regExCheckLowercase.test(event.target.value)) {
			hideWarningMessageAndDisableSubmit('lowercase');
		}

		const regExCheckUppercase = /([A-Z])/;
		if (!regExCheckUppercase.test(event.target.value)) {
			hideWarningMessageAndDisableSubmit('uppercase');
		}
	};

	const removeWarningMessages = () => {
		const warningMessages = document
			.getElementById('warning-message-container')
			.getElementsByTagName('P');
		const numberOfMessages = warningMessages.length;

		for (let index = 0; index < numberOfMessages; index++) {
			warningMessages[index].classList.add('hidden');
		}
	};

	const clearInput = (event) => {
		event.target.value = '';
	};

	const enableSubmitButton = () => {
		submitButton.disabled = false;
	};

	passwordElement.addEventListener('change', checkPassword);
	passwordElement.addEventListener('focus', clearInput);
	passwordElement.addEventListener('focus', enableSubmitButton);
	passwordElement.addEventListener('focus', removeWarningMessages);
};

validatePassword();
