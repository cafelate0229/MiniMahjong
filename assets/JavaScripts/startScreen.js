// オフラインボタンを押されたら、オフライン設定画面に移行する
const offlineBtn = document.getElementById("offlineBtn");
offlineBtn.addEventListener("click", () => {
    window.location.href = "offlineSetScreen.html";
});

// オンラインボタンを押されたら、オンライン設定画面に移行する
const onlineBtn = document.getElementById("onlineBtn");
onlineBtn.addEventListener("click", () => {
    window.location.href = "onlineSetScreen.html";
});

// 牌譜ボタンを押されたら、牌譜画面に移行する
const resumeBtn = document.getElementById("resumeBtn");
resumeBtn.addEventListener("click", () => {
    window.location.href = "resumeScreen.html";
});