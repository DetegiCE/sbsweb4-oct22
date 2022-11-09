$(function() {
    // $("#darkToggle").on("change", function() {
    //     $("body").toggleClass("dark-theme");
    // });

    $("#toggleBtn").on("click", function() {
        if($("body").hasClass("dark-theme")) {
            $("#toggleBtn").attr("src", "light.png");
        }
        else {
            $("#toggleBtn").attr("src", "dark.png");
        }
        $("body").toggleClass("dark-theme");
    })
});