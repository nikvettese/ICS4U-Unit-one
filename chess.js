//Submission Part 1

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

const rounds = Array(9);
const teams = Array(30);
const players = [];

const countries = ["Canada", "United States", "Romania", "France", "Germany", "Mexico", "China", "India", "Kazakhstan", "Italy", 
"Belgium", "Australia", "Netherlands", "Bulgaria", "Turkey", "Israel", "Uzbekistan", "Georgia", "Azerbaijan", "Greece", 
"South Africa", "Ghana", "Botswana", "Egypt", "Malaysia", "Luxembourg", "Czech Republic", "Peru", "Uruguay", "Philippines"];

const tempRatings = [2696, 2796, 2736, 2537, 2433, 2498, 2482, 2569, 2384, 2573, 2495, 2411, 2815, 2749, 2719, 2833, 2752, 2300, 
2744, 2495, 2626, 2510, 2495, 2546, 2653, 2553, 2447, 2457, 2351, 2551, 2481, 2535, 2507, 2599, 2565, 2584, 2705, 2676, 2662, 
2622, 2573, 2673, 2750, 2602, 2339, 2401, 2376, 2481, 2484, 2407, 2494, 2801, 2386, 2340, 2291, 2400, 2790, 2641, 2534, 2568, 
2480, 2600, 2560, 2607, 2616, 2609, 2528, 2687, 2588, 2625, 2612, 2614, 2667, 2639, 2648, 2624, 2376, 2421, 2476, 2391, 2551, 
2729, 2766, 2555, 2682, 2677, 2696, 2660, 2741, 2653, 2707, 2657, 2755, 2758, 2772, 2780, 2706, 2532, 2607, 2759, 2404, 2420, 
2428, 2548, 2419, 2406, 2485, 2451, 2613, 2622, 2655, 2697, 2316, 2568, 2614, 2337, 2643, 2664, 2613, 2612];

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

