export const parse = (scenario) => {
  // Get the 'data' property from the scenario and convert strings to numbers.
  const dataGrid = scenario.map((row) =>
    row.map((value) => {
      const num = parseFloat(value); // Use parseFloat for general number conversion
      return isNaN(num) ? 0 : num; // Return 0 if conversion fails
    })
  );
  return dataGrid;
};
