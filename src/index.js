import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import { ThemeProviderContext } from "./context/ThemeContext";
import { Suspense,lazy } from 'react';
import Loader from './components/loader/Loader';
const Routing = lazy(() => import('./Routing'));






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ThemeProviderContext>
        <Suspense fallback={<Loader />}>
          <Routing />
          {/* <Toaster /> */}
          {/* <App /> */}
        </Suspense>
        {/* <App /> */}
      </ThemeProviderContext>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
