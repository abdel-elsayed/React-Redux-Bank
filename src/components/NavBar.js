import React from 'react';
import '../App.css'

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div >
          <ul >
            <li>
            <Link to='/'>
            HOME
          </Link>
            </li>
            <li >
              <Link to='/debits' >
                DEBITS
              </Link>
            </li>
            <li >
              <Link
                to='/credits'
              >
               CREDITS
              </Link>
            </li>
          </ul>
          </div>
      </nav>
    </>
  );
}

export default Navbar;