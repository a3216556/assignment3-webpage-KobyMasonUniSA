// Image cycling script
const images = [
    "../images/study1.png",
    "../images/study2.png",
    "../images/study3.png"
];

const studyImage = document.getElementById("studyImage");
const changeImageBtn = document.getElementById("changeImageBtn");

changeImageBtn.addEventListener("click", () => {
    studyImage.classList.add("fade-out");

    setTimeout(() => {
        const currentIndex = images.indexOf(studyImage.getAttribute("src"));
        const nextIndex = (currentIndex + 1) % images.length;
        studyImage.setAttribute("src", images[nextIndex]);

        studyImage.classList.remove("fade-out");
    }, 400); 
});


