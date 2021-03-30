import { loadStripe } from '@stripe/stripe-js';

export async function getStripeJs() {
  const stripeJs = await loadStripe(
    'pk_test_51IXsMqA2BHlKnRJggaM0VXbOgZCqgOHchc3X3oDV04iMfFOwjxrIIT3W4LBf8nr199c1ANXkFddvbEML6mqkTr4T009wYumxRq'
  );

  return stripeJs;
}
