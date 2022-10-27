var itemList = 3;

$(function() {
    $(".basketCount").text(itemList);
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
</li>`;
    itemList += 1;
    return returnHTML;
}

function changeCount() {
    var basketListCount = $("#basketList li").length;
    $(".basketCount").text(basketListCount);
}

function changeEachPrice(itemId) {
    var onePrice = $(`#item${itemId} .itemPrice`).attr("value");
    var itemCount = $(`#item${itemId} .itemCount`).val();
    var price = onePrice * itemCount;
    console.log(price);
    $(`#item${itemId} .itemTotalPrice`).text(Number(price).toLocaleString());
    $(`#item${itemId} .itemTotalPrice`).attr({"value": price});
}

function addItem() {
    var itemName = $("#itemNameInp").val();
    var itemSeller = $("#itemSellerInp").val();
    var itemPrice = $("#itemPriceInp").val();
    var itemCount = $("#itemCountInp").val();

    var newItemHTML = itemHTML(itemName, itemSeller, itemPrice, itemCount);
    $("#basketList").append(newItemHTML);
    changeCount();
}