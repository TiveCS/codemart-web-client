import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import FormInput from '../../components/Forms/FormInput';
import useInput from '../../hooks/useInput';
import { register } from '../../utils/api';

function Register() {
  const [email, onEmailChangeHandler] = useInput('');
  const [fullName, onFullNameChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');


  async function handleSubmit(e) {
    e.preventDefault();
    // TODO : Panggil API untuk register
    const data = await register({ email, fullName, password });

    console.log(data);
  }

  return (
    <div className='h-full flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='mt-8 w-full flex flex-col gap-y-8 md:max-w-sm shadow-md border border-gray-200 px-4 py-4 md:px-8 md:py-8'>
        <div className='text-center'>
          <h1 className='text-2xl font-medium'>Explore Your Need</h1>
          <p className='text-xs md:text-sm mt-1 text-gray-700'>Create your credentials with your Email</p>
        </div>

        <div className='grid gap-y-3'>
          <FormInput name={'email'} type='email' label={'Email'} onChangeHandler={onEmailChangeHandler} placeholder='john@example.com' />
          <FormInput name={'fullName'} type='text' label={'Full Name'} onChangeHandler={onFullNameChangeHandler} placeholder='John Doe' />
          <FormInput name={'password'} type='password' label={'Password'} onChangeHandler={onPasswordChangeHandler} placeholder='••••••••••' />
        </div>

        <div className='text-center flex flex-col gap-y-4'>
          <Button type={'submit'} >
            Sign Up
          </Button>

          <p className='text-xs md:text-sm'>Already have account? <Link to={'/login'}><span className='text-codemart-600'>Log In</span></Link></p>
        </div>

      </form>
    </div>
  );
}

export default Register;
