import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
    return (
      <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src="https://cdn.pixabay.com/photo/2017/07/23/17/43/isolated-2532037_640.png"
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                
                </p> */}
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-brown-800 sm:text-4xl sm:leading-none">
                AI-powered Legal Documentation{' '} 
                <br className="hidden md:block" />
                
                <span className="inline-block text-brown-700">
                Assistant
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Legal documentation can be a complicated and time-consuming process, especially for individuals and small businesses who may not have access to legal resources
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row">
                {/* <input
                  placeholder="Name"
                  required=""
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                /> */}
                <input
                  placeholder="Email"
                  required=""
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-brown-600 focus:outline-none focus:shadow-outline"
                  name="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <br></br>
              <div className="flex items-center mt-4">
              <button type="save"  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brown-500 hover:bg-brown-700 focus:shadow-outline focus:outline-none">
               Save Email</button>
                 <Link to='/Simplify'>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brown-500 hover:bg-brown-700 focus:shadow-outline focus:outline-none"
                >
                 Drafting
                </button>
                  </Link>
                <a
                  href="/drafting"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-brown-400 hover:text-brown-700"
                >
                <Link to='/Drafting'>
                  Simplify
                </Link>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };