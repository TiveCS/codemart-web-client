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
    event.preventDefault();
    // TODO : Panggil API untuk register
  }

  return (
    <div class="flex items-center justify-center bg-white">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-black"><h3>Explore You Need</h3></div>
          <div class="text-sm mb-2 text-black"><small>Create your credentials with your Email</small></div>
          <form onSubmit={handleSubmit}>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="fullname">
                Fullname
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white" id="fullname" type="text" placeholder="Fullname" value={fullname} onChange={handleFullname} />
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white" id="email" type="email" placeholder="yourmail@domain.com" value={email} onChange={handleEmail} />
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white" id="password" type="password" placeholder="********" value={password} onChange={handlePassword} />
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