for(let i = 0; i < teams.length; i++) {
    let playerOne = new Player(countries[i].replace(' ', '') + "Player" + "One", ratings[(4 * i) + 0]);
    let playerTwo = new Player(countries[i].replace(' ', '') + "Player" + "Two", ratings[(4 * i) + 1]);
    let playerThree = new Player(countries[i].replace(' ', '') + "Player" + "Three", ratings[(4 * i) + 2]);
    let playerFour = new Player(countries[i].replace(' ', '') + "Player" + "Four", ratings[(4 * i) + 3]);

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

function numsToTeams(nums) {
    const returnTeams = [];
    for(let i = 0; i < nums.length; i++) {
        returnTeams.push(teams[nums[i]]);
    }
    return returnTeams;
}

rounds[0] = new Round(numsToTeams([3, 4, 8, 23, 0, 15, 12, 22, 21, 5, 6, 9, 24, 1, 7, 20, 10, 2, 28, 27, 18, 25, 26, 14, 29, 19, 11, 16, 17, 13]), 
[[1, 0.5, 1, 0], [0, 1, 0.5, 1], [0.5, 0.5, 1, 0.5], [0.5, 0.5, 0, 0.5], [0.5, 0.5, 0.5, 0], [0.5, 0.5, 0, 1], [0.5, 0.5, 0.5, 0.5], 
[0, 1, 0, 0.5], [1, 0, 0.5, 0], [0.5, 1, 1, 1], [0.5, 0, 0.5, 0], [0, 0.5, 0.5, 0.5], [1, 0, 1, 0.5], [0, 1, 0, 0.5], [1, 0, 1, 0]]);
rounds[1] = new Round(numsToTeams([27, 3, 23, 10, 14, 0, 22, 18, 16, 21, 9, 29, 20, 17, 4, 24, 1, 8, 15, 28, 25, 12, 5, 26, 19, 6, 13, 7, 2, 11]), 
[[0, 1, 0, 0.5], [0.5, 0, 1, 0], [1, 1, 0, 0.5], [0.5, 0.5, 0.5, 0.5], [0.5, 1, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5], [1, 0, 0.5, 1], [0.5, 0.5, 0.5, 1], 
[0.5, 1, 0, 0.5], [1, 0.5, 1, 0], [0, 0.5, 0.5, 1], [1, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5], [0, 1, 0.5, 1], [1, 0.5, 0.5, 0]]);
rounds[2] = new Round(numsToTeams([3, 20, 0, 23, 21, 22, 18, 9, 24, 29, 10, 15, 8, 27, 12, 14, 7, 16, 17, 5, 6, 2, 19, 1, 26, 4, 28, 13, 11, 25]), 
[[1, 0, 0.5, 0], [0.5, 0.5, 0, 1], [0.5, 1, 1, 0.5], [0.5, 1, 0.5, 0.5], [1, 1, 1, 0.5], [1, 0.5, 0.5, 0], [0, 0.5, 0.5, 0.5], [0.5, 0.5, 1, 1], 
[1, 0.5, 0.5, 1], [0.5, 0, 0.5, 0.5], [1, 0.5, 0, 0.5], [0.5, 1, 0.5, 0.5], [0.5, 1, 0.5, 0], [1, 0, 0, 0.5], [0, 1, 0, 0.5]]);
rounds[3] = new Round(numsToTeams([23, 3, 9, 21, 20, 24, 27, 0, 22, 10, 14, 17, 1, 18, 29, 7, 2, 12, 16, 28, 5, 8, 15, 6, 25, 26, 4, 19, 13, 11]), 
[[0.5, 0.5, 0.5, 1], [0.5, 0.5, 0, 1], [1, 0, 0, 0.5], [0.5, 1, 0, 0.5], [0, 1, 0.5, 0.5], [1, 0, 0.5, 1], [0.5, 0.5, 0.5, 1], [0.5, 0.5, 1, 0], 
[0, 1, 0.5, 1], [1, 0, 0.5, 0.5], [0.5, 1, 0.5, 0.5], [0.5, 0.5, 1, 0.5], [1, 0, 0, 1], [1, 0, 0.5, 1], [0, 0, 0, 1]]);
rounds[4] = new Round(numsToTeams([3, 21, 20, 23, 0, 10, 12, 9, 24, 14, 18, 16, 29, 27, 8, 22, 17, 15, 2, 4, 7, 25, 11, 1, 28, 5, 6, 26, 19, 13]), 
[[1, 0, 1, 0.5], [0.5, 0.5, 0, 1], [0.5, 0, 0, 0.5], [1, 0.5, 0.5, 1], [1, 0.5, 1, 0], [0.5, 0, 0, 0], [0.5, 0.5, 0.5, 0.5], [0, 0.5, 0, 1], 
[0.5, 1, 0.5, 0.5], [0.5, 1, 0, 0.5], [0.5, 0.5, 1, 1], [1, 0.5, 0.5, 0.5], [0.5, 1, 0, 0.5], [0.5, 0.5, 0, 0.5], [1, 0.5, 0.5, 0.5]]);
rounds[5] = new Round(numsToTeams([10, 3, 23, 24, 21, 0, 15, 18, 22, 29, 9, 20, 16, 12, 27, 14, 4, 17, 25, 8, 5, 11, 26, 7, 1, 2, 28, 19, 13, 6]), 
[[0.5, 1, 0, 0.5], [0.5, 0.5, 0, 0], [0, 1, 1, 0], [0.5, 1, 0, 1], [1, 0.5, 1, 0.5], [1, 0.5, 0, 0.5], [0.5, 0.5, 1, 0], [0, 1, 0.5, 0], 
[0, 0, 0, 1], [0.5, 0.5, 0, 1], [0.5, 0, 0.5, 0], [0, 1, 0.5, 0], [1, 0.5, 0.5, 0], [1, 0, 0.5, 1], [0, 0.5, 0, 1]]);
rounds[6] = new Round(numsToTeams([3, 18, 22, 23, 24, 21, 0, 9, 20, 16, 14, 10, 29, 5, 17, 12, 8, 15, 7, 4, 1, 27, 6, 25, 11, 28, 19, 26, 2, 13]), 
[[0.5, 0.5, 1, 0.5], [0.5, 0.5, 0.5, 1], [1, 0.5, 0, 1], [0.5, 1, 1, 0.5], [1, 1, 0.5, 0.5], [1, 0.5, 0, 1], [1, 0, 1, 0], [0.5, 0, 0.5, 0], 
[0, 0.5, 0.5, 0], [0.5, 1, 0.5, 0.5], [0.5, 0.5, 0, 1], [1, 0.5, 1, 0], [0.5, 1, 1, 0.5], [0.5, 1, 0.5, 0.5], [1, 0, 0.5, 0.5]]);
rounds[7] = new Round(numsToTeams([0, 3, 21, 23, 18, 10, 20, 22, 9, 17, 16, 24, 14, 29, 27, 15, 4, 8, 12, 6, 5, 7, 26, 11, 28, 2, 13, 1, 25, 19]), 
[[0.5, 0.5, 0, 0.5], [0.5, 1, 0.5, 1], [0.5, 0.5, 1, 0.5], [0.5, 1, 0, 1], [0, 0, 1, 0.5], [0.5, 1, 0.5, 0.5], [1, 0.5, 1, 1], [0.5, 0.5, 1, 1], 
[1, 0, 0, 1], [0.5, 0.5, 0.5, 1], [0.5, 0.5, 1, 0], [1, 0.5, 0.5, 0.5], [0, 0, 0, 1], [0.5, 1, 0, 1], [0.5, 0.5, 0.5, 0.5]]);
rounds[8] = new Round(numsToTeams([3, 24, 23, 18, 22, 9, 10, 21, 29, 0, 16, 14, 8, 20, 6, 27, 17, 26, 15, 4, 1, 5, 7, 2, 12, 28, 11, 19, 13, 25]), 
[[0.5, 0.5, 1, 0.5], [1, 1, 1, 0.5], [0.5, 0.5, 0.5, 0.5], [1, 1, 0.5, 0.5], [0, 0.5, 0.5, 0.5], [0, 0.5, 0.5, 0.5], [0, 1, 0.5, 1], [0.5, 0.5, 1, 0.5], 
[0.5, 0, 0.5, 0.5], [0, 1, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5], [0.5, 1, 0.5, 1], [0.5, 1, 1, 0], [0.5, 1, 0.5, 0.5], [0, 0.5, 0.5, 1]]);

function averageRating(team) {
    let avg = (team.players[0].rating + team.players[1].rating + team.players[2].rating + team.players[3].rating) / 4;
    return avg;
}

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

function teamPerformanceRating(team) {
    let avg = (performanceRating(team.players[0]) + performanceRating(team.players[1]) 
    + performanceRating(team.players[2]) + performanceRating(team.players[3])) / 4;
    return avg;
}

function playerPoints(player) {
    const playerOpponentsInfo = playerOpponents(player);
    let sum = 0;

    for(let i = 0; i < 9; i++) {
        sum += playerOpponentsInfo[i][2];
    }

    return sum;
}

function teamTotalPoints(team) {
    let sum = 0;

    for(let i = 0; i < 4; i++) {
        sum += playerPoints(team.players[i]);
    }

    return sum;
}

function teamPoints(team) {
    const teamOpponentsInfo = teamOpponents(team);
    let sum = 0;

    for(let i = 0; i < 9; i++) {
        sum += teamOpponentsInfo[i][2];
    }

    return sum;
}

function tiebreakOpponentPointsTeams(team) {
    const teamOpponentsInfo = teamOpponents(team);
    let sum = 0;

    for(let i = 0; i < 9; i++) {
        sum += teamPoints(teamOpponentsInfo[i][0]);
    }

    return sum;
}

function tiebreakOpponentPointsPlayers(player) {
    const playerOpponentsInfo = playerOpponents(player);
    let sum = 0;

    for(let i = 0; i < 9; i++) {
        sum += playerPoints(playerOpponentsInfo[i][0]);
    }

    return sum;
}

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

function tiebreakHeadToHeadPlayers(player) {
    let playerIndex = players.indexOf(player, 0);
    let playerPosition = playerIndex % 4;
    const playerPointsArr = Array(30);
    for(let i = playerPosition; i < players.length; i += 4) {
        playerPointsArr[i] = playerPoints(players[i])
    }

    const listPlayersEqual = [];
    for(let i = 0; i < 30; i++) {
        if(playerPointsArr[i] === playerPoints(player) && players[i] !== player) {
            listPlayersEqual.push(players[i]);
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

    return sign + colour + opponentStr + "...";
}

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

    return sign + colour + opponentStr + "...";
}

//display portion


const playersReadyForDisplay = Array(120);
for(let i = 0; i < 120; i++) {
    playersReadyForDisplay[i] = {
        name: players[i].name,
        teamBelong: teams[Math.floor(i / 4)],
        position: i % 4,
        country: teams[Math.floor(i / 4)].country,
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

//DOM Stuff
window.onbeforeunload = () => {  
    window.scrollTo(0, 0); 
};

const title = document.querySelector(".title");
const main = document.querySelector(".main");
const search = document.querySelector(".search");
const individual = document.querySelector(".individual");

const individualDiv = document.createElement("DIV");
individual.appendChild(individualDiv);
const individualDivHeader = document.createElement("DIV")
individualDiv.appendChild(individualDivHeader);
individualDivHeader.textContent = "Individual Stats";

function displayIndividual(isPlayer, player) {
    while(individualDiv.firstChild) {
        individualDiv.removeChild(individualDiv.firstChild);
    }

    const individualDivHeader = document.createElement("DIV");
    individualDiv.appendChild(individualDivHeader);
    individualDivHeader.textContent = "Individual Stats";

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

        const individualPlayerCountry = document.createElement("DIV");
        individualPlayerCountry.textContent = "Country: " + player.country;
        individualDiv.appendChild(individualPlayerCountry);
        const newButtonIpc = document.createElement("BUTTON");
        newButtonIpc.textContent = "->";
        individualPlayerCountry.appendChild(newButtonIpc);
        newButtonIpc.onclick = function () {
            displayIndividual(false, player.teamBelong);
        }

        const individualPlayerPosition = document.createElement("DIV");
        individualPlayerPosition.textContent = "Position: " + (player.position + 1);
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
        const individualPlayerHead = document.createElement("THEAD");
        individualPlayerTable.appendChild(individualPlayerHead);
        const individualPlayerBody = document.createElement("TBODY");
        individualPlayerTable.appendChild(individualPlayerBody);

        const cellTitleHead = document.createElement("th");
        individualPlayerHead.appendChild(cellTitleHead);
        cellTitleHead.textContent = "Round #";

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
            cellTitle.textContent = "Round " + (i + 1);

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

        const individualPlayerPositionOne = document.createElement("DIV");
        individualPlayerPositionOne.textContent = "Player Position One: " + playersForTeam[0].name + " (" + playersForTeam[0].rating + ")";
        individualDiv.appendChild(individualPlayerPositionOne);
        const newButtonIppo = document.createElement("BUTTON");
        newButtonIppo.textContent = "->";
        individualPlayerPositionOne.appendChild(newButtonIppo);
        newButtonIppo.onclick = function () {
            displayIndividual(true, playersForTeam[0]);
        }

        const individualPlayerPositionTwo = document.createElement("DIV");
        individualPlayerPositionTwo.textContent = "Player Position Two: " + playersForTeam[1].name + " (" + playersForTeam[1].rating + ")";
        individualDiv.appendChild(individualPlayerPositionTwo);
        const newButtonIppt = document.createElement("BUTTON");
        newButtonIppt.textContent = "->";
        individualPlayerPositionTwo.appendChild(newButtonIppt);
        newButtonIppt.onclick = function () {
            displayIndividual(true, playersForTeam[1]);
        }

        const individualPlayerPositionThree = document.createElement("DIV");
        individualPlayerPositionThree.textContent = "Player Position Three: " + playersForTeam[2].name + " (" + playersForTeam[2].rating + ")";
        individualDiv.appendChild(individualPlayerPositionThree);
        const newButtonIppth = document.createElement("BUTTON");
        newButtonIppth.textContent = "->";
        individualPlayerPositionThree.appendChild(newButtonIppth);
        newButtonIppth.onclick = function () {
            displayIndividual(true, playersForTeam[2]);
        }

        const individualPlayerPositionFour = document.createElement("DIV");
        individualPlayerPositionFour.textContent = "Player Position Four: " + playersForTeam[3].name + " (" + playersForTeam[3].rating + ")";
        individualDiv.appendChild(individualPlayerPositionFour);
        const newButtonIppf = document.createElement("BUTTON");
        newButtonIppf.textContent = "->";
        individualPlayerPositionFour.appendChild(newButtonIppf);
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
        const individualPlayerHead = document.createElement("THEAD");
        individualPlayerTable.appendChild(individualPlayerHead);
        const individualPlayerBody = document.createElement("TBODY");
        individualPlayerTable.appendChild(individualPlayerBody);

        const cellTitleHead = document.createElement("th");
        individualPlayerHead.appendChild(cellTitleHead);
        cellTitleHead.textContent = "Round #";

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
            cellTitle.textContent = "Round " + (i + 1);

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

let teamsReady = teamsReadyForDisplay;

const categorySort = Array(3);
categorySort[0] = null;
categorySort[1] = "descend";
categorySort[2] = teamsReady;

const mainTable = document.createElement("TABLE");
main.appendChild(mainTable);
const mainHead = document.createElement("THEAD");
mainTable.appendChild(mainHead);
const mainHeadRow = document.createElement("tr");
mainHead.appendChild(mainHeadRow);
const mainBody = document.createElement("TBODY");
mainTable.appendChild(mainBody);

function sortArr(arr, properties) {
    if(categorySort[0] === properties[0] && categorySort[1] === "descend" && categorySort[2] === arr) {
        categorySort[1] = "ascend";
    } else if((properties[0] === "country" || properties[0] === "name") && categorySort[0] !== properties[0]) {
        categorySort[1] = "ascend";
    } else {
        categorySort[1] = "descend";
    }

    arr.sort(sortByProperty(properties, categorySort[1]));
    console.log(arr);

    categorySort[0] = properties[0];    
} 

function createBody(arr, properties) {
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
            if(key !== "games" && key !== "players") {
                const cell = document.createElement("td");
                if(key !== "roundOne" && key !== "roundTwo" && key !== "roundThree" && key !== "roundFour" && 
                key !== "roundFive" && key !== "roundSix" && key !== "roundSeven" && key !== "roundEight" && key !== "roundNine") {
                    cell.textContent = arr[i][key];
                }
                row.appendChild(cell);

                if(key === "country") {
                    const cellCountryBtn = document.createElement("BUTTON");
                    cell.appendChild(cellCountryBtn);
                    cellCountryBtn.textContent = "->";
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
                    cellNameBtn.onclick = function () {
                        displayIndividual(true, arr[i]);
                    }
                }

                if(key === "roundOne" || key === "roundTwo" || key === "roundThree" || key === "roundFour" || 
                key === "roundFive" || key === "roundSix" || key === "roundSeven" || key === "roundEight" || key === "roundNine") {
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
                        roundTeamsBtn.onclick = function () {
                            displayIndividual(false, arr[i].games[opponentIndexRound][0]);
                        }
                    } else {
                        const roundPlayersBtn = document.createElement("BUTTON");
                        cell.appendChild(roundPlayersBtn);
                        roundPlayersBtn.textContent = arr[i][key];
                        roundPlayersBtn.onclick = function () {
                            displayIndividual(true, arr[i].games[opponentIndexRound][0]);
                        }
                    }
                }
            }
        }
    }
}

function createTeamsTable() {
    createBody(teamsReady, ["points", "headToHead", "totalPoints", "opponentPoints", "avgPerfRating"]);
    categorySort[2] = teamsReady;

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

    const mainHeadTeamRoundOne = document.createElement("th");
    mainHeadTeamRoundOne.textContent = "Round 1";
    mainHeadRow.appendChild(mainHeadTeamRoundOne);

    const mainHeadTeamRoundTwo = document.createElement("th");
    mainHeadTeamRoundTwo.textContent = "Round 2";
    mainHeadRow.appendChild(mainHeadTeamRoundTwo);

    const mainHeadTeamRoundThree = document.createElement("th");
    mainHeadTeamRoundThree.textContent = "Round 3";
    mainHeadRow.appendChild(mainHeadTeamRoundThree);

    const mainHeadTeamRoundFour = document.createElement("th");
    mainHeadTeamRoundFour.textContent = "Round 4";
    mainHeadRow.appendChild(mainHeadTeamRoundFour);

    const mainHeadTeamRoundFive = document.createElement("th");
    mainHeadTeamRoundFive.textContent = "Round 5";
    mainHeadRow.appendChild(mainHeadTeamRoundFive);

    const mainHeadTeamRoundSix = document.createElement("th");
    mainHeadTeamRoundSix.textContent = "Round 6";
    mainHeadRow.appendChild(mainHeadTeamRoundSix);

    const mainHeadTeamRoundSeven = document.createElement("th");
    mainHeadTeamRoundSeven.textContent = "Round 7";
    mainHeadRow.appendChild(mainHeadTeamRoundSeven);

    const mainHeadTeamRoundEight = document.createElement("th");
    mainHeadTeamRoundEight.textContent = "Round 8";
    mainHeadRow.appendChild(mainHeadTeamRoundEight);

    const mainHeadTeamRoundNine = document.createElement("th");
    mainHeadTeamRoundNine.textContent = "Round 9";
    mainHeadRow.appendChild(mainHeadTeamRoundNine);
}

createTeamsTable();

let searchOutputArr = [];

const searchInputTextDiv = document.createElement("DIV");
searchInputTextDiv.textContent = "Search player or country";
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
searchRangeTextDiv.textContent = "Search player/country by rating";
search.appendChild(searchRangeTextDiv);
const searchRangeDiv = document.createElement("DIV");
search.appendChild(searchRangeDiv);
const searchRangeOne = document.createElement("INPUT");
searchRangeDiv.appendChild(searchRangeOne);
searchRangeOne.setAttribute("type", "text");
const searchRangeTwo = document.createElement("INPUT");
searchRangeDiv.appendChild(searchRangeTwo);
searchRangeTwo.setAttribute("type", "text");
const searchRangeBtn = document.createElement("BUTTON");
searchRangeDiv.appendChild(searchRangeBtn);
searchRangeBtn.textContent = "Search";

const searchSectionDiv = document.createElement("DIV");
search.appendChild(searchSectionDiv);

function displaySearchList() {
    while(searchSectionDiv.firstChild) {
        searchSectionDiv.removeChild(searchSectionDiv.firstChild);
    }

    if(typeof searchOutputArr[0][0] !== "undefined") {
        const listPlayersText = document.createElement("DIV");
        listPlayersText.textContent = "Players:";
        searchSectionDiv.appendChild(listPlayersText);
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
            newButton.onclick = function () {
                displayIndividual(true, searchOutputArrPlayers[0][i]);
            }
        }

        if(searchOutputArrPlayers.length > 1) {
            for(let i = 0; i < searchOutputArrPlayers.length; i++) {
                const searchPlayerPagination = document.createElement("BUTTON");
                playerPaginationButtonDiv.appendChild(searchPlayerPagination);
                searchPlayerPagination.textContent = i + 1;
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
                        newButtonX.onclick = function () {
                            displayIndividual(true, searchOutputArrPlayers[i][k]);
                        }
                    }
                }
            }
        }
    } else {
        const listPlayersTextNone = document.createElement("DIV");
        listPlayersTextNone.textContent = "No players match the search";
        searchSectionDiv.appendChild(listPlayersTextNone);
    }

    if(typeof searchOutputArr[1][0] !== "undefined") {
        const listTeamsText = document.createElement("DIV");
        listTeamsText.textContent = "Teams:";
        searchSectionDiv.appendChild(listTeamsText);
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
            newButtonY.onclick = function () {
                displayIndividual(false, searchOutputArrTeams[0][i]);
            }
        }

        if(searchOutputArrTeams.length > 1) {
            for(let i = 0; i < searchOutputArrTeams.length; i++) {
                const searchTeamPagination = document.createElement("BUTTON");
                teamPaginationButtonDiv.appendChild(searchTeamPagination);
                searchTeamPagination.textContent = i + 1;
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
                        newButtonZ.onclick = function () {
                            displayIndividual(false, searchOutputArrTeams[i][k]);
                        }
                    }
                }
            }
        }
    } else {
        const listTeamsTextNone = document.createElement("DIV");
        listTeamsTextNone.textContent = "No teams match the search";
        searchSectionDiv.appendChild(listTeamsTextNone);
    }
}

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


