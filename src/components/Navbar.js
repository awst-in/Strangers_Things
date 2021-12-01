import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <h1>Stranger's Things</h1>
      <Link to='/'>Home </Link>
      <br />
      <Link to='/profile'>Profile</Link>
      <br />
    </>
  );
};

export default Navbar;
