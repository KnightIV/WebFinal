$(document).ready(function () {
    $("#prev_image").click(function () {
        prev();
    });
    $("#next_image").click(function () {
        next();
    });
});
// Write all the names of images in slideshow
var images = ["images/UserStories/Fantasy1.jpg", "images/UserStories/Fantasy2.jpg", "images/UserStories/Fantasy3.jpg", "images/UserStories/PostApocalyptic1.jpg", "images/UserStories/PostApocalyptic2.jpg", "images/UserStories/Vacation.jpg"];
var prev_val = images[0];
var next_val = images[0];

function prev() {
    $('#slideshow_image').fadeOut(300, function () {
        /* if statement to check if the variable is at a value that is out of bounds in regards to the array. Use modulus to reset */
    });
    $('#slideshow_image').fadeIn(1000);
}

function next() {
    $('#slideshow_image').fadeOut(300, function () {
        /* same thing as above but for positive */
    });
    $('#slideshow_image').fadeIn(1000);
}