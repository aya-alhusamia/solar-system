import { Button } from "@material-ui/core";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import instance from "../../store/action/instance";
import { useState } from "react";
const _stripe = require("stripe")(
  "sk_test_51JQYTnDsGZQiZyXQfOuGcY0q6hQYRR3jmdI9e9j5SqGbRxB7YyodD4844u5JwrAeFGwa22RHJkBOOy0MIjp0c8HB00JohV6oR6"
);

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: "500",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const paymentIntent = await _stripe.paymentIntents.create({
      amount: 10,
      currency: "USD",
      payment_method_types: ["card"],
      // description: "company",
      // payment_method: id,

      // confirm: true,
    });
    console.log("Payment", paymentIntent);

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardElement),
    // });

    // if (!error) {
    //   try {
    //     const id = paymentMethod;
    //     console.log(id);
    //     const response = await instance.post("/payment", {
    //       amount: 1000,
    //       id,
    //     });
    //     if (response.data.success) {
    //       console.log("successful payment");
    //       setSuccess(true);
    //     }
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    // } else {
    //   console.log(error.message);
    // }
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <Button color="secondary" type="submit">
            Pay
          </Button>
        </form>
      ) : (
        <div>
          <h2>You just bought your planet</h2>
        </div>
      )}
    </>
  );
};
export default PaymentForm;
