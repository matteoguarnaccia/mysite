const imagePath = ["./resources/images/header-image.jpg", "./resources/images/profile-img.jpg", "./resources/images/header-img2.jpg", "./resources/images/hader-img3.jpg"]
let i=0;

let button = document.getElementById('button');

function changeBackground() {
    if (i >= imagePath.length) {
        i = 0;
        header.style.backgroundImage = ``;
        return;
    }
    header.style.backgroundImage = `url(${imagePath[i]})`;
    i++;
}
button.addEventListener('click', changeBackground);