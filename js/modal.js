const subBtn = document.querySelector(".subscription");
const modal_overlay = document.querySelector(".like-modal_overlay");
const modal = document.querySelector(".like-modal");
const sub_YN_btn = document.querySelectorAll(".like-modal_content-btn button");

const UNSHOWING = "modal-unShowing";

function handleModal() {
    modal.classList.remove(UNSHOWING);
}
function handleCloseModal() {
    modal.classList.add(UNSHOWING);
}
function init() {
    subBtn.addEventListener("click", handleModal);
    modal_overlay.addEventListener("click", handleCloseModal);
    sub_YN_btn[0].addEventListener("click", handleCloseModal);
}

init();