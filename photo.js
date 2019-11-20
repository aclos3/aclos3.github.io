var pIndex = 0;
var delay = 5000;
var images = [];

images[0] = 'images/1.jpg';
images[1] = 'images/2.jpg';
images[2] = 'images/3.jpg';

document.addEventListener('DOMContentLoaded', changeImg);

function changeImg(){
    document.move.src = images[pIndex];

    if(pIndex + 1 < images.length) {
        pIndex++;
    }
    else {
        pIndex = 0;
    }
    setTimeout("changeImg()", delay);
}
