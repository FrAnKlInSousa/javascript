function verificar() {
  var data = new Date();
  var anoAtual = data.getFullYear();
  var usuarioAno = document.getElementById('textano');
  var res = window.document.querySelector('#res');

  if (usuarioAno.value > anoAtual || usuarioAno.value.length == 0) {
    res.innerHTML = 'Verifique o ano informado!';
  } else {
    var generoList = window.document.getElementsByName('radiosex');
    var idade = anoAtual - Number(usuarioAno.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (generoList[0].checked) {
      genero = 'homem';
      if (idade < 2) {
        img.setAttribute('src', './images/bebê.png');
      } else if (idade < 11) {
        img.setAttribute('src', './images/menino.png');
      } else if (idade < 18) {
        img.setAttribute('src', './images/adolecente-homem.png');
      } else if (idade < 50) {
        img.setAttribute('src', './images/homem.png');
      } else {
        img.setAttribute('src', './images/senhor.png');
      }
    } else if (generoList[1].checked) {
      genero = 'mulher';
      if (idade < 3) {
        img.setAttribute('src', './images/bebê.png');
      } else if (idade < 11) {
        img.setAttribute('src', './images/menina.png');
      } else if (idade < 18) {
        img.setAttribute('src', './images/adolecente-mulher.png');
      } else if (idade < 50) {
        img.setAttribute('src', './images/mulher.png');
      } else {
        img.setAttribute('src', './images/senhora.png');
      }
    }
    res.style.textAlign = 'center';

    res.innerHTML = `Detectad${
      genero == 'mulher' ? 'a uma' : 'o um'
    } ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
