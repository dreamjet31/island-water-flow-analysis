import React from "react";
import styled from "styled-components";

const HighlightedGrid = ({ result }) => {
  // Create a formatted string representation of the 2-D array
  const formattedResult = result
    .map((cell) => `[${cell.x}, ${cell.y}]`)
    .join(", ");

  return (
    <StyledGrid>
      <ContentWrapper>
        <strong>Highlighted cells:</strong>
        <span> [{formattedResult}]</span>
      </ContentWrapper>
    </StyledGrid>
  );
};

const StyledGrid = styled.div`
  box-sizing: border-box; /* Include margin and padding within specified width */
  width: 100%; /* Full width for mobile */
  margin: 20px; /* Margin for desktop */

  @media (min-width: 768px) {
    width: calc(50% - 40px); /* Reduce width by margin on both sides */
    margin: 20px auto; /* Margin and centering for desktop */
  }
`;

const ContentWrapper = styled.div`
  display: flex; /* Use Flexbox for layout */
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
  text-align: center; /* Center text inside the items */
`;

export default HighlightedGrid;
