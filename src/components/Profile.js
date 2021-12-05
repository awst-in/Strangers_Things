import React, { useState } from 'react';
import { callApi } from '../api';
import { Button, Collapse, Card } from 'react-bootstrap';

const Profile = ({ token }) => {
  const [myMessages, setMyMessages] = useState([]);
  const [open, setOpen] = useState(false);

  const API_URL = `/users/me`;

  const getMessages = async (event) => {
    event.preventDefault();
    setOpen(!open);
    try {
      const data = await callApi({
        url: API_URL,
        token,
      });
      const messageArr = data.data.messages;
      setMyMessages(messageArr);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <Button variant='secondary' onClick={getMessages} aria-controls='example-collapse-text' aria-expanded={open}>
          Get Messages
        </Button>
        {myMessages.map((message) => (
          <Collapse in={open} dimension='width'>
            <Card body style={{ width: '500px' }}>
              <div key={message._id} style={{ minHeight: '150px' }}>
                <h3>From: {message.fromUser.username}</h3>
                <h4>Post: {message.post.title}</h4>
                <p>"{message.content}"</p>
              </div>
            </Card>
          </Collapse>
        ))}
      </div>
    </>
  );
};

export default Profile;
