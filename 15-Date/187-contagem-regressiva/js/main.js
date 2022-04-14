;(function () {
    function coolDown (eventDate, element) {
        const [date, hours]      = eventDate.split(' ')
        const [day, month, year] = date.split('/').map(parseFloat)
        const [hour, min]        = hours.split('H').map(parseFloat)

        function updateTime () {
            const curDate   = new Date()
            const eventDate = new Date(year, (month - 1), day, hour, min)

            const timeDiff  = eventDate.getTime() - curDate.getTime()
            let timeLeft    = timeDiff;

            const daysLeft = Math.floor(timeLeft / ONE_DAY)
            timeLeft %= ONE_DAY

            const hoursLeft = Math.floor(timeLeft / ONE_HOUR)
            timeLeft %= ONE_HOUR

            const minLeft = Math.floor(timeLeft / ONE_MIN)
            timeLeft %= ONE_MIN

            const secLeft = Math.floor(timeLeft / ONE_SEC)

            element.textContent = (timeLeft > 0)
                ? `${daysLeft}d ${hoursLeft}h ${minLeft}m ${secLeft}s`
                : `0d 0h 0m 0s`
        }

        updateTime()
        setInterval(updateTime, ONE_SEC);
    }

    const ONE_SEC    = 1000
    const ONE_MIN    = 60 * ONE_SEC
    const ONE_HOUR   = 60 * ONE_MIN
    const ONE_DAY    = 24 * ONE_HOUR

    const elTimeLeft = document.getElementById('time-left')
    const eventDate  = document.getElementById('date').textContent
    coolDown(eventDate, elTimeLeft)
})();
