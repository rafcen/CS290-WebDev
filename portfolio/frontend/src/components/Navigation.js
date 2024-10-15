import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Menu() {
  return (
    <nav className='sticky'>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/keyboardSwitchesPage">Keyboard Switches</Link>
    </nav>
  );
}

export default Menu;
