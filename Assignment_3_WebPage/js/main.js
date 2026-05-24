// Simple image cycling script
const images = [
    "../assets/study1.jpg",
    "../assets/study2.jpg",
    "../assets/study3.jpg"
];

let currentIndex = 0;

document.getElementById("changeImageBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("studyImage").src = images[currentIndex];
});
