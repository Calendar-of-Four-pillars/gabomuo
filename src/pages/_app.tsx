import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'src/styles/globalStyle';
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
