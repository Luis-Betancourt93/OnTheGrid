import React, { useState } from 'react';
import { account } from '../src/appwrite.js';
import { ID } from '../src/appwrite.js';
import { Link } from 'react-router-dom';


function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
  e.preventDefault(); // stop form from refreshing

  try {
    await account.create(
      ID.unique(),  // let Appwrite generate a unique user ID
      email,
      password,
      name
    );

    setMessage('✅ Account created! You can now log in.');
    setName('');
    setEmail('');
    setPassword('');
  } catch (error) {
    console.error('Appwrite error:', error.message);
    setMessage(`❌ ${error.message}`);
  }
};


    return (
     <div className='h-screen flex items-center justify-center bg-[url(/register.jpg)] bg-no-repeat bg-cover'>

    
      <div className="w-full md:w-3/4 bg-black/30  rounded-xl p-6 shadow-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Make a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
             <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-white">
                Name
              </label>
              <div className="mt-2">
                <input 
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Jane Deo'
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='jane@example.com'
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                 type='password'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"

                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
              {message && <p className="text-sm text-center mt-2">{message}</p>}

            </div>
            <div className="text-sm flex justify-between">
                  <p>Have an account?</p>
                  <Link to="/login" className="text-white hover:text-indigo-500 font-semibold">
                    Login Here
                  </Link>
            </div>
          </form>

          
        </div>
      </div>
     </div>
  )
  
};

export default RegisterForm; 