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

const dragAndDropRover = () => {
	const roverSprite = document.querySelector('#rover-sprite');

	const currentMousePosition = {
		x: 0,
		y: 0,
	};

	const initialMousePosition = {
		x: 0,
		y: 0,
	};

	const offset = {
		x: 0,
		y: 0,
	};

	let active = false;

	const dragStart = (event) => {
		initialMousePosition.x = event.clientX - offset.x;
		initialMousePosition.y = event.clientY - offset.y;
		if (event.target === roverSprite) {
			active = true;
		}
	};

	const dragEnd = () => {
		initialMousePosition.x = currentMousePosition.x;
		initialMousePosition.y = currentMousePosition.y;

		active = false;
	};

	const setTranslate = (xPos, yPos, element) => {
		element.style.transform = 'translate(' + xPos + 'px, ' + yPos + 'px)';
	};

	const drag = (event) => {
		if (active) {
			event.preventDefault();
			currentMousePosition.x = event.clientX - initialMousePosition.x;
			currentMousePosition.y = event.clientY - initialMousePosition.y;

			offset.x = currentMousePosition.x;
			offset.y = currentMousePosition.y;

			setTranslate(currentMousePosition.x, currentMousePosition.y, roverSprite);
		}
	};

	roverSprite.addEventListener('mousedown', dragStart, false);
	roverSprite.addEventListener('mouseup', dragEnd, false);
	roverSprite.addEventListener('mousemove', drag, false);
};

positionRoverAtStartOfPath();
dragAndDropRover();
