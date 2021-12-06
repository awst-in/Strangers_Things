import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { DeletePost, SendMessage } from '.';
import { Button, Container } from 'react-bootstrap';

const SinglePost = ({ posts, token, setPosts, userData }) => {
  const { postId } = useParams();
  const history = useHistory();

  const post = posts.find((post) => postId === post._id);
  // console.log('SINGLE POST', post);

  const isUser = userData.username === post.author.username;

  return (
    <>
      {post ? (
        <div>
          <Container>
          <h3>{post.title}</h3>
          <p>Posted by: {post.author.username}</p>
          <p>Price: {post.price}</p>
          <p>Location: {post.location}</p>
          <p>Delivers: {post.willDeliver ? 'Yes' : 'No'}</p>
          {isUser ? (
            <>
              <Button variant='secondary' onClick={() => history.push(`${postId}/edit`)}>
                Edit
              </Button>{' '}
              <DeletePost token={token} postId={postId} setPosts={setPosts} />
            </>
          ) : (
            ''
          )}
          {token ? (
            <>
              {!isUser ? <SendMessage token={token} postId={postId} /> : ''}
            </>
          ) : (
            ''
          )}
      </Container>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default SinglePost;
