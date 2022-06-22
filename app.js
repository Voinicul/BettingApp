
document.querySelector('.home-submit-button').onclick = function () {
    let homeGoals;
    let homeGames;
    let calculation;
    homeGoals = document.querySelector('.home-games-with-3-goals').value;
    homeGames = document.querySelector('.home-games').value;
    calculation = (((Number(homeGoals) / Number(homeGames)) * 100) / 100).toPrecision(2);

    document.querySelector(".home-results").value = calculation + '%';
    return false;
}

document.querySelector('.away-submit-button').onclick = function () {
    let awayGoals;
    let awayGames;
    let calculation;
    awayGoals = document.querySelector('.away-games-with-3-goals').value;
    awayGames = document.querySelector('.away-games').value;
    calculation = (((Number(awayGoals) / Number(awayGames)) * 100) / 100).toPrecision(2);

    document.querySelector(".away-results").value = calculation + '%';
    return false;
}

document.querySelector('.total-average-button').onclick = function () {
    let homeAverage;
    let awayAverage;
    let totalCalculation;
    homeAverage = document.querySelector('.total-home-average').value;
    awayAverage = document.querySelector('.total-away-average').value;
    totalCalculation = ((Number(homeAverage) + Number(awayAverage)) / 2).toPrecision(3);
    document.querySelector(".total-results").value = totalCalculation ;
    return false;
}


document.querySelector('.calculate-chances').onclick = function () {
    let totalAverage;
    let homeHomeAverage;
    let awayAwayAverage;
    let totalChancesCalculation;
    let result = document.getElementsByClassName('result');
    totalAverage = document.querySelector('.here-total-average-goals').value;
    homeHomeAverage = document.querySelector('.host-total-average-goals').value;
    awayAwayAverage = document.querySelector('.guest-total-average-goals').value;
    totalChancesCalculation = (Number(homeHomeAverage) * (Number(totalAverage) + Number(awayAwayAverage) * Number(totalAverage)) / 0.10).toPrecision(3);
   
    if (Number(totalChancesCalculation) === 0 || Number(totalChancesCalculation) <= 20.99) {
        document.querySelector(".recomended-bet").value = totalChancesCalculation + '% ' + " Recommended bet : Under 2.5 goals! Under 3.5 goals! ";
    } else if (totalChancesCalculation === 21 || totalChancesCalculation <= 30.99) {
        document.querySelector(".recomended-bet").value = totalChancesCalculation + '% ' + " Recommended bet : Over 1.5 goals! ";
    } else if (totalChancesCalculation === 31 || totalChancesCalculation <= 40.99) {
        document.querySelector(".recomended-bet").value = totalChancesCalculation + '% ' + " Recommended bet : 2-4 goals or 2-5 goals! ";
    } else if (totalChancesCalculation === 41 || totalChancesCalculation <= 50.99) {
        document.querySelector(".recomended-bet").value = totalChancesCalculation + '% ' + " Recommended bet : Over 2.5 goals! ";
    } else {
        document.querySelector(".recomended-bet").value = totalChancesCalculation + '% ' + " Recommended bet : Over 3 (asian handicap bet) goals or over 3.5 goals ";

    }
    return false;

    
    
}
