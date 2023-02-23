/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import nextAuth, { NextAuthOptions } from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import prisma from 'src/libs/client';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_ID as string,
      clientSecret: process.env.NAVER_SECRET as string
    })
    // ...add more providers here
  ],
  callbacks: {
    async signIn(data) {
      console.log('data', data);
      if (data.account?.provider === 'naver') {
        const { gender, birthday, birthyear } = data.profile?.response;
        const convertedForm = {
          gender: gender ?? null,
          birth_year: +birthyear ?? null,
          birth_month: +birthday.split('-')[0] ?? null,
          birth_day: +birthday.split('-')[1] ?? null
        };
        try {
          await prisma.user.update({
            where: { email: data.user.email as string },
            data: {
              ...convertedForm
            }
          });
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    }
  }
};
export default nextAuth(authOptions);
