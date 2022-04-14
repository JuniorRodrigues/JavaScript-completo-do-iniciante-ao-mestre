(function () {
    function eventCooldown () {
        const elTimeLeft = document.getElementById('time-left')
        const eventInfo  = document.getElementById('date').textContent

        const [date, hour]       = eventInfo.split(' ')
        const [day, month, year] = date.split('/').map(parseFloat)
        const [hrs, min]         = hour.split('H').map(parseFloat)

        const eventDate = new Date(year, (month - 1), day, hrs, min).getTime()

        const SEC_TO_TIMES = 1000;
        const MIN_TO_TIMES = SEC_TO_TIMES * 60
        const HOURS_TO_TIMES = MIN_TO_TIMES * 60
        const DAYS_TO_TIMES = HOURS_TO_TIMES * 24

        function updateTime () {
            const curDate   = new Date().getTime();
            const timeDiff  = eventDate - curDate

            let timeLeft = timeDiff;
            let daysLeft = Math.floor(timeLeft / DAYS_TO_TIMES)
            timeLeft     = timeLeft % DAYS_TO_TIMES
            let hrsLeft  = Math.floor(timeLeft / HOURS_TO_TIMES)
            timeLeft     = timeLeft % HOURS_TO_TIMES
            let minLeft  = Math.floor(timeLeft / MIN_TO_TIMES)
            timeLeft     = timeLeft % MIN_TO_TIMES
            let secLeft  = Math.floor(timeLeft / SEC_TO_TIMES)

            if (timeLeft <= 0 && hrsLeft <= 0 && minLeft <= 0 && secLeft <= 0) {
                daysLeft = hrsLeft = minLeft = secLeft = 0
            }

            elTimeLeft.textContent = `${daysLeft} dias, ${hrsLeft} hrs, ${minLeft} min, ${secLeft} seconds`
        }

        setInterval(function runInterval () {
            updateTime()
            return runInterval
        }(), 1000)
    }

    eventCooldown()
})()
