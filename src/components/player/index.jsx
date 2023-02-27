import React from "react";
import { Players } from "../../Players";
import Card from "../card";
import { Row, Container } from "react-materialize";
function Player({ setPlayerId, handleClick }) {
  return (
    <>
      <Container>
        <Row>
          <div className="containerHome">
            {Players.map((player, index) => (
              <Card
                player={player}
                handleClick={handleClick}
                setPlayerId={setPlayerId}
                key={index}
              />
            ))}
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Player;
