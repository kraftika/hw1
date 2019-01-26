const description = {
  EQUILATERAL: "equilateral",
  ISOSCELES: "isosceles",
  SCALENE: "scalene"
};

const type = sides => {
  const { l1: side1, l2: side2, l3: side3 } = sides || {};

  if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
    return;
  }

  const side1ToNumber = Number(side1);
  const side2ToNumber = Number(side2);
  const side3ToNumber = Number(side3);

  if (side1ToNumber <= 0 || side2ToNumber <= 0 || side3ToNumber <= 0) {
    return;
  }

  return side1ToNumber === side2ToNumber &&
    side2ToNumber === side3ToNumber &&
    side1ToNumber === side3ToNumber
    ? description.EQUILATERAL
    : side1ToNumber === side2ToNumber ||
      side2ToNumber === side3ToNumber ||
      side1ToNumber === side3ToNumber
    ? description.ISOSCELES
    : description.SCALENE;
};

module.exports = { type, description };
