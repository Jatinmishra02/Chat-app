import React, { useState } from 'react'
import InputFeild from '../../Components/Input'
import Button from '../../Components/Button'

const Form = ({
  isSignInPage = true
}) => {
  const [data, setData] = useState({
    ...Button(!isSignInPage && {fullname: ''}),
    email :'',
    password: ''
  })
  return (
    <div className='bg-white w-[600px] h-[500px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
        <div className='text-2xl font-extrabold'>Welcome{isSignInPage && 'Back'}</div>
        <div className='text-xl font-light mb-14'>{isSignInPage ? 'Sign in to Explore' : 'Sign Up now to get started'}</div>
        {!isSignInPage && <InputFeild label='Full Name' name='name' placeholder='Enter Your Full Name' className='mb-6' />}
        <InputFeild label='Email Address' name='email' placeholder='Enter Your email' className='mb-6' />
        <InputFeild label='Password' type='password' name='password' placeholder='Enter Your Password' className='mb-6' />
        <Button label={isSignInPage ?'Sign-In' : 'Sign-up'} className=''/>
        <div>{isSignInPage ? "Didn't have an account?" : 'Already have an account?'}
          <span className='text-primary cursor-pointer underline'>
            {isSignInPage ? "sign up":"sign in"}</span></div>
    </div>
  )
}

export default Form