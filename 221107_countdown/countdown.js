$(function() {
    var goalTime = new Date(2022, 10, 9, 11, 29, 10);

    var countdownTimer = setInterval(function() {
        var nowTime = new Date();
        var diffTime = goalTime - nowTime;
        console.log(diffTime);
        if(diffTime < 0) {
            $(".timeWrap").css("display", "none");
            $(".endWrap").css("display", "block");
            clearInterval(countdownTimer);
        }
        else {
            var daysLeft = Math.floor(diffTime / 86400000);

            var hoursLeft = Math.floor((diffTime - daysLeft * 86400000) / 3600000);
            console.log(hoursLeft);

            var minutesLeft = Math.floor((diffTime - daysLeft * 86400000 - hoursLeft * 3600000) / 60000);
            console.log(minutesLeft); 

            var secondsLeft = Math.floor(diffTime % 60000 / 1000);
            console.log(secondsLeft);

            $("#days").text(String(daysLeft).padStart(2, '0'));
            $("#hours").text(String(hoursLeft).padStart(2, '0'));
            $("#minutes").text(String(minutesLeft).padStart(2, '0'));
            $("#seconds").text(String(secondsLeft).padStart(2, '0'));
        }
    }, 1000);
    
    var monthString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    $("#goalMonth").text(monthString[goalTime.getMonth()]);
    $("#goalDay").text(goalTime.getDate());
    $("#goalYear").text(goalTime.getFullYear());
    $("#goalHour").text(String(goalTime.getHours()).padStart(2, '0'));
    $("#goalMinute").text(String(goalTime.getMinutes()).padStart(2, '0'));
    $("#goalSecond").text(String(goalTime.getSeconds()).padStart(2, '0'));
});