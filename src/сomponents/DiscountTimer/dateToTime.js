const MILLIS_IN_SECOND = 1000;
const MILLIS_IN_MINUTE = MILLIS_IN_SECOND * 60;
const MILLIS_IN_HOUR = MILLIS_IN_MINUTE * 60;

const dateToTime = (firstDate, secondDate) => {
    const timeDifference = firstDate.getTime() - secondDate.getTime();

    let hours = Math.floor(timeDifference / MILLIS_IN_HOUR);
    let minutes = Math.floor((timeDifference % MILLIS_IN_HOUR) / MILLIS_IN_MINUTE);
    let seconds = Math.floor((timeDifference % MILLIS_IN_MINUTE) / MILLIS_IN_SECOND);

    if (hours.toString().length <= 1) hours = `0${hours}`;
    if (minutes.toString().length <= 1) minutes = `0${minutes}`;
    if (seconds.toString().length <= 1) seconds = `0${seconds}`;

    return (hours + ":" + minutes + ":" + seconds);
}

export default dateToTime;