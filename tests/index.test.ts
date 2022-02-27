import { DistanceCalculator } from "../src/utils/distance";

describe("Calculate nearest distance of 1 from each cell 0", () => {
  it("Should match the response for given input", () => {
    const rows = 3;
    const cols = 4;
    const matrix = [
      [0, 0, 0, 1],
      [0, 0, 1, 1],
      [0, 1, 1, 0]
    ];
    const expected = [
      [3, 2, 1, 0],
      [2, 1, 0, 0],
      [1, 0, 0, 1]
    ];
    const received = DistanceCalculator.calculateDistance(matrix, rows, cols);
	  expect(expected).toEqual(expect.arrayContaining(received));
  });

  it("Should NOT match the response for given input", () => {
    const rows = 3;
    const cols = 4;
    const matrix = [
      [0, 0, 0, 1],
      [0, 0, 1, 1],
      [0, 1, 1, 0]
    ];
    const expected = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    const received = DistanceCalculator.calculateDistance(matrix, rows, cols);
	  expect(expected).not.toEqual(expect.arrayContaining(received));
  });
});
