const assert = require("assert");
const triangle = require("./triangle.js");

it("returns equilateral when l1 === l2 === l3", () => {
  const input = {
    l1: 11,
    l2: 11,
    l3: 11
  };
  assert.equal(triangle.type(input), triangle.description.EQUILATERAL);
});

it("returns isosceles when l1 === l2 && l2 !== l3", () => {
  const input = {
    l1: 11,
    l2: 11,
    l3: 14
  };
  assert.equal(triangle.type(input), triangle.description.ISOSCELES);
});

it("returns equilateral when l1 !== l2 && l1 === l3", () => {
  const input = {
    l1: 11,
    l2: 17,
    l3: 11
  };
  assert.equal(triangle.type(input), triangle.description.ISOSCELES);
});

it("returns equilateral when l1 !== l2 && l2 === l3", () => {
  const input = {
    l1: 19,
    l2: 11,
    l3: 11
  };
  assert.equal(triangle.type(input), triangle.description.ISOSCELES);
});

it("returns scalene when l1 !== l2 !== l3", () => {
  const input = {
    l1: 19,
    l2: 33,
    l3: 26
  };
  assert.equal(triangle.type(input), triangle.description.SCALENE);
});

it("returns scalene when l1 is a string", () => {
  const input = { l1: "113", l2: 14, l3: 155 };
  assert.equal(triangle.type(input), triangle.description.SCALENE);
});

it("returns isosceles when l1 is a string", () => {
  const input = { l1: "113", l2: 113, l3: 155 };
  assert.equal(triangle.type(input), triangle.description.ISOSCELES);
});

it("returns equilateral when l1 is a string", () => {
  const input = { l1: "113", l2: 113, l3: 113 };
  assert.equal(triangle.type(input), triangle.description.EQUILATERAL);
});

it("returns undefined when no input is provided", () => {
  const input = {};
  assert.equal(triangle.type(input), undefined);
});

it("returns undefined when l1 is missing", () => {
  const input = { l2: 13, l3: 14 };
  assert.equal(triangle.type(input), undefined);
});

it("returns undefined when l2 is missing", () => {
  const input = { l1: 13, l3: 14 };
  assert.equal(triangle.type(input), undefined);
});

it("returns undefined when l3 is missing", () => {
  const input = { l1: 13, l2: 14 };
  assert.equal(triangle.type(input), undefined);
});

it("returns undefined when input is a function", () => {
  const input = () => {};
  assert.equal(triangle.type(input), undefined);
});

it("returns undefined when input is boolean", () => {
  const input = true;
  assert.equal(triangle.type(input), undefined);
});

it("returns undefined when input is number", () => {
  const input = 12;
  assert.equal(triangle.type(input), undefined);
});

it("returns undefined when input is null", () => {
  const input = null;
  assert.equal(triangle.type(input), undefined);
});

it("returns undefined when input is undefined", () => {
  let input;
  assert.equal(triangle.type(input), undefined);
});

it("equilateral description is correctly", () => {
  assert.equal(triangle.description.EQUILATERAL, "equilateral");
});

it("isosceles description is correctly", () => {
  assert.equal(triangle.description.ISOSCELES, "isosceles");
});

it("scalene description is correctly", () => {
  assert.equal(triangle.description.SCALENE, "scalene");
});
