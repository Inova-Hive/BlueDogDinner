import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom'


// Pages Imports
import Home from './pages/Home';
import Menu from './pages/Menu';
import ItemForm from './pages/ItemForm';
import PrivacyPolicy from './pages/PrivatePolicy';
import TermsOfService from './pages/TermsOfService';

// Components Imports
import Nav from './components/Nav';
import Footer from './components/Footer';


// Define the App component
const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
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
  );
}

export default App;
