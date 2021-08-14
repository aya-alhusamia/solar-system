import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//Components
import Solar from "./Solar/Solar";

//Action
import { signup } from "../../store/action/userActions";

//Styling
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import "./style.css"

function Signup() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [pass, setPass] = useState("password");
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const handleChange = (event) =>
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    const showPass = () => {
        pass === "password" ? setPass("text") : setPass("password");
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(signup(user, history));
    };
    return (
        <div className="test">
            <Solar />
            <div className="log-from">
                <form className="container" onSubmit={handleSubmit}>
                    <h2> Signup</h2>
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
                        value="Signup" />
                </form>
            </div>

        </div>
    )
}

export default Signup
