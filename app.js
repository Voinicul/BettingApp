
//goals bet function
//here you put the matches played by the hosts and in how many of these matches played at home, at least 3 goals were scored
//here you put the matches played by the guests and in how many of these matches played away, at least 3 goals were scored

function homeGoalsPercentage(games3GoalsAtLeast, homeGames) {
    let procentHome = (games3GoalsAtLeast / homeGames) * 100;
    return procentHome;
}
console.log(homeGoalsPercentage(2, 7));

function awayGoalsPercentage(games3GoalsAtLeast, awayGames) {
    let procentAway = (games3GoalsAtLeast / awayGames) * 100;
    return procentAway;
}
console.log(awayGoalsPercentage(3, 8));


//How many matches played by the host team and how many of them were with at least 3 goals
//How many matches played by the guest team and in how many of them, there were at least 3 goals
let percentageHomeTeam = 0.29;
let percentageGuestTeam = 0.38;


//calculation function with percentage of matches, in which at least 3 goals were scored
function betApp(averageGoalTotalHosts, averageGoalsTotalGuests) {
    let averageGoals = (averageGoalTotalHosts + averageGoalsTotalGuests) / 2;
    let calculate = (averageGoals * percentageHomeTeam + averageGoals * percentageGuestTeam) / 0.10;
    if (calculate === 0 || calculate <= 20) {
        console.log('Under 2.5 goals or Under 3.5 goals')
    } else if (calculate === 21 || calculate <= 30) {
        console.log('Over 1.5 goals');
    } else if (calculate === 31 || calculate <= 40) {
        console.log('2-4 goals or 2-5 goals');
    } else if (calculate === 41 || calculate <= 50) {
        console.log('Over 2.5 goals');
    } else {
        console.log('Over 3 (asian handicap bet) goals or over 3.5 goals');
    }
    return calculate

}
//here you put the average of goals per match
console.log(betApp(1.93, 2.00));
