import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in-out;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    cursor: pointer;
    transition: 0.3s background ease-in-out;
  }
`;

export const OutlineButton = styled(Button)`
  background: transparent;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
    cursor: pointer;
    transition: 0.3s background ease-in-out;
`;
