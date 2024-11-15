import dices from "../assets/dices.png";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <img src={dices} alt="" />
      <div className="content">
        {" "}
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>PLAY NOW</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  align-items: center;
  margin: 0 auto;
  display: flex;

  .content {
    display: flex;
    flex-direction: column;
    position: relative;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  position: absolute;
  right: 0px;
  bottom: 0px;
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
