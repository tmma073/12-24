//タイマーを使ったスライドショーの関数
function スライドショー開始(petId) {
const petContainer = document.getElementById(petId);
const images = petContainer.getElementsByTagName("img");
let currentIndex = 0;

setInterval(() => {
//現在の画像を非表示
images[currentIndex].style.display = "none";
//次の画像を表示
currentIndex = (currentIndex + 1) % images.length;
images[currentIndex].style.display = "block";
}, 3000); //3秒ごとに切り替え
}

//1匹目:ウイちゃんのスライドショー開始
スライドショー開始("pet1");

//2匹目:エレちゃんのスライドショー開始
スライドショー開始("pet2");
