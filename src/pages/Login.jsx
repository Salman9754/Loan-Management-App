import React from "react";
import LoginForm from "@/components/LoginForm";
import MyLogo from "@/components/MyLogo";
import "../styles/components.css";
import { Link } from "react-router-dom";
import video from "../assets/halo.mp4";
import { ToastContainer, Bounce } from "react-toastify";

const Login = () => {
  return (
    
    <div className="login_container flex justify-between mx-auto flex-col lg:flex-row h-screen">
       <ToastContainer
                    position='top-right'
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                  />
      <div className="form_right relative w-full md:w-2/3 lg:w-2/3 relative ">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src={video}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Loanify
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Simplify your loan management with real-time tracking and smart
            analytics.
          </p>
        </div>
      </div>
      <div
        className="form_left h-screen w-full lg:w-1/3 bg-neutral-50 border rounded px-8 py-16 flex 
    md:px-10 flex-col"
      >
        <div className="mb-5">
          <MyLogo />
        </div>
        <div className="form_container flex flex-col gap-12 mt-5">
          <div className="text-center">
            <h5 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-medium">
            Welcome back
            </h5>
            <p className="text-sm mt-2">Sign in to your account</p>
          </div>
          <div className="form_sub_container mt-4">
            <LoginForm />
            <p className="text-xs text-center mt-5">
            Don't have an account?
              <Link to={"/signup"}>
                <span className="mx-1 text-sm text-blue-700">Sign Up Now</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
