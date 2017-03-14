var counter = 1200000000;
$(document).ready(function () {
    $("#userstory").html('"I have always wanted to see what the characters that I have fallen in love look like. Where they live, how they live. This product brought my fantasies to life. It is like I am in heaven!" <br><br> - George Michaels');
    $('#starrating').attr('src', "images/UserStories/5 star rating.png");
    $("#prev_image").click(function () {
        update(-1);
    });
    $("#next_image").click(function () {
        update(1);
    });
});
// Write all the names of images in slideshow
var images = ["images/UserStories/Fantasy1.jpg", "images/UserStories/Fantasy2.jpg", "images/UserStories/Fantasy3.jpg", "images/UserStories/PostApocalyptic1.jpg", "images/UserStories/PostApocalyptic2.jpg", "images/UserStories/Vacation.jpg"];
async function update(change) {
    counter += change;
    $('#slideshow_image').fadeOut(300, function () {});
    await
    sleep(300);
    var whichSrc = counter % 6;
    $('#slideshow_image').attr('src', images[whichSrc]);
    $('#slideshow_image').fadeIn(1000);
    if (images[whichSrc] == images[0]) {
        $("#userstory").html('"I have always wanted to see what the characters that I have fallen in love look like. Where they live, how they live. This product brought my fantasies to life. It is like I am in heaven!" <br><br> - George Michaels');
        $('#starrating').attr('src', "images/UserStories/5 star rating.png");
    } else if (images[whichSrc] == images[1]) {
        $("#userstory").html('"Revolutionary! Unlike anything that anyone has ever seen! The books we tested fully capture how wild this product is!" <br><br> - ign.com');
    } else if (images[whichSrc] == images[2]) {
        $("#userstory").html('"Incredible, poweful technology that is bound to be used by many. It gives access to many breathtaking scenes one could only but imagine before." <br><br> - cnet.com');
    } else if (images[whichSrc] == images[3]) {
        $("#userstory").html('"Best thing to ever happen for avid book readers. The books utilized to test certainly proved how amazing of a product this can be." <br><br> - techcrunch.com');
    } else if (images[whichSrc] == images[4]) {
        $("#userstory").html('"We have never tested a product like this before. Not a single one of us wanted to put it down!" <br><br> - pcmag.com');
        $('#starrating').attr('src', "images/UserStories/5 star rating.png");
    } else if (images[whichSrc] == images[5]) {
        $("#userstory").html('"I have always wanted to be see how it is like in my favorite book. Unfortunately, the battery life is not long enough." <br><br> - Manuel');
        $('#starrating').attr('src', "images/UserStories/4 star rating.png");
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}