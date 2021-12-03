import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { DeletePost, SendMessage } from '.';

const SinglePost = ({ posts, token, setPosts }) => {
  const { postId } = useParams();
  const history = useHistory();

  const post = posts.find((post) => postId === post._id);
  console.log('SINGLE POST', post);

  return (
    <>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>Posted by: {post.author.username}</p>
          <p>Price: {post.price}</p>
          <p>Location: {post.location}</p>
          <p>Delivers: {post.willDeliver ? 'Yes' : 'No'}</p>
          {token ? <button onClick={() => history.push(`${postId}/edit`)}>Edit</button> : ''}
          {token ? <DeletePost token={token} postId={postId}/> : ''}
          {token ? <SendMessage token={token} postId={postId}/> : ''}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default SinglePost;
