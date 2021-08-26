import { Modal, Button, Image } from "react-bootstrap";
import dead from "../images/dead.png";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  btn: {
    fontSize: 18,
    background: "rgb(223, 123, 41)",
    color: "white",
    "&:hover": {
      backgroundColor: "#008378",
    },
  },
}));

const FailModal = (props) => {
  const classes = useStyles();
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header>
        <Modal.Title style={{ color: "rgb(223, 123, 41)" }}>
          You Lost
        </Modal.Title>
        <IconButton
          aria-label="delete"
          className={classes.btn}
          onClick={props.handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Modal.Header>
      <Modal.Body>
        <Image src={dead} fluid />
        <center style={{ color: "rgb(223, 123, 41)", fontSize: "25px" }}>
          Dont feel sad , you reached level <b>{props.level}</b>!
        </center>
      </Modal.Body>
      <Modal.Footer>
        <Button className={classes.btn} onClick={() => props.handleClick()}>
          {" "}
          Try again
        </Button>
        {/* <Button variant="danger" onClick={() => props.handleClick()}>
          Try again
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};
export default FailModal;
