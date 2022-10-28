var itemList = 1;

$(function() {
    changeCount();
    changeTotalPrice();
});

function itemHTML(name, seller, price, count) {
    var returnHTML = `<li id="item${itemList}">
    <div class="itemNameWrap">
        <p class="itemName">${name}</p>
        <p>판매자: <span class="itemSeller">${seller}</span></p>
    </div>
    <div class="itemPriceWrap">
        <span class="itemPrice" value=${price}>${Number(price).toLocaleString()}</span>원
    </div>
    <div class="itemCountWrap">
        <input type="number" class="itemCount" min="1" value="${count}" onkeyup="changeEachPrice(${itemList})">
    </div>
    <div class="itemTotalPriceWrap">
        <span class="itemTotalPrice" value=${price*count}>${Number(price * count).toLocaleString()}</span>원
    </div>
    <button onclick="removeItem(${itemList})">x</button>
</li>`;
    itemList += 1;
    return returnHTML;
}

function couponHTML(name, sale) {
    var returnHTML = `<option sale="${sale}">${name} (${sale}% 할인)</option>`;
    return returnHTML;
}

function addCoupon() {
    var couponName = $("#couponNameInp").val();
    var couponSale = $("#couponSaleInp").val();
    var newCouponHTML = couponHTML(couponName, couponSale);
    $("#coupon").append(newCouponHTML);
}

function removeItem(itemId) {
    $(`#item${itemId}`).remove();
    changeCount();
    changeTotalPrice();
}

function changeCount() {
    var basketListCount = $("#basketList li").length;
    $(".basketCount").text(basketListCount);
}

function changeTotalPrice() {
    var basketList = $("#basketList li .itemTotalPrice");

    var basketPrice = $.map(basketList, function(v, i) {

        return Number(v.innerText.replaceAll(',',''));
    });

    var sum = 0;
    for(var i in basketPrice) {
        sum += basketPrice[i];
    }
    console.log(sum);
    $(".itemTotalPriceSum").text(Number(sum).toLocaleString());
}

function changeEachPrice(itemId) {
    var onePrice = $(`#item${itemId} .itemPrice`).attr("value");
    var itemCount = $(`#item${itemId} .itemCount`).val();
    var price = onePrice * itemCount;
    console.log(price);
    $(`#item${itemId} .itemTotalPrice`).text(Number(price).toLocaleString());
    $(`#item${itemId} .itemTotalPrice`).attr({"value": price});

    changeTotalPrice();
}

function addItem() {
    var itemName = $("#itemNameInp").val();
    var itemSeller = $("#itemSellerInp").val();
    var itemPrice = $("#itemPriceInp").val();
    var itemCount = $("#itemCountInp").val();

    var newItemHTML = itemHTML(itemName, itemSeller, itemPrice, itemCount);
    $("#basketList").append(newItemHTML);
    changeCount();
    changeTotalPrice();
}

function couponChange() {
    var selectedCoupon = $("#coupon option:selected");
    var saleValue = Number(selectedCoupon.attr("sale"));

    var basketList = $("#basketList li .itemTotalPrice");
    var basketPrice = $.map(basketList, function(v, i) {
        return Number(v.innerText.replaceAll(',',''));
    });
    var sum = 0;
    for(var i in basketPrice) {
        sum += basketPrice[i];
    }

    var salePrice = Math.round(sum / 100 * saleValue);
    $(".couponSalePrice").text(Number(salePrice).toLocaleString());

    var finalPrice = sum - salePrice;
    $(".afterCouponPrice").text(Number(finalPrice).toLocaleString());
}