const btnNo = document.getElementById("btnNo");
const btnYes = document.getElementById("btnYes");
const btnDo = document.getElementById("btnDo");

btnNo.addEventListener("mouseover", function () {
    const btnRect = btnNo.getBoundingClientRect();  // Corrected here to btnNo

    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNo.style.left = randomX + "px";  // Corrected here to btnNo
    btnNo.style.top = randomY + "px";   // Corrected here to btnNo
});

btnYes.onclick = () => {
    document.getElementById("pic1").classList.add("d-none");
    document.getElementById("pic2").classList.remove("d-none");
    document.getElementById("btnDo").classList.add("d-none");
    document.getElementById("btnI").classList.remove("d-none");
};
