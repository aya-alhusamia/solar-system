import { useState } from "react";
import { RiSpaceShipLine } from "react-icons/ri";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createItem } from "../../store/action/itemActions";

const Item = (props) => {
  const users = useSelector((state) => state.user.user);
  console.log(users, "test");
  const [show, setShow] = useState(false);
  const [user, setUser] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    image: props.item.image,
    category: props.item.category,
    price: props.item.price,
    userId: users.id,
  });
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createItem(newItem, users));
    handleClose();
    setNewItem({
      name: "",
    });
  };

  const handleInputChange = (event) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
  };

  // const handleChange = (event) => {
  //   if (event[event.length - 1]) {
  //     setUser([...user, users.id]);
  //   }
  //   console.log("handleCange", user);
  // };

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
              <button
                className="btn secondary btn-primary"
                type="submit"
                // onClick={handleChange}
              >
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
