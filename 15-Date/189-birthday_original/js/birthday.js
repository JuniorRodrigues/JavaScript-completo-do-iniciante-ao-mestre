const ONE_DAY = 24 * 60 * 60 * 1000

function quantoFaltaPara (m, d) {
    const dataAtual   = new Date()
    dataAtual.setHours(0)
    dataAtual.setMinutes(0)
    dataAtual.setSeconds(0)
    dataAtual.setMilliseconds(0)

    let anoAtual = dataAtual.getFullYear()
    const dataNiver = new Date(anoAtual, (m - 1), d)

    // + operator at the beginning coerce it in Timestemp
    const dataAtualTS = +dataAtual
    let dataNiverTS = +dataNiver

    if (dataNiverTS < dataAtualTS) {
        dataNiver.setFullYear(++anoAtual)
        dataNiverTS = +dataNiver
    }

    const diff = dataNiverTS - dataAtualTS
    const daysLeft = Math.floor(diff / ONE_DAY);

    return daysLeft
}
