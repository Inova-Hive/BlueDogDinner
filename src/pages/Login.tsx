import React, { MouseEvent } from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import { BASE_URL } from '../globals';

const Login: React.FC = () => {
  const handleGoogleLogin = async (response: any) => {
    try {
      const { data } = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          "Authorization": `Bearer ${response.access_token}`
        }
        
      });
      const userResponse = await axios.post(`${BASE_URL}/auth/session-token`, data);
      // Now userResponse should contain the user data from your own server
      console.log(userResponse);
    } catch (err) {
      console.log(err);
    }
  };
  const login = useGoogleLogin({
    onSuccess: handleGoogleLogin,
  });
  return (
    <div className="max-w-3xl mx-auto px-4 py-2 flex flex-col items-center justify-center" style={{ height: 'calc(100vh - 280px)' }}>
      <p className="text-2xl font-1-semibold text-custom-blue mb-10">Please login to proceed.</p>
      <header className='Test'>
        <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => login()}>
          <i className="fa-brands fa-google"></i>
          Continue with Google
        </button>
      </header>
    </div>
  );
};
export default Login;