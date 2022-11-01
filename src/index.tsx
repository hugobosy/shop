import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "styled-components";
import {theme} from "./ui/theme";
import GlobalStyles from './ui/components/global-styles/GlobalStyles';
import './ui/styles/fonts.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
      </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
