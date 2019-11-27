const lib = require('../');
const { insideRectangle } = lib;

const rectangle = {
  x: 0,
  y: 0,
  width: 10,
  height: 10,
};

const isInsideRectangle = insideRectangle(rectangle);

test('Top left corner', () => {
  expect(
    isInsideRectangle({ x: 0, y: 0 })
  )
    .toBe(true);
})

test('Top right corner', () => {
  expect(
    isInsideRectangle({ x: 10, y: 0 })
  )
    .toBe(true);
})

test('Bottom right corner', () => {
  expect(
    isInsideRectangle({ x: 10, y: 10 })
  )
    .toBe(true);
})
test('Bottom left corner', () => {
  expect(
    isInsideRectangle({ x: 0, y: 10 })
  )
    .toBe(true);
})

test('Inside', () => {
  expect(
    isInsideRectangle({ x: 5, y: 5 })
  )
    .toBe(true);
})

test('Outside', () => {
  expect(
    isInsideRectangle({ x: 11, y: 0 })
  )
    .toBe(false);
})

test('Outside', () => {
  expect(
    isInsideRectangle({ x: -1, y: 0 })
  )
    .toBe(false);
})

test('Outside', () => {
  expect(
    isInsideRectangle({ x: -1, y: 11 })
  )
    .toBe(false);
})

test('Outside', () => {
  expect(
    isInsideRectangle({ x: 0, y: -1 })
  )
    .toBe(false);
})