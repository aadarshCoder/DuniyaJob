/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';

const EmployerSignup = () => {
  return (
    <>
    <div className="sticky">
          <Navbar />
        </div>

    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 mt-24 md:space-y-0 md:space-x-16 items-center  bg-black rounded-lg sm:pt-32 mx-5 my-3">
      <div className="md:w-1/3 mt-40 text-white ">
      <Typography sx={{pb:"10px",textAlign:"center"}}>
      Employer Signup
      </Typography>
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          alt="Sample img" />
          
      </div>
      <div className="md:w-1/3  bg-white p-12 rounded-lg">

        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl" type="text" placeholder="Name" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5" type="text" placeholder="Company Name" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5" type="number" placeholder="Phone Number" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5" type="email" placeholder="Email Address" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5" type="password" placeholder="Password" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5" type="password" placeholder="Confirm Password" />

        <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer mt-2">
          <input className="mr-1" type="checkbox" />
          <span>Remember Me</span>
        </label>
        <div className="text-center md:text-left">
          <Link to="/Home">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Register</button>
          </Link>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
        </div>
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9 rounded-full ml-2 bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full ml-2 bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </button>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="inlne-block mx-1 h-9 w-9 rounded-full ml-2 bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mx-auto h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
    </>
  );
}

export default EmployerSignup