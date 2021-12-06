import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { callApi } from '../api';
import { Button, Col } from 'react-bootstrap';

const SendMessage = ({ token }) => {
  const [userMessage, setUserMessage] = useState('');

  const { postId } = useParams();
  const history = useHistory();

  const API_URL = `/posts/${postId}/messages`;
  const method = 'POST';

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // console.log('message sent');
      await callApi({
        url: API_URL,
        method: method,
        body: { message: { content: `${userMessage}` } },
        token,
      });
      history.push(`/`);
    } catch (error) {
      console.error('error adding a message:', error);
    }
  };

  return (
    <>
      {token ? (
        <form onSubmit={handleSubmit}>
          <Col sm='2'>
            <textarea
              type='text'
              rows='3'
              placeholder='Message'
              value={userMessage}
              onChange={(event) => setUserMessage(event.target.value)}
            ></textarea>
          </Col>
          <br />
          <Button variant='secondary'>Send</Button>
        </form>
      ) : (
        ''
      )}
    </>
  );
};

export default SendMessage;
