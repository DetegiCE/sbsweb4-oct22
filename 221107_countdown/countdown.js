$(function() {
    var goalTime = new Date(2022, 10, 10, 12, 50, 00);

    var countdownTimer = setInterval(function() {
        var nowTime = new Date();
        var diffTime = goalTime - nowTime;
        console.log(diffTime);

        var daysLeft = Math.floor(diffTime / 86400000);
        console.log(daysLeft);

        var hoursLeft = Math.floor((diffTime - daysLeft * 86400000) / 3600000);
        console.log(hoursLeft);

        var minutesLeft = Math.floor((diffTime - daysLeft * 86400000 - hoursLeft * 3600000) / 60000);
        console.log(minutesLeft); 

        var secondsLeft = Math.floor(diffTime % 60000 / 1000);
        console.log(secondsLeft);
    }, 1000);
    
});