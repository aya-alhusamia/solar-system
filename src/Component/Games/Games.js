import image1 from "./images/image1.svg";
import { Link } from "react-router-dom";
import "./style.scss";

const Games = () => {
  return (
    <section className="page-contain">
      <a href="#" className="data-card">
        <h3>Easy</h3>
        <h4>Hero Game</h4>
        {/* <p>Aenean lacinia bibendum nulla sed consectetur.</p> */}
        <span className="link-text">
          Go To Hero Game
          <Link to="/planet">
            <img src={image1} />
          </Link>
        </span>
      </a>
      <a href="#" className="data-card">
        <h3>Medium</h3>
        <h4>Memory Game</h4>
        {/* <p>Aenean lacinia bibendum nulla sed consectetur.</p> */}
        <span className="link-text">
          Go To Memory Game
          <Link to="/memory">
            {" "}
            <img src={image1} />
          </Link>
        </span>
      </a>
      <a href="#" className="data-card">
        <h3>Hard</h3>
        <h4>Puzzle</h4>
        {/* <p>Etiam porta sem malesuada.</p> */}
        <span className="link-text">
          Go To Puzzle Game
          <Link to="/puzzle">
            <img src={image1} />
          </Link>
        </span>
      </a>
    </section>
  );
};
export default Games;
