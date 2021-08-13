import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

//Components
import { signin } from "../../store/action/userActions";

//Styling
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { UserForm } from "../../styles";
import './style.css'
//Images
import background from "./images/background.png"
import rock from "./images/rock.png"
import earth from "./images/earth.png"
import mid from "./images/mid.png"
import foreground from "./images/foreground.png"
const SignIn = () => {
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

  // var scene = document.getElementById("scene");
  // var parallaxInstance = new Parallax(scene);
  return (


    <div className="container mt-5">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          {" "}
          <section id="sectionone" className="screen">
            <div id="scene">
              <div data-depth="0.1" className="bg">
                <img src={background} alt=""
                />
              </div>
              <div data-depth="0.2" className="rock1">
                <img src={rock} alt=""
                />
              </div>
              <div data-depth="1.2" className="earth">
                <img src={earth} alt=""
                />
              </div>
              <div data-depth="0.1" className="text">
                <UserForm onSubmit={handleSubmit}>
                  <h1 className="mb-5">Sign in</h1>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon2"
                      onChange={handleChange}
                      value={user.username}
                      name="username"
                    />
                    <span class="input-group-text" id="basic-addon2">
                      <FiUser size="1.5em" />
                    </span>{" "}
                  </div>
                  <div class="input-group mb-3">
                    <input
                      type={pass}
                      class="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon2"
                      onChange={handleChange}
                      value={user.password}
                      name="password"
                    />
                    <span class="input-group-text" id="basic-addon2">
                      {pass === "password" ? (
                        <AiFillEye size="1.5em" onClick={showPass} />
                      ) : (
                        <AiFillEyeInvisible size="1.5em" onClick={showPass} />
                      )}
                    </span>{" "}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4 float-end"
                  >
                    Sign in
                  </button>
                </UserForm>
              </div>
              <div data-depth="0.4" className="mid">
                <img src={mid} alt="" />
              </div>
              <div data-depth="0.1" className="fore">
                <img src={foreground} alt="" />
              </div>
            </div>
          </section>
          {/* <UserForm onSubmit={handleSubmit}>
            <h1 className="mb-5">Sign in</h1>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon2"
                onChange={handleChange}
                value={user.username}
                name="username"
              />
              <span class="input-group-text" id="basic-addon2">
                <FiUser size="1.5em" />
              </span>{" "}
            </div>
            <div class="input-group mb-3">
              <input
                type={pass}
                class="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
                onChange={handleChange}
                value={user.password}
                name="password"
              />
              <span class="input-group-text" id="basic-addon2">
                {pass === "password" ? (
                  <AiFillEye size="1.5em" onClick={showPass} />
                ) : (
                  <AiFillEyeInvisible size="1.5em" onClick={showPass} />
                )}
              </span>{" "}
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4 float-end"
            >
              Sign in
            </button>
          </UserForm> */}
        </div>
        <div className="col-4"></div>
        <p>dont have accout! please sign up  <Link to="/signup" >
          here
        </Link></p>
      </div>
    </div>


  );
};

export default SignIn;