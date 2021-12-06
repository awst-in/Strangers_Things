import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const styles = {
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    alignItems: 'center',
  },
  searchInput: {
    margin: '0 16px',
  },
};

const postMatches = (post, searchTerm) => {
  const searchTermLower = searchTerm.toLowerCase();
  const {
    description,
    location,
    title,
    author: { username }
  } = post;

  const toMatch = [description, location, title, username];

  for (const field of toMatch) {
    if (field.toLowerCase().includes(searchTermLower)) {
      return true;
    }
  }
};

const Posts = ({ posts }) => {
  const history = useHistory();
  const { postId } = useParams();

  const [searchTerm, setSearchTerm] = useState('');

  const postsToDisplay = posts.filter((post) => postMatches(post, searchTerm));

  return (
    <>
      <div style={styles.searchContainer}>
        <h2>Posts</h2>
        <input
          style={styles.searchInput}
          type='text'
          placeholder='search for posts'
          value={searchTerm}
          onChange={(event) => {
            console.log(event.target.value);
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>
      {postsToDisplay.length ? (
        postsToDisplay.map((post) => (
          <Card style={{ width: 'auto' }}>
            <div key={post._id} style={{ width: 'auto', padding: '10px' }}>
              <h5>{post.title}</h5>
              <div>Posted by: {post.author.username}</div>
              <div>Description: {post.description}</div>
              <div>Location: {post.location}</div>
              <Button variant='secondary' onClick={() => history.push(`/posts/${post._id}`)}>View Post</Button>
            </div>
          </Card>
        ))
      ) : (
        <div>No posts to display</div>
      )}
    </>
  );
};

export default Posts;
