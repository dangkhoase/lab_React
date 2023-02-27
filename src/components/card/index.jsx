import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { Card, Col } from "react-materialize";

function CardPlayer({ player, handleClick, setPlayerId }) {
  const onClick = (id) => {
    handleClick();
    setPlayerId(id);
  };
  return (
    <Card>
      <Col style={{width: "100%", padding: "0"}}>
        <Link to={`/detail/${player.id}`} className="card">
          <div className="img">
            <img src={player.img} alt={player.img} style={{width: "100%",borderRadius:"30px 30px 0 0"}}/>
          </div>
          <div className="text">
            <p className="h3">
              <Link to="#" onClick={() => onClick(player.id)}>
                {player.name}
              </Link>
            </p>
            <p className="p"> {player.cost} </p>
            <div className="icon-box">
              <p className="span">{player.club}</p>
            </div>
          </div>
        </Link>

        
      </Col>
    </Card>
  );
}

export default CardPlayer;
