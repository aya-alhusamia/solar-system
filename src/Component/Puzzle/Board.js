
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//Components
import Tile from "./Tile";
//Style
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants";
import "./style.css";
//Functions
import { canSwap, shuffle, swap, isSolved } from "./helpers";
import { scoreUpdate } from "../../store/action/authActions";
import { useHistory } from "react-router";

function Board({ randomImg }) {
  const history = useHistory();
  const score = useSelector((state) => state.user.user?.score);
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  console.log("is started:", isStarted);
  const [moves, setMoves] = useState(0);
  //  const [hasWon, setHasWon] = useState(false);
  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };
  const dispatch = useDispatch();
  const calculateScore = () => {
    let score = TILE_COUNT * 100;
    for (let i = 0; i < moves - (GRID_SIZE * TILE_COUNT - 1); i++) {
      score = score - score * 0.05;
      score = Math.floor(score);
    }
    return score;
  };
  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(
        tiles,
        tileIndex,
        tiles.indexOf(tiles.length - 1)
      );
      setTiles(swappedTiles);
    }
  };

  const handleTileClick = (index) => {
    swapTiles(index);
    setMoves(moves + 1);
  };
  console.log(moves);
  const handleShuffleClick = () => {
    shuffleTiles();
    setMoves(0);
  };

  const handleStartClick = () => {
    shuffleTiles();
    setIsStarted(true);
    setMoves(0);
  };

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };

  const hasWon = isSolved(tiles)
  const handleClick = () => {
    dispatch(scoreUpdate({ score: score + calculateScore() }, history));
  }

  return (
    <div className="main">
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            randomImg={randomImg}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      {hasWon && isStarted && <div>Puzzle solved ???? ???? {calculateScore()}
        <button className="start-btn" onClick={handleClick}>
          finish  </button></div>}

      {!isStarted ? (
        <button className="start-btn" onClick={() => handleStartClick()}>Start game</button>
      ) : (
        <button className="start-btn" onClick={() => handleShuffleClick()}>Restart game</button>
      )}

    </div>

  );

}

export default Board;
