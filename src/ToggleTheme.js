// Toggle.js
import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  margin: 0 4px 0 0;
  display: flex;
  height: 64px;
  :focus {
    outline: none;
  }
  
`;

const ToggleTheme = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer onClick={toggleTheme}>
      {isLight ? (
        <img src={require("./icons/animated/day.svg")} alt="icon" />
      ) : (
        <img src={require("./icons/animated/night.svg")} alt="icon" />
      )}
    </ToggleContainer>
  );
};

ToggleTheme.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default ToggleTheme;
