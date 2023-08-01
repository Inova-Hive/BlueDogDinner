import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInUser } from '../services/Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



interface User {
  id: number;
  email: string;
  name: string;
  username: string;
  passwordDigest: string;

}

interface LoginProps {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  toggleAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setUser, toggleAuthenticated }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ username: '', password: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  
  const notifyUser = () => toast.error("Username or Password did not match your login credentials!");
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = await SignInUser(formValues).catch(
      function (error) {
        notifyUser();
        return Promise.reject(error);
      }
    );
    setFormValues({ username: '', password: '' });
    setUser(payload);
    toggleAuthenticated(true);
    navigate('/');
  };

  return (
    <div className="mx-auto text-lg w-full max-w-xs min-h-screen text-white container pt-24">
        <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          
          {/* Username Section */}
          <section className="mb-4">
            <label className='text-lg font-2 block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              name="username"
              type="username"
              placeholder="Username"
              value={formValues.username}
              className="font-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </section>

          {/* Password Section */}
          <section className="mb-6">
            <label className='text-lg font-2 block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="*********"
              value={formValues.password}
              className="font-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </section>
          
          <div className='flex flex-col'>
            {/* Login Button */}
            <button
              disabled={!formValues.username || !formValues.password}
              className={`${
                !formValues.username || !formValues.password
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-custom-blue hover:bg-custom-blue-2"
                  } text-white font-1-bold mb-8 py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out`}
            >
              Login
            </button>
          </div>
        </form> 
    </div>
  );
};

export default Login;
