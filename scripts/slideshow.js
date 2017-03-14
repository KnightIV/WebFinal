var counter = 0;
var imageSource = [];
imageSource[0] = 'images/logo.png';
imageSource[1] = 'images/SlideShow/Scanner.png';
imageSource[2] = 'images/SlideShow/HobbitBook.png';
imageSource[3] = 'images/SlideShow/OculusProduct.png';
imageSource[4] = 'images/SlideShow/LandscapeSlide.png';
changePic();

function changePic() {
    var whichPic = counter % 5;
    document.getElementById("slides").src = imageSource[whichPic];
    counter++;
}
setInterval(changePic, 2000);