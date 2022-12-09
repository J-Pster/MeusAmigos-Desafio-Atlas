import React from 'react';
import ReactDOM from 'react-dom/client';
import './theme/style.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from 'context/PrivateRoute';

import theme from 'theme/MuiTheme';
import { ThemeProvider } from "@mui/material/styles";

import { Login } from 'components';
import App from './App';

import Provider from './context/Global';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* Provedor de tema do Mui */}
    <ThemeProvider theme={theme}>
      {/* Provedor de contexto do ContextAPI */}
      <Provider>
        {/* Provedor Rotas do React Router */}
        <BrowserRouter>

          <Routes>
            <Route path="/" element={
              <PrivateRoute>
                <App />
              </PrivateRoute>
            } />
            <Route path="/login" element={<Login />} />
          </Routes>

        </BrowserRouter>

      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
