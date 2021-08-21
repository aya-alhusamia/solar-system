import { Modal, Button, Image } from "react-bootstrap";
import dead from "../images/dead.png";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { scoreUpdate } from "../../../store/action/authActions";

const FailModal = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const history = useHistory();
  const score = useSelector((state) => state.user.user?.score);

  const handleClick = () => {
    console.log(" handle score");
    dispatch(scoreUpdate({ score: `${score + _score}` }, history));
  };

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
        <Button variant="danger" onClick={handleClick}>
          Try again
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default FailModal;
