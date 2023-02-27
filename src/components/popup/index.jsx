import React from "react";
import { Players } from "../../Players";
import { Link } from "react-router-dom";
function Popup({ playerId, handleClick }) {
  return (
    <>
      <div className="popup" onClick={handleClick}></div>
      <div className="popup-container">
        {Players.filter((id) => id.id === playerId).map((player, index) => (
          <div className="card" style={{ height: "100%",width: "100%" }} key={index}>
            <div className="item" style={{ height: "100%" }}>
              <div className="avatarImg">
                <img src={player.img} alt={player.img} />
              </div>
              <div className="advisor" style={{ justifyContent: "flex-end" }}>
                <div className="profile">
                  <Link to="#" className="name">
                    {player.name}
                  </Link>
                  <div>
                    <span className="info">{player.club}</span>
                    <span className="info">{player.cost}</span>
                  </div>
                  <div>
                    <span>{player.info}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Popup;
