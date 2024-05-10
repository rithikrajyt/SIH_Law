import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div class="py-5 sm:max-w-xl md:max-w-full md:px-14">
        <div class="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <img src={process.env.PUBLIC_URL + '/decision.svg'} alt="Icon" className="w-8 h-8" />
            <span class="ml-2 text-2xl font-bold tracking-wide text-gray-800 uppercase">
              Legal Seva
            </span>
          </a>
        <div class="flex items-center">
            <button
                type="button"
                aria-label="Toggle menu"
                title="Toggle menu"
                class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <FaUser className="w-8 h-8" />
            </button>
            {isMenuOpen && (
                <div class="absolute z-50 right-0 top-14 w-32 bg-white rounded-xl shadow-xl">
                    <a
                        href="/logout"
                        className="flex px-4 py-2 text-lg font-bold text-black hover:bg-red-300 rounded-lg"
                    >
                        Logout<FaSignOutAlt className="ml-4 w-6 h-6"/>
                    </a>
                </div>
            )}
        </div>
      </div> 
      </div>
    );
};

export default Navbar;