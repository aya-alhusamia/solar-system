import image1 from "./images/image1.svg";
import { Link } from "react-router-dom";
import "./style.scss";

const Games = () => {
  return (
    <section className="page-contain">
      <a href="#" className="data-card">
        <h3>Hit Alien</h3>
        <p>Go And Save Our Solar System</p>
        <span className="link-text">
          Go To Hero Game
          <Link to="/planet" style={{ margin: "8px" }}>
            <img src={image1} />
          </Link>
        </span>
      </a>
      <a href="#" className="data-card">
        <h3>Flip Flop</h3>
        <p>match the cards</p>
        <span className="link-text">
          Go To Memory Game
          <Link to="/memory" style={{ margin: "8px" }}>
            {" "}
            <img src={image1} />
          </Link>
        </span>
      </a>
      <a href="#" className="data-card">
        <h3>Puzzle</h3>
        <p>puzzle game , crazy game</p>
        <span className="link-text">
          Go To Puzzle Game
          <Link to="/puzzle" style={{ margin: "8px" }}>
            <img src={image1} />
          </Link>
        </span>
      </a>
    </section>
  );
};
export default Games;
