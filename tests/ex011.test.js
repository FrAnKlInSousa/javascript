const checaHora = require('../aula0010/ex011');

test('retorna bom dia quando hora == 3', () => {
  expect(checaHora(3)).toBe('Bom dia');
});

test('retorna boa tarde quando hora >= 12', () => {
  expect(checaHora(12)).toBe('Boa tarde');
});

test('retorna boa noite quando hora >= 18', () => {
  expect(checaHora(18)).toBe('Boa noite');
});
