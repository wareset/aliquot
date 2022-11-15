const aliquot = require('../index').default

test('Base:', function() {
  expect(aliquot(0, 7)).toEqual(0)
  expect(aliquot(3.4, 7)).toEqual(0)
  expect(aliquot(3.5, 7)).toEqual(7)
  expect(aliquot(3.6, 7)).toEqual(7)
  expect(aliquot(7, 7)).toEqual(7)

  expect(aliquot(7.0000000001, 7)).toEqual(7)

  expect(aliquot(-0, 7)).toEqual(0)
  expect(aliquot(-3.4, 7)).toEqual(0)
  expect(aliquot(-3.5, 7)).toEqual(0)
  expect(aliquot(-3.6, 7)).toEqual(-7)
  expect(aliquot(-7, 7)).toEqual(-7)

  expect(aliquot(-7.0000000001, 7)).toEqual(-7)
})

test('Advn:', function() {
  expect(aliquot(3.4, 7, -1)).toEqual(0)
  expect(aliquot(3.4, 7, 1)).toEqual(7)

  expect(aliquot(3.5, 7, -1)).toEqual(0)
  expect(aliquot(3.5, 7, 1)).toEqual(7)

  expect(aliquot(3.6, 7, -1)).toEqual(0)
  expect(aliquot(3.6, 7, 1)).toEqual(7)

  expect(aliquot(0, 7, -1)).toEqual(0)
  expect(aliquot(0, 7, 1)).toEqual(0)
  expect(aliquot(7, 7, -1)).toEqual(7)
  expect(aliquot(7, 7, 1)).toEqual(7)
  expect(aliquot(-7, 7, -1)).toEqual(-7)
  expect(aliquot(-7, 7, 1)).toEqual(-7)
})

test('Hard:', function() {
  for (let i = 1; i < 100; i++) {
    expect(aliquot(Math.random(), 7)).toEqual(0)
    expect(aliquot(Math.random() + 4, 7)).toEqual(7)

    expect(aliquot(Math.random(), 7, -1)).toEqual(0)
    expect(aliquot(Math.random() + 4, 7, -1)).toEqual(0)

    expect(aliquot(Math.random(), 7, 1)).toEqual(7)
    expect(aliquot(Math.random() + 4, 7, 1)).toEqual(7)

    expect(aliquot(-Math.random(), 7)).toEqual(0)
    expect(aliquot(-Math.random() - 4, 7)).toEqual(-7)

    expect(aliquot(-Math.random(), 7, -1)).toEqual(-7)
    expect(aliquot(-Math.random() - 4, 7, -1)).toEqual(-7)

    expect(aliquot(-Math.random(), 7, 1)).toEqual(0)
    expect(aliquot(-Math.random() - 4, 7, 1)).toEqual(0)
  }
})

test('More:', function() {
  expect(aliquot(3.4, 7, -2)).toEqual(-7)
  expect(aliquot(3.4, 7, 2)).toEqual(14)

  expect(aliquot(3.5, 7, -2)).toEqual(-7)
  expect(aliquot(3.5, 7, 2)).toEqual(14)

  expect(aliquot(3.6, 7, -2)).toEqual(-7)
  expect(aliquot(3.6, 7, 2)).toEqual(14)

  expect(aliquot(0, 7, -2)).toEqual(-7)
  expect(aliquot(0, 7, 2)).toEqual(7)
  expect(aliquot(7, 7, -2)).toEqual(0)
  expect(aliquot(7, 7, 2)).toEqual(14)
  expect(aliquot(-7, 7, -2)).toEqual(-14)
  expect(aliquot(-7, 7, 2)).toEqual(0)
})
