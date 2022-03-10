import { Parser } from "./utils/parser";
import { DistanceCalculator } from "./utils/distance";

/* 

APPROACH : Multi-Source Breadth First Search

PSEUDO CODE : 
 - Create an empty queue.
 - Traverse the whole matrix and insert the coordinates of all 1’s in the queue in the form of a pair.
 - Now do a BFS traversal of the graph using the above created queue.
 - Run a loop till the queue is not empty.
 - Extract the front node of the queue and pop it and insert all its adjacent and unmarked elements by moving one step at a time in any of the four directions.
 - Update the minimum distance as the distance of current node +1 and insert the coordinates of the next element in the queue.

Time Complexity : O(N*M), where ‘N’ is the number of rows and ‘M’ is the number of columns of the matrix.

Space Complexity : O(N*M), where ‘N’ is the number of rows and ‘M’ is the number of columns of the matrix.

WHY : The reason is, in Breadth-First Search, every element is traversed only once and there are a total of N*M elements in the matrix.

**/

(async function() {
  const processedInput: any = await Parser.parseInput("./input.txt");
  for (const element of processedInput) {
    const rows = parseInt(element[0], 10);
    const cols = parseInt(element[1], 10);
    const matrix = element[2];
    if (rows && cols){
      const dist = DistanceCalculator.calculateDistance(matrix, rows, cols);
      Parser.printSolution(rows, cols, dist);
    }
  }
})();
