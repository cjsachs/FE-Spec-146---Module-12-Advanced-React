import React from 'react';
import axios from 'axios';

const ButtonAPICall = () => {
  const fetchTodos = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users/1/todos'
    );
  };
  return (
    <div>
      <h1>{`We're all GOATED`}</h1>
      <button onClick={fetchTodos}>Fetch Todos</button>
    </div>
  );
};
export default ButtonAPICall;
