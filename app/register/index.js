const submitButton = document.getElementById('submit-button');
const passwordElement = document.getElementById('password');

const clearWarningMessages = () => {
	const warningMessages = document
		.getElementById('warning-message-container')
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

const validatePasswordCharacters = (regex, warningType) => (event) => {
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
		validatePasswordCharacters(regExCheckNumber, 'number')(event);

		const regExCheckLowercase = /([a-z])/;
		validatePasswordCharacters(regExCheckLowercase, 'lowercase')(event);

		const regExCheckUppercase = /([A-Z])/;
		validatePasswordCharacters(regExCheckUppercase, 'uppercase')(event);
	};

	passwordElement.addEventListener('change', validatePassword);
};

const resetPasswordInput = () => {
	passwordElement.addEventListener('focus', clearInputValue);
	passwordElement.addEventListener('focus', enableSubmitButton);
	passwordElement.addEventListener('focus', clearWarningMessages);
};

activatePasswordValidation();
resetPasswordInput();
