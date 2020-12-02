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

const validatePassword = () => {
	const showWarningMessage = (warningMessageElement) => {
		document.getElementById(warningMessageElement).classList.toggle('hidden');
	};

	const checkPassword = (event) => {
		if (event.target.value.length < 8) {
			showWarningMessage('length');
			disableSubmitButton();
		}

		const regExCheckNumber = /([0-9])/;
		if (!regExCheckNumber.test(event.target.value)) {
			showWarningMessage('number');
			disableSubmitButton();
		}

		const regExCheckLowercase = /([a-z])/;
		if (!regExCheckLowercase.test(event.target.value)) {
			showWarningMessage('lowercase');
			disableSubmitButton();
		}

		const regExCheckUppercase = /([A-Z])/;
		if (!regExCheckUppercase.test(event.target.value)) {
			showWarningMessage('uppercase');
			disableSubmitButton();
		}
	};

	passwordElement.addEventListener('change', checkPassword);
};

const resetPasswordInput = () => {
	passwordElement.addEventListener('focus', clearInputValue);
	passwordElement.addEventListener('focus', enableSubmitButton);
	passwordElement.addEventListener('focus', clearWarningMessages);
};

validatePassword();
resetPasswordInput();
