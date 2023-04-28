import { setupStore } from '@/app/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
const store = setupStore();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
