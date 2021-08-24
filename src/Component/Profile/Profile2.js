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
import "./prof.scss"

function Profile2() {
    const _user = useSelector((state) => state.user.user);
    const history = useHistory();
    const dispatch = useDispatch();

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

                <header className="sal">
                    <a className="fai" target="_blank" href="https://twitter.com/xxdionxx">
                        <img className="ht" src="https://i.gifer.com/8D9O.gif" />
                    </a>

                    <h3>
                        <a href="/myitems" style={{ textDecoration: "none", color: "white" }} > My Items </a>
                    </h3>
                    <h1>{_user?.username}</h1>

                    <h2 style={{ color: "white" }}>Score: {_user?.score}</h2>

                </header>


                <div class="profile-bio">

                    <p>
                        Hello {_user?.username} , if you want to edit profile please click on the below button
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
                                <Button variant="secondary" type="submit">
                                    Edit your Profile
                                </Button>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>

            </aside>
            <button className="btn-waf" onClick={handleShow}>Update Profile </button>
        </div>


    )
}

export default Profile2
