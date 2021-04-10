const btnLike = document.querySelector("#like");
const btnLikeIcon = document.querySelector("#like i");
const btnDis = document.querySelector("#dislike");
const btnDisIcon = document.querySelector("#dislike i");
const likeNum = document.querySelector("#likeNum"); // p
const dislikeNum = document.querySelector("#dislikeNum"); //p

const LIKE_LS = "like"; 
const DISLIKE_LS = "dislike";
const btnLikeClass = btnLikeIcon.classList;
const btnDisClass = btnDisIcon.classList;

// 좋아요 
function changeUpIcon(event) { 
    if(btnLikeClass[0] === "far" && btnDisClass[0] === "far") {
        btnLikeClass.replace("far", "fas");
        upLikeNum(); 
    } else if (btnLikeClass[0] === "fas") {
        btnLikeClass.replace("fas", "far");
        cancleLike();
    } else if (btnLikeClass[0] === "far" && btnDisClass[0] === "fas") {
        btnLikeClass.replace("far", "fas");
        upLikeNum(); 
        btnDisClass.replace("fas", "far");
        cancleDislike();
    }
 }

function upLikeNum() {
    let likeValue = localStorage.getItem(LIKE_LS);
    if (likeValue === null) {
        likeValue = 0;
        likeValue = ++likeValue;
        likeNum.innerText = likeValue;
    } else {
        likeValue = ++likeValue;
        likeNum.innerText = likeValue;
    }
    saveLikeNum(likeValue);
}
function saveLikeNum(likeValue) {
    localStorage.setItem(LIKE_LS, likeValue);
}
function cancleLike() {
    let uplikeValue = localStorage.getItem(LIKE_LS);
    uplikeValue = --uplikeValue;
    likeNum.innerText = uplikeValue;
    saveLikeNum(uplikeValue);
}

// 싫어요
function changeDownIcon(event) {
    if(btnDisClass[0] === "far" && btnLikeClass[0] === "far") {
        btnDisClass.replace("far", "fas");
        downLikeNum(); 
    } else if (btnDisClass[0] === "fas") {
        btnDisClass.replace("fas", "far");
        cancleDislike();
    } else if (btnDisClass[0] === "far" && btnLikeClass[0] === "fas") {
        btnDisClass.replace("far", "fas");
        downLikeNum(); 
        btnLikeClass.replace("fas", "far");
        cancleLike();
    }
}
function downLikeNum() {
    let dislikeValue = localStorage.getItem(DISLIKE_LS);
    if (dislikeValue === null) {
        dislikeValue = 0;
        dislikeValue = ++dislikeValue;
        dislikeNum.innerText = dislikeValue;
    } else {
        dislikeValue = ++dislikeValue;
        dislikeNum.innerText = dislikeValue;
    }
    saveDisLikeNum(dislikeValue);
}
function saveDisLikeNum(dislikeValue) {
    localStorage.setItem(DISLIKE_LS, dislikeValue);
}
function cancleDislike() {
    let downlikeValue = localStorage.getItem(DISLIKE_LS);
    downlikeValue = --downlikeValue;
    dislikeNum.innerText = downlikeValue;
    saveDisLikeNum(downlikeValue);
}
// 함수 실행
function handleLike(event) {
    changeUpIcon(event);
}
function handleDislike(event) {
    changeDownIcon(event);
}


function a() {
    if(btnLikeClass[0] === "fas") {
        btnDis.addEventListener("click", cancleLike);
        btnLikeClass.replace("fas", "far");
        downLikeNum();
    }
}

function init() {
    btnLike.addEventListener("click", handleLike);
    if(localStorage.getItem(LIKE_LS) === null) {
        likeNum.innerText = 0;
    } else {
        likeNum.innerText = localStorage.getItem(LIKE_LS);
    }
    btnDis.addEventListener("click", handleDislike);
    if(localStorage.getItem(DISLIKE_LS) === null) {
        dislikeNum.innerText = 0;
    } else {
        dislikeNum.innerText = localStorage.getItem(DISLIKE_LS);
    }
}

init();
