import 'antd/dist/reset.css';
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';


export default function App({ Component, pageProps }) {
  return <><ToastContainer/><Component {...pageProps} /></>
}
