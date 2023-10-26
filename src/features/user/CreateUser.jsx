import React, { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate()

  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    dispatch(updateName(username))
    navigate('/cart')
  }

  return (
    <form onSubmit={handleSubmit}>
      {!username ? <p className='mb-4 text-sm capitalize text-stone-600 md:text-base'>👋 Enter your name to start ordering!</p> : <div className='dots-1 text-center flex justify-center mb-2'></div>}

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='input w-70 mb-8'
      />

      {username !== '' && (
        <div>
          <Button type="primary">Continue ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
