var idade = 68;

console.log(`você tem ${idade} anos.`);
if (idade < 16) {
  console.log('não vota');
} else if (idade < 18 || idade > 67) {
  console.log('voto opcional');
} else {
  console.log('voto obrigatório');
}
var agora = new Date();
var hora = agora.getHours();

function checaHora(hora) {
  if (hora < 12) {
    return 'Bom dia';
  } else if (hora < 18) {
    return 'Boa tarde';
  } else {
    return 'Boa noite';
  }
}

module.exports = checaHora;
