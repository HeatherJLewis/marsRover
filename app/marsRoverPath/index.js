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
var dragItem = document.querySelector('#rover-sprite');

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

dragItem.addEventListener('mousedown', dragStart, false);
dragItem.addEventListener('mouseup', dragEnd, false);
dragItem.addEventListener('mousemove', drag, false);

function dragStart(event) {
	initialX = event.clientX - xOffset;
	initialY = event.clientY - yOffset;
	if (event.target === dragItem) {
		active = true;
	}
}

function dragEnd() {
	initialX = currentX;
	initialY = currentY;

	active = false;
}

function drag(event) {
	if (active) {
		event.preventDefault();
		currentX = event.clientX - initialX;
		currentY = event.clientY - initialY;

		xOffset = currentX;
		yOffset = currentY;

		setTranslate(currentX, currentY, dragItem);
	}
}

function setTranslate(xPos, yPos, element) {
	element.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
}
