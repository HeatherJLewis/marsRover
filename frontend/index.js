const todaysDate = new Date()

const dateHeader = document.getElementById('dateHeading');
const dateToday = document.createTextNode(String(todaysDate.toLocaleString()));
dateHeader.append(dateToday);

const usersHoursFromGMT = (todaysDate.getTimezoneOffset())/60;
const usersHoursFromKennedy = usersHoursFromGMT + 5;

const kennedyTimeHeader = document.getElementById('kennedyTime');
const kennedyTimeZoneOffset = document.createTextNode(usersHoursFromKennedy);
kennedyTime.append(kennedyTimeZoneOffset);

const hoursAhead = document.createTextNode(' hours ahead of the Kennedy Space Centre');
const hoursBehind = document.createTextNode(' hours behind the Kennedy Space Centre');

usersHoursFromKennedy > 0 ? kennedyTimeHeader.append(hoursAhead) : kennedyTimeHeader.append(hoursBehind);
