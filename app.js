
//GOALS BETTING APP
//HERE YOU PUT THE MATCHES PLAYED BY THE HOST ON THE OWN FIELD AND BY THE GUESTS ON THE GO AND CALCULATE THE PERCENTAGE OF THE MATCHES WITH A MINIMUM 3 GOALS

function homeGoalsPercentage(games3GoalsAtLeast, homeGames) {
    let percentagetHomeTeam = (games3GoalsAtLeast / homeGames) * 100;
    return percentagetHomeTeam;
}
console.log(homeGoalsPercentage(2, 4));

function awayGoalsPercentage(games3GoalsAtLeast, awayGames) {
    let percentagetAwayTeam = (games3GoalsAtLeast / awayGames) * 100;
    return percentagetAwayTeam;
}
console.log(awayGoalsPercentage(3, 6));


//PERCENTAGE OF MATCHES WITH A MINIMUM OF 3 GOALS PLAYED BY HOST TEAMS AND GUESTS

percentagetHomeTeam = 0.50;
percentagetAwayTeam = 0.50;


//CALCULATE ACCORDING TO THE AVERAGE GOALS PLAYED AT HOME BY THE HOST AND THE MATCHES PLAYED AWAY BY THE GUESTS, INCLUDING THE TOTAL AVERAGE GOALS PER MATCH PER TEAM, THIS SEASON
function betApp(averageGoalTotalHosts, averageGoalsTotalGuests) {
    let averageGoals = (averageGoalTotalHosts + averageGoalsTotalGuests) / 2;
    let calculate = (averageGoals * percentagetHomeTeam + averageGoals * percentagetAwayTeam) / 0.10;
    if (calculate === 0 || calculate <= 20.99) {
        console.log('Under 2.5 goals or Under 3.5 goals')
    } else if (calculate === 21 || calculate <= 30.99) {
        console.log('Over 1.5 goals');
    } else if (calculate === 31 || calculate <= 40.99) {
        console.log('2-4 goals or 2-5 goals');
    } else if (calculate === 41 || calculate <= 50.99) {
        console.log('Over 2.5 goals');
    } else {
        console.log('Over 3 (asian handicap bet) goals or over 3.5 goals');
    }
    return calculate

}
//here you put the average of goals per match
console.log(betApp(4.00, 2.90));
