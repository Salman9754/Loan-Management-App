import React from "react";
import "../styles/components.css";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home_page h-screen">
        <Navbar />
        <div className="container home_container mx-auto flex justify-center items-center h-screen flex-col w-full lg:w-[72%] gap-5">
          <div className="headings">
          <h1 class="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium">
            Manage loans in a weekend
          </h1>
          <h1 class="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium sub-head">
            Scale to thousands of clients
          </h1>
          </div>
          <p className="text-center mt-5 w-[90%] lg:w-[70%]">
            Loanify is a modern, full-stack loan management solution. Start your
            system with borrower management, loan tracking, repayment schedules,
            reminders, analytics, and secure authentication.
          </p>
          <div className="Auth_buttons flex gap-5 mt-4">
            <Link to={"/login"}>
             
              <Button>Sign in here</Button>
            </Link>
            <Link to={"/signup"}>
              <Button className="bg-neutral-800 hover:bg-neutral-700">
                Sign up here
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
