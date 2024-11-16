import { useState } from "react";
import styled from "styled-components";

const arrNumber = [1, 2, 3, 4, 5, 6];

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            onClick={() => numberSelectorHandler(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Selected Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-weight: 700;
    font-size: 24px;
    text-align: end;
  }
  .error {
    color: red;
    font-weight: 300;\
    font-size: 20px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: solid 1px black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  &:hover {
    cursor: pointer;
  }
`;
