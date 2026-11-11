// 変数の定義
const handNum = parseInt(sessionStorage.getItem("handNum")); // 手牌の数を取得
const handKinds = JSON.parse(sessionStorage.getItem("handKinds") || "[]"); // 牌種を取得
const handBoard = document.getElementById("hand"); // 手牌を表示する場所
const hand = []; // 手牌の配列
const yama = []; // 山牌の配列
const manzu = [
    {name:"man1", img:"../../resources/image/haiga-m/man1.gif"}, 
    {name:"man2", img:"../../resources/image/haiga-m/man2.gif"}, 
    {name:"man3", img:"../../resources/image/heiga-m/man3.gif"}, 
    {name:"man4", img:"../../resources/image/heiga-m/man4.gif"}, 
    {name:"man5", img:"../../resources/image/heiga-m/man5.gif"}, 
    {name:"man6", img:"../../resources/image/heiga-m/man6.gif"}, 
    {name:"man7", img:"../../resources/image/heiga-m/man7.gif"}, 
    {name:"man8", img:"../../resources/image/heiga-m/man8.gif"}, 
    {name:"man9", img:"../../resources/image/heiga-m/man9.gif"}
];
const pinzu = [
    {name:"pin1", img:"../../resources/image/heiga-m/pin1.gif"}, 
    {name:"pin2", img:"../../resources/image/heiga-m/pin2.gif"}, 
    {name:"pin3", img:"../../resources/image/heiga-m/pin3.gif"}, 
    {name:"pin4", img:"../../resources/image/heiga-m/pin4.gif"}, 
    {name:"pin5", img:"../../resources/image/heiga-m/pin5.gif"}, 
    {name:"pin6", img:"../../resources/image/heiga-m/pin6.gif"}, 
    {name:"pin7", img:"../../resources/image/heiga-m/pin7.gif"}, 
    {name:"pin8", img:"../../resources/image/heiga-m/pin8.gif"}, 
    {name:"pin9", img:"../../resources/image/heiga-m/pin9.gif"}
];
const souzu = [
    {name:"sou1", img:"../../resources/image/heiga-m/sou1.gif"}, 
    {name:"sou2", img:"../../resources/image/heiga-m/sou2.gif"}, 
    {name:"sou3", img:"../../resources/image/heiga-m/sou3.gif"}, 
    {name:"sou4", img:"../../resources/image/heiga-m/sou4.gif"}, 
    {name:"sou5", img:"../../resources/image/heiga-m/sou5.gif"}, 
    {name:"sou6", img:"../../resources/image/heiga-m/sou6.gif"}, 
    {name:"sou7", img:"../../resources/image/heiga-m/sou7.gif"}, 
    {name:"sou8", img:"../../resources/image/heiga-m/sou8/gif"}, 
    {name:"sou9", img:"../../resources/image/heiga-m/sou9/gif"}
];
const jihai = [
    {name:"ton", img:"../../resources/image/heiga-m/ji1-ton.gif"}, 
    {name:"nan", img:"../../resources/image/heiga-m/ji2-nan.gif"}, 
    {name:"sha", img:"../../resources/image/heiga-m/ji3-sha.gif"}, 
    {name:"pei", img:"../../resources/image/heiga-m/ji4-pei.gif"}, 
    {name:"haku", img:"../../resources/image/heiga-m/ji5-haku.gif"}, 
    {name:"katsu", img:"../../resources/image/heiga-m/ji6-hatsu.gif"}, 
    {name:"chun", img:"../../resources/image/heiga-m/ji7-chun.gif"}
];
const aka = [
    {name:"R-pin5", img:"../../resources/image/heiga-m/pin-aka5.gif"},
    {name:"R-man5", img:"../../resources/image/heiga-m/man-aka5.gif"},
    {name:"R-sou5", img:"../../resources/image/heiga-m/sou-aka5.gif"}
]

// 他のファイルから変数を受け取る
sessionStorage.setItem("handNum", handNum);
sessionStorage.setItem("handKinds", JSON.stringify(handKinds));

// 受け取った変数を確認する
console.log("受け取った手牌数:", sessionStorage.getItem("handNum"));
console.log("受け取った牌種:", sessionStorage.getItem("handKinds"));


