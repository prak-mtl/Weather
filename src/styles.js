import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Button, Progress } from "reactstrap";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 20px 0;
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.30s linear;
  }
`;

export const DisplayFlex = styled.div`
  display: flex;
  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

export const CurrentDiv = styled.div`
  text-align: center;
  color: ${props =>
    props.theme === "light" ? "#022737" : "#eaeaea"}; /*#202020*/
  background-image: ${props =>
    props.theme === "light"
      ? "linear-gradient(#abecfb, #84aff1)"
      : "linear-gradient(#091236, #1e215d)"};
  padding: 20px 0;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.colors.primaryColor};
  font-size: ${props => props.theme.fontSize.primary};
  color: ${props => props.theme.colors.white};
  opacity: ${props => (props.opacity ? props.opacity : "1")};
  border: ${props => props.borderEffect};
  width: ${props => (props.width ? props.width : "7%")};
  border: 1px solid ${props => props.theme.border.primary};
  border-radius: 5px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  height: 40px;
  &:hover,
  :focus {
    background-color: ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.white};
    border: ${props => props.borderHover};
    border-color: ${props => props.theme.colors.primaryColor};
  }
  @media only screen and (max-width: 990px) {
    width: 100%;
  }
`;
/****************************** progress bar ***************************/
export const ProgressBar = styled(Progress)`
  height: 25px;
  margin-top: 1rem;
  & .progress-bar {
    background-color: ${props => props.loaded} !important;
  }
`;
