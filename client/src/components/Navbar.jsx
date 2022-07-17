import React from 'react'
import { Link } from 'react-router-dom';
import '../App.scss';
import avator from '../images/unsplash.jpg';

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  }

  return (
    <div className='navbar'>
      <span className="logo">
        <Link to="/" className='link'>React Passport App</Link>
      </span>
      {user ? (<ul className="list">
        <li className="listItem">
          <img src={user.photos[0].value} alt="Avator" className="avator" />
        </li>
        <li className="listItem">
          {user.displayName}
        </li>
        <li className="listItem" onClick={logout}>
          Logout
        </li>
      </ul>) : (<Link to="/login" className='loginLink'>Login</Link>)}

    </div>
  )
}

export default Navbar