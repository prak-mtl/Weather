import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  margin: 0 auto;
  height: 64px;
  width: 50px;
  color: white;
  display: flex;
  :focus {
    outline: none;
  }
`;

export default function ToggleLang({ lang, setLang }) {
  return (
    <ToggleContainer>
      {lang === "en" ? (
        <button onClick={() => setLang("de")} className="button-styleless">
          En
        </button>
      ) : (
        <button onClick={() => setLang("en")} className="button-styleless">
          De
        </button>
      )}
    </ToggleContainer>
  );
}
