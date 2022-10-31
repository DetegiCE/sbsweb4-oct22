function changeScreen(mode) {
    if(mode == 0) {
        $(".screen").removeClass("button2");
        $(".screen").removeClass("button3");
        $(".screen").removeClass("button4");
        $(".screen").addClass("button1");
        $(".screen h2").text("RED");
    }
    else if(mode == 1) {
        $(".screen").removeClass("button1");
        $(".screen").removeClass("button3");
        $(".screen").removeClass("button4");
        $(".screen").addClass("button2");
        $(".screen h2").text("GREEN");
    }
    else if(mode == 2) {
        $(".screen").removeClass("button2");
        $(".screen").removeClass("button1");
        $(".screen").removeClass("button4");
        $(".screen").addClass("button3");
        $(".screen h2").text("BLUE");
    }
    else {
        $(".screen").removeClass("button2");
        $(".screen").removeClass("button3");
        $(".screen").removeClass("button1");
        $(".screen").addClass("button4");
        $(".screen h2").text("PURPLE");
    }
}