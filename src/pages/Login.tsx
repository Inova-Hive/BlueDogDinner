import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'; // import axios

import { BASE_URL } from '../globals';

const Login: React.FC = () => {
  const handleLoginSuccess = async (credentialResponse: any) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/session-token`, {
        session_token: credentialResponse.session_token, // adjust this line according to the structure of your credentialResponse
      });

      // handle the response here (e.g., redirect the user, show a success message, etc.)
    } catch (error) {
      console.error('Server error:', error);
    }
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-2 flex flex-col items-center justify-center" style={{ height: 'calc(100vh - 280px)' }}>
      <p className="text-2xl font-1-semibold text-custom-blue mb-10">Please login to proceed.</p>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    </div>
  );
};

export default Login;
