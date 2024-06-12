import React, { useEffect, useState } from 'react';
import image_one from '../assets/img1.jpg';
import image_two from '../assets/autotrack_1080.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { redirect } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({});
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmits = (e) => {
    
    e.preventDefault();
    const validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    // Validate password
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    setFormErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit form data
      console.log(formData);
      //navigate('/dashboard');
     
     const url = "https://api.schoolapp.autotrack.ng/auth/login";
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          navigate('/dashboard');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    console.log(formData);
  }

  return (
    <div class="p-10 bg-[#d8ebf9] h-[calc(100vh-0px)]">
      <div className="flex items-center justify-center w-full m-0">
        <aside class="mr-5">
          <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img src={image_one} alt="Autotrack Solutions" class="absolute inset-0 h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 class="z-10 mt-10 text-3xl font-bold text-white"><img src={image_two} /></h3>
            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Solutions</div>
          </article>
        </aside>
        <form noValidate onSubmit={handleSubmits} className="w-2/6">
          <h1 class="mb-8 font-extrabold text-4xl">Asset Management</h1>
          <div class="mt-10">
            <label class="block font-semibold">Email</label>
            <input class="w-full shadow-inner bg-gray-200 rounded-lg placeholder-black text-2xl p-4 border border-black block mt-1 w-full"
              id="email"
              type="email"
              name="email"
              required="required"
              autoComplete="off"
              onChange={handleChange}
            />
            <div class="text-red-500">{formErrors.email}</div>
          </div>

          <div class="mt-4">
            <label class="block font-semibold">Password</label>
            <input className="w-full shadow-inner bg-gray-200 rounded-lg placeholder-black text-2xl p-4 border border-black block mt-1 w-full"
              id="password"
              type="password"
              name="password"
              required="required"
              autoComplete="off"
              onChange={handleChange}
            />
            <div class="text-red-500">{formErrors.password}</div>
          </div>

          <div class="flex items-center justify-between mt-8">
            <button type="submit" class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#045e9d] hover:bg-[#0474bc] md:py-4 md:text-lg md:px-10">Login</button>
          </div>

        </form>


      </div>
    </div>
  )
}

export default Login