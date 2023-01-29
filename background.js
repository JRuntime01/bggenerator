let css = document.querySelector('h3');
let col1 = document.querySelector('.col1');
let col2 = document.querySelector('.col2');
let body = document.getElementById('gradient');
let rndBtn = document.createElement('input');
rndBtn.type = 'button';
rndBtn.value = 'Random';
body.appendChild(rndBtn);
body.insertBefore(rndBtn, body.children[3]);



function color() {
  body.style.background = 'linear-gradient(to right, '
  + col1.value
  + ', '
  + col2.value
  + ')';
  css.textContent = body.style.background + ';';
}


function rndHex() {
  return ['#' + Math.floor(Math.random() * 16777216).toString(16), '#' + Math.floor(Math.random() * 16777216).toString(16)];
}


rndBtn.addEventListener('click', () => {
  let col1hex = rndHex()[0];
  let col2hex = rndHex()[1];
  col1.value = col1hex;
  col2.value = col2hex;
  color();
});


window.onload = function () {
  col1.value = '#ff0000';
  col2.value = '#0000ff';
  color();
};


col1.addEventListener('input', color);
col2.addEventListener('input', color);
