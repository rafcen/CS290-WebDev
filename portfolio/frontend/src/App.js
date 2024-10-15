import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';
import getCurrentYear from './utils/DateYear.js'
import EditKeyboardSwitch from './pages/EditKeyboardSwitch.js';

// Import pages
import HomePage from './pages/HomePage.js';
import Topics from './pages/Topics.js';
import KeyboardSwitchesPage from './pages/KeyboardSwitchesPage.js';

// If your schema requires SHORT data input, then use the TABLE design.
import EditKeyboardSwitchPageTable from './pages/EditKeyboardSwitchPageTable';
import AddKeyboardSwitchPageTable from './pages/AddKeyboardSwitchPageTable';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <h1><img src="./android-chrome-192x192.png" alt="Rafael Cendejas"/>Rafael Cendejas</h1>
          <p className='headerText'>This web app is a portfolio that showcases the projects I have worked on. It is built using MongoDB, Express, React, and Node.js (MERN).</p>
        </header>

        <Navigation />

        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/keyboardSwitches" element={<AddKeyboardSwitchPageTable />} />
              <Route path="/keyboardSwitchesPage/edit/:id" element={<EditKeyboardSwitchPageTable />} />
              <Route path="/keyboardSwitchesPage" element={<KeyboardSwitchesPage />} />
              <Route path='/editKeyboardSwitch/:id' element={<EditKeyboardSwitch />} />
            </Routes> 
          </section>
        </main>

        <footer>
          <p>&copy; {getCurrentYear()} Rafael Cendejas</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
