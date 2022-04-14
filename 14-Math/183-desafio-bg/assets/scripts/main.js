function randomImg (imgAmount) {
    const n = parseInt(Math.random() * (imgAmount - 1 + 1) + 1)

    document.body.style.backgroundImage = `url(assets/images/${n}.jpg)`
}

randomImg(5)
