//The code in this page is all done by me, however, is not needed for the running of the application
//it creates the data used in chess.js
//lines 7 - 43 are used to generate the tempRatings array - realistic professional chess ratings
//the rest of the program generates the results for each round - realistic based on performance data of rating differences
//I used document.write() and concatenation to easily copy the data into chess.js

function randomFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function chooseRating() {
    const answer = [];

    let x = randomFromInterval(2250, 2850);
    let y = randomFromInterval(2250, 2850);

    while(x - y < 75 && x - y > -75) {
        y = randomFromInterval(2250, 2850);
    }

    if(x > y) {
        answer.push(randomFromInterval(y, x));
        answer.push(randomFromInterval(y, x));
        answer.push(randomFromInterval(y, x));
        answer.push(randomFromInterval(y, x));
    } else {
        answer.push(randomFromInterval(x, y));
        answer.push(randomFromInterval(x, y));
        answer.push(randomFromInterval(x, y));
        answer.push(randomFromInterval(x, y));
    }

    let returnString = "";
    for(let i = 0; i < answer.length; i++) {
        returnString += answer[i].toString() + ", ";
    }

    return returnString;
}

for (let i = 0; i < 30; i++) {
    document.write(chooseRating());
} 

//next
function weightedArray(weights) {
    const arr = [];

    for(let i = 0; i < weights[0]; i++) {
        arr.push(1);
    }
    for(let i = 0; i < weights[1]; i++) {
        arr.push(0.5);
    }
    for(let i = 0; i < weights[2]; i++) {
        arr.push(0);
    }

    return arr;
}

function determineResult(ratingOne, ratingTwo) {
    const weights = Array(3);
    let diff = ratingOne - ratingTwo;
    
    if(diff < 0 && diff > -25) {
        weights[0] = 4;
        weights[1] = 12; 
        weights[2] = 4;
    } else if(diff < 25 && diff >= 0) {
        weights[0] = 5;
        weights[1] = 12; 
        weights[2] = 3;
    } else if(diff >= 25 && diff < 75) {
        weights[0] = 7;
        weights[1] = 11; 
        weights[2] = 2;
    } else if(diff >= 75 && diff < 125) {
        weights[0] = 9;
        weights[1] = 10; 
        weights[2] = 1;
    } else if(diff >= 125 && diff < 175) {
        weights[0] = 11;
        weights[1] = 8; 
        weights[2] = 1;
    } else if(diff >= 175 && diff < 225) {
        weights[0] = 13;
        weights[1] = 6; 
        weights[2] = 1;
    } else if(diff >= 225 && diff < 275) {
        weights[0] = 15;
        weights[1] = 4; 
        weights[2] = 1;
    } else if(diff >= 275 && diff < 325) {
        weights[0] = 17;
        weights[1] = 3; 
        weights[2] = 0;
    } else if(diff >= 325 && diff < 375) {
        weights[0] = 19;
        weights[1] = 1; 
        weights[2] = 0;
    } else if(diff >= 375) {
        weights[0] = 20;
        weights[1] = 0; 
        weights[2] = 0;
    } else if(diff <= -25 && diff > -75) {
        weights[0] = 3;
        weights[1] = 11; 
        weights[2] = 6;
    } else if(diff <= -75 && diff > -125) {
        weights[0] = 2;
        weights[1] = 10; 
        weights[2] = 8;
    } else if(diff <= -125 && diff > -175) {
        weights[0] = 2;
        weights[1] = 8; 
        weights[2] = 10;
    } else if(diff <= -175 && diff > -225) {
        weights[0] = 1;
        weights[1] = 7; 
        weights[2] = 12;
    } else if(diff <= -225 && diff > -275) {
        weights[0] = 1;
        weights[1] = 5; 
        weights[2] = 14;
    } else if(diff <= -275 && diff > -325) {
        weights[0] = 1;
        weights[1] = 3; 
        weights[2] = 16;
    } else if(diff <= -325 && diff > -375) {
        weights[0] = 0;
        weights[1] = 2; 
        weights[2] = 18;
    } else {
        weights[0] = 0;
        weights[1] = 0; 
        weights[2] = 20;
    }

    const arr = weightedArray(weights);
    let x = randomFromInterval(0, 19);
    return arr[x];
}

function roundResult(pairing) {
    const roundResults = [];

    for(let i = 0; i < teams.length; i += 2) {
        const results = Array(4);
        results[0] = determineResult(pairing[i].players[0].rating, pairing[i + 1].players[0].rating);
        results[1] = determineResult(pairing[i + 1].players[1].rating, pairing[i].players[1].rating);
        results[2] = determineResult(pairing[i].players[2].rating, pairing[i + 1].players[2].rating);
        results[3] = determineResult(pairing[i + 1].players[3].rating, pairing[i].players[3].rating);
        roundResults.push(results);
    }

    return roundResults;
}

function displayFullResult(pairing) {
    const roundResults = roundResult(pairing);

    for(let i = 0; i < 15; i++) {
        let teamOne = roundResults[i][0] + roundResults[i][2] + (1 - roundResults[i][1]) + (1 - roundResults[i][3]);
        let teamTwo = roundResults[i][1] + roundResults[i][3] + (1 - roundResults[i][0]) + (1 - roundResults[i][2]);        

        document.write(pairing[i * 2].country + " vs " + pairing[(i * 2) + 1].country + " " + teamOne + "-" + teamTwo + "<br>");

        document.write(pairing[i * 2].players[0].name + " (" + pairing[i * 2].players[0].rating + ")  " + roundResults[i][0]
        + "  " + pairing[(i * 2) + 1].players[0].name + " (" + pairing[(i * 2) + 1].players[0].rating + ")" + "<br>");

        document.write(pairing[(i * 2) + 1].players[1].name + " (" + pairing[(i * 2) + 1].players[1].rating + ")  " + roundResults[i][1]
        + "  " + pairing[i * 2].players[1].name + " (" + pairing[i * 2].players[1].rating + ")" + "<br>");

        document.write(pairing[i * 2].players[2].name + " (" + pairing[i * 2].players[2].rating + ")  " + roundResults[i][2]
        + "  " + pairing[(i * 2) + 1].players[2].name + " (" + pairing[(i * 2) + 1].players[2].rating + ")" + "<br>");

        document.write(pairing[(i * 2) + 1].players[3].name + " (" + pairing[(i * 2) + 1].players[3].rating + ")  " + roundResults[i][3]
        + "  " + pairing[i * 2].players[3].name + " (" + pairing[i * 2].players[3].rating + ")" + "<br>");

        document.write("<br>");
    }

    for(let i = 0; i < 15; i++) {
        document.write("[" + roundResults[i][0] + ", " + roundResults[i][1] + ", " + roundResults[i][2] + ", " + roundResults[i][3] + "], ")
    }
}

displayFullResult(numsToTeams([3, 24, 23, 18, 22, 9, 10, 21, 29, 0, 16, 14, 8, 20, 6, 27, 17, 26, 15, 4, 1, 5, 7, 2, 12, 28, 11, 19, 13, 25]));
