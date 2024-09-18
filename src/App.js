import React, { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";
import DataTable from "./components/DataTable";
import { parse } from "./components/GoogleSheetParser";
import HighlightedGrid from "./components/HighlightedGrid";
import waterFlowAnalysis from "./algorithms/WaterFlowAnalysis";
import { getSheetNames, getSheetData } from "./services/GoogleSheetService";
import Button from "./components/Button";
import "./App.css";

const App = () => {
  const [scenarios, setScenarios] = useState([]);
  const [selectedScenario, setSelectedScenario] = useState("case 1");
  const [sheetData, setSheetData] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchScenarios = async () => {
      const response = await getSheetNames();
      setScenarios(response);
    };
    fetchScenarios();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedScenario) {
        const data = await getSheetData(selectedScenario); // Await the sheet data
        setSheetData(data || []); // Update sheetData state
        setResult([]);
      }
    };
    fetchData();
  }, [selectedScenario]);

  const handleScenarioChange = (scenario) => {
    setSelectedScenario(scenario);
  };

  const handleRun = () => {
    const dataGrid = parse(sheetData);
    console.log("Button clicked");
    console.log(dataGrid);
    const result = waterFlowAnalysis(dataGrid);
    setResult(result);
  };

  return (
    <div className="App">
      <div className="controls">
        <Dropdown
          scenarios={scenarios}
          selectedScenario={selectedScenario}
          onScenarioChange={handleScenarioChange}
        />
        <Button className="run-button" onClick={handleRun}>
          RUN
        </Button>
      </div>
      {selectedScenario && (
        <div className="table-container">
          <DataTable data={sheetData} highlightedCells={result} />
        </div>
      )}
      <HighlightedGrid result={result} />
    </div>
  );
};

export default App;
