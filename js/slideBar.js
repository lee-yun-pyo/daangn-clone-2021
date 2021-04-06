const slideImg = document.querySelectorAll(".slideBar-img");
const btn_left = document.querySelector(".slideBtn:first-child");
const btn_right = document.querySelector(".slideBtn:last-child");

let img_num = 0;
const SHOWING_CN = "showing_slide";
slideImg[img_num].classList.add(SHOWING_CN);

function plus(arr_number) {
    let num = arr_number;
    if (num === 2) {
        num = 0;
    } else {
        num++;
    }
    return num;
}

function minus(arr_number) {
    let num = arr_number;
    if (num === 0) {
        num = 2;
    } else {
        num--;
    }
    return num;
}

function clickBtnRight() {
    const right_num = plus(img_num);
    slideImg[img_num].classList.remove(SHOWING_CN);
    slideImg[right_num].classList.add(SHOWING_CN);
    img_num = right_num;
}

function clickBtnLeft() {
    const left_num = minus(img_num);
    slideImg[img_num].classList.remove(SHOWING_CN);
    slideImg[left_num].classList.add(SHOWING_CN);
    img_num = left_num;
}

function init() {
    btn_right.addEventListener("click", clickBtnRight);
    btn_left.addEventListener("click",clickBtnLeft);
}

init();