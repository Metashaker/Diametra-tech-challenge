// Packages
import { AppProps } from 'next/app';

// Styles global
import 'antd/dist/antd.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
