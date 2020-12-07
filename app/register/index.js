const submitButton = document.getElementById('submit-button');
const passwordElement = document.getElementById('password');
const emailElement = document.getElementById('email');

const clearWarningMessages = (warningContainerName) => () => {
	const warningMessages = document
		.getElementById(warningContainerName)
		.getElementsByTagName('P');
	const numberOfMessages = warningMessages.length;

	for (let index = 0; index < numberOfMessages; index++) {
		warningMessages[index].classList.add('hidden');
	}
};

const clearInputValue = (event) => {
	event.target.value = '';
};

const enableSubmitButton = () => {
	submitButton.disabled = false;
};

const disableSubmitButton = () => {
	submitButton.disabled = true;
};

const showWarningMessage = (warningMessageElement) => {
	document.getElementById(warningMessageElement).classList.toggle('hidden');
};

const validateInput = (regex, warningType) => (event) => {
	if (!regex.test(event.target.value)) {
		showWarningMessage(warningType);
		disableSubmitButton();
	}
};

const activatePasswordValidation = () => {
	const validatePassword = (event) => {
		if (event.target.value.length < 8) {
			showWarningMessage('length');
			disableSubmitButton();
		}

		const regExCheckNumber = /([0-9])/;
		validateInput(regExCheckNumber, 'number')(event);

		const regExCheckLowercase = /([a-z])/;
		validateInput(regExCheckLowercase, 'lowercase')(event);

		const regExCheckUppercase = /([A-Z])/;
		validateInput(regExCheckUppercase, 'uppercase')(event);
	};

	passwordElement.addEventListener('change', validatePassword);
};

const activateEmailValidation = () => {
	const validateEmail = (event) => {
		// eslint-disable-next-line no-useless-escape
		const regExCheckEmail = /@[a-zA-Z\-\.]+/g;
		validateInput(regExCheckEmail, 'valid-email')(event);
	};

	emailElement.addEventListener('change', validateEmail);
};

const resetPasswordInput = () => {
	passwordElement.addEventListener('focus', clearInputValue);
	passwordElement.addEventListener('focus', enableSubmitButton);
	passwordElement.addEventListener(
		'focus',
		clearWarningMessages('invalid-password-warning-container')
	);
};

const resetEmailInput = () => {
	emailElement.addEventListener(
		'focus',
		clearWarningMessages('invalid-email-warning-container')
	);
	emailElement.addEventListener('focus', clearInputValue);
	emailElement.addEventListener('focus', enableSubmitButton);
};

activatePasswordValidation();
activateEmailValidation();
resetPasswordInput();
resetEmailInput();
