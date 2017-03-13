var phoneNumber = "666-6666-666";
var addresss = "xthe addressx";
var theEmail = "xour emailx";
var clickOnOff = false;
$(document).ready(function () {
    $("#phoneNum").on("click", function () {
        if (clickOnOff) {
            $("#phoneNum").animate({
                "font-size": "1em"
            });
            $(this).width("150px");
            $("#phoneNum").html("OUR PHONE NUMBER");
            clickOnOff = false;
        } else {
            $("#phoneNum").animate({
                "font-size": "3em"
            });
            $(this).width("300px");
            $("#phoneNum").html(phoneNumber);
            clickOnOff = true;
        }
    });
    $("#address").on("click", function () {
        if (clickOnOff) {
            $("#address").animate({
                "font-size": "1em"
            });
            $(this).width("150px");
            $("#address").html("OUR ADDRESS");
            clickOnOff = false;
        } else {
            $("#address").animate({
                "font-size": "3em"
            });
            $(this).width("300px");
            $("#address").html(addresss);
            clickOnOff = true;
        }
    });
    $("#email").on("click", function () {
        if (clickOnOff) {
            $("#email").animate({
                "font-size": "1em"
            });
            $(this).width("150px");
            $("#email").html("OUR EMAIL");
            clickOnOff = false;
        } else {
            $("#email").animate({
                "font-size": "3em"
            });
            $(this).width("300px");
            $("#email").html(theEmail);
            clickOnOff = true;
        }
    });
});