const getCurrentTime = () => {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return { hours, minutes, seconds };
}

const setCurrentTime = () => {
    const time = getCurrentTime();

    const clockContainer = document.getElementById('clock-container');
    clockContainer.innerHTML = `<p class='time'>${time.hours}:${time.minutes}:${time.seconds < 10 ? `0${time.seconds}` : time.seconds }</p>`;
};

oneSecond = 1000;
setInterval(setCurrentTime, oneSecond);