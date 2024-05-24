  import { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';
  import {
    signInStart,
    signInSuccess,
    signInFailure,
  } from '../redux/user/userSlice';
  import OAuth from '../components/OAuth.jsx';

  const initialState = {
    email: '',
    password: '',
  };

  export default function SignIn() {
    const [formData, setFormData] = useState(initialState);
    const { loading, error } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.id]: event.target.value,
      });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        dispatch(signInStart());
        const response = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to sign in'); // Handle non-2xx responses
        }

        const data = await response.json();

        if (!data.success) {
          dispatch(signInFailure(data.message));
          return;
        }

        dispatch(signInSuccess(data));
        navigate('/');
      } catch (error) {
        dispatch(signInFailure(error.message));
      }
    };

    return (
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />

          <button
            disabled={loading}
            className="bg-blue-500 text-white p-3 rounded-lg uppercase hover:bg-blue-600 disabled:opacity-80"
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
          <OAuth />
        </form>
        <div className="flex items-center justify-center gap-2 mt-5">
          <p>Don't have an account?</p>
          <Link to="/signup" className="text-blue-700">
            Sign Up
          </Link>
        </div>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    );
  }
