import { useState } from "react";
import { RiSpaceShipLine } from "react-icons/ri";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createUserItem } from "../../store/action/userItemActions";
import { updateUser } from "../../store/action/authActions";

const Item = (props) => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const [show, setShow] = useState(false);
  const [_user, setUser] = useState({
    username: user.username,
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
    setUser({
      ..._user,
      score: user.score - props.item.price,
    });
    dispatch(createUserItem(newItem));
    dispatch(updateUser(_user));
    handleClose();
    setNewItem({
      ...newItem,
      name: "",
    });
  };

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
        <Modal.Title>enter a name for your item</Modal.Title>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Item name</Form.Label>
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
