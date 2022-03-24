//I didn't use local storage since I wasn't sure if it was a requirement, and couldn't get it to work for the program
//The user can still input data and it will impact everything else, however, it doesn't save after pressing refresh button

//3 classes: rounds, teams, player
//these classes & the arrays I make represent the entirety of data that I need for the program
//the description in the introduction explains 
class Round {
    constructor(pairings, scores) {
        this.pairings = pairings;
        this.scores = scores;
    }
}

class Team {
    constructor(country, players) {
        this.country = country;
        this.players = players;
    }
}

class Player {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

const originalRounds = Array(9);
const teams = Array(30);
const players = [];

const countries = ["Canada", "Malta", "Romania", "France", "Germany", "Mexico", "China", "India", "Chile", "Italy", 
"Belgium", "Australia", "Bolivia", "Bulgaria", "Turkey", "Israel", "Spain", "Georgia", "Nepal", "Greece", 
"Tonga", "Ghana", "Botswana", "Egypt", "Malaysia", "Tunisia", "Slovakia", "Peru", "Uruguay", "Poland"];

const tempRatings = [2696, 2796, 2736, 2537, 2433, 2498, 2482, 2569, 2384, 2573, 2495, 2411, 2815, 2749, 2719, 2833, 2752, 2300, 
2744, 2495, 2626, 2510, 2495, 2546, 2653, 2553, 2447, 2457, 2351, 2551, 2481, 2535, 2507, 2599, 2565, 2584, 2705, 2676, 2662, 
2622, 2573, 2673, 2750, 2602, 2339, 2401, 2376, 2481, 2484, 2407, 2494, 2801, 2386, 2340, 2291, 2400, 2790, 2641, 2534, 2568, 
2480, 2600, 2560, 2607, 2616, 2609, 2528, 2687, 2588, 2625, 2612, 2614, 2667, 2639, 2648, 2624, 2376, 2421, 2476, 2391, 2551, 
2729, 2766, 2555, 2682, 2677, 2696, 2660, 2741, 2653, 2707, 2657, 2755, 2758, 2772, 2780, 2706, 2532, 2607, 2759, 2404, 2420, 
2428, 2548, 2419, 2406, 2485, 2451, 2613, 2622, 2655, 2697, 2316, 2568, 2614, 2337, 2643, 2664, 2613, 2612];

//dividing tempRatings into intervals of 4, sort each 4 descending, then placing each bundle into ratings
//this can now be easily placed into the players
const ratings = [];
for(let i = 0; i < tempRatings.length; i += 4) {
    const tempRatingsMini = Array(4);
    tempRatingsMini[0] = tempRatings[i];
    tempRatingsMini[1] = tempRatings[i + 1];
    tempRatingsMini[2] = tempRatings[i + 2];
    tempRatingsMini[3] = tempRatings[i + 3];
    tempRatingsMini.sort(function(a, b){return b - a});
    for(let k = 0; k < 4; k++) {
        ratings.push(tempRatingsMini[k]);
    }
}

//the replace is in case a country has a space in the middle (example, United States)
//plucks ratings from before
//creates team, team has 4 players, in descending order of rating
for(let i = 0; i < teams.length; i++) {
    let playerOne = new Player(countries[i].replace(' ', '') + "One", ratings[(4 * i) + 0]);
    let playerTwo = new Player(countries[i].replace(' ', '') + "Two", ratings[(4 * i) + 1]);
    let playerThree = new Player(countries[i].replace(' ', '') + "Three", ratings[(4 * i) + 2]);
    let playerFour = new Player(countries[i].replace(' ', '') + "Four", ratings[(4 * i) + 3]);

    const team = Array(4);
    team[0] = playerOne;
    team[1] = playerTwo;
    team[2] = playerThree;
    team[3] = playerFour;
    teams[i] = new Team(countries[i], team);

    players.push(playerOne);
    players.push(playerTwo);
    players.push(playerThree);
    players.push(playerFour);
}

//makes inputting data slightly easier
function numsToTeams(nums) {
    const returnTeams = [];
    for(let i = 0; i < nums.length; i++) {
        returnTeams.push(teams[nums[i]]);
    }
    return returnTeams;
}

originalRounds[0] = new Round(numsToTeams([3, 4, 8, 23, 0, 15, 12, 22, 21, 5, 6, 9, 24, 1, 7, 20, 10, 2, 28, 27, 18, 25, 26, 14, 29, 19, 11, 16, 17, 13]), 
[[1, 0.5, 1, 0], [0, 1, 0.5, 1], [0.5, 0.5, 1, 0.5], [0.5, 0.5, 0, 0.5], [0.5, 0.5, 0.5, 0], [0.5, 0.5, 0, 1], [0.5, 0.5, 0.5, 0.5], 
[0, 1, 0, 0.5], [1, 0, 0.5, 0], [0.5, 1, 1, 1], [0.5, 0, 0.5, 0], [0, 0.5, 0.5, 0.5], [1, 0, 1, 0.5], [0, 1, 0, 0.5], [1, 0, 1, 0]]);
originalRounds[1] = new Round(numsToTeams([27, 3, 23, 10, 14, 0, 22, 18, 16, 21, 9, 29, 20, 17, 4, 24, 1, 8, 15, 28, 25, 12, 5, 26, 19, 6, 13, 7, 2, 11]), 
[[0, 1, 0, 0.5], [0.5, 0, 1, 0], [1, 1, 0, 0.5], [0.5, 0.5, 0.5, 0.5], [0.5, 1, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5], [1, 0, 0.5, 1], [0.5, 0.5, 0.5, 1], 
[0.5, 1, 0, 0.5], [1, 0.5, 1, 0], [0, 0.5, 0.5, 1], [1, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5], [0, 1, 0.5, 1], [1, 0.5, 0.5, 0]]);
originalRounds[2] = new Round(numsToTeams([3, 20, 0, 23, 21, 22, 18, 9, 24, 29, 10, 15, 8, 27, 12, 14, 7, 16, 17, 5, 6, 2, 19, 1, 26, 4, 28, 13, 11, 25]), 
[[1, 0, 0.5, 0], [0.5, 0.5, 0, 1], [0.5, 1, 1, 0.5], [0.5, 1, 0.5, 0.5], [1, 1, 1, 0.5], [1, 0.5, 0.5, 0], [0, 0.5, 0.5, 0.5], [0.5, 0.5, 1, 1], 
[1, 0.5, 0.5, 1], [0.5, 0, 0.5, 0.5], [1, 0.5, 0, 0.5], [0.5, 1, 0.5, 0.5], [0.5, 1, 0.5, 0], [1, 0, 0, 0.5], [0, 1, 0, 0.5]]);
originalRounds[3] = new Round(numsToTeams([23, 3, 9, 21, 20, 24, 27, 0, 22, 10, 14, 17, 1, 18, 29, 7, 2, 12, 16, 28, 5, 8, 15, 6, 25, 26, 4, 19, 13, 11]), 
[[0.5, 0.5, 0.5, 1], [0.5, 0.5, 0, 1], [1, 0, 0, 0.5], [0.5, 1, 0, 0.5], [0, 1, 0.5, 0.5], [1, 0, 0.5, 1], [0.5, 0.5, 0.5, 1], [0.5, 0.5, 1, 0], 
[0, 1, 0.5, 1], [1, 0, 0.5, 0.5], [0.5, 1, 0.5, 0.5], [0.5, 0.5, 1, 0.5], [1, 0, 0, 1], [1, 0, 0.5, 1], [0, 0, 0, 1]]);
originalRounds[4] = new Round(numsToTeams([3, 21, 20, 23, 0, 10, 12, 9, 24, 14, 18, 16, 29, 27, 8, 22, 17, 15, 2, 4, 7, 25, 11, 1, 28, 5, 6, 26, 19, 13]), 
[[1, 0, 1, 0.5], [0.5, 0.5, 0, 1], [0.5, 0, 0, 0.5], [1, 0.5, 0.5, 1], [1, 0.5, 1, 0], [0.5, 0, 0, 0], [0.5, 0.5, 0.5, 0.5], [0, 0.5, 0, 1], 
[0.5, 1, 0.5, 0.5], [0.5, 1, 0, 0.5], [0.5, 0.5, 1, 1], [1, 0.5, 0.5, 0.5], [0.5, 1, 0, 0.5], [0.5, 0.5, 0, 0.5], [1, 0.5, 0.5, 0.5]]);
originalRounds[5] = new Round(numsToTeams([10, 3, 23, 24, 21, 0, 15, 18, 22, 29, 9, 20, 16, 12, 27, 14, 4, 17, 25, 8, 5, 11, 26, 7, 1, 2, 28, 19, 13, 6]), 
[[0.5, 1, 0, 0.5], [0.5, 0.5, 0, 0], [0, 1, 1, 0], [0.5, 1, 0, 1], [1, 0.5, 1, 0.5], [1, 0.5, 0, 0.5], [0.5, 0.5, 1, 0], [0, 1, 0.5, 0], 
[0, 0, 0, 1], [0.5, 0.5, 0, 1], [0.5, 0, 0.5, 0], [0, 1, 0.5, 0], [1, 0.5, 0.5, 0], [1, 0, 0.5, 1], [0, 0.5, 0, 1]]);
originalRounds[6] = new Round(numsToTeams([3, 18, 22, 23, 24, 21, 0, 9, 20, 16, 14, 10, 29, 5, 17, 12, 8, 15, 7, 4, 1, 27, 6, 25, 11, 28, 19, 26, 2, 13]), 
[[0.5, 0.5, 1, 0.5], [0.5, 0.5, 0.5, 1], [1, 0.5, 0, 1], [0.5, 1, 1, 0.5], [1, 1, 0.5, 0.5], [1, 0.5, 0, 1], [1, 0, 1, 0], [0.5, 0, 0.5, 0], 
[0, 0.5, 0.5, 0], [0.5, 1, 0.5, 0.5], [0.5, 0.5, 0, 1], [1, 0.5, 1, 0], [0.5, 1, 1, 0.5], [0.5, 1, 0.5, 0.5], [1, 0, 0.5, 0.5]]);
originalRounds[7] = new Round(numsToTeams([0, 3, 21, 23, 18, 10, 20, 22, 9, 17, 16, 24, 14, 29, 27, 15, 4, 8, 12, 6, 5, 7, 26, 11, 28, 2, 13, 1, 25, 19]), 
[[0.5, 0.5, 0, 0.5], [0.5, 1, 0.5, 1], [0.5, 0.5, 1, 0.5], [0.5, 1, 0, 1], [0, 0, 1, 0.5], [0.5, 1, 0.5, 0.5], [1, 0.5, 1, 1], [0.5, 0.5, 1, 1], 
[1, 0, 0, 1], [0.5, 0.5, 0.5, 1], [0.5, 0.5, 1, 0], [1, 0.5, 0.5, 0.5], [0, 0, 0, 1], [0.5, 1, 0, 1], [0.5, 0.5, 0.5, 0.5]]);
originalRounds[8] = new Round(numsToTeams([3, 24, 23, 18, 22, 9, 10, 21, 29, 0, 16, 14, 8, 20, 6, 27, 17, 26, 15, 4, 1, 5, 7, 2, 12, 28, 11, 19, 13, 25]), 
[[0.5, 0.5, 1, 0.5], [1, 1, 1, 0.5], [0.5, 0.5, 0.5, 0.5], [1, 1, 0.5, 0.5], [0, 0.5, 0.5, 0.5], [0, 0.5, 0.5, 0.5], [0, 1, 0.5, 1], [0.5, 0.5, 1, 0.5], 
[0.5, 0, 0.5, 0.5], [0, 1, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5], [0.5, 1, 0.5, 1], [0.5, 1, 1, 0], [0.5, 1, 0.5, 0.5], [0, 0.5, 0.5, 1]]);

let rounds = originalRounds;

//finds the average rating of a team
function averageRating(team) {
    let avg = (team.players[0].rating + team.players[1].rating + team.players[2].rating + team.players[3].rating) / 4;
    return avg;
}

//finds the amount of points from 0 to 4 a team won in a single pairing
//pairingIndex % 2 is needed to check if white or black pieces
//teams with an even pairing number are assigned white
//players position 1 & 3 of white team are assigned white, 2 & 4 assigned black, opposite for opponent team
//since score is based on white's results, if a team's player is playing with the black pieces, 1 - x is necessary
function teamPointsRound(team, round) {
    let pairingIndex = round.pairings.indexOf(team, 0);
    let teamPoints = 0;

    if(pairingIndex % 2 === 0) {
        teamPoints += (round.scores[pairingIndex / 2][0] + round.scores[pairingIndex / 2][2] + 
        (1 - round.scores[pairingIndex / 2][1]) + (1 - round.scores[pairingIndex / 2][3]));
    } else {
        teamPoints += (round.scores[(pairingIndex - 1) / 2][1] + round.scores[(pairingIndex - 1) / 2][3] + 
        (1 - round.scores[(pairingIndex - 1) / 2][0]) + (1 - round.scores[(pairingIndex - 1) / 2][2]));
    }

    return teamPoints;
}

//returns a three part array, 1: two teams, 2: the points each team have won up to that round (but not including), 3: the array of 4 scores
//all the info needed to create an individual board (team vs team) inside a round's pairings, is now ready
function resultRoundIndividual(round, board) {
    const returnArr = Array(3);
    let teamOne = rounds[round - 1].pairings[(board - 1) * 2];
    let teamTwo = rounds[round - 1].pairings[((board - 1) * 2) + 1];
    let teamOnePoints = 0;
    let teamTwoPoints = 0;

    returnArr[0] = [teamOne, teamTwo];
    for(let i = 0; i < round - 1; i++) {
        let teamOnePointsRound = teamPointsRound(teamOne, rounds[i]);
        if(teamOnePointsRound > 2) {
            teamOnePoints += 1;
        } 
        if(teamOnePointsRound === 2) {
            teamOnePoints += 0.5;
        } 
        
        let teamTwoPointsRound = teamPointsRound(teamTwo, rounds[i]);
        if(teamTwoPointsRound > 2) {
            teamTwoPoints += 1;
        } 
        if(teamTwoPointsRound === 2) {
            teamTwoPoints += 0.5;
        }
    }
    returnArr[1] = [teamOnePoints, teamTwoPoints];
    returnArr[2] = rounds[round - 1].scores[board - 1];

    return returnArr;
}

//generates the 9 teams a specific team faced, the colour assigned (0 white, 1 black), and the winner (0, 0.5 or 1)
function teamOpponents(team) {
    const listTeams = Array(9);
    for(let i = 0; i < rounds.length; i++) {
        let pairingIndex = rounds[i].pairings.indexOf(team, 0);
        let teamPoints = teamPointsRound(team, rounds[i]);

        let winner;
        if(teamPoints > 2) {
            winner = 1;
        } else if(teamPoints === 2) {
            winner = 0.5;
        } else {
            winner = 0;
        }

        if (pairingIndex % 2 === 0) {
            listTeams[i] = [rounds[i].pairings[pairingIndex + 1], 0, winner];
        } else {
            listTeams[i] = [rounds[i].pairings[pairingIndex - 1], 1, winner];
        }
    }

    return listTeams;
}

//does the same as the previous function but with players instead of teams
function playerOpponents(player) {
    let playerIndex = players.indexOf(player, 0);
    let playerPosition = playerIndex % 4;
    let teamBelong = teams[Math.floor(playerIndex / 4)];
    const opponentTeamsInfo = teamOpponents(teamBelong);
    const opponentPlayersInfo = Array(9);
    
    for(let i = 0; i < 9; i++) {
        let colour = 1;
        if((opponentTeamsInfo[i][1] + playerPosition) % 2 === 0) {
            colour = 0;
        }

        let pairingIndex = rounds[i].pairings.indexOf(teamBelong, 0);
        let tempPoint;
        let point;
        if(pairingIndex % 2 === 0) {
            tempPoint = rounds[i].scores[pairingIndex / 2][playerPosition];
        } else {
            tempPoint = rounds[i].scores[(pairingIndex - 1) / 2][playerPosition];
        }
        if(colour === 0) {
            point = tempPoint;
        } else {
            point = 1 - tempPoint;
        }

        opponentPlayersInfo[i] = [opponentTeamsInfo[i][0].players[playerPosition], colour, point];
    }

    return opponentPlayersInfo;
}

//performance rating is commonly used in chess
//perf rating per game is calculated by taking opponent's rating, add 400 if win, 0 if tie, -400 if lose
//over 9 games, just find average
//works as an approximation of how well a player played 
function performanceRating(player) {
    const opponentPlayersInfo = playerOpponents(player);
    let performanceRating = 0;

    for(let i = 0; i < 9; i++) {
        let scoreRound = opponentPlayersInfo[i][2];
        let perfRatingRound = opponentPlayersInfo[i][0].rating + (((scoreRound * 2) - 1) * 400);
        performanceRating += perfRatingRound;
    }

    performanceRating = Math.round(performanceRating / 9);
    return performanceRating;
}

//average of perf rating of 4 players on the team
function teamPerformanceRating(team) {
    let avg = (performanceRating(team.players[0]) + performanceRating(team.players[1]) 
    + performanceRating(team.players[2]) + performanceRating(team.players[3])) / 4;
    return avg;
}

//determines the points a player received (0 - 9), points is the most important thing
function playerPoints(player) {
    const playerOpponentsInfo = playerOpponents(player);
    let sum = 0;

    for(let i = 0; i < 9; i++) {
        sum += playerOpponentsInfo[i][2];
    }

    return sum;
}

//determines the sum of the points of the four players on the team (max 36)
function teamTotalPoints(team) {
    let sum = 0;

    for(let i = 0; i < 4; i++) {
        sum += playerPoints(team.players[i]);
    }

    return sum;
}

//same as playerPoints, this is the most important thing, takes precedence over totalPoints
function teamPoints(team) {
    const teamOpponentsInfo = teamOpponents(team);
    let sum = 0;

    for(let i = 0; i < 9; i++) {
        sum += teamOpponentsInfo[i][2];
    }

    return sum;
}

//the Buchholz tiebreaker, explained in the introduction
function tiebreakOpponentPointsTeams(team) {
    const teamOpponentsInfo = teamOpponents(team);
    let sum = 0;

    for(let i = 0; i < 9; i++) {
        sum += teamPoints(teamOpponentsInfo[i][0]);
    }

    return sum;
}

//same as before
function tiebreakOpponentPointsPlayers(player) {
    const playerOpponentsInfo = playerOpponents(player);
    let sum = 0;

    for(let i = 0; i < 9; i++) {
        sum += playerPoints(playerOpponentsInfo[i][0]);
    }

    return sum;
}

//the head to head tiebreaker, explained in introduction
//I calculated it in four steps:
//1 - make array of the points each of the 30 teams received
//2 - list the teams with the same number of points as the input team
//3 - find the rounds in which the input team played the equal-point teams
//4 - determine the result from those rounds, add them up
function tiebreakHeadToHeadTeams(team) {
    const teamPointsArr = Array(30);
    for(let i = 0; i < teams.length; i++) {
        teamPointsArr[i] = teamPoints(teams[i])
    }

    const listTeamsEqual = [];
    for(let i = 0; i < 30; i++) {
        if(teamPointsArr[i] === teamPoints(team) && teams[i] !== team) {
            listTeamsEqual.push(teams[i]);
        }
    }

    const importantRounds = [];
    const teamOpponentsInfo = teamOpponents(team);
    for(let i = 0; i < 9; i++) {
        if(listTeamsEqual.includes(teamOpponentsInfo[i][0])) {
            importantRounds.push(i);
        }
    } 

    let headScore = 0;
    for(let i = 0; i < importantRounds.length; i++) {
        let score = (teamOpponentsInfo[importantRounds[i]][2] * 2) - 1;
        headScore += score;
    }

    return headScore;
}

//same as previous
function tiebreakHeadToHeadPlayers(player) {
    let playerIndex = players.indexOf(player, 0);
    let playerPosition = playerIndex % 4;
    const playerPointsArr = [];
    for(let i = playerPosition; i < players.length; i += 4) {
        playerPointsArr.push(playerPoints(players[i]));
    }

    const listPlayersEqual = [];
    for(let i = 0; i < 30; i++) {
        if(playerPointsArr[i] === playerPoints(player) && players[(i * 4) + playerPosition] !== player) {
            listPlayersEqual.push(players[(i * 4) + playerPosition]);
        }
    }

    const importantRounds = [];
    const playerOpponentsInfo = playerOpponents(player);
    for(let i = 0; i < 9; i++) {
        if(listPlayersEqual.includes(playerOpponentsInfo[i][0])) {
            importantRounds.push(i);
        }
    } 

    let headScore = 0;
    for(let i = 0; i < importantRounds.length; i++) {
        let score = (playerOpponentsInfo[importantRounds[i]][2] * 2) - 1;
        headScore += score;
    }

    return headScore;
}

//makes the string that goes into the full-screen data table (in the round cells)
function opponentTeamToString(teamInput, roundNum) {
    const opponentTeamsInfoArr = teamOpponents(teamInput);

    let sign = "+";
    if(opponentTeamsInfoArr[roundNum][2] === 0.5) {
        sign = "=";
    }
    if(opponentTeamsInfoArr[roundNum][2] === 0) {
        sign = "-";
    }

    let colour = "W";
    if(opponentTeamsInfoArr[roundNum][1] === 1) {
        colour = "B";
    }

    let opponent = opponentTeamsInfoArr[roundNum][0].country;
    let opponentStr = opponent.substring(0, 3);

    return sign + colour + opponentStr;
}

//same as previous
function opponentPlayerToString(playerInput, roundNum) {
    const opponentPlayersInfoArr = playerOpponents(playerInput);

    let sign = "+";
    if(opponentPlayersInfoArr[roundNum][2] === 0.5) {
        sign = "=";
    }
    if(opponentPlayersInfoArr[roundNum][2] === 0) {
        sign = "-";
    }

    let colour = "W";
    if(opponentPlayersInfoArr[roundNum][1] === 1) {
        colour = "B";
    }

    let opponent = opponentPlayersInfoArr[roundNum][0].name;
    let opponentStr = opponent.substring(0, 3);

    return sign + colour + opponentStr;
}



//now - moving on from the data manipulation part of the program

//creating a list of players with all the info I could ever need in place
const playersReadyForDisplay = Array(120);
for(let i = 0; i < 120; i++) {
    playersReadyForDisplay[i] = {
        name: players[i].name,
        teamBelong: teams[Math.floor(i / 4)],
        country: teams[Math.floor(i / 4)].country,
        position: (i % 4) + 1,
        rating: players[i].rating,
        points: playerPoints(players[i]),
        headToHead: tiebreakHeadToHeadPlayers(players[i]),
        opponentPoints: tiebreakOpponentPointsPlayers(players[i]),
        perfRating: performanceRating(players[i]),
        games: playerOpponents(players[i]),
        roundOne: opponentPlayerToString(players[i], 0),
        roundTwo: opponentPlayerToString(players[i], 1),
        roundThree: opponentPlayerToString(players[i], 2),
        roundFour: opponentPlayerToString(players[i], 3),
        roundFive: opponentPlayerToString(players[i], 4),
        roundSix: opponentPlayerToString(players[i], 5),
        roundSeven: opponentPlayerToString(players[i], 6),
        roundEight: opponentPlayerToString(players[i], 7),
        roundNine: opponentPlayerToString(players[i], 8)
    };
}

//creates four arrays for each player position
const playersPositionOne = Array(30);
const playersPositionTwo = Array(30);
const playersPositionThree = Array(30);
const playersPositionFour = Array(30);
for(let i = 0; i < 30; i++) {
    playersPositionOne[i] = playersReadyForDisplay[i * 4];
    playersPositionTwo[i] = playersReadyForDisplay[(i * 4) + 1];
    playersPositionThree[i] = playersReadyForDisplay[(i * 4) + 2];
    playersPositionFour[i] = playersReadyForDisplay[(i * 4) + 3];
}

//teams
const teamsReadyForDisplay = Array(30);
for(let i = 0; i < 30; i++) {
    teamsReadyForDisplay[i] = {
        country: teams[i].country,
        players: teams[i].players,
        avgRating: averageRating(teams[i]),
        points: teamPoints(teams[i]),
        headToHead: tiebreakHeadToHeadTeams(teams[i]),
        totalPoints: teamTotalPoints(teams[i]),
        opponentPoints: tiebreakOpponentPointsTeams(teams[i]),
        avgPerfRating: teamPerformanceRating(teams[i]),
        games: teamOpponents(teams[i]),
        roundOne: opponentTeamToString(teams[i], 0),
        roundTwo: opponentTeamToString(teams[i], 1),
        roundThree: opponentTeamToString(teams[i], 2),
        roundFour: opponentTeamToString(teams[i], 3),
        roundFive: opponentTeamToString(teams[i], 4),
        roundSix: opponentTeamToString(teams[i], 5),
        roundSeven: opponentTeamToString(teams[i], 6),
        roundEight: opponentTeamToString(teams[i], 7),
        roundNine: opponentTeamToString(teams[i], 8)
    };
}

//similar function used in dynamic tables lesson
//I upgraded it by creating the possibility of sorting using multipled properties at once - with certain properties taking precedence (tiebreakers)
function sortByProperty(properties, direction) {
    let sortOrder = 1;
    if(direction === "descend") {
        sortOrder = -1;
    }

    return function(a, b) {
        let sorted = (a[properties[0]] < b[properties[0]]) ? -1 : (a[properties[0]] > b[properties[0]]) ? 1 : 
        (properties.length >= 2 && a[properties[1]] < b[properties[1]]) ? -1 : (properties.length >= 2 && a[properties[1]] > b[properties[1]]) ? 1 : 
        (properties.length >= 3 && a[properties[2]] < b[properties[2]]) ? -1 : (properties.length >= 3 && a[properties[2]] > b[properties[2]]) ? 1 : 
        (properties.length >= 4 && a[properties[3]] < b[properties[3]]) ? -1 : (properties.length >= 4 && a[properties[3]] > b[properties[3]]) ? 1 : 
        (properties.length >= 5 && a[properties[4]] < b[properties[4]]) ? -1 : (properties.length >= 5 && a[properties[4]] > b[properties[4]]) ? 1 : 0;
        return sorted * sortOrder;
    }
}

//find list of both team and players that include the input string
//separate teams and players for future ease
function findByInput(input) {
    lowerInput = input.toLowerCase();
    const outputPlayers = [];
    const outputTeams = [];

    for(let i = 0; i < playersReadyForDisplay.length; i++) {
        playersReadyName = playersReadyForDisplay[i].name.toLowerCase();
        if(playersReadyName.includes(lowerInput)) {
            outputPlayers.push(playersReadyForDisplay[i]);
        }
    }

    for(let i = 0; i < teamsReadyForDisplay.length; i++) {
        teamsReadyCountry = teamsReadyForDisplay[i].country.toLowerCase();
        if(teamsReadyCountry.includes(lowerInput)) {
            outputTeams.push(teamsReadyForDisplay[i]);
        }
    }

    const output = Array(2);
    output[0] = outputPlayers; 
    output[1] = outputTeams;
    return output;
}

//find list of both teams and players from range of ratings, allows for higher number to be placed first 
function findByRange(one, two) {
    const outputPlayers = [];
    const outputTeams = [];

    if(one > two) {
        let tempOne = one;
        one = two;
        two = tempOne;
    }

    for(let i = 0; i < playersReadyForDisplay.length; i++) {
        if(playersReadyForDisplay[i].rating >= one && playersReadyForDisplay[i].rating <= two) {
            outputPlayers.push(playersReadyForDisplay[i]);
        }
    }

    for(let i = 0; i < teamsReadyForDisplay.length; i++) {
        if(teamsReadyForDisplay[i].avgRating >= one && teamsReadyForDisplay[i].avgRating <= two) {
            outputTeams.push(teamsReadyForDisplay[i]);
        }
    }

    const output = Array(2);
    output[0] = outputPlayers; 
    output[1] = outputTeams;
    return output;
}




//Next phase of the program, DOM

//goes to top of page when refresh
window.onbeforeunload = () => {  
    window.scrollTo(0, 0); 
};

//this variable used throughout for responsiveness
let windowResize = false;

const title = document.querySelector(".title");
const round = document.querySelector(".round");
const main = document.querySelector(".main");
const search = document.querySelector(".search");
const individual = document.querySelector(".individual");

//part one, the title/introduction area
const titleTitle = document.createElement("DIV");
const titleTitleTwo = document.createElement("DIV");
const titleIntro = document.createElement("DIV");
const titleTiebreak = document.createElement("DIV");
const titleInstruct = document.createElement("DIV");
title.appendChild(titleTitle);
title.appendChild(titleTitleTwo);
title.appendChild(titleIntro);
title.appendChild(titleTiebreak);
title.appendChild(titleInstruct);
const titleTitleHead = document.createElement("h1");
titleTitle.appendChild(titleTitleHead);
titleTitleHead.textContent = "Chess Olympiad 2022";
const titleTitleTwoHead = document.createElement("h3");
titleTitleTwo.appendChild(titleTitleTwoHead);
titleTitleTwoHead.textContent = "Introduction";
titleIntro.setAttribute("class", "paragraphs");
titleTiebreak.setAttribute("class", "paragraphs");
titleInstruct.setAttribute("class", "paragraphs");

//buttons to expand & contract text
const titleIntroBtn = document.createElement("BUTTON");
const titleTiebreakBtn = document.createElement("BUTTON");
const titleInstructBtn = document.createElement("BUTTON");
titleIntro.appendChild(titleIntroBtn);
titleTiebreak.appendChild(titleTiebreakBtn);
titleInstruct.appendChild(titleInstructBtn);
titleIntroBtn.textContent = "Intro >";
titleTiebreakBtn.textContent = "Tiebreaks >";
titleInstructBtn.textContent = "Instructions >";
let introBtnIsClick = "false";
let tiebreakBtnIsClick = "false";
let instructBtnIsClick = "false";
const titleIntroText = document.createElement("p");
const titleTiebreakText = document.createElement("p");
const titleInstructText = document.createElement("p");
titleIntroText.textContent = "Welcome to the World Chess Olympiad 2022! In this event, 30 teams of four players each will face off to determine which country produces the best chess players. There will be nine rounds where each team is paired with another team, creating 15 pairings per round, or 15 * 4 players = 60 boards. In each team vs team pairing, one team will be assigned 'white' and the other 'black'. The team assigned white will have their 1st and 3rd highest rated players play with the white pieces against the opponent team's 1st and 3rd highest rated players. The 2nd and 4th highest rated players will play with the black pieces against the opponent team's 2nd and 4th highest rated players. Each game will result in a 1 - 0 (white wins), 0.5 - 0.5 (draw), or 0 - 1 (black wins) score. Players gain 1 point for their team when they win, 0.5 points when they draw, and 0 points when they lose. The team that scores 2.5 points or more out of the four games will be victorious, and will earn 1 'team point'. In a 2 points - 2 points result, both teams will earn half a 'team point'. No team points are awarded if the team earns 1.5 points or less. To make the pairings of each round, the Swiss system is used, which pairs together teams with a similar number of points. Out of nine rounds, the maximum score a team can have is 9 team points. The team with the most team points is the winner of the event. If 2 or more teams are tied, tiebreakers will be used, as will be explained.";
titleTiebreakText.textContent = "In the event two or more teams have the same number of team points (simply called 'points' in the table) after the nine rounds, a series of tiebreaking systems are used. The tiebreaker that takes first precedence is the Head to Head tiebreaker (called 'head' in the table). This tiebreaker checks the pairings in which the tied teams played each other. If there are two tied teams and the first team beat the second team, the first team wins in this tiebreaker. If there are more than two teams tied, a team earns 1 'head point' for each victory over another tied team, and -1 'head points' for each loss to another tied team. The tied teams are ranked based on the number of head points they have. The tiebreaker that takes second precedence is the total individual points a team has, or the sum of each of the player's points on that team. The tiebreaker that takes third precedence is called 'Buchholz'. Buchholz is calculated by taking the sum of all nine opponent teams' points. Finally, if team points, head to head, total points, and Buchholz are all tied between 2 teams (extremely low probability of this happening), then average performance rating is used. The performance rating of each player on the team is calculated by taking into considerating the players' opponents' ratings, and whether the player won, drawed, or lost. A team's performance rating is the mean of the four players' performance ratings. The players themselves are also sorted in the tables. Each player position (position one for the highest rated of each team, two, three and four for the lowest rated of each team) has its own table. The player tiebreaking system works exactly the same as the team tiebreaking system, minus the total combined points tiebreaker, as that is not applicable to individual players.";
titleInstructText.textContent = "Beyond this intro, there are four parts of the application to explore. The first is the rounds. The rounds have already been created from the Swiss system. You can navigate between between the nine rounds and the fifteen boards of each round. The tournament has already concluded and the scores are already in place, however, you can change these scores by typing '1 - 0', '0.5 - 0.5', or '0 - 1' into the input area and clicking 'update scores'. All the statistics will be updated, however, the Swiss pairings will remain the same regardless of any change in scores. The second part is the main table area, where you can navigate between the team standings, and the standings for each player position. Each player position has 30 players. You can sort each table by pressing the arrow buttons in the header. Ranking by points, and then the four ordered tiebreakers, in descending order, is the automatic setting. The part of the table displaying the nine rounds shows the result as '+', '-', or '=', indicating a win, loss, or tie, plus the colour as 'W' or 'B', plus the first three letters of the opponent. Most of the table does not appear in mobile version, however, the informating can still be accessed in the fourth part of the application. The third part is the search area. The first search option allows you to type a string, and then have a list of all players and teams created that have the string in their name. The second search option allows you to type two rational numbers, and then have a list of all players and teams created that have a rating in between those numbers. Finally, the fourth part shows the detailed statistics of an individual team or player. The yellow rightward arrow-buttons beside each player name, located in all parts of the application, including in the list created by the search functions, will bring you to the bottom of the page and display the statistics of that player. The orange rightward arrow will do the same, but will display an individual team instead.";
titleIntroBtn.onclick = function () {
    if(introBtnIsClick === "false") {
        titleIntro.appendChild(titleIntroText);
        introBtnIsClick = "true";
    } else {
        titleIntro.removeChild(titleIntroText);
        introBtnIsClick = "false";
    }
}
titleTiebreakBtn.onclick = function () {
    if(tiebreakBtnIsClick === "false") {
        titleTiebreak.appendChild(titleTiebreakText);
        tiebreakBtnIsClick = "true";
    } else {
        titleTiebreak.removeChild(titleTiebreakText);
        tiebreakBtnIsClick = "false";
    }
}
titleInstructBtn.onclick = function () {
    if(instructBtnIsClick === "false") {
        titleInstruct.appendChild(titleInstructText);
        instructBtnIsClick = "true";
    } else {
        titleInstruct.removeChild(titleInstructText);
        instructBtnIsClick = "false";
    }
}

//part 5 - the individual stats portion - I placed part 5 here because I used displayIndividual() throughout
const individualDivHeader = document.createElement("DIV")
individual.appendChild(individualDivHeader);
const individualDivHeaderDisplay = document.createElement("h3");
individualDivHeader.appendChild(individualDivHeaderDisplay);
individualDivHeaderDisplay.textContent = "Individual Stats";
const individualDivHeaderBelow = document.createElement("DIV");
individual.appendChild(individualDivHeaderBelow);
individualDivHeaderBelow.textContent = "Click on a player or team arrow.";
const individualDiv = document.createElement("DIV");
individual.appendChild(individualDiv);

//displays the list of player info, followed by the opponents table
//used for both teams and players, that's what isPlayer checks (technically don't need it, just makes things clearer)
//player input could be a team as well
//recursive function, there are buttons inside that would call the function again 
//since part 5 is at the bottom of the page, it brings the user to the bottom when any of the individual player or team buttons clicked (scrollTo())
function displayIndividual(isPlayer, player) {
    while(individualDiv.firstChild) {
        individualDiv.removeChild(individualDiv.firstChild);
    }

    if(isPlayer === true) {
        if(player.position === undefined) {
            for(let i = 0; i < playersReadyForDisplay.length; i++) {
                if(playersReadyForDisplay[i].name === player.name) {
                    player = playersReadyForDisplay[i];
                    break;
                }
            }
        }

        const individualPlayerName = document.createElement("DIV");
        individualPlayerName.textContent = player.name;
        individualDiv.appendChild(individualPlayerName);
        individualPlayerName.setAttribute("class", "miniheader");

        const individualPlayerCountry = document.createElement("DIV");
        individualPlayerCountry.textContent = "Country: " + player.country;
        individualDiv.appendChild(individualPlayerCountry);
        const newButtonIpc = document.createElement("BUTTON");
        newButtonIpc.textContent = "->";
        individualPlayerCountry.appendChild(newButtonIpc);
        newButtonIpc.setAttribute("class", "orange");
        newButtonIpc.onclick = function () {
            displayIndividual(false, player.teamBelong);
        }

        const individualPlayerPosition = document.createElement("DIV");
        individualPlayerPosition.textContent = "Position: " + (player.position);
        individualDiv.appendChild(individualPlayerPosition);

        const individualPlayerRating = document.createElement("DIV");
        individualPlayerRating.textContent = "Rating: " + player.rating;
        individualDiv.appendChild(individualPlayerRating);

        const individualPlayerPoints = document.createElement("DIV");
        individualPlayerPoints.textContent = "Points: " + player.points;
        individualDiv.appendChild(individualPlayerPoints);

        const individualPlayerHeadToHead = document.createElement("DIV");
        individualPlayerHeadToHead.textContent = "Head to Head: " + player.headToHead;
        individualDiv.appendChild(individualPlayerHeadToHead);

        const individualPlayerOpponentPoints = document.createElement("DIV");
        individualPlayerOpponentPoints.textContent = "Opponent Points: " + player.opponentPoints;
        individualDiv.appendChild(individualPlayerOpponentPoints);

        const individualPlayerPerfRating = document.createElement("DIV");
        individualPlayerPerfRating.textContent = "Performance Rating: " + player.perfRating;
        individualDiv.appendChild(individualPlayerPerfRating);

        const individualPlayerTable = document.createElement("TABLE");
        individualDiv.appendChild(individualPlayerTable);
        individualPlayerTable.setAttribute("class", "margintop");
        const individualPlayerHead = document.createElement("THEAD");
        individualPlayerTable.appendChild(individualPlayerHead);
        const individualPlayerBody = document.createElement("TBODY");
        individualPlayerTable.appendChild(individualPlayerBody);

        const cellTitleHead = document.createElement("th");
        individualPlayerHead.appendChild(cellTitleHead);
        cellTitleHead.textContent = "Rnd";

        const cellColourHead = document.createElement("th");
        individualPlayerHead.appendChild(cellColourHead);
        cellColourHead.textContent = "Colour";

        const cellResultHead = document.createElement("th");
        individualPlayerHead.appendChild(cellResultHead);
        cellResultHead.textContent = "Result";

        const cellPlayerHead = document.createElement("th");
        individualPlayerHead.appendChild(cellPlayerHead);
        cellPlayerHead.textContent = "Player";

        const cellRatingHead = document.createElement("th");
        individualPlayerHead.appendChild(cellRatingHead);
        cellRatingHead.textContent = "Rating";

        for(let i = 0; i < 9; i++) {
            const row = document.createElement("tr");
            individualPlayerBody.appendChild(row);

            const playerOppArr = player.games;
            let oppColour = "White";
            if(playerOppArr[i][1] === 1) {
                oppColour = "Black";
            }

            const cellTitle = document.createElement("td");
            row.appendChild(cellTitle);
            cellTitle.textContent = i + 1;

            const cellColour = document.createElement("td");
            row.appendChild(cellColour);
            cellColour.textContent = oppColour;

            const cellResult = document.createElement("td");
            row.appendChild(cellResult);
            cellResult.textContent = playerOppArr[i][2];

            const cellPlayer = document.createElement("td");
            row.appendChild(cellPlayer);
            cellPlayer.textContent = playerOppArr[i][0].name;
            const newButtonCp = document.createElement("BUTTON");
            newButtonCp.textContent = "->";
            cellPlayer.appendChild(newButtonCp);
            newButtonCp.setAttribute("class", "yellow");
            newButtonCp.onclick = function () {
                displayIndividual(true, playerOppArr[i][0]);
            }

            const cellRating = document.createElement("td");
            row.appendChild(cellRating);
            cellRating.textContent = playerOppArr[i][0].rating;
        }
    } else {
        let teamInstead = player;

        if(teamInstead.avgRating === undefined) {
            for(let i = 0; i < teamsReadyForDisplay.length; i++) {
                if(teamsReadyForDisplay[i].country === teamInstead.country) {
                    teamInstead = teamsReadyForDisplay[i];
                    break;
                }
            }
        }

        const playersForTeam = Array(4);
        for(let i = 0; i < 4; i++) {
            for(let k = 0; k < playersReadyForDisplay.length; k++) {
                if(playersReadyForDisplay[k].name === teamInstead.players[i].name) {
                    playersForTeam[i] = playersReadyForDisplay[k];
                    break;
                }
            }
        }

        const individualTeamCountry = document.createElement("DIV");
        individualTeamCountry.textContent = teamInstead.country;
        individualDiv.appendChild(individualTeamCountry);
        individualTeamCountry.setAttribute("class", "miniheader");

        const individualPlayerPositionOne = document.createElement("DIV");
        individualPlayerPositionOne.textContent = "Player Position One: " + playersForTeam[0].name + " (" + playersForTeam[0].rating + ")";
        individualDiv.appendChild(individualPlayerPositionOne);
        const newButtonIppo = document.createElement("BUTTON");
        newButtonIppo.textContent = "->";
        individualPlayerPositionOne.appendChild(newButtonIppo);
        newButtonIppo.setAttribute("class", "yellow");
        newButtonIppo.onclick = function () {
            displayIndividual(true, playersForTeam[0]);
        }

        const individualPlayerPositionTwo = document.createElement("DIV");
        individualPlayerPositionTwo.textContent = "Player Position Two: " + playersForTeam[1].name + " (" + playersForTeam[1].rating + ")";
        individualDiv.appendChild(individualPlayerPositionTwo);
        const newButtonIppt = document.createElement("BUTTON");
        newButtonIppt.textContent = "->";
        individualPlayerPositionTwo.appendChild(newButtonIppt);
        newButtonIppt.setAttribute("class", "yellow");
        newButtonIppt.onclick = function () {
            displayIndividual(true, playersForTeam[1]);
        }

        const individualPlayerPositionThree = document.createElement("DIV");
        individualPlayerPositionThree.textContent = "Player Position Three: " + playersForTeam[2].name + " (" + playersForTeam[2].rating + ")";
        individualDiv.appendChild(individualPlayerPositionThree);
        const newButtonIppth = document.createElement("BUTTON");
        newButtonIppth.textContent = "->";
        individualPlayerPositionThree.appendChild(newButtonIppth);
        newButtonIppth.setAttribute("class", "yellow");
        newButtonIppth.onclick = function () {
            displayIndividual(true, playersForTeam[2]);
        }

        const individualPlayerPositionFour = document.createElement("DIV");
        individualPlayerPositionFour.textContent = "Player Position Four: " + playersForTeam[3].name + " (" + playersForTeam[3].rating + ")";
        individualDiv.appendChild(individualPlayerPositionFour);
        const newButtonIppf = document.createElement("BUTTON");
        newButtonIppf.textContent = "->";
        individualPlayerPositionFour.appendChild(newButtonIppf);
        newButtonIppf.setAttribute("class", "yellow");
        newButtonIppf.onclick = function () {
            displayIndividual(true, playersForTeam[3]);
        }

        const individualTeamAvgRating = document.createElement("DIV");
        individualTeamAvgRating.textContent = "Average Rating: " + teamInstead.avgRating;
        individualDiv.appendChild(individualTeamAvgRating);

        const individualTeamPoints = document.createElement("DIV");
        individualTeamPoints.textContent = "Points: " + teamInstead.points;
        individualDiv.appendChild(individualTeamPoints);

        const individualTeamHeadToHead = document.createElement("DIV");
        individualTeamHeadToHead.textContent = "Head to Head: " + teamInstead.headToHead;
        individualDiv.appendChild(individualTeamHeadToHead);

        const individualTeamTotalPoints = document.createElement("DIV");
        individualTeamTotalPoints.textContent = "Total Points: " + teamInstead.totalPoints;
        individualDiv.appendChild(individualTeamTotalPoints);

        const individualTeamOpponentPoints = document.createElement("DIV");
        individualTeamOpponentPoints.textContent = "Opponent Points: " + teamInstead.opponentPoints;
        individualDiv.appendChild(individualTeamOpponentPoints);

        const individualTeamAvgPerfRating = document.createElement("DIV");
        individualTeamAvgPerfRating.textContent = "Average Performance Rating: " + teamInstead.avgPerfRating;
        individualDiv.appendChild(individualTeamAvgPerfRating);

        const individualPlayerTable = document.createElement("TABLE");
        individualDiv.appendChild(individualPlayerTable);
        individualPlayerTable.setAttribute("class", "margintop");
        const individualPlayerHead = document.createElement("THEAD");
        individualPlayerTable.appendChild(individualPlayerHead);
        const individualPlayerBody = document.createElement("TBODY");
        individualPlayerTable.appendChild(individualPlayerBody);

        const cellTitleHead = document.createElement("th");
        individualPlayerHead.appendChild(cellTitleHead);
        cellTitleHead.textContent = "Rnd";

        const cellColourHead = document.createElement("th");
        individualPlayerHead.appendChild(cellColourHead);
        cellColourHead.textContent = "Colour";

        const cellResultHead = document.createElement("th");
        individualPlayerHead.appendChild(cellResultHead);
        cellResultHead.textContent = "Result";

        const cellTeamHead = document.createElement("th");
        individualPlayerHead.appendChild(cellTeamHead);
        cellTeamHead.textContent = "Team";

        const cellAvgRatingHead = document.createElement("th");
        individualPlayerHead.appendChild(cellAvgRatingHead);
        cellAvgRatingHead.textContent = "Avg. Rating";
        for(let i = 0; i < 9; i++) {
            const row = document.createElement("tr");
            individualPlayerBody.appendChild(row);

            const teamOppArr = teamInstead.games;
            let oppColour = "White";
            if(teamOppArr[i][1] === 1) {
                oppColour = "Black";
            }

            let newAvgRating = (teamOppArr[i][0].players[0].rating + teamOppArr[i][0].players[1].rating + 
            teamOppArr[i][0].players[2].rating + teamOppArr[i][0].players[3].rating) / 4;

            const cellTitle = document.createElement("td");
            row.appendChild(cellTitle);
            cellTitle.textContent = i + 1;

            const cellColour = document.createElement("td");
            row.appendChild(cellColour);
            cellColour.textContent = oppColour;

            const cellResult = document.createElement("td");
            row.appendChild(cellResult);
            cellResult.textContent = teamOppArr[i][2];

            const cellTeam = document.createElement("td");
            row.appendChild(cellTeam);
            cellTeam.textContent = teamOppArr[i][0].country;
            const newButtonCt = document.createElement("BUTTON");
            newButtonCt.textContent = "->";
            cellTeam.appendChild(newButtonCt);
            newButtonCt.setAttribute("class", "orange");
            newButtonCt.onclick = function () {
                displayIndividual(false, teamOppArr[i][0]);
            }

            const cellAvgRating = document.createElement("td");
            row.appendChild(cellAvgRating);
            cellAvgRating.textContent = newAvgRating;
        }
    }
    
    window.scrollTo(0, document.body.scrollHeight);
}

//part 3 of the application - the player & team tables 
let teamsReady = Array(30);
let playersReadyOne = Array(30);
let playersReadyTwo = Array(30);
let playersReadyThree = Array(30);
let playersReadyFour = Array(30);
for(let i = 0; i < 30; i++) {
    teamsReady[i] = teamsReadyForDisplay[i];
    playersReadyOne[i] = playersPositionOne[i];
    playersReadyTwo[i] = playersPositionTwo[i];
    playersReadyThree[i] = playersPositionThree[i];
    playersReadyFour[i] = playersPositionFour[i];
}

//categorySort stores the property that takes precedence, the direction, and the array of the previous sort
//this is used to ensure the next sort goes in the correct direction
const categorySort = Array(3);
categorySort[0] = null;
categorySort[1] = "descend";
categorySort[2] = teamsReady;

const mainTitleDiv = document.createElement("DIV");
main.appendChild(mainTitleDiv);
const mainTitleDivHeader = document.createElement("h3");
mainTitleDiv.appendChild(mainTitleDivHeader);
mainTitleDivHeader.textContent = "Team and Player Standings"; 
const mainDivBtn = document.createElement("DIV");
main.appendChild(mainDivBtn);
const mainTeamBtn = document.createElement("BUTTON");
mainDivBtn.appendChild(mainTeamBtn);
mainTeamBtn.textContent = "Teams";
const mainPlayerOneBtn = document.createElement("BUTTON");
mainDivBtn.appendChild(mainPlayerOneBtn);
mainPlayerOneBtn.textContent = "Players 1";
const mainPlayerTwoBtn = document.createElement("BUTTON");
mainDivBtn.appendChild(mainPlayerTwoBtn);
mainPlayerTwoBtn.textContent = "Players 2";
const mainPlayerThreeBtn = document.createElement("BUTTON");
mainDivBtn.appendChild(mainPlayerThreeBtn);
mainPlayerThreeBtn.textContent = "Players 3";
const mainPlayerFourBtn = document.createElement("BUTTON");
mainDivBtn.appendChild(mainPlayerFourBtn);
mainPlayerFourBtn.textContent = "Players 4";

const mainTable = document.createElement("TABLE");
main.appendChild(mainTable);
const mainHead = document.createElement("THEAD");
mainTable.appendChild(mainHead);
const mainHeadRow = document.createElement("tr");
mainHead.appendChild(mainHeadRow);
const mainBody = document.createElement("TBODY");
mainTable.appendChild(mainBody);

//note the windowResize - I indirectly call this function in onresize at bottom of the code
//to prevent sorting while resizing, I use windowResize (naturally set to false)
function sortArr(arr, properties) {
    if(categorySort[0] === properties[0] && categorySort[1] === "descend" && categorySort[2] === arr) {
        if(windowResize === false) {
            categorySort[1] = "ascend";
        }
    } else if((properties[0] === "country" || properties[0] === "name") && categorySort[0] !== properties[0]) {
        if(windowResize === false) {
            categorySort[1] = "ascend";
        }
    } else {
        if(windowResize === false) {
            categorySort[1] = "descend";
        }
    }

    arr.sort(sortByProperty(properties, categorySort[1]));

    if(windowResize === false) {
        categorySort[0] = properties[0];
    }
} 

//the main function to create the team & player table 
//styles the five buttons at the top so user knows which array they're viewing
//calls the sortArr
//uses similar code as in the dynamic tables lesson, however, numerous complications, such as:
//responsiveness - making the table have less columns depending on window.innerWidth
//buttons inside the cells
function createBody(arr, properties) {
    if(arr === teamsReady) {
        mainTeamBtn.setAttribute("class", "onbutton");
        mainPlayerOneBtn.removeAttribute("class");
        mainPlayerTwoBtn.removeAttribute("class");
        mainPlayerThreeBtn.removeAttribute("class");
        mainPlayerFourBtn.removeAttribute("class");
    } else if(arr === playersReadyOne) {
        mainTeamBtn.removeAttribute("class");
        mainPlayerOneBtn.setAttribute("class", "onbutton");
        mainPlayerTwoBtn.removeAttribute("class");
        mainPlayerThreeBtn.removeAttribute("class");
        mainPlayerFourBtn.removeAttribute("class");
    } else if(arr === playersReadyTwo) {
        mainTeamBtn.removeAttribute("class");
        mainPlayerOneBtn.removeAttribute("class");
        mainPlayerTwoBtn.setAttribute("class", "onbutton");
        mainPlayerThreeBtn.removeAttribute("class");
        mainPlayerFourBtn.removeAttribute("class");
    } else if(arr === playersReadyThree) {
        mainTeamBtn.removeAttribute("class");
        mainPlayerOneBtn.removeAttribute("class");
        mainPlayerTwoBtn.removeAttribute("class");
        mainPlayerThreeBtn.setAttribute("class", "onbutton");
        mainPlayerFourBtn.removeAttribute("class");
    } else {
        mainTeamBtn.removeAttribute("class");
        mainPlayerOneBtn.removeAttribute("class");
        mainPlayerTwoBtn.removeAttribute("class");
        mainPlayerThreeBtn.removeAttribute("class");
        mainPlayerFourBtn.setAttribute("class", "onbutton");
    }

    while(mainBody.firstChild) {
        mainBody.removeChild(mainBody.firstChild);
    }

    sortArr(arr, properties);

    for(let i = 0; i < arr.length; i++) {
        const row = document.createElement("tr");
        mainBody.appendChild(row);

        const iCell = document.createElement("td");
        iCell.textContent = i + 1;
        row.appendChild(iCell);

        for(let key in arr[i]) {
            let isWrongCountry = false;
            if(key === "country" && arr !== teamsReady && window.innerWidth <= 740) {
                isWrongCountry = true;
            }

            if(key !== "games" && key !== "players" && key !== "teamBelong" && key !== "position" && isWrongCountry === false) {                

                const cell = document.createElement("td");
                if(key !== "roundOne" && key !== "roundTwo" && key !== "roundThree" && key !== "roundFour" && 
                key !== "roundFive" && key !== "roundSix" && key !== "roundSeven" && key !== "roundEight" && key !== "roundNine" && 
                key !== "avgPerfRating" && key !== "opponentPoints" && key !== "totalPoints" && key !== "perfRating" && key !== "headToHead" 
                && (arr === teamsReady || key !== "country")) {
                    row.appendChild(cell);
                    cell.textContent = arr[i][key];
                }

                if(window.innerWidth > 740) {
                    if(key === "headToHead" || key === "opponentPoints" || key === "perfRating" || 
                    key === "avgPerfRating" || key === "totalPoints" || (arr !== teamsReady && key === "country")) {
                        row.appendChild(cell);
                        cell.textContent = arr[i][key];
                    }
                }
                
                if(key === "country" && (arr === teamsReady || window.innerWidth > 740)) {
                    const cellCountryBtn = document.createElement("BUTTON");
                    cellCountryBtn.textContent = "->";
                    cell.appendChild(cellCountryBtn);
                    cellCountryBtn.setAttribute("class", "orange");

                    cellCountryBtn.onclick = function () {
                        if(arr === teamsReady) {
                            displayIndividual(false, arr[i]);
                        } else {
                            displayIndividual(false, arr[i].teamBelong);
                        }
                    }
                }

                if(key === "name") {
                    const cellNameBtn = document.createElement("BUTTON");
                    cell.appendChild(cellNameBtn);
                    cellNameBtn.textContent = "->";
                    cellNameBtn.setAttribute("class", "yellow");
                    cellNameBtn.onclick = function () {
                        displayIndividual(true, arr[i]);
                    }
                }

                if(window.innerWidth > 1310) {
                    if(key === "roundOne" || key === "roundTwo" || key === "roundThree" || key === "roundFour" || 
                    key === "roundFive" || key === "roundSix" || key === "roundSeven" || key === "roundEight" || key === "roundNine") {
                        row.appendChild(cell);

                        let opponentIndexRound;
                        if(key === "roundTwo") {
                            opponentIndexRound = 1;
                        } else if(key === "roundThree") {
                            opponentIndexRound = 2;
                        } else if(key === "roundFour") {
                            opponentIndexRound = 3;
                        } else if(key === "roundFive") {
                            opponentIndexRound = 4;
                        } else if(key === "roundSix") {
                            opponentIndexRound = 5;
                        } else if(key === "roundSeven") {
                            opponentIndexRound = 6;
                        } else if(key === "roundEight") {
                            opponentIndexRound = 7;
                        } else if(key === "roundNine") {
                            opponentIndexRound = 8;
                        } else {
                            opponentIndexRound = 0;
                        }

                        if(arr === teamsReady) {
                            const roundTeamsBtn = document.createElement("BUTTON");
                            cell.appendChild(roundTeamsBtn);
                            roundTeamsBtn.textContent = arr[i][key];
                            roundTeamsBtn.setAttribute("class", "orange");
                            roundTeamsBtn.onclick = function () {
                                displayIndividual(false, arr[i].games[opponentIndexRound][0]);
                            }
                        } else {
                            const roundPlayersBtn = document.createElement("BUTTON");
                            cell.appendChild(roundPlayersBtn);
                            roundPlayersBtn.textContent = arr[i][key];
                            roundPlayersBtn.setAttribute("class", "yellow");
                            roundPlayersBtn.onclick = function () {
                                displayIndividual(true, arr[i].games[opponentIndexRound][0]);
                            }
                        }
                    }
                }
            }
        }
    }
}

//calls the createBody function, and creates the table head and sorting buttons 
//I call this in window onresize, which is how sortArr is being indirectly affected, which is why I need the window resize variable
function createTeamsTable() {
    createBody(teamsReady, ["points", "headToHead", "totalPoints", "opponentPoints", "avgPerfRating"]);
    categorySort[2] = teamsReady;

    while(mainHeadRow.firstChild) {
        mainHeadRow.removeChild(mainHeadRow.firstChild);
    }

    const mainHeadTeamNumRanking = document.createElement("th");
    mainHeadTeamNumRanking.textContent = "#";
    mainHeadRow.appendChild(mainHeadTeamNumRanking);

    const mainHeadTeamCountry = document.createElement("th");
    mainHeadTeamCountry.textContent = "Country";
    mainHeadRow.appendChild(mainHeadTeamCountry);
    const mainHeadTeamCountryBtn = document.createElement("BUTTON");
    mainHeadTeamCountry.appendChild(mainHeadTeamCountryBtn);
    mainHeadTeamCountryBtn.textContent = "^";
    mainHeadTeamCountryBtn.onclick = function () {
        createBody(teamsReady, ["country"]);
    }
    const mainHeadTeamAvgRating = document.createElement("th");
    mainHeadTeamAvgRating.textContent = "Avg Rtg";
    mainHeadRow.appendChild(mainHeadTeamAvgRating);
    const mainHeadTeamAvgRatingBtn = document.createElement("BUTTON");
    mainHeadTeamAvgRating.appendChild(mainHeadTeamAvgRatingBtn);
    mainHeadTeamAvgRatingBtn.textContent = "^";
    mainHeadTeamAvgRatingBtn.onclick = function () {
        createBody(teamsReady, ["avgRating"]);
    }

    const mainHeadTeamPoints = document.createElement("th");
    mainHeadTeamPoints.textContent = "Points";
    mainHeadRow.appendChild(mainHeadTeamPoints);
    const mainHeadTeamPointsBtn = document.createElement("BUTTON");
    mainHeadTeamPoints.appendChild(mainHeadTeamPointsBtn);
    mainHeadTeamPointsBtn.textContent = "^";
    mainHeadTeamPointsBtn.onclick = function () {
        createBody(teamsReady, ["points", "headToHead", "totalPoints", "opponentPoints", "avgPerfRating"]);
    }

    if(window.innerWidth > 740) {
        const mainHeadTeamHeadToHead = document.createElement("th");
        mainHeadTeamHeadToHead.textContent = "Head";
        mainHeadRow.appendChild(mainHeadTeamHeadToHead);
        const mainHeadTeamHeadToHeadBtn = document.createElement("BUTTON");
        mainHeadTeamHeadToHead.appendChild(mainHeadTeamHeadToHeadBtn);
        mainHeadTeamHeadToHeadBtn.textContent = "^";
        mainHeadTeamHeadToHeadBtn.onclick = function () {
            createBody(teamsReady, ["headToHead", "points", "totalPoints", "opponentPoints", "avgPerfRating"]);
        }

        const mainHeadTeamTotalPoints = document.createElement("th");
        mainHeadTeamTotalPoints.textContent = "Total";
        mainHeadRow.appendChild(mainHeadTeamTotalPoints);
        const mainHeadTeamTotalPointsBtn = document.createElement("BUTTON");
        mainHeadTeamTotalPoints.appendChild(mainHeadTeamTotalPointsBtn);
        mainHeadTeamTotalPointsBtn.textContent = "^";
        mainHeadTeamTotalPointsBtn.onclick = function () {
            createBody(teamsReady, ["totalPoints", "points", "headToHead", "opponentPoints", "avgPerfRating"]);
        }

        const mainHeadTeamOpponentPoints = document.createElement("th");
        mainHeadTeamOpponentPoints.textContent = "Buchholz";
        mainHeadRow.appendChild(mainHeadTeamOpponentPoints);
        const mainHeadTeamOpponentPointsBtn = document.createElement("BUTTON");
        mainHeadTeamOpponentPoints.appendChild(mainHeadTeamOpponentPointsBtn);
        mainHeadTeamOpponentPointsBtn.textContent = "^";
        mainHeadTeamOpponentPointsBtn.onclick = function () {
            createBody(teamsReady, ["opponentPoints", "points", "headToHead", "totalPoints", "avgPerfRating"]);
        }
        
        const mainHeadTeamPerfRating = document.createElement("th");
        mainHeadTeamPerfRating.textContent = "Perf Rtg";
        mainHeadRow.appendChild(mainHeadTeamPerfRating);
        const mainHeadTeamPerfRatingBtn = document.createElement("BUTTON");
        mainHeadTeamPerfRating.appendChild(mainHeadTeamPerfRatingBtn);
        mainHeadTeamPerfRatingBtn.textContent = "^";
        mainHeadTeamPerfRatingBtn.onclick = function () {
            createBody(teamsReady, ["avgPerfRating", "points", "headToHead", "totalPoints", "opponentPoints"]);
        }
    }

    if(window.innerWidth > 1310) {
        const mainHeadTeamRoundOne = document.createElement("th");
        mainHeadTeamRoundOne.textContent = "Rnd 1";
        mainHeadRow.appendChild(mainHeadTeamRoundOne);

        const mainHeadTeamRoundTwo = document.createElement("th");
        mainHeadTeamRoundTwo.textContent = "Rnd 2";
        mainHeadRow.appendChild(mainHeadTeamRoundTwo);

        const mainHeadTeamRoundThree = document.createElement("th");
        mainHeadTeamRoundThree.textContent = "Rnd 3";
        mainHeadRow.appendChild(mainHeadTeamRoundThree);

        const mainHeadTeamRoundFour = document.createElement("th");
        mainHeadTeamRoundFour.textContent = "Rnd 4";
        mainHeadRow.appendChild(mainHeadTeamRoundFour);

        const mainHeadTeamRoundFive = document.createElement("th");
        mainHeadTeamRoundFive.textContent = "Rnd 5";
        mainHeadRow.appendChild(mainHeadTeamRoundFive);

        const mainHeadTeamRoundSix = document.createElement("th");
        mainHeadTeamRoundSix.textContent = "Rnd 6";
        mainHeadRow.appendChild(mainHeadTeamRoundSix);

        const mainHeadTeamRoundSeven = document.createElement("th");
        mainHeadTeamRoundSeven.textContent = "Rnd 7";
        mainHeadRow.appendChild(mainHeadTeamRoundSeven);

        const mainHeadTeamRoundEight = document.createElement("th");
        mainHeadTeamRoundEight.textContent = "Rnd 8";
        mainHeadRow.appendChild(mainHeadTeamRoundEight);

        const mainHeadTeamRoundNine = document.createElement("th");
        mainHeadTeamRoundNine.textContent = "Rnd 9";
        mainHeadRow.appendChild(mainHeadTeamRoundNine);
    }
}

//same as above function
function createPlayersTable(arr) {
    createBody(arr, ["points", "headToHead", "opponentPoints", "perfRating"]);
    categorySort[2] = arr;

    while(mainHeadRow.firstChild) {
        mainHeadRow.removeChild(mainHeadRow.firstChild);
    }

    const mainHeadTeamNumRanking = document.createElement("th");
    mainHeadTeamNumRanking.textContent = "#";
    mainHeadRow.appendChild(mainHeadTeamNumRanking);

    const mainHeadPlayerName = document.createElement("th");
    mainHeadPlayerName.textContent = "Name";
    mainHeadRow.appendChild(mainHeadPlayerName);
    const mainHeadPlayerNameBtn = document.createElement("BUTTON");
    mainHeadPlayerName.appendChild(mainHeadPlayerNameBtn);
    mainHeadPlayerNameBtn.textContent = "^";
    mainHeadPlayerNameBtn.onclick = function () {
        createBody(arr, ["name"]);
    }

    if(window.innerWidth > 740) {
        const mainHeadPlayerCountry = document.createElement("th");
        mainHeadPlayerCountry.textContent = "Country";
        mainHeadRow.appendChild(mainHeadPlayerCountry);
        const mainHeadPlayerCountryBtn = document.createElement("BUTTON");
        mainHeadPlayerCountry.appendChild(mainHeadPlayerCountryBtn);
        mainHeadPlayerCountryBtn.textContent = "^";
        mainHeadPlayerCountryBtn.onclick = function () {
            createBody(arr, ["country"]);
        }
    }

    const mainHeadPlayerRating = document.createElement("th");
    mainHeadPlayerRating.textContent = "Rtg";
    mainHeadRow.appendChild(mainHeadPlayerRating);
    const mainHeadPlayerRatingBtn = document.createElement("BUTTON");
    mainHeadPlayerRating.appendChild(mainHeadPlayerRatingBtn);
    mainHeadPlayerRatingBtn.textContent = "^";
    mainHeadPlayerRatingBtn.onclick = function () {
        createBody(arr, ["rating", "points", "headToHead", "opponentPoints", "perfRating"]);
    }

    const mainHeadPlayerPoints = document.createElement("th");
    mainHeadPlayerPoints.textContent = "Points";
    mainHeadRow.appendChild(mainHeadPlayerPoints);
    const mainHeadPlayerPointsBtn = document.createElement("BUTTON");
    mainHeadPlayerPoints.appendChild(mainHeadPlayerPointsBtn);
    mainHeadPlayerPointsBtn.textContent = "^";
    mainHeadPlayerPointsBtn.onclick = function () {
        createBody(arr, ["points", "headToHead", "opponentPoints", "perfRating"]);
    }

    if(window.innerWidth > 740) {
        const mainHeadPlayerHeadToHead = document.createElement("th");
        mainHeadPlayerHeadToHead.textContent = "Head";
        mainHeadRow.appendChild(mainHeadPlayerHeadToHead);
        const mainHeadPlayerHeadToHeadBtn = document.createElement("BUTTON");
        mainHeadPlayerHeadToHead.appendChild(mainHeadPlayerHeadToHeadBtn);
        mainHeadPlayerHeadToHeadBtn.textContent = "^";
        mainHeadPlayerHeadToHeadBtn.onclick = function () {
            createBody(arr, ["headToHead", "points", "opponentPoints", "perfRating"]);
        }

        const mainHeadPlayerOpponentPoints = document.createElement("th");
        mainHeadPlayerOpponentPoints.textContent = "Buchholz";
        mainHeadRow.appendChild(mainHeadPlayerOpponentPoints);
        const mainHeadPlayerOpponentPointsBtn = document.createElement("BUTTON");
        mainHeadPlayerOpponentPoints.appendChild(mainHeadPlayerOpponentPointsBtn);
        mainHeadPlayerOpponentPointsBtn.textContent = "^";
        mainHeadPlayerOpponentPointsBtn.onclick = function () {
            createBody(arr, ["opponentPoints", "points", "headToHead", "perfRating"]);
        }
        
        const mainHeadPlayerPerfRating = document.createElement("th");
        mainHeadPlayerPerfRating.textContent = "Perf Rtg";
        mainHeadRow.appendChild(mainHeadPlayerPerfRating);
        const mainHeadPlayerPerfRatingBtn = document.createElement("BUTTON");
        mainHeadPlayerPerfRating.appendChild(mainHeadPlayerPerfRatingBtn);
        mainHeadPlayerPerfRatingBtn.textContent = "^";
        mainHeadPlayerPerfRatingBtn.onclick = function () {
            createBody(arr, ["perfRating", "points", "headToHead", "opponentPoints"]);
        }
    }

    if(window.innerWidth > 1310) {
        const mainHeadPlayerRoundOne = document.createElement("th");
        mainHeadPlayerRoundOne.textContent = "Rnd 1";
        mainHeadRow.appendChild(mainHeadPlayerRoundOne);

        const mainHeadPlayerRoundTwo = document.createElement("th");
        mainHeadPlayerRoundTwo.textContent = "Rnd 2";
        mainHeadRow.appendChild(mainHeadPlayerRoundTwo);

        const mainHeadPlayerRoundThree = document.createElement("th");
        mainHeadPlayerRoundThree.textContent = "Rnd 3";
        mainHeadRow.appendChild(mainHeadPlayerRoundThree);

        const mainHeadPlayerRoundFour = document.createElement("th");
        mainHeadPlayerRoundFour.textContent = "Rnd 4";
        mainHeadRow.appendChild(mainHeadPlayerRoundFour);

        const mainHeadPlayerRoundFive = document.createElement("th");
        mainHeadPlayerRoundFive.textContent = "Rnd 5";
        mainHeadRow.appendChild(mainHeadPlayerRoundFive);

        const mainHeadPlayerRoundSix = document.createElement("th");
        mainHeadPlayerRoundSix.textContent = "Rnd 6";
        mainHeadRow.appendChild(mainHeadPlayerRoundSix);

        const mainHeadPlayerRoundSeven = document.createElement("th");
        mainHeadPlayerRoundSeven.textContent = "Rnd 7";
        mainHeadRow.appendChild(mainHeadPlayerRoundSeven);

        const mainHeadPlayerRoundEight = document.createElement("th");
        mainHeadPlayerRoundEight.textContent = "Rnd 8";
        mainHeadRow.appendChild(mainHeadPlayerRoundEight);

        const mainHeadPlayerRoundNine = document.createElement("th");
        mainHeadPlayerRoundNine.textContent = "Rnd 9";
        mainHeadRow.appendChild(mainHeadPlayerRoundNine);
    }
}

//automatic
createTeamsTable();

//flipping between team & player tables
mainTeamBtn.onclick = function () {
    if(categorySort[2] !== teamsReady) {
        createTeamsTable();
    }
}

mainPlayerOneBtn.onclick = function () {
    if(categorySort[2] !== playersReadyOne) {
        createPlayersTable(playersReadyOne);
    }
}

mainPlayerTwoBtn.onclick = function () {
    if(categorySort[2] !== playersReadyTwo) {
        createPlayersTable(playersReadyTwo);
    }
}

mainPlayerThreeBtn.onclick = function () {
    if(categorySort[2] !== playersReadyThree) {
        createPlayersTable(playersReadyThree);
    }
}

mainPlayerFourBtn.onclick = function () {
    if(categorySort[2] !== playersReadyFour) {
        createPlayersTable(playersReadyFour);
    }
}

//part 2 of the application - the rounds
const headerOfRoundsDiv = document.createElement("DIV");
round.appendChild(headerOfRoundsDiv);
const headerOfRounds = document.createElement("h3"); 
headerOfRoundsDiv.appendChild(headerOfRounds);
headerOfRounds.textContent = "Rounds";
const roundBtnDiv = document.createElement("DIV");
round.appendChild(roundBtnDiv);
const roundTablesBtnDiv = document.createElement("DIV");
round.appendChild(roundTablesBtnDiv);
const roundTablesDiv = document.createElement("DIV");
round.appendChild(roundTablesDiv);

//convert 0, 1, 0.5 to the full, formal string used in chess for display
function resDisplay(res) {
    let returnRes = "1 - 0";

    if(res === 0.5) {
        returnRes = "0.5 - 0.5"
    }
    if(res === 0) {
        returnRes = "0 - 1"
    }

    return returnRes;
}

//converting back
function antiResDisplay(res) {
    let returnRes = 1;

    if(res.replaceAll(' ', '') === "0.5-0.5") {
        returnRes = 0.5;
    }
    if(res.replaceAll(' ', '') === "0-1") {
        returnRes = 0;
    }

    return returnRes;
}

//since in the rounds part of the program the user inputs values, the restart function is useful for re-initializing all the arrays with the new values
function restart() {
    for(let k = 0; k < 30; k++) {
        teamsReadyForDisplay[k] = {
            country: teams[k].country,
            players: teams[k].players,
            avgRating: averageRating(teams[k]),
            points: teamPoints(teams[k]),
            headToHead: tiebreakHeadToHeadTeams(teams[k]),
            totalPoints: teamTotalPoints(teams[k]),
            opponentPoints: tiebreakOpponentPointsTeams(teams[k]),
            avgPerfRating: teamPerformanceRating(teams[k]),
            games: teamOpponents(teams[k]),
            roundOne: opponentTeamToString(teams[k], 0),
            roundTwo: opponentTeamToString(teams[k], 1),
            roundThree: opponentTeamToString(teams[k], 2),
            roundFour: opponentTeamToString(teams[k], 3),
            roundFive: opponentTeamToString(teams[k], 4),
            roundSix: opponentTeamToString(teams[k], 5),
            roundSeven: opponentTeamToString(teams[k], 6),
            roundEight: opponentTeamToString(teams[k], 7),
            roundNine: opponentTeamToString(teams[k], 8)
        };
    }

    for(let k = 0; k < 30; k++) {
        teamsReady[k] = teamsReadyForDisplay[k];
    }

    for(let k = 0; k < 120; k++) {
        playersReadyForDisplay[k] = {
            name: players[k].name,
            teamBelong: teams[Math.floor(k / 4)],
            country: teams[Math.floor(k / 4)].country,
            position: (k % 4) + 1,
            rating: players[k].rating,
            points: playerPoints(players[k]),
            headToHead: tiebreakHeadToHeadPlayers(players[k]),
            opponentPoints: tiebreakOpponentPointsPlayers(players[k]),
            perfRating: performanceRating(players[k]),
            games: playerOpponents(players[k]),
            roundOne: opponentPlayerToString(players[k], 0),
            roundTwo: opponentPlayerToString(players[k], 1),
            roundThree: opponentPlayerToString(players[k], 2),
            roundFour: opponentPlayerToString(players[k], 3),
            roundFive: opponentPlayerToString(players[k], 4),
            roundSix: opponentPlayerToString(players[k], 5),
            roundSeven: opponentPlayerToString(players[k], 6),
            roundEight: opponentPlayerToString(players[k], 7),
            roundNine: opponentPlayerToString(players[k], 8)
        };
    }

    for(let k = 0; k < 30; k++) {
        playersPositionOne[k] = playersReadyForDisplay[k * 4];
        playersPositionTwo[k] = playersReadyForDisplay[(k * 4) + 1];
        playersPositionThree[k] = playersReadyForDisplay[(k * 4) + 2];
        playersPositionFour[k] = playersReadyForDisplay[(k * 4) + 3];
    }

    for(let k = 0; k < 30; k++) {
        playersReadyOne[k] = playersPositionOne[k];
        playersReadyTwo[k] = playersPositionTwo[k];
        playersReadyThree[k] = playersPositionThree[k];
        playersReadyFour[k] = playersPositionFour[k];
    }
}

//since I call displayRoundTables() in the onresize at the bottom of the code, I need to store the current round/group
//so it doesn't go back to the automatic round/group (round 1, group 0 AKA boards 1-5)
let roundForResize;
let groupForResize;

//creates 5 tables, each with country + current points + button to display individual stats
//then the four players on each team vs the four players and their buttons -> stats
//also the four inputs, with already-placed values from the data I currently have, available for user to change
//who won each round 
//the inputting of data only works when you click 'update scores'
function displayRoundTables(round, group) {
    while(roundTablesDiv.firstChild) {
        roundTablesDiv.removeChild(roundTablesDiv.firstChild);
    }

    roundForResize = round;
    groupForResize = group;

    for(let i = 1; i < 6; i++) {
        let roundBoardX = resultRoundIndividual(round, i + (group * 5));

        const roundTableX = document.createElement("TABLE")
        roundTablesDiv.appendChild(roundTableX)
        const roundTableHead = document.createElement("THEAD");
        roundTableX.appendChild(roundTableHead);
        const roundTableBody = document.createElement("TBODY");
        roundTableX.appendChild(roundTableBody);

        const roundTableHeadLeft = document.createElement("th");
        roundTableHead.appendChild(roundTableHeadLeft);
        roundTableHeadLeft.textContent = roundBoardX[0][0].country + " - " + roundBoardX[1][0];
        const roundTableHeadLeftBtn = document.createElement("BUTTON");
        roundTableHeadLeftBtn.textContent = "->";
        roundTableHeadLeft.appendChild(roundTableHeadLeftBtn);
        roundTableHeadLeftBtn.setAttribute("class", "orange");
        roundTableHeadLeftBtn.onclick = function () {
            restart();

            let teamHeadCellLeft;
            for(let j = 0; j < teamsReadyForDisplay.length; j++) {
                if(roundBoardX[0][0].country === teamsReadyForDisplay[j].country) {
                    teamHeadCellLeft = teamsReadyForDisplay[j];
                    break;
                }
            }

            displayIndividual(false, teamHeadCellLeft);
        }
        const roundTableHeadMid = document.createElement("th");
        roundTableHead.appendChild(roundTableHeadMid);
        roundTableHeadMid.textContent = "vs";
        const roundTableHeadRight = document.createElement("th");
        roundTableHead.appendChild(roundTableHeadRight);
        roundTableHeadRight.textContent = roundBoardX[0][1].country + " - " + roundBoardX[1][1];
        const roundTableHeadRightBtn = document.createElement("BUTTON");
        roundTableHeadRightBtn.textContent = "->";
        roundTableHeadRight.appendChild(roundTableHeadRightBtn);
        roundTableHeadRightBtn.setAttribute("class", "orange");
        roundTableHeadRightBtn.onclick = function () {
            restart();

            let teamHeadCellRight;
            for(let j = 0; j < teamsReadyForDisplay.length; j++) {
                if(roundBoardX[0][1].country === teamsReadyForDisplay[j].country) {
                    teamHeadCellRight = teamsReadyForDisplay[j];
                    break;
                }
            }

            displayIndividual(false, teamHeadCellRight);
        }

        const roundTableCellMidInputOne = document.createElement("INPUT");
        roundTableCellMidInputOne.value = resDisplay(roundBoardX[2][0]);
        roundTableCellMidInputOne.setAttribute("class", "inputscore");
        const roundTableCellMidInputTwo = document.createElement("INPUT");
        roundTableCellMidInputTwo.value = resDisplay(roundBoardX[2][1]);
        roundTableCellMidInputTwo.setAttribute("class", "inputscore");
        const roundTableCellMidInputThree = document.createElement("INPUT");
        roundTableCellMidInputThree.value = resDisplay(roundBoardX[2][2]);
        roundTableCellMidInputThree.setAttribute("class", "inputscore");
        const roundTableCellMidInputFour = document.createElement("INPUT");
        roundTableCellMidInputFour.value = resDisplay(roundBoardX[2][3]);
        roundTableCellMidInputFour.setAttribute("class", "inputscore");

        for(let k = 0; k < 4; k++) {
            let switchTeam = [0, 1];
            if(k % 2 === 1) {
                switchTeam = [1, 0];
            }

            const roundTableRow = document.createElement("tr");
            roundTableBody.appendChild(roundTableRow);
            const roundTableCellLeft = document.createElement("td");
            roundTableRow.appendChild(roundTableCellLeft);
            if(window.innerWidth > 740) {
                roundTableCellLeft.textContent = roundBoardX[0][switchTeam[0]].players[k].name + " (" + 
                roundBoardX[0][switchTeam[0]].players[k].rating + ")";
            } else {
                roundTableCellLeft.textContent = roundBoardX[0][switchTeam[0]].players[k].name;
            }
            const roundTableCellLeftBtn = document.createElement("BUTTON");
            roundTableCellLeftBtn.textContent = "->";
            roundTableCellLeft.appendChild(roundTableCellLeftBtn);
            roundTableCellLeftBtn.setAttribute("class", "yellow");
            roundTableCellLeftBtn.onclick = function () {
                restart();

                let playerLeftCell;
                for(let j = 0; j < playersReadyForDisplay.length; j++) {
                    if(roundBoardX[0][switchTeam[0]].players[k].name === playersReadyForDisplay[j].name) {
                        playerLeftCell = playersReadyForDisplay[j];
                        break;
                    }
                }

                displayIndividual(true, playerLeftCell);
            }
            const roundTableCellMid = document.createElement("td");
            roundTableRow.appendChild(roundTableCellMid);            
            
            if(k === 0) {roundTableCellMid.appendChild(roundTableCellMidInputOne);}
            if(k === 1) {roundTableCellMid.appendChild(roundTableCellMidInputTwo);}
            if(k === 2) {roundTableCellMid.appendChild(roundTableCellMidInputThree);}
            if(k === 3) {roundTableCellMid.appendChild(roundTableCellMidInputFour);}           

            const roundTableCellRight = document.createElement("td");
            roundTableRow.appendChild(roundTableCellRight);
            if(window.innerWidth > 740) {
                roundTableCellRight.textContent = roundBoardX[0][switchTeam[1]].players[k].name + " (" + 
                roundBoardX[0][switchTeam[1]].players[k].rating + ")";
            } else {
                roundTableCellRight.textContent = roundBoardX[0][switchTeam[1]].players[k].name;
            }
            const roundTableCellRightBtn = document.createElement("BUTTON");
            roundTableCellRightBtn.textContent = "->";
            roundTableCellRight.appendChild(roundTableCellRightBtn);
            roundTableCellRightBtn.setAttribute("class", "yellow");
            roundTableCellRightBtn.onclick = function () {
                restart();

                let playerRightCell;
                for(let j = 0; j < playersReadyForDisplay.length; j++) {
                    if(roundBoardX[0][switchTeam[1]].players[k].name === playersReadyForDisplay[j].name) {
                        playerRightCell = playersReadyForDisplay[j];
                        break;
                    }
                }

                displayIndividual(true, playerRightCell);
            }
        }

        let winner = [1, 0];
        if(teamPointsRound(roundBoardX[0][0], rounds[round - 1]) === 2) {
            winner = [0.5, 0.5];
        }
        if(teamPointsRound(roundBoardX[0][0], rounds[round - 1]) < 2) {
            winner = [0, 1];
        }
        const roundTableEndRow = document.createElement("tr");
        roundTableBody.appendChild(roundTableEndRow);
        const roundTableEndCellLeft = document.createElement("td");
        roundTableEndRow.appendChild(roundTableEndCellLeft);
        roundTableEndCellLeft.textContent = "Point: " + winner[0];
        const roundTableEndCellMid = document.createElement("td");
        roundTableEndRow.appendChild(roundTableEndCellMid);
        roundTableEndCellMid.textContent = teamPointsRound(roundBoardX[0][0], rounds[round - 1]) + " - " + teamPointsRound(roundBoardX[0][1], rounds[round - 1]);
        const roundTableEndCellRight = document.createElement("td");
        roundTableEndRow.appendChild(roundTableEndCellRight);
        roundTableEndCellRight.textContent = "Point: " + winner[1];

        const roundTableBodyBtnDiv = document.createElement("DIV");
        roundTablesDiv.appendChild(roundTableBodyBtnDiv);
        const roundTableBodyBtn = document.createElement("BUTTON");
        roundTableBodyBtnDiv.appendChild(roundTableBodyBtn);
        roundTableBodyBtn.textContent = "Update Scores";
        roundTableBodyBtn.onclick = function () {
            rounds[round - 1].scores[i + (group * 5) - 1] = [antiResDisplay(roundTableCellMidInputOne.value), antiResDisplay(roundTableCellMidInputTwo.value), 
            antiResDisplay(roundTableCellMidInputThree.value), antiResDisplay(roundTableCellMidInputFour.value)];

            restart();

            displayRoundTables(round, group);

            while(individualDiv.firstChild) {
                individualDiv.removeChild(individualDiv.firstChild);
            }

            categorySort[1] = "ascend";

            if(categorySort[2] === teamsReady) {
                createTeamsTable();
            } else if(categorySort[2] === playersReadyOne) {
                createPlayersTable(playersReadyOne);
            } else if(categorySort[2] === playersReadyTwo) {
                createPlayersTable(playersReadyTwo);
            } else if(categorySort[2] === playersReadyThree) {
                createPlayersTable(playersReadyThree);
            } else {
                createPlayersTable(playersReadyFour);
            }
        }
    }
}

const roundTablesPartOneBtn = document.createElement("BUTTON");
const roundTablesPartTwoBtn = document.createElement("BUTTON");
const roundTablesPartThreeBtn = document.createElement("BUTTON");
roundTablesPartOneBtn.setAttribute("class", "onbutton");

function displaySingleRound(round) {
    while(roundTablesBtnDiv.firstChild) {
        roundTablesBtnDiv.removeChild(roundTablesBtnDiv.firstChild);
    }

    displayRoundTables(round, 0);

    roundTablesBtnDiv.appendChild(roundTablesPartOneBtn);
    roundTablesPartOneBtn.textContent = "Boards 1 - 5";
    roundTablesPartOneBtn.onclick = function () {
        displayRoundTables(round, 0);
        roundTablesPartOneBtn.setAttribute("class", "onbutton");
        roundTablesPartTwoBtn.removeAttribute("class");
        roundTablesPartThreeBtn.removeAttribute("class");
    }

    roundTablesBtnDiv.appendChild(roundTablesPartTwoBtn);
    roundTablesPartTwoBtn.textContent = "Boards 6 - 10";
    roundTablesPartTwoBtn.onclick = function () {
        displayRoundTables(round, 1);
        roundTablesPartOneBtn.removeAttribute("class");
        roundTablesPartTwoBtn.setAttribute("class", "onbutton");
        roundTablesPartThreeBtn.removeAttribute("class");
    }

    roundTablesBtnDiv.appendChild(roundTablesPartThreeBtn);
    roundTablesPartThreeBtn.textContent = "Boards 11 - 15";
    roundTablesPartThreeBtn.onclick = function () {
        displayRoundTables(round, 2);
        roundTablesPartOneBtn.removeAttribute("class");
        roundTablesPartTwoBtn.removeAttribute("class");
        roundTablesPartThreeBtn.setAttribute("class", "onbutton");
    }
}

//this part of the program is perhaps inefficient...
const roundBtnOne = document.createElement("BUTTON");
const roundBtnTwo = document.createElement("BUTTON");
const roundBtnThree = document.createElement("BUTTON");
const roundBtnFour = document.createElement("BUTTON");
const roundBtnFive = document.createElement("BUTTON");
const roundBtnSix = document.createElement("BUTTON");
const roundBtnSeven = document.createElement("BUTTON");
const roundBtnEight = document.createElement("BUTTON");
const roundBtnNine = document.createElement("BUTTON");
roundBtnOne.setAttribute("class", "onbutton");

//displayAllRounds used to just be a for loop creating the nine buttons, however...
//when I wanted to input the setAttributes to show the current round & boards, It was easier to just make a variable for each of the buttons
//there may have been a more professional way to code this, however, it was much less time consuming to do it this way (no complicated if statements needed)
function displayAllRounds() {
    displaySingleRound(1);

    roundBtnDiv.appendChild(roundBtnOne);
    roundBtnOne.textContent = 1;
    roundBtnOne.onclick = function () {
        displaySingleRound(1);
        roundTablesPartOneBtn.setAttribute("class", "onbutton");
        roundTablesPartTwoBtn.removeAttribute("class");
        roundTablesPartThreeBtn.removeAttribute("class");

        roundBtnOne.setAttribute("class", "onbutton");
        roundBtnTwo.removeAttribute("class");
        roundBtnThree.removeAttribute("class");
        roundBtnFour.removeAttribute("class");
        roundBtnFive.removeAttribute("class");
        roundBtnSix.removeAttribute("class");
        roundBtnSeven.removeAttribute("class");
        roundBtnEight.removeAttribute("class");
        roundBtnNine.removeAttribute("class");
    }

    roundBtnDiv.appendChild(roundBtnTwo);
    roundBtnTwo.textContent = 2;
    roundBtnTwo.onclick = function () {
        displaySingleRound(2);
        roundTablesPartOneBtn.setAttribute("class", "onbutton");
        roundTablesPartTwoBtn.removeAttribute("class");
        roundTablesPartThreeBtn.removeAttribute("class");

        roundBtnOne.removeAttribute("class");
        roundBtnTwo.setAttribute("class", "onbutton");
        roundBtnThree.removeAttribute("class");
        roundBtnFour.removeAttribute("class");
        roundBtnFive.removeAttribute("class");
        roundBtnSix.removeAttribute("class");
        roundBtnSeven.removeAttribute("class");
        roundBtnEight.removeAttribute("class");
        roundBtnNine.removeAttribute("class");
    }

    roundBtnDiv.appendChild(roundBtnThree);
    roundBtnThree.textContent = 3;
    roundBtnThree.onclick = function () {
        displaySingleRound(3);
        roundTablesPartOneBtn.setAttribute("class", "onbutton");
        roundTablesPartTwoBtn.removeAttribute("class");
        roundTablesPartThreeBtn.removeAttribute("class");

        roundBtnOne.removeAttribute("class");
        roundBtnTwo.removeAttribute("class");
        roundBtnThree.setAttribute("class", "onbutton");
        roundBtnFour.removeAttribute("class");
        roundBtnFive.removeAttribute("class");
        roundBtnSix.removeAttribute("class");
        roundBtnSeven.removeAttribute("class");
        roundBtnEight.removeAttribute("class");
        roundBtnNine.removeAttribute("class");
    }

    roundBtnDiv.appendChild(roundBtnFour);
    roundBtnFour.textContent = 4;
    roundBtnFour.onclick = function () {
        displaySingleRound(4);
        roundTablesPartOneBtn.setAttribute("class", "onbutton");
        roundTablesPartTwoBtn.removeAttribute("class");
        roundTablesPartThreeBtn.removeAttribute("class");

        roundBtnOne.removeAttribute("class");
        roundBtnTwo.removeAttribute("class");
        roundBtnThree.removeAttribute("class");
        roundBtnFour.setAttribute("class", "onbutton");
        roundBtnFive.removeAttribute("class");
        roundBtnSix.removeAttribute("class");
        roundBtnSeven.removeAttribute("class");
        roundBtnEight.removeAttribute("class");
        roundBtnNine.removeAttribute("class");
    }

    roundBtnDiv.appendChild(roundBtnFive);
    roundBtnFive.textContent = 5;
    roundBtnFive.onclick = function () {
        displaySingleRound(5);
        roundTablesPartOneBtn.setAttribute("class", "onbutton");
        roundTablesPartTwoBtn.removeAttribute("class");
        roundTablesPartThreeBtn.removeAttribute("class");

        roundBtnOne.removeAttribute("class");
        roundBtnTwo.removeAttribute("class");
        roundBtnThree.removeAttribute("class");
        roundBtnFour.removeAttribute("class");
        roundBtnFive.setAttribute("class", "onbutton");
        roundBtnSix.removeAttribute("class");
        roundBtnSeven.removeAttribute("class");
        roundBtnEight.removeAttribute("class");
        roundBtnNine.removeAttribute("class");
    }

    roundBtnDiv.appendChild(roundBtnSix);
    roundBtnSix.textContent = 6;
    roundBtnSix.onclick = function () {
        displaySingleRound(6);
        roundTablesPartOneBtn.setAttribute("class", "onbutton");
        roundTablesPartTwoBtn.removeAttribute("class");
        roundTablesPartThreeBtn.removeAttribute("class");

        roundBtnOne.removeAttribute("class");
        roundBtnTwo.removeAttribute("class");
        roundBtnThree.removeAttribute("class");
        roundBtnFour.removeAttribute("class");
        roundBtnFive.removeAttribute("class");
        roundBtnSix.setAttribute("class", "onbutton");
        roundBtnSeven.removeAttribute("class");
        roundBtnEight.removeAttribute("class");
        roundBtnNine.removeAttribute("class");
    }

    roundBtnDiv.appendChild(roundBtnSeven);
    roundBtnSeven.textContent = 7;
    roundBtnSeven.onclick = function () {
        displaySingleRound(7);
        roundTablesPartOneBtn.setAttribute("class", "onbutton");
        roundTablesPartTwoBtn.removeAttribute("class");
        roundTablesPartThreeBtn.removeAttribute("class");

        roundBtnOne.removeAttribute("class");
        roundBtnTwo.removeAttribute("class");
        roundBtnThree.removeAttribute("class");
        roundBtnFour.removeAttribute("class");
        roundBtnFive.removeAttribute("class");
        roundBtnSix.removeAttribute("class");
        roundBtnSeven.setAttribute("class", "onbutton");
        roundBtnEight.removeAttribute("class");
        roundBtnNine.removeAttribute("class");
    }

    roundBtnDiv.appendChild(roundBtnEight);
    roundBtnEight.textContent = 8;
    roundBtnEight.onclick = function () {
        displaySingleRound(8);
        roundTablesPartOneBtn.setAttribute("class", "onbutton");
        roundTablesPartTwoBtn.removeAttribute("class");
        roundTablesPartThreeBtn.removeAttribute("class");

        roundBtnOne.removeAttribute("class");
        roundBtnTwo.removeAttribute("class");
        roundBtnThree.removeAttribute("class");
        roundBtnFour.removeAttribute("class");
        roundBtnFive.removeAttribute("class");
        roundBtnSix.removeAttribute("class");
        roundBtnSeven.removeAttribute("class");
        roundBtnEight.setAttribute("class", "onbutton");
        roundBtnNine.removeAttribute("class");
    }

    roundBtnDiv.appendChild(roundBtnNine);
    roundBtnNine.textContent = 9;
    roundBtnNine.onclick = function () {
        displaySingleRound(9);
        roundTablesPartOneBtn.setAttribute("class", "onbutton");
        roundTablesPartTwoBtn.removeAttribute("class");
        roundTablesPartThreeBtn.removeAttribute("class");

        roundBtnOne.removeAttribute("class");
        roundBtnTwo.removeAttribute("class");
        roundBtnThree.removeAttribute("class");
        roundBtnFour.removeAttribute("class");
        roundBtnFive.removeAttribute("class");
        roundBtnSix.removeAttribute("class");
        roundBtnSeven.removeAttribute("class");
        roundBtnEight.removeAttribute("class");
        roundBtnNine.setAttribute("class", "onbutton");
    }
}

displayAllRounds();

//finally, part 4 of the program, the searching
let searchOutputArr = [];

const searchHeaderDiv = document.createElement("DIV");
search.appendChild(searchHeaderDiv);
const searchHeader = document.createElement("h3");
searchHeaderDiv.appendChild(searchHeader);
searchHeader.textContent = "Search";

const searchInputTextDiv = document.createElement("DIV");
searchInputTextDiv.textContent = "Search player or country by name/string.";
search.appendChild(searchInputTextDiv);
const searchInputDiv = document.createElement("DIV");
search.appendChild(searchInputDiv);
const searchInput = document.createElement("INPUT");
searchInputDiv.appendChild(searchInput);
searchInput.setAttribute("type", "text");
const searchInputBtn = document.createElement("BUTTON");
searchInputDiv.appendChild(searchInputBtn);
searchInputBtn.textContent = "Search";

const searchRangeTextDiv = document.createElement("DIV");
searchRangeTextDiv.textContent = "Search player or country by rating range.";
search.appendChild(searchRangeTextDiv);
searchRangeTextDiv.setAttribute("class", "margintop");
const searchRangeDiv = document.createElement("DIV");
search.appendChild(searchRangeDiv);
const searchRangeOne = document.createElement("INPUT");
searchRangeDiv.appendChild(searchRangeOne);
searchRangeOne.setAttribute("type", "text");
searchRangeOne.setAttribute("class", "inputrange");
const searchRangeTwo = document.createElement("INPUT");
searchRangeDiv.appendChild(searchRangeTwo);
searchRangeTwo.setAttribute("type", "text");
searchRangeTwo.setAttribute("class", "inputrange");
const searchRangeBtn = document.createElement("BUTTON");
searchRangeDiv.appendChild(searchRangeBtn);
searchRangeBtn.textContent = "Search";

const searchSectionDiv = document.createElement("DIV");
search.appendChild(searchSectionDiv);

//creating two unordered lists, one for players, one for teams
//the number of pagination cells depend on the output size, adding some complication
function displaySearchList() {
    while(searchSectionDiv.firstChild) {
        searchSectionDiv.removeChild(searchSectionDiv.firstChild);
    }

    if(typeof searchOutputArr[0][0] !== "undefined") {
        const listPlayersText = document.createElement("DIV");
        listPlayersText.textContent = "Players:";
        searchSectionDiv.appendChild(listPlayersText);
        listPlayersText.setAttribute("class", "searchminiheader");
        const displayOutputArrListPlayers = document.createElement("UL");
        searchSectionDiv.appendChild(displayOutputArrListPlayers);
        const playerPaginationButtonDiv = document.createElement("DIV");
        searchSectionDiv.appendChild(playerPaginationButtonDiv); 

        let searchOutputArrPlayers = [];
        for(let i = 0; i < searchOutputArr[0].length; i += 10) {
            let max = i + 9;
            if(searchOutputArr[0].length < max) {
                max = searchOutputArr[0].length - 1;
            }

            let miniSearchOutputPlayers = [];
            for(let k = i; k <= max; k++) {                
                miniSearchOutputPlayers.push(searchOutputArr[0][k]);               
            }
            searchOutputArrPlayers.push(miniSearchOutputPlayers);
        }

        for(let i = 0; i < searchOutputArrPlayers[0].length; i++) {
            const playerInList = document.createElement("LI");
            displayOutputArrListPlayers.appendChild(playerInList);
            playerInList.textContent = searchOutputArrPlayers[0][i].name;
            const newButton = document.createElement("BUTTON");
            newButton.textContent = "->";
            playerInList.appendChild(newButton);
            newButton.setAttribute("class", "yellow");
            newButton.onclick = function () {
                displayIndividual(true, searchOutputArrPlayers[0][i]);
            }
        }

        if(searchOutputArrPlayers.length > 1) {
            for(let i = 0; i < searchOutputArrPlayers.length; i++) {
                const searchPlayerPagination = document.createElement("BUTTON");
                playerPaginationButtonDiv.appendChild(searchPlayerPagination);
                searchPlayerPagination.textContent = i + 1;
                searchPlayerPagination.setAttribute("class", "onbutton");
                searchPlayerPagination.onclick = function () {
                    while(displayOutputArrListPlayers.firstChild) {
                        displayOutputArrListPlayers.removeChild(displayOutputArrListPlayers.firstChild);
                    }

                    for(let k = 0; k < searchOutputArrPlayers[i].length; k++) {
                        const aPlayerInList = document.createElement("LI");
                        displayOutputArrListPlayers.appendChild(aPlayerInList);
                        aPlayerInList.textContent = searchOutputArrPlayers[i][k].name;
                        const newButtonX = document.createElement("BUTTON");
                        newButtonX.textContent = "->";
                        aPlayerInList.appendChild(newButtonX);
                        newButtonX.setAttribute("class", "yellow");
                        newButtonX.onclick = function () {
                            displayIndividual(true, searchOutputArrPlayers[i][k]);
                        }
                    }
                }
            }
        }
    } else {
        const listPlayersTextNone = document.createElement("DIV");
        listPlayersTextNone.textContent = "No players match the search.";
        searchSectionDiv.appendChild(listPlayersTextNone);
        listPlayersTextNone.setAttribute("class", "nosearch");
    }

    if(typeof searchOutputArr[1][0] !== "undefined") {
        const listTeamsText = document.createElement("DIV");
        listTeamsText.textContent = "Teams:";
        searchSectionDiv.appendChild(listTeamsText);
        listTeamsText.setAttribute("class", "searchminiheader");
        const displayOutputArrListTeams = document.createElement("UL");
        searchSectionDiv.appendChild(displayOutputArrListTeams);
        const teamPaginationButtonDiv = document.createElement("DIV");
        searchSectionDiv.appendChild(teamPaginationButtonDiv); 

        let searchOutputArrTeams = [];
        for(let i = 0; i < searchOutputArr[1].length; i += 10) {
            let max = i + 9;
            if(searchOutputArr[1].length < max) {
                max = searchOutputArr[1].length;
            }

            let miniSearchOutputTeams = [];
            for(let k = i; k < max; k++) {                
                miniSearchOutputTeams.push(searchOutputArr[1][k]);                
            }
            searchOutputArrTeams.push(miniSearchOutputTeams);
        }

        for(let i = 0; i < searchOutputArrTeams[0].length; i++) {
            const teamInList = document.createElement("LI");
            displayOutputArrListTeams.appendChild(teamInList);
            teamInList.textContent = searchOutputArrTeams[0][i].country;
            const newButtonY = document.createElement("BUTTON");
            newButtonY.textContent = "->";
            teamInList.appendChild(newButtonY);
            newButtonY.setAttribute("class", "orange");
            newButtonY.onclick = function () {
                displayIndividual(false, searchOutputArrTeams[0][i]);
            }
        }

        if(searchOutputArrTeams.length > 1) {
            for(let i = 0; i < searchOutputArrTeams.length; i++) {
                const searchTeamPagination = document.createElement("BUTTON");
                teamPaginationButtonDiv.appendChild(searchTeamPagination);
                searchTeamPagination.textContent = i + 1;
                searchTeamPagination.setAttribute("class", "onbutton");
                searchTeamPagination.onclick = function () {
                    while(displayOutputArrListTeams.firstChild) {
                        displayOutputArrListTeams.removeChild(displayOutputArrListTeams.firstChild);
                    }

                    for(let k = 0; k < searchOutputArrTeams[i].length; k++) {
                        const aTeamInList = document.createElement("LI");
                        displayOutputArrListTeams.appendChild(aTeamInList);
                        aTeamInList.textContent = searchOutputArrTeams[i][k].country;
                        const newButtonZ = document.createElement("BUTTON");
                        newButtonZ.textContent = "->";
                        aTeamInList.appendChild(newButtonZ);
                        newButtonZ.setAttribute("class", "orange");
                        newButtonZ.onclick = function () {
                            displayIndividual(false, searchOutputArrTeams[i][k]);
                        }
                    }
                }
            }
        }
    } else {
        const listTeamsTextNone = document.createElement("DIV");
        listTeamsTextNone.textContent = "No teams match the search.";
        searchSectionDiv.appendChild(listTeamsTextNone);
        listTeamsTextNone.setAttribute("class", "nosearch");
    }
}

//a few times throughout the program I declare the buttons in an earlier section, then do the onclick later
//the purpose of this is so that I have access to certain code/function to put inside the onclick 
searchInputBtn.onclick = function () {
    if(searchInput.value.length > 0) {
        searchOutputArr = findByInput(searchInput.value);
        displaySearchList();
    }
}

searchRangeBtn.onclick = function () {
    if(searchRangeOne.value.length > 0 && searchRangeTwo.value.length > 0) {
        let numSearchRangeOne = parseFloat(searchRangeOne.value);
        let numSearchRangeTwo = parseFloat(searchRangeTwo.value);

        if(isNaN(searchRangeOne.value) === false && isNaN(searchRangeTwo.value) === false) {
            searchOutputArr = findByRange(numSearchRangeOne, numSearchRangeTwo);
            displaySearchList();
        } else {
            while(searchSectionDiv.firstChild) {
                searchSectionDiv.removeChild(searchSectionDiv.firstChild);
            }

            const ifSearchNaN = document.createElement("DIV");
            ifSearchNaN.textContent = "Invalid Input";
            searchSectionDiv.appendChild(ifSearchNaN);
        }
    }
}

//finally, the window.onresize
//everything that needs to have its width shortened is in here
//the main tables are the main thing, however, I also removed the ratings from the rounds to make more space for mobile version
//this is the only time windowResize is true
window.onresize = function () {
    windowResize = true;

    if(categorySort[2] === teamsReady) {
        createTeamsTable();
    }
    if(categorySort[2] === playersReadyOne) {
        createPlayersTable(playersReadyOne);
    }
    if(categorySort[2] === playersReadyTwo) {
        createPlayersTable(playersReadyTwo);
    }
    if(categorySort[2] === playersReadyThree) {
        createPlayersTable(playersReadyThree);
    }
    if(categorySort[2] === playersReadyFour) {
        createPlayersTable(playersReadyFour);
    }

    displayRoundTables(roundForResize, groupForResize);

    windowResize = false;
}
