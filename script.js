// ペットの画像リスト
const images = [
  { src: "IMG_4299.JPEG", caption: "ウイ - 写真1" },
  { src: "IMG_6228.JPEG", caption: "ウイ - 写真2" },
  { src: "IMG_7237.JPEG", caption: "ウイ - 写真3" },
  { src: "IMG_6235.JPEG", caption: "エレ - 写真1" },
  { src: "IMG_6526.JPEG", caption: "エレ - 写真2" },
  { src: "IMG_7343.JPEG", caption: "エレ - 写真3" },
];

let currentIndex = 0; // 現在のスライドインデックス

// スライドショーを切り替える関数
const showSlide = () => {
  currentIndex = (currentIndex + 1) % images.length; //次の画像に移動
  document.getElementById("image").src = images[currentIndex].src; //画像変更
  document.getElementById("caption").textContent = images[currentIndex].caption; //キャプション変更
};

// 3秒ごとにスライドを切り替え
setInterval(showSlide, 3000);
