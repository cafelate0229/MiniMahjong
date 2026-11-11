// 他のファイルからデータを受け取る
const isOffline = sessionStorage.getItem("isOffline") === "true"; // オフラインモードかどうかを判定する

//オフラインの設定ボタンが押されたら、情報を取得する
const handNumBtn = document.querySelectorAll(".handNumBtn");
const handKindsBtn = document.querySelectorAll(".handKindsBtn");

let handNum = null;
let handKinds = null;

handNumBtn.forEach(button => {
    button.addEventListener("click", () => {
        handNumBtn.forEach(handNumBtn => {
            handNumBtn.removeAttribute("checked"); // 選択済みを外す
        });
        button.setAttribute("checked", "");//選択済みにする
        sessionStorage.setItem("handNum", button.value); // 手牌数を保存
        handNum = Number(sessionStorage.getItem("handNum"));
        console.log("手牌数 :", handNum);
    });
});

handKindsBtn.forEach(button => {
    button.addEventListener("click", () => {
        handKindsBtn.forEach(handKindsBtn => {
            handKindsBtn.removeAttribute("checked"); // 選択済みを外す
        });
        button.setAttribute("checked", "");//選択済みにする
        sessionStorage.setItem("handKinds", button.value); // 牌種を保存
        handKinds = sessionStorage.getItem("handKinds");
        console.log("牌種:", handKinds);
  });
});


// ゲーム開始ボタンを押されたら、ゲーム画面に移行する
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", () => {
    if (handNum === null) {
        alert("手牌数を選択してください。"); //! アラームが表示されるようにする
        return;
    };
    if (handKinds === null) {
        alert("牌種を選択してください。");
        return;
    };
    if (handNum !== null && handKinds !== null) {
       console.log("ゲーム開始: 手牌数 :", handNum, "牌種:", handKinds, "オフライン:", isOffline);
        if (isOffline) {
            window.location.href = "offlineGameScreen.html";
        } else {
            window.location.href = "onlineGameScreen.html";
        }
    };
});