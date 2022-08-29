let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")
let homeLeader = document.getElementById("home-leader")
let guestLeader = document.getElementById("guest-leader")
let homeFouls = document.getElementById("home-fouls")
let guestFouls = document.getElementById("guest-fouls")
let mins = document.getElementById("min")
let secs = document.getElementById("sec")
let homeName = "ycheryl"
let guestName = "lstacey"

function handleMins() {
    if (~~mins.innerHTML == 39) {
        clearInterval(stopMinGame)
        clearInterval(stopSecGame)
        console.log("Time out!")
    } else {
        mins.innerHTML = ~~mins.innerText + 1
    }
}

function handleSecs() {
    if (~~secs.innerHTML == 60) {
        secs.innerHTML = 1
    } else {
        secs.innerHTML = ~~secs.innerText + 1
    }
}

function start() {
    let stopMinGame = setInterval(handleMins, 1000 * 60);
    let stopSecGame = setInterval(handleSecs, 1000);
}

function restart() {
    homeScore.innerText = 0
    guestScore.innerText = 0
    homeFouls.innerText = 0
    guestFouls.innerText = 0
    mins.innerText = "00"
    secs.innerText = "00"
    console.log("New Game!")
}

function add1ForHome() {
    homeScore.innerText = ~~homeScore.innerText + 1
    console.log("Bravo! Plus 1 for home")
}

function add2ForHome() {
    homeScore.innerText = ~~homeScore.innerText + 2
    console.log("Bravo! Plus 2 for home")
}

function add3ForHome() {
    homeScore.innerText = ~~homeScore.innerText + 3
    console.log("Bravo! Plus 3 for home")
}

function foulsHome() {
    homeFouls.innerText = ~~homeFouls.innerText + 1
    console.log("Illegal personal contact!")
}

function add1ForGuest() {
    guestScore.innerText = ~~guestScore.innerText + 1
    console.log("Congrats! Plus 1 for guest")
}

function add2ForGuest() {
    guestScore.innerText = ~~guestScore.innerText + 2
    console.log("Congrats! Plus 2 for guest")
}

function add3ForGuest() {
    guestScore.innerText = ~~guestScore.innerText + 3
    console.log("Congrats! Plus 3 for guest")
}

function foulsGuest() {
    guestFouls.innerText = ~~guestFouls.innerText + 1
    console.log("Illegal personal contact!")
}

function changeHomeLead() {
    homeLeader.innerText = "Leader: " + homeName
    console.log("Set " + homeName + " as home leader.")
}

function changeGuestLead() {
    guestLeader.innerText = "Leader: " + guestName
    console.log("Set " + guestName + " as guest leader.")
}

