import { Modal, Button, Image } from "react-bootstrap";
import dead from "../images/dead.png";

const FailModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      {console.log("modal", props)}
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "black" }}>You Lost</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={dead} fluid />
        <center style={{ color: "black" }}>
          Dont feel sad , you reached level <b>{props.level}</b>!
        </center>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => props.handleClick()}>
          Try again
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default FailModal;
