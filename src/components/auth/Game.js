import React, { } from "react";
import { useNavigate } from "react-router-dom";
import infogame from "../images/infogame.png";

const Game = () => {
    const navigate = useNavigate();

    const ongame = async (e) => {
        e.preventDefault();
        try {
          window.open("https://gamelatch-7eb0c.web.app", "_blank");
        } catch (error) {
          console.log(error.message);
        }
      };

    return (
        <>
          <div>
          <div className="info"><img src={infogame} alt="game" onClick={ongame} /></div>
          </div>
        </>
      );
};

export default Game;