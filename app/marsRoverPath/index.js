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
	console.log('x', spriteImage.style.left, 'y', spriteImage.style.top);
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

	const roverSprite = document.getElementById('rover-sprite');

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

		console.log(
			'DRAG END',
			'x',
			initialMousePosition.x,
			'y',
			initialMousePosition.y
		);
		active = false;
	};

	const setTranslate = (xPos, yPos, element) => {
		element.style.transform = 'translate(' + xPos + 'px, ' + yPos + 'px)';
	};

	const calculateXcoordinateUpper = (yCoordinate) => {
		const gradient = -545 / 500;
		const constant = 700 - 600 * gradient;
		return (yCoordinate - constant) / gradient;
	};

	const calculateXcoordinateMiddle = (yCoordinate) => {
		const gradient = 155 / 80;
		const constant = 480 - 600 * gradient;
		return (yCoordinate - constant) / gradient;
	};

	const calculateXcoordinateLower = (yCoordinate) => {
		const gradient = 100 / 120;
		const constant = 705 - 680 * gradient;
		return (yCoordinate - constant) / gradient;
	};

	const drag = (event) => {
		if (active) {
			event.preventDefault();
			if (event.clientY - initialMousePosition.y < 545) {
				currentMousePosition.x =
          calculateXcoordinateUpper(event.clientY) - initialMousePosition.x;
			} else if (event.clientY - initialMousePosition.y < 700) {
				currentMousePosition.x =
          calculateXcoordinateMiddle(event.clientY) - initialMousePosition.x;
			} else {
				currentMousePosition.x =
          calculateXcoordinateLower(event.clientY) - initialMousePosition.x;
			}
			currentMousePosition.y = event.clientY - initialMousePosition.y;
			// currentMousePosition.x = event.clientX - initialMousePosition.x;

			offset.x = currentMousePosition.x;
			offset.y = currentMousePosition.y;

			setTranslate(currentMousePosition.x, currentMousePosition.y, roverSprite);
		}
	};

	const mapImage = document.getElementById('rover-path-image');

	mapImage.addEventListener('mousemove', drag, false);
	mapImage.addEventListener('mouseup', dragEnd, false);

	roverSprite.addEventListener('mousedown', dragStart, false);
	roverSprite.addEventListener('mouseup', dragEnd, false);
	roverSprite.addEventListener('mousemove', drag, false);
};

positionRoverAtStartOfPath();
dragAndDropRover();
