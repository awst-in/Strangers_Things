import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { callApi } from '../api';
import { Button } from 'react-bootstrap'

const DeletePost = ({ token, setPosts }) => {
  const history = useHistory();
  const { postId } = useParams();

  const API_URL = `/posts/${postId}`;

  const handleClick = async () => {
    try {
      await callApi({
        url: API_URL,
        method: 'DELETE',
        token,
      });
      history.push('/');
      //need to reset posts dynamically
      window.location.reload(false);
    } catch (error) {
      console.error('Error deleting a post:', error);
    }
  };
  
  return (
    <>
      <Button variant='secondary' onClick={handleClick}>Delete Post</Button>
    </>
  );
};

export default DeletePost;
