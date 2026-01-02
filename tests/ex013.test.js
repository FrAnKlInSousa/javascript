var diaSemana = require('../aula0010/ex013');

describe.each([
  [0, 'Domingo'],
  [1, 'Segunda'],
  [2, 'Terça'],
  [3, 'Quarta'],
  [4, 'Quinta'],
  [5, 'Sexta'],
  [6, 'Sábado'],
])('dia %i', (dia, esperado) => {
  test(`retornou ${esperado}`, () => {
    expect(diaSemana(dia)).toBe(esperado);
  });
});
