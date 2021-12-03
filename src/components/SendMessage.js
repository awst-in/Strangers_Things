import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { callApi } from '../api';

const SendMessage = ({ token, action, messages, setMessages }) => {

  const { postId } = useParams();
  const history = useHistory();

  const isMessage = action === 'message';
  const API_URL = isMessage ? `/messages` : '';
  const method = 'POST';


  const handleSendMessage = async (event) => {
    event.preventDefault();
    try {
      console.log('message sent');
        await callApi({
        url: API_URL,
        method: method,
        body: {message: isMessage},
        token,
      });
      history.push('/messages');
    } catch (error) {
      console.error('error adding a message:', error);
    }
  };


  return (
    <>
      {token ? <form>
        <textarea type='text' rows='3' placeholder='Message'></textarea>
        <br />
        <button onClick={handleSendMessage}>Send</button>
      </form> : ''}
    </>
  );
};

export default SendMessage;
