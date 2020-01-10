import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Login';

it('Login renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Register />, div);
});