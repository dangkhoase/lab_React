import React from "react";
import { Link, useParams } from "react-router-dom";
import { Players } from "../../Players";
import { Icon } from "react-materialize";
import { usePopup } from "../../hooks/usePopup";
import { ModalCase } from "../popup/ModalCase";
function Detail() {
  const { playerId } = useParams();
    const { popup, handleClick } = usePopup();
  return (
    <div className="detail-container" style={{ marginBottom: "20px" }}>
      {Players.filter((id) => id.id === parseInt(playerId)).map(
        (player, index) => (
          <div
            className="card"
            style={{ textAlign: "center", width: "100%" }}
            key={index}
          >
            <img
              src={player.img}
              alt={player.img}
              style={{ height: "100%", width: "100%" }}
            />
            <Link to="#" className="name" style={{ color: "#039be5" }}>
              {player.name}
            </Link>
            <div>
              <span className="info">{player.club}</span>
              <span className="info">{player.cost}</span>
            </div>
            <div
              style={{
                padding: "20px",
              }}
            >
              <span>{player.info}</span>
            </div>
            <a
              onClick={handleClick}
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <Icon>ondemand_video</Icon>
            </a>
          </div>
        )
      )}
      {popup && <ModalCase playerId={playerId} handleClick={handleClick} />}
    </div>
  );
}

export default Detail;
