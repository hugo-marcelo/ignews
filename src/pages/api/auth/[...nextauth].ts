import { query as q } from 'faunadb';

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: 'e36572793f3d58327f80',
      clientSecret: '3c3901ed16f70a02730dd0f4a2e02752e5f3b846',
      scope: 'read:user'
    })
  ],
  callbacks: {
    async signIn(user) {
      const { email } = user;

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index('user_by_email'), q.Casefold(user.email))
              )
            ),
            q.Create(q.Collection('users'), {
              data: { email }
            }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(user.email)))
          )
        );

        return true;
      } catch {
        return false;
      }
    }
  }
});
