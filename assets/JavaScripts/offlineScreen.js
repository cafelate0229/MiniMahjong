//オフラインの設定ボタンが押されたら、情報を取得する
const handNumBtn = document.querySelectorAll(".handNum");
const handKindsBtn = document.querySelectorAll(".handKinds");

export let handNum = null;
export let handKinds = null;

handNumBtn.forEach(button => {
    button.addEventListener("click", () => {
        handNumBtn.forEach(handNumBtn => {
            handNumBtn.removeAttribute("checked"); // 選択済みを外す
        });
        button.setAttribute("checked", "");//選択済みにする
        handNum = Number(button.value);
        console.log("手牌数 :", handNum);
    });
});

handKindsBtn.forEach(button => {
    button.addEventListener("click", () => {
        handKindsBtn.forEach(handKindsBtn => {
            handKindsBtn.removeAttribute("checked"); // 選択済みを外す
        });
        button.setAttribute("checked", "");//選択済みにする
        handKinds = Number(button.value);
        console.log("牌種:", handKinds);
  });
});


// ゲーム開始ボタンを押されたら、ゲーム画面に移行する
const offlineStartBtn = document.getElementById("offlineStartBtn");
offlineStartBtn.addEventListener("click", () => {
    if (handNum === null) {
        alert("手牌数を選択してください。");
        return;
    };
    if (handKinds === null) {
        alert("牌種を選択してください。");
        return;
    };
    if (handNum !== null && handKinds !== null) {
        window.location.href = "onlineGameScreen.html";
    };
});