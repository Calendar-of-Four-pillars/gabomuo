/* eslint-disable no-param-reassign */
import nextAuth, { NextAuthOptions } from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_ID as string,
      clientSecret: process.env.NAVER_SECRET as string
    })
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log('user', user);
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
    async signIn(data) {
      console.log('sign', data);
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      }
      // Return false to display a default error message
      return false;
      // Or you can return a URL to redirect to:
      // return '/unauthorized'
    }
  }
};
export default nextAuth(authOptions);
