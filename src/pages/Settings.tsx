import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { UpdateUser, UpdatePassword } from '../services/Auth';
import { BASE_URL } from '../globals';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface UserFormValues {
  name: string;
  username: string;
}

interface PasswordFormValues {
  oldPassword: string;
  newPassword: string;
}

interface Params {
  userId: string;
}

const Settings: React.FC = () => {
  const userInitialState: UserFormValues = {
    name: '',
    username: '',
  };

  const passwordInitialState: PasswordFormValues = {
    oldPassword: '',
    newPassword: '',
  };


  let params = useParams<Record<string, string>>();
  const userId = params.userId;  const [userFormValues, setUserFormValues] = useState<UserFormValues>(userInitialState);
  const [passwordFormValues, setPasswordFormValues] = useState<PasswordFormValues>(passwordInitialState);

  // get user info
  const getUser = useCallback(async () => {
    const res = await axios.get(`${BASE_URL}user/id/${userId}`);
    console.log("Response data: ", res.data); // Log the data

    setUserFormValues(res.data);
  }, [userId]);

  useEffect(() => {
    // console.log("User form values: ", userFormValues); // Log the state

    getUser();
  }, [getUser]);

  // handles user form changes
  const userHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormValues({ ...userFormValues, [e.target.name]: e.target.value });
  };

  // handles password form changes
  const passwordHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordFormValues({ ...passwordFormValues, [e.target.name]: e.target.value });
  };

  // update user function
  const updateUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await UpdateUser({ userId, ...userFormValues });
    toast.info("User was successfully updated!");
  };

  // window reload storage
  const failed = () => {
    toast.info("Password was successfully updated!");
  };

  window.onload = function () {
    let reloading = sessionStorage.getItem("reloading");
    if (reloading) {
      sessionStorage.removeItem("reloading");
      failed();
    }
  };

  const handleRefresh = () => {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
  };

  // update password function with screen reload
  const updatePassword = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await UpdatePassword({ userId, ...passwordFormValues }).catch((error) => {
      toast.error("Failed to update Password! Current password did not match");
      return Promise.reject(error);
    });
    handleRefresh();
  };

  return (
    <div className="text-lg w-full max-w-xs min-h-screen text-white container pt-12 pb-24 mx-auto">
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
        <h1 className=' text-gray-700 font-bold text-xl md:text-2xl text-center mx-4 pb-10'>Update Your Current Info</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">        
          {/* Username Section */}
          <p className=' text-4xl text-center  block text-gray-700 text-sm font-bold mb-2 pb-4'>UPDATE INFO</p>

          <section className="mb-4">
            <label className='text-lg font-2 block text-gray-700 text-sm font-bold mb-2' htmlFor="name">Name</label>
            <input
              onChange={userHandleChange}
              name="name"
              type="name"
              value={userFormValues.name}
              className="font-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </section>

          {/* Username Section */}
          <section className="mb-4">
            <label className='text-lg font-2 block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Username</label>
            <input
              onChange={userHandleChange}
              name="username"
              type="username"
              value={userFormValues.username}
              className="font-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </section>
          {/* Update User*/}
          <button
            onClick={updateUser} className="mb-8 settings-button text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>
          <p className='form-border text-4xl text-center  block text-gray-700 text-sm font-bold mb-2 pt-10 mt-2 pb-4'>UPDATE PASSWORD</p>
          {/* Password Section */}
          <section className="mb-6">
            <label className='text-lg font-2 block text-gray-700 text-sm font-bold mb-2' htmlFor="oldPassword">Current Password</label>
            <input
              onChange={passwordHandleChange}
              type="text"
              name="oldPassword"
              placeholder=''
              value={passwordFormValues.oldPassword}
              className="font-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </section>

          <section className="mb-6">
            <label className='text-lg font-2 block text-gray-700 text-sm font-bold mb-2' htmlFor="newPassword">New Password</label>
            <input
              onChange={passwordHandleChange}
              type="text"
              name="newPassword"
              placeholder=''
              value={passwordFormValues.newPassword}
              className="font-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </section>
          
          {/* password Button */}
          <button
          onClick={updatePassword}  className="settings-button text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Password
          </button>

        </form>
          
      
    </div>
  )
}

export default Settings
