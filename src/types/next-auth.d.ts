/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth';

import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface Session {
    accessToken: string | undefined;

    user: {
      /** The user's postal address. */
      address: string;
      email: string;
    };
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    accessToken: string | undefined;
    idToken?: string;
  }
}
