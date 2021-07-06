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

	const DATA_POINTS = {
		10: {
			x: 1100,
		},
		40: {
			x: 1100,
		},
		70: {
			x: 1051,
		},
		100: {
			x: 1014,
		},
		130: {
			x: 987,
		},
		160: {
			x: 970,
		},
		190: {
			x: 933,
		},
		220: {
			x: 870,
		},
		250: {
			x: 870,
		},
		280: {
			x: 870,
		},
		310: {
			x: 790,
		},
		340: {
			x: 780,
		},
		370: {
			x: 775,
		},
		400: {
			x: 743,
		},
		430: {
			x: 700,
		},
		460: {
			x: 690,
		},
		490: {
			x: 638,
		},
		520: {
			x: 630,
		},
		550: {
			x: 611,
		},
		580: {
			x: 618,
		},
		610: {
			x: 626,
		},
		640: {
			x: 639,
		},
		670: {
			x: 646,
		},
		700: {
			x: 660,
		},
		730: {
			x: 718,
		},
		760: {
			x: 738,
		},
		790: {
			x: 763,
		},
	};
	const roundToNearest30 = (number) => {
		return Math.round(number / 30) * 30;
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

			currentMousePosition.y = roundToNearest30(event.clientY) + 10;
			currentMousePosition.x =
        DATA_POINTS['' + (roundToNearest30(event.clientY) + 10)].x - 1100;

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
