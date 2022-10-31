function numberChange(mode) {
    var number = Number($(".numberWrap h3").text());
    if(mode == -1) {
        number -= 1;
        $(".numberWrap h3").text(number);
    }
    else if(mode == 1) {
        number += 1;
        $(".numberWrap h3").text(number);
    }
    else {
        $(".numberWrap h3").text(0);
    }

    number = Number($(".numberWrap h3").text());
    if(number < 0) {
        $(".numberWrap h3").css({"color": "red"});
    }
    else if(number > 0) {
        $(".numberWrap h3").css({"color": "green"});
    }
    else {
        $(".numberWrap h3").css({"color": "black"});
    }
}