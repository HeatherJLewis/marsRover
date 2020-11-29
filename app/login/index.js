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
