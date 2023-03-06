import React, { useState } from 'react';

function Register() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleFullname(event) {
    setFullname(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    e.preventDefault();
    // TODO : Panggil API untuk register
  }

  return (
    <div>
      <h1>Explore You Need</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Fullname</label>
          <input type="text" id="fullname" value={fullname} onChange={handleFullname} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={handleEmail} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePassword} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
