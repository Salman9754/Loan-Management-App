import React from "react";
import SignUpForm from "@/components/SignupForm";
import MyLogo from "@/components/MyLogo";
import "../styles/components.css";
import { Link } from "react-router-dom";
import video from "../assets/halo.mp4";
import { ToastContainer, Bounce, } from "react-toastify";
const SignUpPage = () => {
  return (
    <>
      <div className="login_container flex justify-between mx-auto flex-col lg:flex-row">
        <div
          className="form_left w-full lg:w-1/3 bg-neutral-50 border rounded px-8 py-16 flex 
        md:px-10 flex-col"
        >
          <div className="mb-5">
            <ToastContainer
              position={window.innerWidth <= 640 ? "top-right" : "top-left"}
              autoClose={7000}
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
            <MyLogo />
          </div>
          <div className="form_container mt-3">
            <div className="text-center">
              <h5 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-medium">
                Get started
              </h5>
              <p className="text-sm mt-2">Create a new accountt</p>
            </div>
            <div className="form_sub_container mt-4">
              <SignUpForm />
              <p className="text-xs text-center mt-5">
                Have an account?
                <Link to={"/login"}>
                  <span className="mx-1 text-sm text-blue-700">
                    Sign In Now
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default SignUpPage;
