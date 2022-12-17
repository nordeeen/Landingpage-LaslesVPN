import React from 'react';
import logoHeader from '../assets/logos/logo-header.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Header = () => {
  const menus = ['About', 'Features', 'Pricing', 'Testimonials', 'Help'];

  return (
    <>
      <header className="max-w-full h-auto py-6 px-6 bg-[#F6F6F6] sm:pt-4 sm:bg-red-600 sm:hidden">
        <div className="flex justify-center items-center">
          <div className="pr-[150px]">
            <LazyLoadImage
              src={logoHeader}
              alt="logo-header"
              className="w-[149px] h-[36.23px] object-contain"
            />
          </div>
          <ul className="flex justify-between text-base font-normal text-[#4F5665]">
            {menus.map((item, index) => (
              <li key={index} className="mx-4 hover:underline hover:text-[#F53855]">
                <a href="/#">{item}</a>
              </li>
            ))}
          </ul>
          <div className="pl-[150px] font-medium text-base">
            <button className="mx-10 text-[#0B132A] hover:text-[#F53855] hover:underline">Sign In</button>
            <button className="w-[150px] h-[45px] rounded-full border border-[#F53855] text-[#F53855] hover:bg-[#F53855] hover:text-white">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
