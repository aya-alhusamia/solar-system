import { useState, useEffect } from "react";
import { RiSpaceShipLine } from "react-icons/ri";
import { Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserItem,
  fetchUserItems,
} from "../../store/action/userItemActions";
import { scoreUpdate } from "../../store/action/authActions";
import { useHistory } from "react-router";
import "./style.css";
import { GiCrownCoin } from "react-icons/gi";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  btn: {
    fontSize: 18,
    color: "rgb(223, 123, 41)",
    "&:hover": {
      color: "#008378",
    },
  },
}));
const Item = (props) => {
  const classes = useStyles();
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  console.log(user);
  const [show, setShow] = useState(false);
  const [score, setScore] = useState({
    score: user.score,
  });

  const [newItem, setNewItem] = useState({
    name: "",
    itemId: +props.item.id,
  });
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => {
    user.score >= props.item.price || user.crisisCoin >= props.item.price
      ? setShow(true)
      : history.push("./checkout");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setScore({
      score: user.score - props.item.price,
    });
    dispatch(createUserItem(newItem));
    dispatch(scoreUpdate({ score }, history));
    handleClose();
    setNewItem({
      ...newItem,
      name: "",
    });
  };

  useEffect(() => {
    dispatch(fetchUserItems());
  }, [newItem]);

  const handleInputChange = (event) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
    console.log("input", newItem);
  };

  return (
    <>
      <div className="caarde">
        <div className="caarde-inner">
          <div className="caarde-front">
            <p className="parr">
              {props.item.price} <GiCrownCoin />{" "}
            </p>
            <img src={props.item.image} />
          </div>
          <div className="caarde-back">
            <h3>{props.item.name}</h3>
            <p>{props.item.category}</p>
            {user.score >= props.item.price ? (
              <>
                <Button
                  variant="text"
                  className={classes.btn}
                  startIcon={<RiSpaceShipLine />}
                  onClick={handleShow}
                >
                  Buy
                </Button>
                <Button
                  variant="text"
                  className={classes.btn}
                  startIcon={<GiCrownCoin />}
                  onClick={handleShow}
                >
                  Buy
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="text"
                  disabled
                  className={classes.btn}
                  startIcon={<RiSpaceShipLine />}
                  onClick={handleShow}
                >
                  Buy
                </Button>
                <Button
                  variant="text"
                  className={classes.btn}
                  startIcon={<GiCrownCoin />}
                  onClick={handleShow}
                >
                  Buy
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Title style={{ color: "black" }}>
          enter a name for your item
        </Modal.Title>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "black" }}>Item name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                onChange={handleInputChange}
                placeholder="item name"
              />
            </Form.Group>

            <Modal.Footer>
              <button className="btn secondary btn-primary" type="submit">
                {" "}
                add to my store
              </button>

              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Item;
