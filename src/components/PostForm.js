import React, { useState } from 'react';
import { callApi } from '../api';
import { useHistory, useParams } from 'react-router-dom';

const PostForm = ({ token, setPosts, posts, action }) => {
    const { postId } = useParams();
    const history = useHistory();

    const [newPost, setNewPost] = useState({
        title: '',
        description: '',
        price: 0,
        location: '',
        willDeliver: false,
    });
    const isEdit = action === 'edit';
    const title = isEdit ? 'Edit this post' : 'Add a new post';
    const method = isEdit ? 'PATCH' : 'POST';
    const API_URL = isEdit ? `/posts/${postId}` : `/posts`;

  const handleSubmit = async (event) => {

    event.preventDefault();
    try {
        console.log('submitted')
        const {
            data: { post },
        } = await callApi({
            url: API_URL,
            method: method,
            body: {
                post: {
                title: newPost.title,
                description: newPost.description,
                price: newPost.price,
                location: newPost.location,
                willDeliver: newPost.willDeliver
                },
            },
            token,
            });
        if(isEdit) {
            const filteredPosts = posts.filter((post)=> post._id !== postId);
            setPosts([...filteredPosts, post]);
        } else {
            setPosts([...posts, post]);
        }
        history.push('/posts');
    } catch (error) {
        console.error('error adding a post: ', error);
    }
  };

  const postFieldChange = (property) => (event) => {

    if(property === 'willDeliver'){
        setNewPost({...newPost, [property]: event.target.checked})
    } else {
        setNewPost({...newPost, [property]: event.target.value});
    }
};

  return (
    <div>
        <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Title Of Post'
          value={newPost.title}
          onChange={postFieldChange('title')}
        ></input>
        <br />

        <textarea
          type='text'
          rows='6'
          placeholder='Description'
          value={newPost.description}
          onChange={postFieldChange('description')}
        ></textarea>
        <br />

        <input
          type='number'
          placeholder='Price of Item'
          value={newPost.price}
          onChange={postFieldChange('price')}
        ></input>
        <br />

        <input
          type='text'
          placeholder='Location'
          value={newPost.location}
          onChange={postFieldChange('location')}
        ></input>
        <br />
        <label>Deliver?</label>
        <input
          type='checkbox'
          value={newPost.willDeliver}
          onChange={postFieldChange('willDeliver')}
        ></input>
        <br />

        {token ? <button type='submit'>{title}</button> : ''}
      </form>
    </div>
  );
};

export default PostForm;
