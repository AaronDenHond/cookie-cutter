// clicks initialized at 0 ,tracking clicks
// selecting the label via clicksLabel to be able to change innerHTML easily

let clicks = 0;
let clicksLabel = document.getElementById("counter");

// cookies initialized at 0, tracking cookies
// selecting the label via cookiesLabel to be able to change innerHTML easily

let cookies = 0;
let cookiesLabel = document.getElementById("cookies");

// create variable clickerModifier that acts as upgrade : higher clickerModifier means more cookies per click
let clickerModifier = 0

// button to register clicks, not really necessary
let button = document.getElementById("run");


let multiplierElement = document.getElementById("multiplier");

let autoclickElement = document.getElementById("auto-click");

//initial click upgrade cost and modifier
let cost = 20
const modifier = 1.5;

//initial auto click upgrade cost, uses same modifier for now
let autoCost = 50;

// EventListeners on buttons to get the functionalities we want on click

button.addEventListener("click", () => {
    clicks += 1; // clicks = clicks + 1
    clicksLabel.innerHTML = "Clicks:" + " " + clicks;

    cookies += 1 + clickerModifier; // niet clicks bij tellen
    
    cookiesLabel.innerHTML = "Cookies:" + " " + cookies;

});


document.getElementById("multiplier").addEventListener("click", () => {

    if (cookies < cost) {
        alert("Not enough credits!");

    }

    else {
        clickerModifier = clickerModifier + 1; // moet zo om op te slagen clickerModifier += 1;
        cookies = Math.floor(cookies - cost);
        let costRounded = Math.floor(cost * modifier);
        multiplierElement.innerHTML = `x${clickerModifier}/ cookies ${costRounded}`;
        cost = upgradeCost(cost);


    }
});



document.getElementById("auto-click").addEventListener("click", () => {

    if (cookies < autoCost) {
        alert("Not enough credits!");
    }
    else {
        setInterval(function () {
            button.click()
        }, 1000)
        cookies = Math.floor(cookies - autoCost);
        let autoCostRounded = Math.floor(autoCost * modifier);
        autoclickElement.innerHTML = `x${clickerModifier}/ cookies ${autoCostRounded}`;
        autoCost = upgradeAutoCost(autoCost);
    }
});



// upgradecost scaling function for clickerModifier (aka clicker upgrade) and auto clicker upgrade

const upgradeCost = (cost) => {

    const modifier = 1.5; // modifier const always 1.5
    return cost * modifier;
}

const upgradeAutoCost = (autoCost) => {

    const modifier = 1.5; // modifier const always 1.5
    return autoCost * modifier;
}

