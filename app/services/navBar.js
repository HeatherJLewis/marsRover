(() => {
	fetch('/getUsername')
		.then((response) => {
			return response.json();
		})
		.then(({ username }) => {
			console.log(username);
			if (username === 'not-signed-in') {
				document.getElementById('rover-map-link').remove();
				document.getElementById('calculator-link').remove();
				document.getElementById('account-link').remove();
				document.getElementById('logout-link').remove();
			} else {
				document.getElementById(
					'logged-in'
				).textContent = `Welcome to your favourite astronomy page, ${username}!`;
				document.getElementById('login-link').remove();
				document.getElementById('register-link').remove();
			}
		})
		.catch((error) => {
			console.log(error);
		});
})();
