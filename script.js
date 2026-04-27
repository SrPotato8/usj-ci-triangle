/*
 * Implements the problem of triangle calcuation
 */

var INVALID_ARGUMENTS = 'The arguments were not valid';
var NOT_A_TRIANGLE = 'Impossible to create a triangle with those sides';
var EQUILATERAL = 'Equilateral triangle';
var ISOSCELES = 'Isosceles triangle';
var SCALENE = "Scalene triangle";

/*
 * Given the three sides of a triangle calculates the type of the
 * triangle.
 */
function getTriangleType(lengthA, lengthB, lengthC) { 
  var type = '';
  // In Javascript isNaN returns true if the argument is Not a Number (NaN)
  if ( isNaN(lengthA) || isNaN(lengthB) || isNaN(lengthC) ) { //Inputs are not numbers
    type = INVALID_ARGUMENTS;
  } else { // Inputs are numbers
    // Convert from objects to float
    var a = parseFloat(lengthA);
    var b = parseFloat(lengthB);
    var c = parseFloat(lengthC);
    if ((a <= 0) || (b <= 0) || (c <= 0)) { // A side is not positive
      type = INVALID_ARGUMENTS;
    } else if ( (a+b <= c) || (a+c <= b) || (b+c <= a)) { // invalid triangle
      type = NOT_A_TRIANGLE;
    } else { // All sides different = scalene
      if ( (a==b) && (b==c)) {
        type = EQUILATERAL;
      } else if ( (a==b) || (b==c) || (a==c)) {
        type = ISOSCELES;
      } else {
        type = SCALENE;
      }
    }
  }
  
  return type;
}
