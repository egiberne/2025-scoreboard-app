
// interger
let homeScore= 0
let guestScore= 0

// string
let homeScoreId = document.getElementById("home-score")
let guestScoreId = document.getElementById("guest-score")

homeScoreId.textContent = homeScore;
guestScoreId.textContent = guestScore;


// Home Score Functions
function scoreOneHome() {
    console.log("scoreOneHome called");
    homeScore += 1;
    homeScoreId.textContent = homeScore;

}

function scoreTwoHome() {
    console.log("scoreTwoHome called");
    homeScore += 2;
    homeScoreId.textContent = homeScore;

}

function scoreThreeHome(){
    console.log("scoreThreeHome called");
    homeScore += 3;
    homeScoreId.textContent = homeScore;

}

// Guest Score Functions
function scoreOneGuest() {
    console.log("scoreOneGuest called");
    guestScore += 1;
    guestScoreId.textContent = guestScore;

}

function scoreTwoGuest() {
    console.log("scoreTwoGuest called");
    guestScore += 2;
    guestScoreId.textContent = guestScore;

}

function scoreThreeGuest(){
    console.log("scoreThreeGuest called");
    guestScore += 3;
    guestScoreId.textContent = guestScore;

}
