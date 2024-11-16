import dices from "../assets/dices.png";
import styled from "styled-components";
import { Button } from "../styled/Button";
// eslint-disable-next-line react/prop-types
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <img src={dices} alt="" />
      <div className="content">
        {" "}
        <h1>DICE GAME</h1>
        <div className="startBtn">
          <Button onClick={toggle}>PLAY NOW</Button>
        </div>
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
  .startBtn {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
