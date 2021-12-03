import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';





const Navbar = ({ token }) => {

  const handleClick = () => {
    localStorage.removeItem('token');
    window.location.reload(false);
  }

  

  return (
    <>
      <h1>Stranger's Things</h1>
      <Link to='/'>Home </Link>
      <br />
      {!token ? <Link to='/login'>Login</Link> :  (
      <>
      <Link to='/profile'>Profile</Link><br />
      <Link to='/posts/new'>Add Post</Link><br />
      <Link to='/' onClick={handleClick}>Logout</Link>
      </>
      )}
      </>
  );
};

export default Navbar;
