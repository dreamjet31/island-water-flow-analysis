const apiKey = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;
const spreadsheetId = process.env.REACT_APP_SHEET_ID;

/**
 * Fetch the list of sheet(tab) names in the spreadsheet.
 */
export async function getSheetNames() {
  try {
    // console.log(apiKey, spreadsheetId);
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?key=${apiKey}`
    );
    const data = await response.json();
    const sheetNames = data.sheets.map((sheet) => sheet.properties.title);
    return sheetNames;
  } catch (error) {
    console.error(`Error fetching data from ${spreadsheetId}:`, error);
    return []; // Return an empty array in case of error
  }
}

/**
 * Fetch and print the data from a specific sheet.
 * @param {string} sheetName - The name of the sheet to fetch data from.
 */
export async function getSheetData(sheetName) {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`
    );
    const data = await response.json();
    return data.values; // Return the sheet data properly
  } catch (error) {
    console.error(`Error fetching data from ${sheetName}:`, error);
    return []; // Return an empty array in case of error
  }
}
