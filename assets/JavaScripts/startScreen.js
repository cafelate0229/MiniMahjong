// ゲーム設定を初期化する
sessionStorage.removeItem("isOffline");


// オフラインボタンを押されたら、オフライン設定画面に移行する
const offlineBtn = document.getElementById("offlineBtn");
offlineBtn.addEventListener("click", () => {
    sessionStorage.setItem("isOffline", "true"); // オフラインモードを保存
    console.log("オフラインモード:", sessionStorage.getItem("isOffline"));
    window.location.href = "gameSettingScreen.html";
});

// オンラインボタンを押されたら、オンライン設定画面に移行する
const onlineBtn = document.getElementById("onlineBtn");
onlineBtn.addEventListener("click", () => {
    sessionStorage.setItem("isOffline", "false"); // オンラインモードを保存
    console.log("オフラインモード:", sessionStorage.getItem("isOffline"));
    window.location.href = "gameSettingScreen.html";
});

// 牌譜ボタンを押されたら、牌譜画面に移行する
const resumeBtn = document.getElementById("resumeBtn");
resumeBtn.addEventListener("click", () => {
    window.location.href = "resumeScreen.html";
});