const positionRoverAtStartOfPath = () => {
	const roverMap = document.getElementById('rover-path-image');
	const spriteImage = document.getElementById('rover-sprite');

	const scalingFactorFromTop = 10 / 960;
	const scalingFactorFromLeft = 1114 / 1920;

	spriteImage.style.left = `${
		roverMap.offsetWidth * scalingFactorFromLeft +
    roverMap.getBoundingClientRect().left
	}px`;
	spriteImage.style.top = `${
		roverMap.offsetHeight * scalingFactorFromTop +
    roverMap.getBoundingClientRect().top
	}px`;

	window.addEventListener('resize', () => {
		spriteImage.style.left = `${
			roverMap.offsetWidth * scalingFactorFromLeft +
      roverMap.getBoundingClientRect().left
		}px`;
		spriteImage.style.top = `${
			roverMap.offsetHeight * scalingFactorFromTop +
      roverMap.getBoundingClientRect().top
		}px`;
	});
};

positionRoverAtStartOfPath();
