import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios'
import React from 'react';

const PostForm = () => {
  const [post, setPost] = useState({
    userId: 1,
    title: '',
    body: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post)
      console.log(response.data)
      return response.data
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <h1>Create a Post</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={(event) =>
              setPost({ ...post, title: event.target.value })
            }
            value={post.title}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBody">
          <Form.Label>Body:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Body"
            onChange={(event) => setPost({ ...post, body: event.target.value })}
            value={post.body}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Post
        </Button>
      </Form>
    </Container>
  );
};
export default PostForm;
