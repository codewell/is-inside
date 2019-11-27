import and from '@codewell/and';

/**
 * Check wheter a point is inside a rectangle
 * @param {object} rectangle - {x, y, withd, height}
 * @param {object} point - {x, y}
 */
const insideRectangle = rectangle => (point) => {
  const {x, y, width, height} = rectangle;
  const xmax = x + width;
  const ymax = y + height;

  return and([
    point.x >= x,
    point.x <= xmax,
    point.y >= y,
    point.y <= ymax,
  ]);
};

export default insideRectangle;
