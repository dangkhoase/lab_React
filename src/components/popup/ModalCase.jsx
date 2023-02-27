import React from "react";
import { Players } from "../../Players";

function ModalCase({ playerId, handleClick }) {
  return (
    <div className="modal-show" onClick={handleClick}>
      <div
        id="modal1"
        className="modal"
        style={{ display: "block", top: "35%" }}
      >
        <div className="modal-content">
          <h4>Video for</h4>
          {Players.filter((id) => id.id === parseInt(playerId)).map(
            (player, index) => (
              <p key={index}>
                <iframe
                  width="100%"
                  height="400px"
                  src={player.clip}
                  title={player.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscopel picture-in-picture"
                  allowFullScreen
                />
                {player.name}
              </p>
            )
          )}
        </div>
        <div className="modal-footer">
          <a className="modal-close red-text">Close</a>
        </div>
      </div>
    </div>
  );
}

export { ModalCase };
