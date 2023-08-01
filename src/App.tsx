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
import EventInfo from './pages/EventInfo';
import PrivacyPolicy from './pages/Calendar';
import AboutUs from './pages/AboutUs';
import Settings from './pages/Settings';

// Components Imports
import Nav from './components/Nav';
import Footer from './components/Footer';

interface User {
  id: number;
  email: string;
  name: string;
  username: string;
  passwordDigest: string;

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
        <Nav handleLogOut={handleLogOut} authenticated={authenticated} user={user} />
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
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/item/add" element={<ItemForm />} />
          <Route
            path="/item/:sectionId/:itemId/edit_item"
            element={<ItemForm />}
          />
          <Route path="/settings/:userId" element={<Settings/>}/>
          <Route path="/event/add" element={<EventInfo/>}/>
          <Route path="/event/:id/edit_event" element={<EventInfo/>}/>

         
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
