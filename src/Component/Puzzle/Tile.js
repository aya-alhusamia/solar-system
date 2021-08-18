import React  from "react";
import { Motion, spring } from "react-motion";
//Functions
import { getMatrixPosition, getVisualPosition } from "./helpers";
//Style
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants"
import "./style.css"


function Tile(props) {
    
    const { tile, index, width, height, handleTileClick, randomImg } = props;
    console.log("img in tile", randomImg)
    const { row, col } = getMatrixPosition(index);
    const visualPos = getVisualPosition(row, col, width, height);
    const tileStyle = {
        width: `calc(100% / ${GRID_SIZE})`,
        height: `calc(100% / ${GRID_SIZE})`,
        translateX: visualPos.x,
        translateY: visualPos.y,
        backgroundImage: `url(http://localhost:8000/media//1628965551706detail2.PNG)`,
        backgroundSize: `${BOARD_SIZE * 1.3}%`,
        backgroundPosition: `${(100 / GRID_SIZE) * (tile % GRID_SIZE)}% ${(100 / GRID_SIZE) * (Math.floor(tile / GRID_SIZE))}%`,

    };
    const motionStyle = {
        translateX: spring(visualPos.x),
        translateY: spring(visualPos.y)
    }

    return (
        <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
                <li
                    style={{
                        ...tileStyle,
                        transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                        // Is last tile?
                        opacity: tile === TILE_COUNT - 1 ? 0 : 1,
                    }}
                    className="tile"
                    onClick={() => handleTileClick(index)}
                >
                    {!randomImg && `${tile + 1}`}
                </li>
            )}
        </Motion>
    );
}

export default Tile;
