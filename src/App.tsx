import React, { useState, useEffect } from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';

// Authentication imports
import { CheckSession } from './services/Auth';

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

interface User {
  // Define the user object type here
  // Adjust the properties based on your user object structure
  name: string;
  email: string;
  // Add more properties as needed
}

const App: React.FC = () => {
  const [authenticated, toggleAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLogOut = () => {
    // Reset all auth related state and clear localStorage
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div className="App">
      <header>
        <Nav handleLogOut={handleLogOut} authenticated={authenticated}  />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home user={user} authenticated={authenticated} />}
          />
          <Route path="/secure-management" 
            element={
              <Login 
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/menu" element={<Menu authenticated={authenticated}/>} />         
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/item/add" element={<ItemForm />} />
          <Route
            path="/item/:sectionId/:itemId/edit_item"
            element={<ItemForm />}
          />
         
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
