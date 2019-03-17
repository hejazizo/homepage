// logo flashesh between logo1.svg and logo2.svg --> now it's deactivated by comments
// logo changes the logo text
function displayNextImage() {

  y = (y === logotxt.length - 1) ? 0 : y + 1;
  if (y < 6) {
    var image_x = document.getElementById('img2');
    image_x.style.display = 'inline-block';
        x = (x === images.length - 1) ? 0 : x + 1;
        document.getElementById("img2").src = images[x];
  }else{
    var image_x = document.getElementById('img2');
    image_x.style.display = 'none';
    document.getElementsByClassName("logotxt")[0].innerHTML = logotxt[y]
  }

    console.log(runs);
    if (runs++ === logotxt.length*1) {
      window.clearInterval(intervalID);
      document.getElementsByClassName("logotxt")[0].innerHTML = '';
      document.getElementById('img1').style.display = 'none';
      document.getElementById('img2').style.display = 'none';  
    }
}

// function displayPreviousImage() {
//     x = (x <= 0) ? images.length - 1 : x - 1;
//     document.getElementById("img").src = images[x];
// }

runs = 0

function changeLogo() {
    intervalID = setInterval(displayNextImage, 250);
}

var images = [], x = -1;
images[0] = "logo3.svg";
images[1] = "logo4.svg";

counter = 0
var logotxt = [], y = -1;
logotxt[counter++] = "";
logotxt[counter++] = "";
logotxt[counter++] = "";
logotxt[counter++] = "";
logotxt[counter++] = "";
logotxt[counter++] = "";
logotxt[counter++] = "H";
logotxt[counter++] = "He";
logotxt[counter++] = "Hey";
logotxt[counter++] = "Hey!";
logotxt[counter++] = "Hey!";
logotxt[counter++] = "Hey!";
logotxt[counter++] = "";