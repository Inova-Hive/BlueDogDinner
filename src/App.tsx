import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom'


// Pages Imports
import Home from './pages/Home';
import Menu from './pages/Menu';

// Components Imports
import Nav from './components/Nav';


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
        </Routes>
      </main>
    </div>
  );
}

export default App;
