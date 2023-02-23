/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import nextAuth, { NextAuthOptions } from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import client from 'src/libs/client';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(client),
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_ID as string,
      clientSecret: process.env.NAVER_SECRET as string,
      profile(profile) {
        const {
          response: { gender, birthday, birthyear }
        } = profile as { response: { gender: string; birthday: string; birthyear: string } };

        const convertedForm = {
          gender: gender ?? null,
          birth_year: +birthyear ?? null,
          birth_month: +birthday.split('-')[0] ?? null,
          birth_day: +birthday.split('-')[1] ?? null
        };
        return {
          ...convertedForm,
          email: profile.response.email,
          id: profile.response.id
        };
      }
    })
    // ...add more providers here
  ],
  secret: process.env.SECRET
};
export default nextAuth(authOptions);
