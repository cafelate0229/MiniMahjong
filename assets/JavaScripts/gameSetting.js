// 変数の定義
const onlineGameSetting = document.getElementById("onlineGameSetting");
const roomIdInput = document.getElementById("roomIdInput");

// ゲーム設定を初期化する
sessionStorage.removeItem("handNum");
sessionStorage.removeItem("handKinds");
sessionStorage.removeItem("roomId");
onlineGameSetting.style.display = "none"; // オンライン用設定を非表示にする

// 他のファイルからデータを受け取る
const isOffline = sessionStorage.getItem("isOffline") === "true"; // オフラインモードかどうかを判定する

// もしオンラインモードなら、オンライン用設定を表示する
if (!isOffline) {
    onlineGameSetting.style.display = "block"; // オンライン用設定を表示する
}

roomIdInput.addEventListener("input", () => {
    roomIdInput.value = roomIdInput.value.replace(/[^0-9]/g, "");
});


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
    if (!isOffline && (roomIdInput.value.trim() === "" || roomIdInput.value.length < 4 || roomIdInput.value.length > 8)) {
        alert("ルームIDを数字4〜8桁で入力してください。");
        return;
    };
    if (!isOffline) {
        sessionStorage.setItem("roomId", roomIdInput.value);
    }

    console.log("ゲーム開始: 手牌数 :", handNum, "牌種:", handKinds, "オフライン:", isOffline);
    if (isOffline) {
        window.location.href = "offlineGameScreen.html";
    } else {
        window.location.href = "onlineGameScreen.html";
    };
});