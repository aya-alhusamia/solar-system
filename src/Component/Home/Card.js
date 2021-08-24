import { Link } from "react-router-dom";
//Images
import solar_img from "./images/VTCa.gif";
import out_of_space from "./images/NSu6.gif";
import gameCard from "./images/gameCard.gif";

//Style
import { CgDetailsMore } from "react-icons/cg";
import "./style.css";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import { useSelector } from "react-redux";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
function Card() {
  const user = useSelector((state) => state.user.user);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  return (
    <div>
      <Containeree
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
        }}
      >
        <StyledImg src={solar_img} />
        <StyledH1>Solar System</StyledH1>
        <div style={{ marginTop: "7px" }}>
          <Link to="/solar">
            {" "}
            <CgDetailsMore size="3em" color="#f8f9fa" />{" "}
          </Link>
        </div>
      </Containeree>
      <Containeree
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
        }}
      >
        <StyledImg src={out_of_space} />
        <StyledH1>Out Of Space</StyledH1>
        <div style={{ marginTop: "7px" }}>
          <Link to="/space">
            {" "}
            <CgDetailsMore size="3em" color="#f8f9fa" />{" "}
          </Link>
        </div>
      </Container>
      <Containeree
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
        }}
      >
        <StyledImg src={gameCard} />
        <StyledH1>Games</StyledH1>
        <div style={{ marginTop: "7px" }}>
          {user ? (
            <Link to="/games">
              {" "}
              <CgDetailsMore size="3em" color="#f8f9fa" />{" "}
            </Link>
          ) : (
            <Link to="/signin">
              {" "}
              <CgDetailsMore size="3em" color="#f8f9fa" />{" "}
            </Link>
          )}
        </div>
      </Containeree>
    </div>
  );
}

export default Card;

const Containeree = styled(animated.div)`
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  display: inline-block;
  padding: 3em;
  background: #37383b3a;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(5px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 200px;
  height: auto;
  border: 2px solid #000;
  border-radius: 50%;
`;

const StyledH1 = styled.h1`
  line-height: 1.5;
  letter-spacing: 1.5;
  font-family: "Gilroy";
  text-shadow: 0 1px 1px #f7f7ef, 0 2px 2px #817c77be;
`;
