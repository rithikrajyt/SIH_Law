import img2 from './img2.jpg'
import { getQuestions } from '../service/mlApi1';
import { useState } from 'react';

export const Simpli = () => {
const [category, setCategory] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await getQuestions(category);

      console.log(response);
    }catch(error){
      console.error(error);
    }
  }

    return (
      <div className="relative">
        <img
          src={img2}
          className="absolute inset-0 object-cover mt-4 w-fit h-fit"
          alt=""
        />
        <div className="relative bg-opacity-75 bg-brown-400">
          <svg
            className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 pt-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  This will help to <br className="hidden md:block" />
                  Understand your case details
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  Please Enter Category for which you want to generate document. After that, Answer questions asked from AI to generate document.
                </p>
              
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-bold sm:text-center sm:mb-6 sm:text-3xl">
                    DRAFTING
                  </h3>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="firstName"
                        className="inline-block mb-1 font-medium"
                      >
                        Client Name
                      </label>
                      <input
                        placeholder="Enter full name"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-brown-600 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                   
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="lastName"
                        className="inline-block mb-1 font-medium"
                      >
                        Category of Drafting
                      </label>
                      <input
                        placeholder="Enter Category of Drafting"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-brown-600 focus:outline-none focus:shadow-outline"
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}

                      />
                    </div>
                  
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brown-800 hover:bg-brown-600 focus:shadow-outline focus:outline-none"
                        onClick={handleSubmit}
                      >
                        Submit Your Case
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };