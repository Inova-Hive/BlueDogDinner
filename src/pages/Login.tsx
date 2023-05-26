import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const Login: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-2 flex flex-col items-center justify-center" style={{ height: 'calc(100vh - 280px)' }}>
        <p className="text-2xl font-1-semibold text-custom-blue mb-10">Please login to proceed.</p>

        <GoogleLogin
        onSuccess={credentialResponse => {
        console.log(credentialResponse);
        }}
        onError={() => {
        console.log('Login Failed');
        }}
        />
    </div>
  );
};

export default Login;
