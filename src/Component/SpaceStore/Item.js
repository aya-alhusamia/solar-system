import { useState, useEffect } from "react";
import { RiSpaceShipLine } from "react-icons/ri";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createUserItem, fetchUserItems } from "../../store/action/userItemActions";
import { scoreUpdate } from "../../store/action/authActions";
import { useHistory } from "react-router";

const Item = (props) => {
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
  const handleShow = () => setShow(true);

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
    dispatch(fetchUserItems()
  )}, [newItem])

  const handleInputChange = (event) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
    console.log("input", newItem);
  };

  return (
    <>
      <div>
        <p>{props.item.category}</p>
        <img src={props.item.image} />
        <p>{props.item.name}</p>
        <p>{props.item.price} $</p>
        <RiSpaceShipLine onClick={handleShow} />
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
