/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
// import { ThemeProvider } from '@emotion/react';
// import { ConfigProvider } from 'antd';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'src/styles/globalStyle';
// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}
