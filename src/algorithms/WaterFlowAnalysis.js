// Helper function for creating a default ocean grid
const createDefaultOcean = (rows, columns, defaultValue) =>
  Array.from({ length: rows }, () => new Array(columns).fill(defaultValue));

const getWaterFlowCells = (dataGrid) => {
  const rows = dataGrid.length;
  const columns = dataGrid[0]?.length || 0;

  // Creating the ocean grids
  const northWest = createDefaultOcean(rows, columns, false);
  const southEast = createDefaultOcean(rows, columns, false);

  const result = [];

  // Depth-First Search function for exploring water flow
  const dfs = (i, j, ocean, height) => {
    // Boundary checks or if the cell is already marked or elevation is lesser than previous
    if (
      i < 0 ||
      j < 0 ||
      i >= rows ||
      j >= columns ||
      ocean[i][j] ||
      dataGrid[i][j] < height
    ) {
      return;
    }

    ocean[i][j] = true; // Mark as visited

    // Explore all possible directions
    dfs(i + 1, j, ocean, dataGrid[i][j]); // down
    dfs(i - 1, j, ocean, dataGrid[i][j]); // up
    dfs(i, j + 1, ocean, dataGrid[i][j]); // right
    dfs(i, j - 1, ocean, dataGrid[i][j]); // left
  };

  // Check cells for Northwest ocean flow
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // If it's is on the top row or first column
      if (i === 0 || j === 0) {
        dfs(i, j, northWest, dataGrid[i][j]);
      }
    }
  }

  // Check cells for Southeast ocean flow
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = columns - 1; j >= 0; j--) {
      // If it's is on the last row or last column
      if (i === rows - 1 || j === columns - 1) {
        dfs(i, j, southEast, dataGrid[i][j]);
      }
    }
  }

  // Gather cells with eligibility to flow into both oceans
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (northWest[i][j] && southEast[i][j]) {
        result.push({ x: i, y: j });
      }
    }
  }

  return result;
};

export default getWaterFlowCells;
