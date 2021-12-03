import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { callApi } from './api';
import { AccountForm, Posts, SinglePost, Navbar, PostForm, SendMessage, Profile } from './components';

const App = () => {
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState(['message 1', 'message 2']);


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
      <Navbar token={token} setToken={setToken} posts={setPosts}/>
      <Switch>
        <Route exact path='/'>
          <Posts posts={posts} token={token}/>
        </Route>
        <Route exact path='/profile'>
          {userData.username && <><div>Hello {userData.username}</div><Profile /></>}
        </Route>
        <Route exact path='/posts'>
          <Posts posts={posts} token={token} />
        </Route>
        <Route path='/posts/new'>
          {token ? <PostForm token={token} setPosts={setPosts} posts={posts} action='add' /> : 'You are not logged in!'}
        </Route>
        <Route path='/posts/:postId/edit'>
          {token ? <PostForm token={token} setPosts={setPosts} posts={posts} action='edit' /> : ''}
        </Route>
        <Route path='/posts/:postId'>
          <SinglePost posts={posts} token={token} />
        </Route>
        <Route path='/posts/:postId/messages'>
          <SendMessage posts={posts} token={token} messages={messages} setMessages={setMessages}/>
        </Route>
        <Route path='/register'>
          <AccountForm action='register' setToken={setToken} setUserData={setUserData} />
        </Route>
        <Route path='/login'>
          {!token ? (
            <AccountForm action='login' setToken={setToken} setUserData={setUserData} />
          ) : (
            <>
            <div>You are already logged in!</div>
            <br />
            </>
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
