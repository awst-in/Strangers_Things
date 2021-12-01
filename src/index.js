import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { callApi } from './api';
import { AccountForm, Posts, SinglePost, Navbar, PostForm } from './components';

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
      setToken(localStorage.getItem('token'));
      return;
    }
    const data = await fetchUserData(token);
    console.log('data:', data);
    if (data && data.username) {
      setUserData(data);
    }
  }, [token]);

  console.log('token:', token);

  return (
    <>
      <Navbar />
      <Link to='/posts/new'>Add New Post</Link>
      <Switch>
        <Route exact path='/'>
          <Posts posts={posts} />
        </Route>
        <Route exact path='/profile'>
          {userData.username && <div>Hello {userData.username}</div>}
        </Route>
        <Route exact path='/posts'>
          <Posts posts={posts} />
        </Route>
        <Route path='/posts/new'>
          {token ? <PostForm token={token} setPosts={setPosts} posts={posts} action='add' /> : ''}
        </Route>
        <Route path='/posts/:postId/edit'>
          {token ? <PostForm token={token} setPosts={setPosts} posts={posts} action='edit' /> : ''}
        </Route>
        <Route path='/posts/:postId'>
          <SinglePost posts={posts} />
        </Route>
        <Route path='/register'>
          <AccountForm action='register' setToken={setToken} setUserData={setUserData} />
        </Route>
        <Route path='/login'>
          {!token ? (
            <AccountForm action='login' setToken={setToken} setUserData={setUserData} />
          ) : (
            'You are already logged in!'
          )}
        </Route>
      </Switch>
    </>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
