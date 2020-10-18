//  Author:  Andrew Clos
//  Date:  11/20/2019
//  Title: photo script.
//  Description: This program rotates through three images in carousel fasion
//               on the homepage.

var pIndex = 0; 
var delay = 5000;  //delay in miliseconds 
var images = [];  //array to hold photo names/locations.  Will be inserted in to the HTML every five seconds.

//these are the three images I'd like to display on my homepage.
images[0] = 'images/1.jpg';
images[1] = 'images/2.jpg';
images[2] = 'images/4.jpg';

//run the script once the document has loaded.
document.addEventListener('DOMContentLoaded', changeImg);

//function to change the image being displayed
function changeImg(){
    document.move.src = images[2];

    if(pIndex + 1 < images.length) {
        pIndex++;
    }
    else {
        pIndex = 0;
    }
    //re-runs at whatever the specified delay is
    setTimeout("changeImg()", delay);
}
