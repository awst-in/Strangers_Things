import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { callApi } from './api';
import { AccountForm, Posts, SinglePost, Navbar } from './components';

const App = () => {
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);

  const fetchUserData = async (token) => {
    const { data } = await callApi({
      url: '/users/me',
      token,
    });
    return data;
  };

  const fetchPosts = async () => {
    const {
      data: { posts },
    } = await callApi({
      url: '/posts',
    });
    return posts;
  };

  useEffect(async () => {
    const posts = await fetchPosts();
    setPosts(posts);
    if (!token) {
      localStorage.getItem('token');
      return;
    }
    const data = await fetchUserData(token);
    if (data && data.username) {
      setUserData(data);
    }
  }, [token]);

  return (
    <>
    <Navbar />
      <h1>Stranger's Things</h1>
      <Route exact path="/">
        {userData.username && <div>Hello {userData.username}</div>}
      </Route>
      <Route exact path="/posts">
        <Posts posts={posts} />
      </Route>
      <Route path="/posts/:postId">
        <SinglePost posts={posts} />
      </Route>
      <Route path="/register">
        <AccountForm
          action="register"
          setToken={setToken}
          setUserData={setUserData}
        />
      </Route>
      <Route path="/login">
        <AccountForm
          action="login"
          setToken={setToken}
          setUserData={setUserData}
        />
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
