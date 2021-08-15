import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//Components
import { updateUser } from "../../store/action/authActions";

//Styling
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { UserForm } from "../../styles";

const Profile = () => {
  const _user = useSelector((state) => state.user.user);
  const history = useHistory();
  console.log(_user)
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
    event.preventDefault()
    dispatch(updateUser(user, history));
  };

  return (

    <div className="container mt-5">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          {" "}
          <UserForm onSubmit={handleSubmit}>
            <h1 className="mb-5">Profile</h1>
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
            >
              Edit your Profile
            </button>
          </UserForm>
        </div>


      </div>


    </div>
  );
};

export default Profile;