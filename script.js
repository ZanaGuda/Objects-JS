// let square = {
//   topLeft: {
//     x: 10,
//     y: 10,
//   },
//   bottomRight: {
//     x: 20,
//     y: 20,
//   },
// };

// function printSquare(squareObject) {
//   console.log(squareObject.topLeft.x);
//   console.log(squareObject.topLeft.y);
//   console.log(squareObject.bottomRight.x);
//   console.log(squareObject.bottomRight.y);
// }

// printSquare(square);

// function printWidth(squareObject) {
//   console.log(-squareObject.topLeft.x + squareObject.bottomRight.x);
//   return -squareObject.topLeft.x + squareObject.bottomRight.x;
// }
// printWidth(square);

// function printHeight(squareObject) {
//   console.log(-squareObject.topLeft.y + squareObject.bottomRight.y);
//   return -squareObject.topLeft.y + squareObject.bottomRight.y;
// }
// printHeight(square);

// function printContent(squareObject) {
//   console.log(printHeight(squareObject) * printWidth(squareObject));
// }
// printContent(square);

// function changeWidth(squareObject, unit) {
//   console.log(squareObject.bottomRight.x +unit  - squareObject.topLeft.x);
// }
// changeWidth(square, 10);

// function changeWidth(squareObject, unit) {
//   console.log(squareObject.bottomRight.y + unit - squareObject.topLeft.y);
// }
// changeWidth(square, 10);

// function checkPoints(squareObject, x, y){
//     if(x>=squareObject.topLeft.x && squareObject.bottomRight.y<=x  ){

//     }
// }

// 1. Create an object that describes a car (manufacturer, model, year of release,
// average speed) and the following methods for working with this object:
// A method that displays the car info
// A method for counting a time frame necessary to cover a given distance with
//the average speed. Note that every 4 hours the driver has to take a 1-hour break.

// 3. Create an object that describes time (hours, minutes, seconds),
// and the following methods for working with this object:
// A method for displaying the time.
// A method for changing the time by a given amount of seconds.
// A method for changing the time by a given amount of minutes.
// A method for changing the time by a given amount of hours.
// Note that in the last three methods changing one part may influence another.
//For example, if we add 30 seconds to
//«20:30:45», we should get «20:31:15», not «20:30:75».

// let car = {
//   manufacturer: "Toyota",
//   model: "A",
//   "year of release": 2015,
//   "average speed": 80,
//   displayInfo() {
//     console.log(
//       "Manufacturer: " +
//         this.manufacturer +
//         " " +
//         "model " +
//         this.model +
//         ", year of release " +
//         this["year of release"] +
//         ", average speed " +
//         this["average speed"]
//     );
//   },
//   countTime(distance, avarageSpeed) {
//     let time = distance / avarageSpeed;
//     console.log(time);
//     let time1 = time;
//     for (let i = 0; i <= time1; i++) {
//       if (i % 4 == 0) {
//         time1--;
//       }
//     }
//     console.log(time1);
//   },
// };
// car.displayInfo();
// car.countTime(1000, car["average speed"]);

// // 2. Create an object that contains separately the numerator and the denominator
// //of a fraction, and the following functions for working with this object:
// // A function for adding two fraction objects.
// // A function for subtracting two fraction objects.
// // A function for multiplying two fraction objects.
// // A function for dividing two fraction objects.
// // A function for simplifying a fraction object.

// let firstFraction = {
//   numerator: 31,
//   denumerator: 5,
// };
// let secondFraction = {
//   numerator: 11,
//   denumerator: 3,
// };

// function addFractions(first, second) {
//   console.log(
//     "Adding two fractions: ",
//     first.numerator / first.denumerator + second.numerator / second.denumerator
//   );
// }
// function substractFractions(first, second) {
//   console.log(
//     "Substracting two fractions: ",
//     first.numerator / first.denumerator - second.numerator / second.denumerator
//   );
// }
// function multiplyFractions(first, second) {
//   console.log(
//     "Multiplying two fractions: ",
//     (first.numerator / first.denumerator) *
//       (second.numerator / second.denumerator)
//   );
// }
// function dividingFractions(first, second) {
//   console.log(
//     "Dividing two fractions: ",
//     first.numerator /
//       first.denumerator /
//       (second.numerator / second.denumerator)
//   );
// }
// function simplify(fraction) {
//   for (let i = 0; i <= fraction.numerator; i++) {
//     for (let j = 0; j <= fraction.denumerator; j++) {
//       if (
//         fraction.numerator % i == 0 &&
//         fraction.denumerator % j == 0 &&
//         i == j
//       ) {
//         if (i % j == 0) {
//           console.log(i / j);
//         } else {
//           console.log(i, "/", j);
//         }
//       }
//     }
//   }
// }
// simplify(firstFraction);

// addFractions(firstFraction, secondFraction);
// substractFractions(firstFraction, secondFraction);
// multiplyFractions(firstFraction, secondFraction);
// dividingFractions(firstFraction, secondFraction);
