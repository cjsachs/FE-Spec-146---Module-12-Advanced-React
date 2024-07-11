import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonAPICall from '../ButtonAPICall';

// mock axios simulates a real api call
jest.mock('axios');

// describe: groups all tests related to the component
describe('Button APICall Component', () => {
  // individual test
  test('fetch api when button is clicked', async () => {
    // mock data that the test will use to simulate an API response
    const mockResponse = {
      data: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
      ],
    };

    // returns our "mockResponse" when it's called
    axios.get.mockResolvedValue(mockResponse);

    // renders "ButtonAPICall" Componenet
    const { getByText } = render(<ButtonAPICall />);

    // Simulates a "click" event with the text matching "Fetch Todos"
    fireEvent.click(getByText('Fetch Todos'));

    // waits for async operation to complete
    await waitFor(() => {
      // checks that "axios.get" was called on the correct api
      expect(axios.get).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/users/1/todos'
      );
    });
  });
});

// Snapshot test: Test to ensure that the UI does not change unexpectedly
test('testing snapshot', () => {
  // takes the snapshot
  const { asFragment } = render(<ButtonAPICall/>)
  // expect, toMatchSnapshot: compares the extracted snapshot to the previously stored snapshot
  expect(asFragment()).toMatchSnapshot()
})
