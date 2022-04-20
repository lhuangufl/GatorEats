import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../components/Checkout/CheckoutForm'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export default function Checkout() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <div>
        <CheckoutForm />
    </div>
  );
};