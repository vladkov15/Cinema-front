import { setupStore } from '@/app/store';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
const store = setupStore();

interface IProps{
  session: any
}
export default function App({ Component, pageProps,session  }: AppProps & IProps) {
  return (
    <SessionProvider session={session} >
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </SessionProvider>
  );
}
