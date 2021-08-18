import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

//Action
 
import { signin } from "../../store/action/authActions";
//Component
import Solar from "./Solar/Solar";
 
//Style
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import "./style.css"

function Signin() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [pass, setpass] = useState("password");
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const [focus, setFocus] = useState("")
    const handleChange = (event) =>
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    const showPass = () => {
        pass === "password" ? setpass("text") : setpass("password");
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(signin(user, history));
    };
    return (
        <div className="test">
            <Solar />
            <div className="log-from">
                <form className="container" onSubmit={handleSubmit}>
                    <h2>LOGIN</h2>
                    <div className="lif">
                        <input type='text'
                            className="login-element"
                            placeholder="Username"
                            onChange={handleChange}
                            value={user.username}
                            name="username" />
                        <span class="input-group-text" id="basic-addon2">
                            <FiUser size="1.5em" color="#e57300"
                                shadow="0 1px 1px #e5e500, 0 2px 2px #e57300" />
                        </span>

                    </div>
                    <div className="lif">
                        <input type={pass}
                            className="login-element"
                            placeholder="Password"
                            onChange={handleChange}
                            value={user.password}
                            name="password" />
                        <span class="input-group-text" id="basic-addon2">
                            {pass === "password" ? (
                                <AiFillEye size="1.5em" onClick={showPass} color="#e57300" shadow="0 1px 1px #e5e500, 0 2px 2px #e57300" />
                            ) : (
                                <AiFillEyeInvisible size="1.5em" onClick={showPass} color="#e57300" shadow="0 1px 1px #e5e500, 0 2px 2px #e57300" />
                            )}
                        </span>

                    </div>
                    <input type="submit"
                        id="login-btn"
                        value="Login" />
                </form>
                <div className="test3">
                    <p>if you  dont have accout! please sign up  <Link to="/signup" >
                        here
                    </Link></p>
                </div>
            </div>

        </div>

    )
}

export default Signin
 
 
