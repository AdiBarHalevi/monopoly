import React from "react";
import CardDisplay from "../page-2/CardDisplay";
import PlayerTable from "../page-2/PlayerTable";
import GameBoardLayout from "./GameBoardLayout";


const GameBoard = () => {

  return (
    <>
      <CardDisplay/>
      <GameBoardLayout />
      <PlayerTable/>
    </>
  );
};

export default GameBoard;
