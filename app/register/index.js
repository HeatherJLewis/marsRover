const validatePassword = () => {
	const passwordElement = document.getElementById('password');

	passwordElement.addEventListener('change', (event) => {
		console.log(event.target.value);
	});
};

validatePassword();
