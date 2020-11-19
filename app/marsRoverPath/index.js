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

function dragStart(e) {
	initialX = e.clientX - xOffset;
	initialY = e.clientY - yOffset;
	if (e.target === dragItem) {
		active = true;
	}
}

function dragEnd() {
	initialX = currentX;
	initialY = currentY;

	active = false;
}

function drag(e) {
	if (active) {
		e.preventDefault();
		currentX = e.clientX - initialX;
		currentY = e.clientY - initialY;

		xOffset = currentX;
		yOffset = currentY;

		setTranslate(currentX, currentY, dragItem);
	}
}

function setTranslate(xPos, yPos, el) {
	el.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
}
