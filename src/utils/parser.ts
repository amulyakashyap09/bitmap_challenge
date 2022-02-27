import * as fs from "fs";

export class Parser {

  /**
   * FunctionName: readInput
   * Input : fileName{String}
   * Functionality: Reads the file from filename.txt
   * Returns: Array[]
   */
  public static async readInput(fileName: string): Promise<string[]> {
    const input: string[] = [];
    try {
      const allFileContents = fs.readFileSync(fileName, "utf-8");
      allFileContents.split(/\r?\n/).forEach((line) => {
        input.push(line.trim());
      });
    } catch (err) {
      console.error(err);
    }
    return input;
  }

   /**
    * FunctionName: processInput
    * Input : Array[String]
    * Functionality: takes the input from file in array form and then formats it to the Array[][]
    * Returns: Array[][]
    */
  public static processInput(input: string[]): any {
    const output: any = [];
    parseInt(input.shift()!, 10); // 2
    while (input.length) {
      const rowCol = input.shift()!.split(" ");
      const rows: number = parseInt(rowCol[0], 10);
      const cols: number = parseInt(rowCol[1], 10);
      const partInp = input.splice(0, rows).map((item) => {
        return item.split("").map((el) => {
          return parseInt(el, 10);
        });
      });
      output.push([rows, cols, partInp]);
    }
    return output;
  }

   /**
    * FunctionName: parseInput
    * Input : fileName{String}
    * Functionality: Reads the file from filename.txt, process & formats the input and returns
    * Returns: Array[][]
    */
  public static async parseInput(fileName: string): Promise<string[]> {
    const input: string[] = await this.readInput(fileName);
    return this.processInput(input);
  }

   /**
    * FunctionName: printSolution
    * Input : rows{Number}, cols{Number}, Array[][]
    * Functionality: Prints the output to console
    * Returns: void
    */
  public static printSolution(rows: number, cols: number, dist: number[][]) {
    for (let i = 0; i < rows; i++) {
      let str = "";
      for (let j = 0; j < cols; j++) {
        str += dist[i][j] + " ";
      }
      // tslint:disable-next-line
      console.log(str);
    }
    // tslint:disable-next-line
    console.log("\n");
  }
}
