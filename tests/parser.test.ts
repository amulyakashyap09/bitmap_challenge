import { Parser } from "../src/utils/parser";

describe("Parser functionality Test Suite", () => {
  it("Should read input from file", async () => {
  	const expected = ['2', '3 4', '0001', '0011', '0110'];
  	const received = await Parser.readInput("./parser.input.txt");
  	expect(received).toEqual(expect.arrayContaining(expected));
  });

  it("Should format the input in required format ", async () => {
  	const expected = [[3, 4, [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]]]];
  	const input = await Parser.readInput("./parser.input.txt");
  	const received = Parser.processInput(input);
  	expect(received).toEqual(expect.arrayContaining(expected));
  });

  it("Should test the parseInput function", async () => {
  	const expected = [[3, 4, [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]]]];
  	const received = await Parser.parseInput("./parser.input.txt");
  	expect(received).toEqual(expect.arrayContaining(expected));
  });

  it("Should test the printSolution function", async () => {
  	const input = [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]];
  	const logSpy = jest.spyOn(Parser, 'printSolution');
  	// console.log([[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]]);
  	Parser.printSolution(3, 4, input);
  	expect(logSpy).toHaveBeenCalledWith(3, 4, input);
  });
});
