$(function() {
    $("#themeBtn").on("click", changeTheme);

    function changeTheme() {
        var checkedTheme = $("input[name='theme']:checked").val();
        if(checkedTheme == "light") {
            $("body").removeClass("dark-theme");
            $("body").removeClass("black-theme");
        }
        else if(checkedTheme == "dark") {
            $("body").removeClass("black-theme");
            $("body").addClass("dark-theme");
        }
        else {
            $("body").removeClass("dark-theme");
            $("body").addClass("black-theme");
        }
    }
});