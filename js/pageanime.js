// 
// window.addEventListener("DOMContentLoaded", function(){ 
//   //画面遷移用カーテンを消す 
//   document.getElementById("curtain").classList.remove("close"); 
//   //画面遷移用カーテンをセット 
//   setTransitionCurtain(); 
// });

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  setTimeout(() => {
    const loader = document.querySelector('.fade-in');
    if (loader) {
      loader.style.display = 'none';
    }
  }, 1200);
});
