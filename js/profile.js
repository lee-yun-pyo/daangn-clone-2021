const list = document.querySelector(".mainProf-bars_bar");

console.log(list);

function colorChange() {
    list.style.color = "red";
}
list.addEventListener("click", colorChange);