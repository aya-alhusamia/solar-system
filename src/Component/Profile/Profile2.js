import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
//Action
import { updateUser } from "../../store/action/authActions";
//Style
import { Button, Modal, Form } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { AssignmentIndIcon } from "@material-ui/icons";
import { signout } from "../../store/action/authActions";
import "./prof.scss";

function Profile2() {
  const _user = useSelector((state) => state.user.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const usersignout = () => {
    dispatch(signout());
    history.push("/");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(user, history));
  };

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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="wafaa">
      <aside class="profile-card">
        <div
          style={{
            color: "#4e5b6b",
            marginLeft: "215px",
            display: "flex",
            flexDirection: "row",
            width: "80px",
            marginTop: "10px",
          }}
        >
          <ImProfile style={{ marginRight: "10px", color: "rgb(223, 123, 41)" }} onClick={handleShow} />{" "}
          <HiOutlineLogout style={{ color: "rgb(223, 123, 41)" }} onClick={usersignout} />
        </div>
        <header className="sal">
          <a className="fai" target="_blank">
            <img className="ht" src="https://i.gifer.com/8D9O.gif" />
          </a>

          <h3>
            <a
              href="/myitems"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              My Items{" "}
            </a>
          </h3>
          <h1>{_user?.username}</h1>

          <h2 style={{ color: "white" }}>
            Level: {Math.round(_user?.score / 500)}
          </h2>
        </header>
        <div class="profile-bio">
          <p>
            Hello {_user?.username} , if you want to edit profile please click
            on the below button
          </p>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Title style={{ color: "black" }}>
            Edit your profile
          </Modal.Title>

          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ color: "black" }}> User name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  onChange={handleChange}
                  value={user.username}
                  name="username"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ color: "black" }}>Password</Form.Label>
                <Form.Control
                  type={pass}
                  placeholder="Password"
                  onChange={handleChange}
                  value={user.password}
                  name="password"
                />
              </Form.Group>
              <Modal.Footer>
                {/* <input type="submit" value="Edit your Profile" style={{ color: "black" }} /> */}
                <button variant="secondary" type="submit">
                  Edit your Profile
                </button>
                <button variant="secondary" onClick={handleClose}>
                  Close
                </button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </aside>
    </div>
  );
}

export default Profile2;
