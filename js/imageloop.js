// 画像領域を取得
const images = document.getElementById("images");

// 「進む」関数
function susumu() {

    images.appendChild(images.children[0]);
}


// 「戻る」関数
function modoru() {

    images.insertBefore(images.children[images.children.length-1],images.children[0]);
}