var counter = 1200000000;

$(document).ready(function () {
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
    $('#slideshow_image').fadeOut(300, function () {
        /* if statement to check if the variable is at a value that is out of bounds in regards to the array. Use modulus to reset */
    });

    await sleep(300);

    var whichSrc = counter % 6;

    $('#slideshow_image').attr('src', images[whichSrc]);
    $('#slideshow_image').fadeIn(1000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}