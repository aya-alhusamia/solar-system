import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51JQYTnDsGZQiZyXQfbiKeQ0dCiqSOIpOI9fDoU4QGSdShU9sgYs1JyyuExmYFQIzWNLVV9nRPgl9NaCIsGCk7FTU00JzwEjZ8r";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <div className="main">
      <Elements stripe={stripeTestPromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
}
