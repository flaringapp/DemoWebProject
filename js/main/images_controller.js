const dynamicLogoLeft = document.getElementById("dynamic_logo_left");
const dynamicLogoRight = document.getElementById("dynamic_logo_right");
const dynamicLogos = [dynamicLogoLeft, dynamicLogoRight];

const dynamicLogoImageId = "dynamic_logo_image";

const imagePath = "images/fire.png";

let isImageCreated = false;

function toggleImages() {
    if (isImageCreated) {
        removeImages();
    } else {
        addImages()
    }

    isImageCreated = !isImageCreated;
}

function addImages() {
    dynamicLogos.forEach(logo => logo.appendChild(createImage()));
}

function createImage() {
    var image = document.createElement('img');
    image.id = dynamicLogoImageId;
    image.src = imagePath;
    image.style.width = "100px";
    image.style.height = "100px";
    return image;
}

function removeImages() {
    dynamicLogos.forEach(logo => {
        while (logo.firstChild) {
            logo.removeChild(logo.firstChild);
        }
    });
}