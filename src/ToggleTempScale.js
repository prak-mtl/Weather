// Toggle Temperature scale.js
import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  margin: 0 4px 0 0;
  height: 64px;
  width: 45px;
  color: white;
  :focus {
    outline: none;
  }
`;

const ToggleTempScale = ({ scale, toggleScale }) => {
  const isCelsius = scale === "°C";
  return (
    <ToggleContainer onClick={toggleScale}>
      {isCelsius ? (
        "°C"
      ) : (
        "°F"
      )}
    </ToggleContainer>
  );
};

ToggleTempScale.propTypes = {
  scale: string.isRequired,
  toggleScale: func.isRequired
};

export default ToggleTempScale;
