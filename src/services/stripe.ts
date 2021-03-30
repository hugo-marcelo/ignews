import Stripe from 'stripe';
import { version } from '../../package.json';

export const stripe = new Stripe(
  'sk_test_51IXsMqA2BHlKnRJgydx3bcGMZGeFTPql5oOqvnxdo1HxZBqsbXkExvEl1mHJ67lrPG60o2PuqoxUHggWwQ3RTKIH00xhhOKYZz',
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'Ignews',
      version
    }
  }
);
