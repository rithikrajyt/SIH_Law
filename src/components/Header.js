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
            
          </div>
        </div>
      </div>
    );
  };