import React from "react";
import { render } from "react-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import Credit from "./Credit";
import Swal from "sweetalert2";
import { scoreUpdate } from "../../../store/action/authActions";
import { useDispatch, useSelector } from "react-redux";
import { RiCoinsLine } from "react-icons/ri";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./CardUtils";
import { useHistory } from "react-router";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const onSubmit = async (values) => {
//     await sleep(300);
//     window.alert(JSON.stringify(values, 0, 2));

//   };
const Index = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  const onSubmit = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Payment succeeded",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(scoreUpdate({ score: 5000 + user?.score }));
    history.push("/crisisstore");
  };
  return (
    <Styles>
      <Form
        onSubmit={onSubmit}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
          active,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <h4> Pay 10$ to get 5000 points{<RiCoinsLine />}</h4>
              <Credit
                number={values.number || ""}
                name={values.name || ""}
                expiry={values.expiry || ""}
                cvc={values.cvc || ""}
                focused={active}
              />
              <div>
                <Field
                  name="number"
                  component="input"
                  type="text"
                  pattern="[\d| ]{16,22}"
                  placeholder="Card Number"
                  format={formatCreditCardNumber}
                />
              </div>
              <div>
                <Field
                  name="expiry"
                  component="input"
                  type="text"
                  pattern="\d\d/\d\d"
                  placeholder="Valid Thru"
                  format={formatExpirationDate}
                />
                <Field
                  name="cvc"
                  component="input"
                  type="text"
                  pattern="\d{3,4}"
                  placeholder="CVC"
                  format={formatCVC}
                />
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  PAY
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
            </form>
          );
        }}
      />
    </Styles>
  );
};
export default Index;
