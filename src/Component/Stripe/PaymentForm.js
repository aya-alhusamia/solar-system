import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { paymentIntent } from "../../store/action/stripeActions";

const CheckoutForm = ({ auction }) => {
  const dispatch = useDispatch();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(paymentIntent());
  }, []);

  const { clientSecret } = useSelector((state) => state.clientSecret);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: email,
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <input
        className="input0"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
      />

      <CardElement
        id="card-element"
        options={cardStyle}
        onChange={handleChange}
      />
      <button
        className="buttonO"
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
          {" "}
          Stripe dashboard.
        </a>{" "}
        Refresh the page to pay again.
      </p>
    </form>
  );
};
export default CheckoutForm;

// import { Button } from "@material-ui/core";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import instance from "../../store/action/instance";
// import { useState } from "react";
// const _stripe = require("stripe")(
//   "pk_test_51JQYTnDsGZQiZyXQfbiKeQ0dCiqSOIpOI9fDoU4QGSdShU9sgYs1JyyuExmYFQIzWNLVV9nRPgl9NaCIsGCk7FTU00JzwEjZ8r"
// );

// const CARD_OPTIONS = {
//   iconStyle: "solid",
//   style: {
//     base: {
//       iconColor: "#c4f0ff",
//       color: "#fff",
//       fontWeight: "500",
//       fontSize: "16px",
//       fontSmoothing: "antialiased",
//       ":-webkit-autofill": { color: "#fce883" },
//       "::placeholder": { color: "#87bbfd" },
//     },
//     invalid: {
//       iconColor: "#ffc7ee",
//       color: "#ffc7ee",
//     },
//   },
// };

// const PaymentForm = () => {
//   const [success, setSuccess] = useState(false);
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const paymentIntent = await _stripe.paymentIntents.create({
//       amount: 5000,
//       currency: "usd",
//     });
//     console.log("Payment", paymentIntent);

//     // const { error, paymentMethod } = await stripe.createPaymentMethod({
//     //   type: "card",
//     //   card: elements.getElement(CardElement),
//     // });

//     // if (!error) {
//     try {
//       // const id = paymentMethod;
//       // console.log(id);
//       const response = await instance.post("/payment", {
//         amount: 1000,
//       });
//       if (response.data.success) {
//         console.log("successful payment");
//         setSuccess(true);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//     // } else {
//     //   console.log(error.message);
//     // }
//   };

//   return (
//     <>
//       {!success ? (
//         <form onSubmit={handleSubmit}>
//           <fieldset className="FormGroup">
//             <div className="FormRow">
//               <CardElement options={CARD_OPTIONS} />
//             </div>
//           </fieldset>
//           <Button color="secondary" type="submit">
//             Pay
//           </Button>
//         </form>
//       ) : (
//         <div>
//           <h2>You just bought your planet</h2>
//         </div>
//       )}
//     </>
//   );
// };
// export default PaymentForm;
