import React from "react";
import styled from "styled-components";

const Dropdown = ({ scenarios, selectedScenario, onScenarioChange }) => {
  return (
    <StyledSelect
      value={selectedScenario}
      onChange={(e) => onScenarioChange(e.target.value)}
    >
      {scenarios.map((scenario) => (
        <option key={scenario} value={scenario}>
          {scenario}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  cursor: pointer;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  outline: none;

  &:hover {
    border: 1px solid white;
  }

  &:active {
    box-shadow: 4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff;
  }
`;

export default Dropdown;
