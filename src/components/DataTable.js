import React from "react";
import styled from "styled-components";

const DataTable = ({ data, highlightedCells }) => (
  <StyledTable>
    <tbody>
      {data.map((row, rowIndex) => (
        <StyledRow key={rowIndex}>
          {row.map((cell, cellIndex) => {
            const isHighlighted = highlightedCells.some(
              (highlight) =>
                highlight.x === rowIndex && highlight.y === cellIndex
            );
            return isHighlighted ? (
              <HighlightedCell key={cellIndex}>{cell}</HighlightedCell>
            ) : (
              <StyledCell key={cellIndex}>{cell}</StyledCell>
            );
          })}
        </StyledRow>
      ))}
    </tbody>
  </StyledTable>
);

const StyledTable = styled.table`
  margin: 1em 0;
  border-collapse: collapse;
  width: auto; /* Allow table to size based on content */
  max-width: 100%; /* Prevent overflow */
`;

const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const StyledCell = styled.td`
  width: 50px; /* Fixed width for normal devices */
  height: 50px; /* Fixed height for normal devices */
  padding: 0; /* Remove padding */
  border: 1px solid black;
  text-align: center; /* Center text */
  vertical-align: middle; /* Center text vertically */
  box-sizing: border-box; /* Include border in element's total width and height */

  @media (max-width: 600px) {
    width: calc(
      100% / ${(props) => props.rowLength}
    ); /* Responsive width based on row length */
    height: calc(
      100% / ${(props) => props.rowLength}
    ); /* Maintain square shape */
    max-width: 50px; /* Ensure minimum size for usability */
    max-height: 50px; /* Ensure minimum size for usability */
    padding: 0; /* Ensure no padding affects size */
    overflow: hidden; /* Prevent overflow inside cells */
  }
`;

const HighlightedCell = styled(StyledCell)`
  color: green;
  background-color: #fff2cd;
`;

export default DataTable;
