import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostForm from '../PostForm';

jest.mock('axios');

describe('PostForm Integration Test', () => {
  test('submits form correctly', async () => {
    render(<PostForm />);

    // simulate user input
    fireEvent.change(screen.getByLabelText('Title:'), {
      target: { value: 'Testing Title' },
    });
    fireEvent.change(screen.getByLabelText('Body:'), {
      target: { value: 'Testing Body' },
    });

    // simulate form submission
    fireEvent.click(screen.getByText('Create Post'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/posts',
        { userId: 1, title: 'Testing Title', body: 'Testing Body' }
      );
    });
  });
});
