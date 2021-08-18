 
import solar_img from "./images/VTCa.gif"
import { Link } from "react-router-dom";
//Components
import Solar_System from "../Solar-System/SolarSystem/SolarSystem"
//Style
import { CgDetailsMore } from "react-icons/cg";
import "./style.css"
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
function Card() {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: config.default }))
    return (

        <Container
            onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
 
            {/* <StyledImg src={solar_img} /> */}
 
            <StyledImg src={solar_img} />
 
            <StyledH1>Solar System</StyledH1>
            <div style={{ marginTop: "7px" }}>
                {" "}
                <Link to="/solar"> <CgDetailsMore
                    size="3em"
 
                    color="#f8f9fa"
                /> </Link>

            </div>
        </Container>
    )
}

export default Card

const Container = styled(animated.div)`
display: inline-block;
padding: 3em;
background: #C7D2FE66;
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
`;