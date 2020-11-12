const addTodaysDate = () => {
    const dateToday = document.createTextNode(String((new Date()).toLocaleString()));
    return dateHeader = document.getElementById('dateHeading')
                                .append(dateToday);
};

const addTimeZoneDifference = () => {
    const usersHoursFromGMT = ((new Date()).getTimezoneOffset())/60;
    const usersHoursFromKennedy = usersHoursFromGMT + 5;

    const kennedyTimeHeader = document.getElementById('kennedyTime');
    const kennedyTimeZoneOffset = document.createTextNode(usersHoursFromKennedy);
    kennedyTime.append(kennedyTimeZoneOffset);

    const aheadBehindText = usersHoursFromKennedy > 0 ? "ahead of" : "behind"

    const hoursAheadBehind = document.createTextNode(` hours ${aheadBehindText} the Kennedy Space Centre`);

    return kennedyTimeHeader.append(hoursAheadBehind);
};


addTodaysDate();
addTimeZoneDifference();
