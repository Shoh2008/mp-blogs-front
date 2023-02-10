import styled from "styled-components";
import { theme } from "./theme";

export const Block = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  color: ${theme.textColor};
  background: ${theme.black};
  overflow: hidden;
`;

export const Button = styled.button`
  outline: none;
  border: ${theme.border};
  background: ${theme.button};
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  color: ${theme.btnText};
  font-weight: bold;
`;

export const Input = styled.input`
  outline: none;
  border: ${theme.border};
  background: ${theme.input};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  color: ${theme.textColor};
  margin: 10px;
  font-weight: bold;
  &::-webkit-file-upload-button{
    outline: none;
    border: ${theme.border};
    background: ${theme.button};
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    color: ${theme.btnText};
    font-weight: bold;
  }
`;