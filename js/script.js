// Heder slider

var i = 0;

function prevButt(str) {
    var image = document.querySelectorAll(str);

    image[i].classList.remove('shown');

    i = i - 1;
    if( i < 0) {
      i = image.length - 1;  
    }
    image[i].classList.add('shown');
};

function nextButt(str) {
    var image = document.querySelectorAll(str);

    image[i].classList.remove('shown');
    i = i + 1;
    if( i >= image.length) {
      i = 0;  
    }
    image[i].classList.add('shown');
};
