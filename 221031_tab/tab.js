function contentChange(mode) {
    var menu1 = [
        {
            "title": "규정 개정 공지",
            "date": "2022-10-31",
            "link": "#abc"
        },
        {
            "title": "규정 개정 123",
            "date": "2022-10-31",
            "link": "#def"
        },
        {
            "title": "규정 개정 2",
            "date": "2022-10-31",
            "link": "#ghi"
        },
        {
            "title": "규정 개정 3",
            "date": "2022-10-30",
            "link": "#jkl"
        },
        {
            "title": "규정 개정 4",
            "date": "2022-10-29",
            "link": "#mno"
        }
    ];
    var menu2 = [
        {
            "title": "로그아웃은 어떻게 하나요",
            "date": "2022-10-31",
            "link": "#abc1"
        },
        {
            "title": "로그아웃은 어떻게 하나요 2",
            "date": "2022-10-31",
            "link": "#def2"
        },
        {
            "title": "로그아웃은 어떻게 하나요 3",
            "date": "2022-10-31",
            "link": "#ghi3"
        },
        {
            "title": "로그아웃은 어떻게 하나요 4",
            "date": "2022-10-31",
            "link": "#jkl4"
        },
        {
            "title": "로그아웃은 어떻게 하나요 5",
            "date": "2022-10-31",
            "link": "#mno5"
        }
    ];
    var menu3 = [
        {
            "title": "산학 협력 체결",
            "date": "2022-10-31",
            "link": "#abc1"
        },
        {
            "title": "산학 협력 체결 2",
            "date": "2022-10-31",
            "link": "#def2"
        },
        {
            "title": "산학 협력 체결 3",
            "date": "2022-10-31",
            "link": "#ghi3"
        },
        {
            "title": "산학 협력 체결 4",
            "date": "2022-10-31",
            "link": "#jkl4"
        },
        {
            "title": "산학 협력 체결 5",
            "date": "2022-10-31",
            "link": "#mno5"
        }
    ];
    
    if(mode == 0) {
        $(`#title li:nth-of-type(1)`).addClass("select");
        $(`#title li:nth-of-type(2)`).removeClass("select");
        $(`#title li:nth-of-type(3)`).removeClass("select");
        for(var i = 0 ; i < 5 ; i++) {
            $(`#content li:nth-of-type(${i+1}) > a > div`).text(menu1[i].title);
            $(`#content li:nth-of-type(${i+1}) > a > time`).text(menu1[i].date);
            $(`#content li:nth-of-type(${i+1}) > a`).attr("href", menu1[i].link);
        }
    }
    else if(mode == 1) {
        $(`#title li:nth-of-type(2)`).addClass("select");
        $(`#title li:nth-of-type(1)`).removeClass("select");
        $(`#title li:nth-of-type(3)`).removeClass("select");
        for(var i = 0 ; i < 5 ; i++) {
            $(`#content li:nth-of-type(${i+1}) > a > div`).text(menu2[i].title);
            $(`#content li:nth-of-type(${i+1}) > a > time`).text(menu2[i].date);
            $(`#content li:nth-of-type(${i+1}) > a`).attr("href", menu2[i].link);
        }
    }
    else if(mode == 2) {
        $(`#title li:nth-of-type(3)`).addClass("select");
        $(`#title li:nth-of-type(2)`).removeClass("select");
        $(`#title li:nth-of-type(1)`).removeClass("select");
        for(var i = 0 ; i < 5 ; i++) {
            $(`#content li:nth-of-type(${i+1}) > a > div`).text(menu3[i].title);
            $(`#content li:nth-of-type(${i+1}) > a > time`).text(menu3[i].date);
            $(`#content li:nth-of-type(${i+1}) > a`).attr("href", menu3[i].link);
        }
    }
}