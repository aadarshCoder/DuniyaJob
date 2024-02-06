// import React from 'react'
import { Outlet,Navigate } from "react-router-dom";
import Footer from "../../components/Footer";

const AuthLayout = () => {

  const isAuthenticated = false; 

  return (
    <>
      {isAuthenticated ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <section className="flex flex-1 overflow-y-scroll no-scrollbar justify-center items-center flex-col py-5 ">
            <Outlet />
          </section>

        </>
      )}
    </>
  )
}

export default AuthLayout