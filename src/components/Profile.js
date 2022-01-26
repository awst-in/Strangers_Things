import React, { useState } from 'react';
import { callApi } from '../api';
import { Button, Collapse, Card, Container } from 'react-bootstrap';

const Profile = ({ token, userData }) => {
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
      console.log('data:', data);
      setMyMessages(messageArr);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <div>
          <h2>Hello {userData.username}!</h2>
          <Button
            variant='secondary'
            onClick={getMessages}
            aria-controls='example-collapse-text'
            aria-expanded={open}
          >
            Get Messages
          </Button>
          {myMessages.map((message) => (
            <Collapse in={open} dimension='width'>
              <Card body style={{ width: '90%' }} className='mb-2'>
                <div key={message._id} style={{ minHeight: '150px' }}>
                  <h3>From: {message.fromUser.username}</h3>
                  <h4>Post: {message.post.title}</h4>
                  <p>"{message.content}"</p>
                </div>
              </Card>
            </Collapse>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Profile;
