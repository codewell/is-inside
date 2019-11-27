'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Throw a custom error
 */
const throwError = () => {
  throw new Error('Input was empty. Expected array');
};

var throwError_1 = throwError;

/**
 * 
 * @param {*} values 
 */
const inputIsValid = (values) => {
  // Input should be an array or miss value
  return (Array.isArray(values) || values === undefined || values === null)
    && typeof values !== 'number'
    && typeof values !== 'string'
    && typeof values !== 'function'
};

var inputIsValid_1 = inputIsValid;

/**
 * 
 * @param {[boolean]} values - Array with bools
 * @returns {boolean} - Returns true if all are true, else false
 */
const and = (values, returnValueOnEmptyInput = 'default') => {

  if (!inputIsValid_1(values)) {
    return throwError_1();
  }

  // If the passed input is empty
  if (values === undefined || values === null || values.length === 0) {
    switch (returnValueOnEmptyInput) {
      case false: {
        return false;
      }

      case 'false': {
        return false;
      }

      case 'throw': {
        return throwError_1();
      }

      default: {
        return true;
      }
    }
  }

  // The meaningful part
  return values.filter(v => v === true).length === values.length;

};

var src = and;

/**
 * Check wheter a point is inside a rectangle
 * @param {object} rectangle - {x, y, withd, height}
 * @param {object} point - {x, y}
 */

var insideRectangle = function insideRectangle(rectangle) {
  return function (point) {
    var x = rectangle.x,
        y = rectangle.y,
        width = rectangle.width,
        height = rectangle.height;
    var xmax = x + width;
    var ymax = y + height;
    return src([point.x >= x, point.x <= xmax, point.y >= y, point.y <= ymax]);
  };
};

exports.insideRectangle = insideRectangle;
