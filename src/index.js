import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes }  from 'react-router-dom';
import { AccountForm } from './components';

const App = () => {
  const [token, setToken] = useState('')
  const [userData, setUserData] = useState({})
  return (
    <>
      <h1>Stranger's Things</h1>
      {userData.username && <div>Hello {userData.username}</div>}
      <Route path='/register'>
        <AccountForm action="register" setUserData={setUserData} setToken={setToken}/>
      </Route>
      <Route path='/login'>
        <AccountForm action="login" setUserData={setUserData} setToken={setToken}/>
      </Route>
    </>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
