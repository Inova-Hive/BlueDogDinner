import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

//775388212549-j9gbinn72r1pg15k1p8v3cntq84tes67.apps.googleusercontent.com

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="775388212549-j9gbinn72r1pg15k1p8v3cntq84tes67.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);