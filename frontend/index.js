const addTodaysDate = () => {
    const dateToday = document.createTextNode(String((new Date()).toLocaleString()));
    dateHeader = document.getElementById('dateHeading')
                         .append(dateToday);
};

const addTimeZoneDifference = () => {
    const usersHoursFromGMT = ((new Date()).getTimezoneOffset())/60;
    const usersHoursFromKennedy = usersHoursFromGMT + 5;

    const kennedyTimeZoneOffset = document.createTextNode(usersHoursFromKennedy);
    kennedyTime.append(kennedyTimeZoneOffset);

    const aheadBehindText = usersHoursFromKennedy > 0 ? "ahead of" : "behind"

    const hoursAheadBehind = document.createTextNode(` hours ${aheadBehindText} the Kennedy Space Centre`);

    kennedyTimeHeader = document.getElementById('kennedyTime')
                                .append(hoursAheadBehind);
};

const addCurrentTimeAtKennedySpaceCentre = () => {
    const kennedyTime = (new Date()).toLocaleTimeString(undefined, {
        timeZone: "America/New_York"
    })
    return currentKennedyTime = document.getElementById('kennedyTimeNow')
    .append(kennedyTime)
};

addTodaysDate();
addTimeZoneDifference();
addCurrentTimeAtKennedySpaceCentre();
