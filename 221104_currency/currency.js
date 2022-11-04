$(function() {
    var country = ["USD", "JPY", "EUR", "HKD", "TWD", "GBP", "AUD", "NZD", "INR", "THB", "RUB", "CAD", "TRY", "OMR"];
    function currencyHTML(countryCode) {
        return `<div class="tab">
        <img src="https://countryflagsapi.com/png/${countryCode.substring(0, 2)}" class="tabFlag">
        <span class="tabName">${countryCode}</span>
    </div>`;
    }

    for(var i=0 ; i<country.length ; i++) {
        $(".tabWrap").append(currencyHTML(country[i]));
    }

    if(country.length >= 7) {
        $(".tab").css("flex-direction", "column");
        $(".tab .tabName").css("padding", "5px");
        $(".tab .tabName").css("font-size", "1em");
    }

    // if(country.length >= 14) {
    //     $(".tabWrap").css("flex-flow", "wrap");
    //     $(".tab").css("width", 50/country.length + "%");
    // }

    $(".tab").on("click", function(){
        var currencyName = $(this).text().trim();
        $(".origCode").text(currencyName);
        $(".infoFlag").attr("src", `https://countryflagsapi.com/png/${currencyName.substring(0,2)}`);

        $("#otkInput").val(0);
        $("#ktoInput").val(0);
        $(".otkKrwValue").text(0);
        $(".ktoOrigValue").text(0);

        if(currencyName == "JPY") {
            $(".origValue").text("100");
        }
        else {
            $(".origValue").text("1");
        }
        $.ajax({
            url: `https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRW${currencyName}`,
            dataType: "json",
            success: function(data) {
                $(".krwValue").text(data[0].basePrice);
                $(".time").text(data[0].date + " " + data[0].time);
                $(".cbpValue").text(data[0].cashBuyingPrice);
                $(".cspValue").text(data[0].cashSellingPrice);
                $(".tspValue").text(data[0].ttSellingPrice);
                $(".tbpValue").text(data[0].ttBuyingPrice);
                console.log(data);
            }
        })
    });

    $("#otkInput").on("keyup", function() {
        var otkInputValue = $("#otkInput").val();
        var currencyValue = $(".krwValue").text();
        var changeValue = otkInputValue * currencyValue;

        var currencyName = $(".origCode").text();
        if(currencyName.indexOf("JPY") != -1) {
            changeValue /= 100;
        }
        $(".otkKrwValue").text(Number(changeValue).toLocaleString(undefined, {maximumFractionDigits: 2}));
    });

    $("#ktoInput").on("keyup", function() {
        var ktoInputValue = $("#ktoInput").val();
        var currencyValue = $(".krwValue").text();
        var changeValue = ktoInputValue / currencyValue;
        
        var currencyName = $(".origCode").text();
        if(currencyName.indexOf("JPY") != -1) {
            changeValue *= 100;
        }

        $(".ktoOrigValue").text(Number(changeValue).toLocaleString(undefined, {maximumFractionDigits: 2}));
    })
})