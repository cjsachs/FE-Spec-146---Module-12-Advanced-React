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
      <button onClick={fetchTodos}>Fetch Todos</button>
    </div>
  );
};
export default ButtonAPICall;
