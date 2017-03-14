var phoneNumber = "(888) 638-6668";
var addresss = "143 Main St, Salt Lake City, UT 84111";
var theEmail = "LimitlessRea lity@gmail.c om";
var clickOnOff = false;
$(document).ready(function () {
    $("#logo").on("mouseover", function () {
        $(this).html('<img src="images/logo.png"/>');
    });
    $("#logo").on("mouseout", function () {
        $(this).html("<i>Limitless Reality</i>");
    });
    $("#phoneNum").on("click", function () {
        if (clickOnOff) {
            $("#phoneNum").animate({
                "font-size": "1em"
            });
            $(this).width("150px");
            $("#phoneNum").html("Our Phone Number");
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
            $("#address").html("Our Address");
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
            $("#email").html("Our Email");
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