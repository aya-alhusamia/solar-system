import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//Action
import { updateUser } from "../../store/action/authActions";

//Styling
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import "./style.css"



function Profile1() {
    const _user = useSelector((state) => state.user.user);
    const history = useHistory();
    console.log(_user);
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        username: _user?.username,
        password: "",
    });
    const [pass, setpass] = useState("password");
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const showPass = () => {
        pass === "password" ? setpass("text") : setpass("password");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateUser(user, history));
    };
    return (
        <div style={{ padding: "50px" }}>
            <div className="log-from">
                <form className="containerProfile" onSubmit={handleSubmit}>
                    <h2>Profile</h2>
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
                        value="Edit your Profile" />
                </form>
            </div>
        </div>
    )
}

export default Profile1
