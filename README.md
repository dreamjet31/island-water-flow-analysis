# Island Water Flow Analysis - Mindojo Full Stack Developer Assessment

This project is a solution for Mindojo's Full Stack Developer Assessment. It analyses different topographical scenarios of an island and determines the number of grid cells from where water can flow down to both the island's northwest and southeast edges.

The information is presented in a grid format within a Google Sheet.

## Getting Started

These instructions will get the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need Node.js and npm installed on your system to run this project.

### Installation & Set up

1. Clone this repository to your local machine using `https://github.com/dreamjet31/island-water-flow-analysis.git`

2. Install all project dependencies.

```
   npm install
```

3. Create a `.env` file in the project root directory and add the following keys:

```
   REACT_APP_GOOGLE_SHEETS_API_KEY = 'Replace with your Google Sheets API Key'
   REACT_APP_SHEET_ID = 'Replace with your Google Sheet ID'
```

4. Run the app in the development mode

```
   npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Features

- Real-time fetch from Google Sheets
- Algorithm of water flow calculation
- Dynamically updates results based on the user's selection
- Displays the number of qualifying cells and their coordinates

## Built With

- [React.js](https://reactjs.org/) - JavaScript library for building user interfaces
- [Google Sheets API](https://developers.google.com/sheets/api) - Read data from Google Sheets

## Author

- Daniel Laine

Please feel free to contact if you have any questions or need further clarification on the project. I'll be happy to assist.

## License

This project is licensed under the MIT License.
