function carregar() {
  var msg = window.document.querySelector('#msg');
  var data = new Date();
  var hora = data.getHours();
  var prep = hora > 1 ? 'são' : 'é';
  msg.innerHTML = `Agora ${prep} ${hora}h`;
  var img = window.document.querySelector('#img');
  if (hora < 12) {
    img.src = './images/manhã.png';
    window.document.body.style.backgroundColor = '#d8c9b7';
  } else if (hora < 18) {
    img.src = './images/tarde.png';
    window.document.body.style.backgroundColor = '#c08356';
  } else {
    img.src = './images/noite.png';
    window.document.body.style.backgroundColor = '#294d56';
  }
}
