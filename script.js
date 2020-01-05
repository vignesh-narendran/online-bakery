var products = {};
var priceTable = {};
var items = {};
products = {
    cake: "https://image.flaticon.com/icons/svg/817/817418.svg",
    donut: "https://image.flaticon.com/icons/svg/817/817397.svg",
    biscuit: "https://image.flaticon.com/icons/svg/817/817399.svg"
};
priceTable = {
    cake: 40,
    donut: 25,
    biscuit: 15
};
items = {
    1: "cake",
    2: "donut",
    3: "biscuit"
};

$(document).ready(function () {

    n = 1;
    totalAmt = 0;
    qty = 0;
    $(".qty-display ").val(qty);
    $(".product-images").attr("src", products["cake"]);
    $(".amount").text("$" + priceTable["cake"]);

    $(".foodname").text(items[n]);
    
    $(".right-arrow").click(function () {
    $("#add").val("ADD");
    if (n < 3) {
        n = n + 1;
    } else {
        n = 1;
    }
    $(".foodname").text(items[n]);
    $(".amount").text(
        "$" + priceTable[document.getElementById("foodname").textContent]
    );
    $(".product-images").attr(
        "src",
        products[document.getElementById("foodname").textContent]
    );

});
$(".left-arrow").click(function () {
    $("#add").val("ADD");
    if (n < 2) {
        n = 3;
    } else {
        n = n - 1;
    }
    $(".foodname").text(items[n]);
    $(".amount").text(
        "$" + priceTable[document.getElementById("foodname").textContent]
    );
    $(".product-images").attr(
        "src",
        products[document.getElementById("foodname").textContent]
    );
});
$("#qty-inc").click(function () {
    if (qty < 10) {
        qty = qty + 1;
    } else {
        qty = 10;
    }
    $(".qty-display").val(qty);
});
$("#qty-dec").click(function () {
    if (qty < 1) {
        qty = 0;
    } else {
        qty = qty - 1;
    }
    $(".qty-display").val(qty);
});
$("#add").click(function () {
    totalAmt = totalAmt + (priceTable[document.getElementById("foodname").textContent] * qty);
    $("#add").val("ADDED");
});
$("#checkout").click(function () {
    $(".sub-container").hide();
    $(".popup").show();
    $(".totalAmt").text("$" + totalAmt + ".00");
});
$(".popup").click(function () {
    $(".sub-container").show();
    $(".popup").hide();
});
});
