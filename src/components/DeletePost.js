import React from 'react';
import { useParams } from 'react-router-dom'
import { callApi } from '../api';

const DeletePost = ({ token, posts, setPosts, action }) => {

    const { postId } = useParams();

    const API_URL = `/posts/${postId}`
    const handleClick = async (event) => {
        try {
            const {
                data: { post },
            } = await callApi({
                url: API_URL,
                method: 'DELETE',
                token
            })
        } catch (error) {
            console.error('Error deleting a post:', error)
        }
    }
  return (
    <>
      {token ? <button onClick={handleClick}>Delete Post</button> : ''}
    </>
  );
};

export default DeletePost;
