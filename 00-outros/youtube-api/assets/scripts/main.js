const ytScript = document.createElement('script')
ytScript.src = 'https://www.youtube.com/iframe_api'

const firstScript = document.scripts[0]
firstScript.parentElement.insertBefore(ytScript, firstScript)

const elPlayer = document.getElementById('player')
let player;

function onYouTubeIframeAPIReady () {
    player = new YT.Player(elPlayer, {
        height: '360',
        width: '640',
        videoId: elPlayer.dataset.videoId,
        teste: this,

        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }

    })
}

function stopVideo () {
    player.stopVideo()
}

function onPlayerReady (event) {
    // player.seekTo(18)
    // console.log(event.target)
}

// let done = false
function onPlayerStateChange () {
    // if (event.data == YT.PlayerState.PLAYING && !done) {
    //     setTimeout(stopVideo, 23500)
    //     done =  true
    // }
}

// songs has its own timeout (e.g. 4/4) thing about that
// when you decide make up your scripts
// Music is Math, isn't it Donald?

const sounds = {
    'dum': {
        text: 'dum',
        color: 'white',
        bg: 'crimson'
    },
    'ta': {
        text: 'ta',
        color: 'white',
        bg: ''
    },
    'ka': {
        text: 'ka',
        color: 'white',
        bg: ''
    },
    'tek': {
        text: 'tek',
        color: 'white',
        bg: ''
    },
    'tak': {
        text: 'tak',
        color: 'white',
        bg: ''
    },
}
