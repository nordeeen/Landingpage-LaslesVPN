import React from 'react';
import aboutHero from 'assets/ilustration/first-hero.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
  return (
    <>
      <section className="w-full h-auto bg-[#F6F6F6] pt-[100px] py-4">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center">
            <div className="w-[555px] h-[140px]">
              <h2 className="text-[50px] font-bold leading-[70px] text-left text-[#0B132A]">
                Want anything to be easy with LaslesVPN.
              </h2>
            </div>
            <div className="w-[555px] h-[60px] mt-[20px]">
              <p className="text-[16px] font-normal leading-[30px] text-[#4F5665]">
                Provide a network for all your needs with ease and fun using LaslesVPN discover
                interesting features from us.
              </p>
            </div>
            <div className="mt-[50px] text-white">
              <button className="w-[250px] h-[60px] bg-[#F53838] rounded-[10px] text-[16px] leading-[25px] font-bold">
                Get Started
              </button>
            </div>
          </div>

          <div className="space-x-10">
            <LazyLoadImage
              src={aboutHero}
              alt="about-hero"
              placeholderSrc={aboutHero}
              className="w-[38.203rem] h-[23.903rem] object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
