// Image cycling script
const images = [
    "../images/study1.png",
    "../images/study2.png",
    "../images/study3.png"
];

const studyImage = document.getElementById("studyImage");
const prevImageBtn = document.getElementById("prevImage");
const nextImageBtn = document.getElementById("nextImage");

let currentIndex = 0;

function showImage(newIndex) {
    currentIndex = (newIndex + images.length) % images.length;
    studyImage.classList.add("fade-out");

    setTimeout(() => {
        studyImage.setAttribute("src", images[currentIndex]);
        studyImage.classList.remove("fade-out");
    }, 400);
}

nextImageBtn.addEventListener("click", () => {
    showImage(currentIndex + 1);
});

prevImageBtn.addEventListener("click", () => {
    showImage(currentIndex - 1);
});
