import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import './Styles/theme.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ContextProvider, { ContextGlobal } from './Components/utils/global.context';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <App/>
    </ContextProvider>
  </BrowserRouter>
);


