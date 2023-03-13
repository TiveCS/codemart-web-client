import React, { useState } from 'react';
import FormInput from '../../components/Form/FormInput';

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
    event.preventDefault();
    // TODO : Panggil API untuk register
  }

  return (
    <div>
      <h1>Explore You Need</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          id="fullname"
          name="fullname"
          label="Fullname"
          type="text"
          placeholder="Fullname"
          onChangeHandler={handleFullname}
        />  
        <FormInput
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="Email"
          onChangeHandler={handleEmail}
        />
        <FormInput
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
          onChangeHandler={handlePassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
