const dateHeader = document.getElementById('dateHeading');

const dateToday = document.createTextNode(String(new Date()));

dateHeader.append(dateToday);