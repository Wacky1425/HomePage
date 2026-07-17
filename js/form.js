'use strinct';
    
document.getElementById('form').onsubmit = function (event) {
  event.preventDefault();
  let inputForm = document.getElementById('form').content.value;
  let inputFormr = document.getElementById('form').review.value;
  document.getElementById('output').textContent = `${inputForm}`;
  document.getElementById('outputr').textContent = `${inputFormr}`;
}
