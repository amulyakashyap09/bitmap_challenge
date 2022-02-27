export class DistanceCalculator {

   /**
    * FunctionName: calculateDistance
    * Input : Array[][], row{Number}, col{Number}
    * Functionality: Calculates the distance of nearest one from the current cell
    * Returns: Array[][]
    */

  public static calculateDistance(
    mat: number[][],
    m: number,
    n: number,
  ): number[][] {
    const dist = Array(m)
      .fill(null)
      .map(() => Array(n).fill(0));

    const newx = [-1, 0, 1, 0];
    const newy = [0, -1, 0, 1];

    const q = [];

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        dist[i][j] = Number.MAX_SAFE_INTEGER;
        if (mat[i][j] === 1) {
          dist[i][j] = 0;
          q.push([i, j]);
        }
      }
    }

    let popped = [];
    while (q.length) {
      popped = q[0];
      q.shift();

      const x = popped[0];
      const y = popped[1];
      for (let i = 0; i < 4; i++) {
        const adjx: number = x + newx[i];
        const adjy: number = y + newy[i];
        if (
          adjx >= 0 &&
          adjx < m &&
          adjy >= 0 &&
          adjy < n &&
          dist[adjx][adjy] > dist[x][y] + 1
        ) {
          dist[adjx][adjy] = dist[x][y] + 1;
          q.push([adjx, adjy]);
        }
      }
    }

    return dist;
  }
}
