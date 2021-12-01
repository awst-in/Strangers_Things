import React, { useState } from 'react';
// import { callApi } from '../api';
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2108-LSU-RM-WEB-PT/posts'

const PostForm = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priceOfItem, setPriceOfItem] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);

  const handleSubmit = async (event) => {

    event.preventDefault();

    const token = localStorage.getItem('token');

    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            post: {
                title: title,
                description: description,
                price: priceOfItem,
                location: location,
                willDeliver: willDeliver
            }
        })
    })
    const data = await response.json();

    console.log("This is our post form's data", data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Title Of Post'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <br />

        <textarea
          type='text'
          rows='6'
          placeholder='Description'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <br />

        <input
          type='text'
          placeholder='Price of Item'
          value={priceOfItem}
          onChange={(event) => setPriceOfItem(event.target.value)}
        ></input>
        <br />

        <input
          type='text'
          placeholder='Location'
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        ></input>
        <br />

        <label>Will Deliver?</label>
        <br />
        <label htmlFor='willDeliverTrue'>True</label>
        <input
          type='radio'
          id='willDeliverTrue'
          value={true}
          onChange={(event) => setWillDeliver(event.target.value)}
        ></input>
        <label htmlFor='willDeliverFalse'>False</label>
        <input
          type='radio'
          id='willDeliverFalce'
          value={false}
          onChange={(event) => setWillDeliver(event.target.value)}
        ></input>
        <br />

        <button type='submit'>Create New Post</button>
      </form>
    </div>
  );
};

export default PostForm;
