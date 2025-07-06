
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { account } from '../src/appwrite.js';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

    console.log('account object:', account);

     const handleLogin = async (e) => {
    e.preventDefault(); // stop form from refreshing page
    setError(''); // clear any old errors

    try {
      await account.createEmailPasswordSession(email, password); // Appwrite login
      navigate('/profile'); // if login worked, go to profile
    } catch (err) {
      setError(err.message); // if login fails, show the error
    }
  };


    return (
     <div className='h-screen flex items-center justify-center bg-[url(/login.jpg)] bg-no-repeat bg-cover'>

    
      <div className="w-full md:w-3/4 bg-black/30  rounded-xl p-6 shadow-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form  className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label  className="block text-sm/6 font-medium text-white" >
                  Password
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  
                  type='password' 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              {error && <p className="text-red-500 mb-4">{error}</p>}
            </div>
            <div className="text-sm flex justify-between">
                  <p>Don't Have an account?</p>
                  <Link to="/register" className="text-white hover:text-indigo-500 font-semibold">
                    Register Here
                  </Link>
            </div>
          </form>

          
        </div>
      </div>
     </div>
  )
  
};


export default LoginForm;