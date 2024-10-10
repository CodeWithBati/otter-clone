'use client'
import { useState } from 'react';
import Banner from '../Banner/Banner';
import SocialLayout from '../SocialLayout/SocialLayout';
import TeamCards from '../TeamCards/TeamCards';
import App from '../TeamCards/TeamCards';
import SalesCalls from '../salesCalls/SalesCalls';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
  
    <header className="bg-gray-100 p-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
  <svg
    className="text-blue-500 hover:text-gray-900"
    width="149"
    height="26"
    viewBox="0 0 149 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', maxWidth: '149px', height: 'auto' }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M77.8904 13.011C77.8904 17.6327 81.1256 21 85.8574 21C90.4571 21 93.8023 17.7868 93.8023 13.011C93.8023 8.23521 90.4571 5 85.8574 5C81.1256 5 77.8904 8.36726 77.8904 13.011ZM90.5891 13.011C90.5891 15.9381 88.5644 18.1169 85.8794 18.1169C83.0623 18.1169 81.1036 15.8501 81.1036 13.011C81.1036 10.1719 83.0623 7.90509 85.8794 7.90509C88.5644 7.90509 90.5891 10.0619 90.5891 13.011ZM144.441 6.80465C144.441 7.77301 145.255 8.56531 146.224 8.56531C147.214 8.56531 148.028 7.77301 148.028 6.80465C148.028 5.83628 147.214 5.04399 146.224 5.04399C145.255 5.04399 144.441 5.83628 144.441 6.80465ZM144.771 10.0839V20.8239H147.654V10.0839H144.771ZM142.693 10.0839H139.832V11.2944H139.766C138.996 10.37 137.895 9.90787 136.619 9.90787C133.736 9.90787 131.557 12.2187 131.557 15.476C131.557 18.7992 133.714 21 136.685 21C138.071 21 139.172 20.4718 139.898 19.5255H139.964V20.824H142.693V10.0839ZM139.942 15.498C139.942 17.2586 138.71 18.4251 137.213 18.4251C135.606 18.4251 134.462 17.2366 134.462 15.498C134.462 13.6493 135.695 12.4828 137.235 12.4828C138.798 12.4828 139.942 13.7813 139.942 15.498ZM128.618 21C127.628 21 126.836 20.2297 126.836 19.2613C126.836 18.2929 127.628 17.5007 128.618 17.5007C129.587 17.5007 130.401 18.2929 130.401 19.2613C130.401 20.2297 129.587 21 128.618 21ZM127.592 9.92987C127.548 9.90787 127.46 9.90787 127.372 9.90787C126.096 9.90787 124.929 10.5241 124.115 11.6685H124.093V10.0839H121.21V20.824H124.093V15.8281C124.093 14.2435 125.061 13.033 126.844 13.033C126.998 13.033 127.306 13.033 127.592 13.055V9.92987ZM119.789 15.3439C119.789 15.696 119.789 16.2022 119.723 16.3783H112.174C112.526 17.6548 113.538 18.4471 114.925 18.4471C116.069 18.4691 116.906 17.9629 117.5 17.2366L119.371 18.9753C118.446 20.1417 116.884 21 114.727 21C111.58 21 109.203 18.7992 109.203 15.4319C109.203 12.1747 111.47 9.90787 114.529 9.90787C117.676 9.90787 119.789 12.1967 119.789 15.3439ZM114.617 12.4388C113.45 12.4388 112.526 13.0771 112.196 14.3095H116.928C116.642 13.1871 115.871 12.4388 114.617 12.4388ZM103.269 17.4346C103.269 19.8555 104.479 21 106.328 21C107.78 21 108.485 20.7138 109.189 20.3397L108.441 18.0288C107.956 18.2709 107.428 18.403 107.076 18.403C106.416 18.403 106.13 17.9628 106.13 17.0385V12.4608H109.057V10.0839H106.13V6.25443L103.269 6.56255V10.0839H101.992V12.4608H103.269V17.4346ZM98.8046 21C96.9559 21 95.7454 19.8555 95.7454 17.4346V12.4608H94.469V10.0839H95.7454V6.56255L98.6065 6.25443V10.0839H101.534V12.4608H98.6065V17.0385C98.6065 17.9628 98.8926 18.403 99.5529 18.403C99.905 18.403 100.433 18.2709 100.917 18.0288L101.666 20.3397C100.961 20.7138 100.257 21 98.8046 21Z"
      fill="#041D34"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2723 12.9157C19.2723 16.3726 16.4699 19.175 13.013 19.175C9.55612 19.175 6.75375 16.3726 6.75375 12.9157C6.75375 9.4588 9.55612 6.65644 13.013 6.65644C16.4699 6.65644 19.2723 9.4588 19.2723 12.9157ZM0 13C0 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13ZM32.4106 0.355957C34.3777 0.355957 35.9723 1.95056 35.9723 3.9176V22.082C35.9723 24.049 34.3777 25.6436 32.4106 25.6436C30.4436 25.6436 28.849 24.049 28.849 22.082V3.9176C28.849 1.95056 30.4436 0.355957 32.4106 0.355957ZM42.3835 0.355957C44.3506 0.355957 45.9452 1.95056 45.9452 3.9176V22.082C45.9452 24.049 44.3506 25.6436 42.3835 25.6436C40.4165 25.6436 38.8219 24.049 38.8219 22.082V3.9176C38.8219 1.95056 40.4165 0.355957 42.3835 0.355957ZM55.9177 12.1097C55.9177 10.1427 54.3231 8.5481 52.3561 8.5481C50.389 8.5481 48.7944 10.1427 48.7944 12.1097V14.2467C48.7944 16.2138 50.389 17.8084 52.3561 17.8084C54.3231 17.8084 55.9177 16.2138 55.9177 14.2467V12.1097ZM62.3288 4.98633C64.2958 4.98633 65.8904 6.58093 65.8904 8.54797V17.4521C65.8904 19.4191 64.2958 21.0137 62.3288 21.0137C60.3617 21.0137 58.7671 19.4191 58.7671 17.4521V8.54797C58.7671 6.58093 60.3617 4.98633 62.3288 4.98633Z"
      fill="currentColor"
    ></path>
  </svg>
</div>


        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-900 hover:text-blue-500 flex items-center"
          >
            Menu
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-900 hover:text-blue-500">Pricing</a>
          <a href="#" className="text-gray-900 hover:text-blue-500">Apps & Integrations</a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-900 hover:text-blue-500 flex items-center"
            >
              Resources
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-md mt-1 w-48">
                <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                  Blog
                </a>
                <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                  Help & Support
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Authentication Buttons - Hidden on Mobile */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Log In</a>
          <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Start for Free
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-md p-4">
          <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Pricing</a>
          <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Apps & Integrations</a>
          <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Blog</a>
          <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Help & Support</a>
          <div className="mt-4">
            <a href="#" className="block text-gray-600 hover:text-gray-900 mb-2">Log In</a>
            <a href="#" className="block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Start for Free
            </a>
          </div>
        </div>
      )}
    </header>
    <Banner />
    <SocialLayout />
    <TeamCards />
    <SalesCalls />
    </>
  );
}
