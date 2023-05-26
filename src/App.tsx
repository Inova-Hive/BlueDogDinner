import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';




// Pages Imports
import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './pages/Menu';
import ItemForm from './pages/ItemForm';
import PrivacyPolicy from './pages/PrivatePolicy';
import TermsOfService from './pages/TermsOfService';

// Components Imports
import Nav from './components/Nav';
import Footer from './components/Footer';

// google client id import from .env file
// const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || ''
const googleClientId = "775388212549-j9gbinn72r1pg15k1p8v3cntq84tes67.apps.googleusercontent.com"

// Define the App component
const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secure-management-654" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/item/add" element={<ItemForm />} />
            <Route path="/item/:sectionId/:itemId/edit_item" element={<ItemForm />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
